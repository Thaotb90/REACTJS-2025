import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import PasswordField from "../../../../components/form-controls/PasswordField";

RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter your name.")
      .test(
        "oneOfRequired",
        "Your name min 2 words.",
        (value) => value.split(" ").length >= 2
      ),
    email: yup.string().email().required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Must at least 6 characters."),
    retypePassword: yup
      .string()
      .required("Please retype password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{ padding: "20px 0" }}
    >
      <InputField name="username" label="Full Name" form={form} />
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Password" form={form} />
      <PasswordField
        name="retypePassword"
        label="Retype Password"
        form={form}
      />
      <Button
        sx={{ textAlign: "center", mx: "auto", display: "block" }}
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default RegisterForm;
