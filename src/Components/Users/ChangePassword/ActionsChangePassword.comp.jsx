import React from "react";
import { Button } from "@mui/material";
import "./ChangePassword.comp.css";
import { Cancel, ConfirmationNumber } from "@mui/icons-material";

const ActionsChangePassword = ({ HandleOnConfirm, HandleOnCancel }) => {
  const handleOnConfirm = () => {
    HandleOnConfirm();
  };
  const handleOnCancel = () => {
    HandleOnCancel();
  };
  return (
    <div>
      <Button
        onClick={handleOnConfirm}
        variant="contained"
        color="info"
        endIcon={<ConfirmationNumber />}
      >
        Confirm
      </Button>
      <Button
        onClick={handleOnCancel}
        variant="contained"
        color="error"
        sx={{ marginTop: "10px" }}
        endIcon={<Cancel />}
      >
        cancel
      </Button>
    </div>
  );
};

export default ActionsChangePassword;
