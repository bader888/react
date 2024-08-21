import React, { useEffect, useState } from "react";
import "./CreateUserDetails.css";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  ArrowBackIosNew,
  ConfirmationNumberOutlined,
  Password,
  Person,
  Save,
} from "@mui/icons-material";
import { clsUser, CreateUserData } from "../../../../Module/clsUsers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clsNavigator from "../../../../Urls/Navgator";


const checkboxsInfo = [
  {
    permission: 1,
    text: "Manage users",
  },
  {
    permission:2,
    text: "Manage people",
  },
  {
    permission:8,
    text: "Manage drivers",
  },
  {
    permission: 4,
    text: "Manage applications",
  },
];

const CreateUserDetials = ({
  mode,
  personID, 
  UserData, 
}) => {
  const [userData, setUserData] = useState(CreateUserData);
  const [array, setArray] = useState([]);
  const [error, setError] = useState({
    UsernameError: false,
    PasswordError: false,
    borderError: false,
  });
  const redierct = useNavigate();
  useEffect(() => { 
    if (mode === "update") {
      setUserData(UserData);
      console.log(UserData);
    }
  }, [personID, UserData, mode]);

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

    if (userData.Permisstions === 0 || userData.Permisstions === "") {
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

  const handleOnSave = async () => {
    if (validateForm()) {
      if (mode === "update") { 
        try {
          const resp = await clsUser.Update(userData, userData.UserID);
          Swal.fire(resp.Message);
        } catch (error) {
          console.error(error);
        }
      } else { 
        try {
          const resp = await clsUser.createUser(userData);
          Swal.fire(resp.Message);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const handleOnBack = () => {
    redierct(clsNavigator.UserNavgate.UsersPage);
  };

  const handleOnConfirmPermissions = () => {
    validateForm();
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
  
  return (
    <div>
      <Container maxWidth={"md"}>
        <Box className="userDetails-container container">
          <TextField
            required
            error={error.UsernameError}
            helperText={error.UsernameError === true ? "Can't be empty" : " "}
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
            helperText={error.PasswordError === true ? "Can't be empty" : " "}
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

        <Box
          className={`checkbox-container container ${
            error.borderError === true ? "ShowBorderError" : "HideBorderError"
          }`}
        >
          <h4>User Permissions</h4>
          <section className="formgroup-container" id="checkBoxsContainer">
            {checkboxsInfo.map((element, index) => (
              <div key={index}>
                <input
                  className="check"
                  onChange={handleCheckboxChange}
                  name="Permisstion"
                  type="checkbox"
                  value={element.permission} 
                />
                <label>{element.text}</label>
              </div>
            ))}
          </section>
          <section
            className={`${
              error.borderError === true
                ? "ShowPermissionsMessage"
                : "HidePermissionsMessage"
            }`}
          >
            confirm permissions or select one!!!
          </section>
          <div>
            <Button
              onClick={handleOnConfirmPermissions}
              color="info"
              endIcon={<ConfirmationNumberOutlined />}
            >
              Confirm Permissions
            </Button>
          </div>
        </Box>
        <Box className="container btnActionContainer">
          <Button
            onClick={handleOnSave}
            color="info"
            variant="outlined"
            endIcon={<Save />}
          >
            save
          </Button>
          <Button
            onClick={handleOnBack}
            variant="outlined"
            endIcon={<ArrowBackIosNew />}
            color="info"
          >
            Back
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CreateUserDetials;
