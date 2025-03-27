import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";
import PropTypes from "prop-types";

Register.propTypes = {
  onRegisterSuccess: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (data) => {
    try {
      console.log("SUBMIT FORM: ", data);
      const action = register(data);
      const resultAction = await dispatch(action);
      console.log("resultAction: ", resultAction);

      if (resultAction.type === register.fulfilled.type) {
        const { onRegisterSuccess } = props;
        if (onRegisterSuccess) {
          onRegisterSuccess();
        }
      }
    } catch (err) {
      console.error("Fail to register: ", err);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
