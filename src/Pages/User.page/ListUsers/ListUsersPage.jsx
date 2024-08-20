import React, { useEffect, useState } from "react";
import { clsUser, UserData } from "../../../Module/clsUsers";
import { Button, Container } from "@mui/material";
import MyTable from "../../../Components/Table/Table";
import Header from "../../../Components/header/Header";
import { Add, AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import personDetails from "../../../Resources/PersonDetails 32.png";
import DeleteUserImg from "../../../Resources/Delete 32 2.png";
import UpdateUserImg from "../../../Resources/User 32 -2.png";
import CreateUserImg from "../../../Resources/Add New User 32.png";
import ActiveUserImg from "../../../Resources/refresh.png";
import DeActiveUserImg from "../../../Resources/delete.png";
import { Divider } from "@mui/material";

const ListUsersPage = () => {
  const [user, setUser] = useState({ UserData });
  const [userID, setUserID] = useState(0);
  const redirect = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (userID === 0) {
      Swal.fire("Please select user first");
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    try {
      clsUser.GetAllUsers().then((resp) => {
        setUser(resp);
      });
    } catch (error) {
      Swal.fire(error);
      console.error(error);
    }
  }, []);

  const handleAddNew = () => {
    redirect("/Users/Create");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRowClick = (ID) => {
    setUserID(ID);
  };

  const handleShowDetails = () => {
    redirect(`Details/${userID}`);
  };

  const handleUpdate = () => {
    redirect(`Update/${userID}`);
  };

  const handleToggleActive =async (isActive) => {
    try {
      const resp = await clsUser.ToggleActive(userID,isActive)
      Swal.fire(resp.Message);
      clsUser.GetAllUsers().then((resp) => {
        setUser(resp);
      });
      
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
      <Container maxwidth={"md"} className="Container">
        <div>
          <Header title={"manage users"} />
          <Button
            style={{ marginBottom: "10px" }}
            variant="outlined"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<AddCard />}
          >
            Actions
          </Button>
          <Button
            variant="outlined"
            style={{ marginBottom: "10px", marginLeft: "20px" }}
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            Create User
          </Button>
        </div>

        <MyTable tableData={user} HandleRowClick={handleRowClick} />
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
          <MenuItem onClick={() => {handleToggleActive(false)}}>
            <ListItemIcon>
              <img src={DeActiveUserImg} alt="person details" />
            </ListItemIcon>
            <ListItemText>Deactivate User</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => {handleToggleActive(true)}}>
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
      </Container>
    </div>
  );
};

export default ListUsersPage;
