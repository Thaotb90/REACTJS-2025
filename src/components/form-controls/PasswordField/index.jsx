import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { label, name, form, disabled } = props;
  const {
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <FormControl
            error={!!errors[name]}
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor={name}>{name}</InputLabel>
            <OutlinedInput
              {...field}
              name={name}
              disabled={disabled}
              id={name}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
            <FormHelperText error>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
      ></Controller>
    </>
  );
}

export default PasswordField;
