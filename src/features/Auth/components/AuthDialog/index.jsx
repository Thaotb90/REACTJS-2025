import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Register from "../Register";
import Login from "../Login";

AuthDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onRegisterSuccess: PropTypes.func,
};

function AuthDialog(props) {
  const { open, onClose, onRegisterSuccess } = props;
  const [isLogin, setIsLogin] = React.useState(true);

  const handleClose = () => {
    onClose();
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleRegisterSuccess = () => {
    setIsLogin(true);
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CloseIcon
        onClick={handleClose}
        sx={{
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
          "&:hover": {
            color: "#1976d2",
          },
        }}
      />
      <AdbIcon
        sx={{
          display: "flex",
          color: "#1976d2",
          mt: 3,
          mx: "auto",
        }}
      />
      <DialogTitle textAlign={"center"} color="#1976d2">
        {isLogin ? "Login" : "Register"}
      </DialogTitle>
      <DialogContent>
        {isLogin ? (
          <Login onLoginSuccess={handleClose} />
        ) : (
          <Register onRegisterSuccess={handleRegisterSuccess} />
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button onClick={handleToggleForm} color="primary">
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AuthDialog;
