import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

Login.propTypes = {
  onLoginSuccess: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (data) => {
    try {
      console.log("SUBMIT LOGIN FORM: ", data);

      // Lấy thông tin user từ localStorage
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        toast.error("No user found. Please register first!");
        return;
      }

      const user = JSON.parse(userStr);

      // Kiểm tra email và password
      if (user.email === data.email && user.password === data.password) {
        const action = login(data);
        await dispatch(action);
        toast.success("Login successfully!");
        const { onLoginSuccess } = props;
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        toast.error("Invalid email or password!");
      }
    } catch (err) {
      console.error("Fail to login: ", err);
      toast.error("Login failed!");
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
