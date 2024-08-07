import React, { useState } from "react";
import "./login.page.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Header from "../../Components/header/Header";
import "../../Global/Global.css";
import { Login, Password, Person } from "@mui/icons-material";
import { clsUser } from "../../Module/clsUsers";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../Global/CurrentUser";
const LoginPage = () => {
  const [userData, setUserData] = useState({ UserName: "", Password: "" });
  const [InvalidMessage, setInvalidMessage] = useState(false);
  const [error, setError] = useState({
    userNameError: false,
    passWordError: false,
  });
  const redirect = useNavigate();

  const validateForm = () => {
    let hasError = false;

    if (userData.UserName.trim().length === 0) {
      setError((prevState) => ({ ...prevState, userNameError: true }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, userNameError: false }));
    }

    if (userData.Password.trim().length === 0) {
      setError((prevState) => ({ ...prevState, passWordError: true }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, passWordError: false }));
    }

    return !hasError; // Return true if there's no error
  };

  const handleOnChange = (event) => {
    validateForm();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnClick = async () => {
    if (!validateForm()) return;
    try {
      const response = await clsUser.Login(userData);
      console.log(response);
      if (response.Success) {
        setInvalidMessage(false);
        const user = await clsUser.findUser(response.Data.UserID);
        // Update properties of currentUser
        Object.assign(currentUser, user);
        redirect("/");
      } else {
        setInvalidMessage(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <section className="loginPageContainer">
        <div className="Conatiner ">
          <Header title={"wellcome to DVLD  System v1"} />
          <Box className="formContainer shadow">
            <TextField
              label="User Name"
              type="text"
              name="UserName"
              error={error.userNameError}
              helperText={error.userNameError === true ? "can't be empty" : " "}
              onChange={handleOnChange}
              value={userData.UserName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="PassWord"
              type="password"
              name="Password"
              error={error.passWordError}
              helperText={error.passWordError === true ? "can't be empty" : " "}
              onChange={handleOnChange}
              value={userData.Password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Password />
                  </InputAdornment>
                ),
              }}
            />
            <h5 className={InvalidMessage === true ? "show" : "hide"}>
              invalid username/password
            </h5>
            <Button
              variant="contained"
              endIcon={<Login />}
              onClick={handleOnClick}
            >
              {" "}
              log in
            </Button>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
