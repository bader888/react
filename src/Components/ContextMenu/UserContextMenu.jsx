import React  from "react"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import personDetails from "../../Resources/PersonDetails 32.png";
import DeleteUserImg from "../../Resources/Delete 32 2.png";
import UpdateUserImg from "../../Resources/User 32 -2.png";
import CreateUserImg from "../../Resources/Add New User 32.png";
import ActiveUserImg from "../../Resources/refresh.png";
import DeActiveUserImg from "../../Resources/delete.png";
import { Button, Divider } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { clsUser } from "../../Module/clsUsers";
import clsNavigator from "../../Urls/Navgator";

const UserContextMenu = ({ UserID }) => { 
  const redirect = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (UserID === 0) {
      Swal.fire("Please select user first");
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleAddNew = () => {
    redirect(clsNavigator.UserNavgate.CreateUserPage);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowDetails = () => {
    redirect(clsNavigator.UserNavgate.UserDetailsPageWithID(UserID));
  };

  const handleUpdate = () => {
    redirect(clsNavigator.UserNavgate.UpdateUserPageWithID(UserID));
  };

  const handleToggleActive = async (isActive) => {
    try {
      const resp = await clsUser.ToggleActive(UserID, isActive);
      Swal.fire(resp.Message); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await clsUser.Delete(1);
      Swal.fire({
        title: response.Success === true ? "Success" : "Oppps!",
        text: response.Message,
        icon: response.Success === true ? "success" : "error",
      });

      if (response.Success === true) redirect("/Users");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button 
        variant="outlined" 
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<AddCard />}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleShowDetails}>
          <ListItemIcon>
            <img src={personDetails} alt="person details" />
          </ListItemIcon>
          <ListItemText>show user details</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAddNew}>
          <ListItemIcon>
            <img src={CreateUserImg} alt="person details" />
          </ListItemIcon>
          <ListItemText>Add New User</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleUpdate}>
          <ListItemIcon>
            <img src={UpdateUserImg} alt="person details" />
          </ListItemIcon>
          <ListItemText>Update User</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleToggleActive(false);
          }}
        >
          <ListItemIcon>
            <img src={DeActiveUserImg} alt="person details" />
          </ListItemIcon>
          <ListItemText>Deactivate User</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleToggleActive(true);
          }}
        >
          <ListItemIcon>
            <img src={ActiveUserImg} alt="person details" />
          </ListItemIcon>
          <ListItemText>Activate User</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleRemove}>
          <ListItemIcon>
            <img src={DeleteUserImg} alt="person details" />
          </ListItemIcon>
          <ListItemText>Remove User</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserContextMenu;
