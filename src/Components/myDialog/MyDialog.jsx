import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
const MyDialog = ({ title, message, Open, handleConfirm,handleClose }) => {
  function handleOnClose() {
    handleClose();
  }

  function handleOnConfirm() {
    handleConfirm();
  }

  return (
    <div>
      <Dialog open={Open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnConfirm} color="error">
            Confirm
          </Button>
          <Button onClick={handleOnClose} color="info" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyDialog;
