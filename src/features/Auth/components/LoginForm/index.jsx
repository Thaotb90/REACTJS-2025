import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import PasswordField from "../../../../components/form-controls/PasswordField";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    email: yup.string().email().required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Must at least 6 characters."),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = form.formState;

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
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Password" form={form} />
      <Button
        sx={{ textAlign: "center", mx: "auto", display: "block" }}
        variant="contained"
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
