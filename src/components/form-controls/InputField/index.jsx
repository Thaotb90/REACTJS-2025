import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { label, name, form, disabled } = props;
  const {
    formState: { errors },
  } = form;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          name={name}
          disabled={disabled}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          sx={{ mb: 1.5 }}
        />
      )}
    ></Controller>
  );
}

export default InputField;
