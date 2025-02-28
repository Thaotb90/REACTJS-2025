import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (data) => {
    try {
      console.log("SUBMIT FORM: ", data);
      const action = register(data);
      const resultAction = await dispatch(action);
      console.log("resultAction: ", resultAction);
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
