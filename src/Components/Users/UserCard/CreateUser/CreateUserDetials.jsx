import React, { useState } from "react";
import "./CreateUserDetails.css";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  ConfirmationNumberOutlined,
  Password,
  Person,
} from "@mui/icons-material";
import { clsUser, CreateUserData } from "../../../../Module/clsUsers";
import { useNavigate } from "react-router-dom";

const permissions = {
  manageUsers: 1,
  managePeople: 2,
  manageApplicationas: 4,
  manageDrivers: 8,
  manageTests: 16,
  manageAppointments: 32,
};

const checkboxsInfo = [
  {
    value: permissions.manageUsers,
    text: "Manage users",
  },
  {
    value: permissions.managePeople,
    text: "Manage people",
  },
  {
    value: permissions.manageDrivers,
    text: "Manage drivers",
  },
  {
    value: permissions.manageApplicationas,
    text: "Manage applications",
  },
  {
    value: permissions.manageTests,
    text: "Manage tests",
  },
  {
    value: permissions.manageAppointments,
    text: "Manage appointments",
  },
];

const CreateUserDetials = ({ personID, handleWhenUserSave }) => {
  const [userData, setUserData] = useState(CreateUserData);
  const [array, setArray] = useState([]);
  const [error, setError] = useState({
    UsernameError: false,
    PasswordError: false,
    borderError:false
  });
  const redierct = useNavigate();

  const validateForm = () => {
    let hasError = false;

    if (userData.UserName.trim().length === 0) {
      setError((prevState) => ({ ...prevState, UsernameError: true }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, UsernameError: false }));
    }

    if (userData.Password.trim().length === 0) {
      setError((prevState) => ({ ...prevState, PasswordError: true }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, PasswordError: false }));
    }

    if (userData.Permisstions === 0) {
      setError((prevState) => ({ ...prevState, borderError: true }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, borderError: false }));
    }

  
    return !hasError; // Return true if there's no error
  };

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked === true) {
      setArray([...array, value]);
    } else {
      setArray(array.filter((element) => element !== value));
    }
  };

  const handleOnSave = async () => {
 
    if (validateForm()) {
      try {
        const respons = await clsUser.createUser(userData);
        handleWhenUserSave(respons); 
      } catch (error) {
        console.error(error);
      } 
    } 

  };

  const handleOnBack = () => {
    redierct("/Users");
  };

  const handleOnConfirmPermissions = () => {
    const UserPermissions = array.reduce(
      (acc, val) => acc + parseInt(val, 10),
      0
    );

    setUserData({
      ...userData,
      Permisstions: UserPermissions,
      PersonID: personID,
    });
  };

  const handleTextChange = (event) => {

    validateForm();

    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnReset = () => {
    console.log("handle reset btn");
  };

  return (
    <div>
      <Container maxWidth={"md"}>
        <Box className="userDetails-container container">
          <TextField
            required
            error={error.UsernameError}
            helperText={error.UsernameError === true?"Can't be empty":" "}
            name="UserName"
            label="User Name"
            value={userData.UserName}
            onChange={handleTextChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            error={error.PasswordError}
            helperText={error.PasswordError=== true?"Can't be empty":" "}
            name="Password" 
            label="Password"
            type="password"
            value={userData.Password}
            onChange={handleTextChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Password />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className={`checkbox-container container ${error.borderError === true? 'ShowBorderError':'HideBorderError'}`} >
          <h4>User Permissions</h4>
          <section className="formgroup-container" id="checkBoxsContainer">
            {checkboxsInfo.map((element, index) => (
              <div>
                <input
                  className="check"
                  onChange={handleCheckboxChange}
                  name="Permisstion"
                  type="checkbox"
                  value={element.value}
                />
                <label>{element.text}</label>
              </div>
            ))}
            <div>
              <Button
                onClick={handleOnConfirmPermissions}
                color="info"
                endIcon={<ConfirmationNumberOutlined />}
              >
                Confirm Permissions
              </Button>
            </div>
          </section>
          <section  className={`${error.borderError === true? 'ShowPermissionsMessage':'HidePermissionsMessage'}`}>
            confirm permissions or select one!!!
          </section>
        </Box>
        <Box className="container btnActionContainer">
          <Button onClick={handleOnSave} color="info">
            save
          </Button>
          <Button onClick={handleOnReset} variant="text" color="error">
            reset
          </Button>
          <Button onClick={handleOnBack} variant="text" color="info">
            Back
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CreateUserDetials;
