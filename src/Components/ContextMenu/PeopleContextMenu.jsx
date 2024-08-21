import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clsNavigator from "../../Urls/Navgator";
import { clsPerson } from "../../Module/clsPerson";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { AddCard } from "@mui/icons-material";
import AddIMG from "../../Resources/Add Person 40.png";
import DeleteIMG from "../../Resources/Delete 32.png";
import DetailsIMG from "../../Resources/PersonDetails 32.png";
import UpdateIMG from "../../Resources/refresh.png";
const PeopleContextMenu = ({ PersonID }) => {
  const redirect = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (PersonID === -1) {
      Swal.fire("Please select Person first");
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleAddNew = () => {
    redirect(clsNavigator.PeopleNavgate.CreatePersonPage);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowDetails = () => {
    redirect(clsNavigator.PeopleNavgate.ShowPersonDetailsWithID(PersonID));
  };

  const handleUpdate = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(PersonID));
  };

  const handleRemove = async () => {
    try {
      const response = await clsPerson.Delete(1);
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
            <img src={DetailsIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>show Person details</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAddNew}>
          <ListItemIcon>
            <img src={AddIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Add New User</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleUpdate}>
          <ListItemIcon>
            <img src={UpdateIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Update Person</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleRemove}>
          <ListItemIcon>
            <img src={DeleteIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Remove User</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PeopleContextMenu;
