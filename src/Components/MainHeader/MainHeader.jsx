import React from "react";
import Navbar from "../navbar/Navbar";
import "./MainHeader.css";
import { Container } from "@mui/material";
import MyMenu from "../Menu/MyMenu";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../Global/CurrentUser";

const MainHeader = () => {
  const redieric = useNavigate();
  const handleLogOut = () => {
    redieric("/login");
  };

  const handleCurrentUser = () => {
    redieric(`/Users/${currentUser.UserID}`);
  };

  const handleChangePassword = () => {
    redieric(`/Users/changePassword/${currentUser.UserID}`);
  };
  return (
    <div>
      <Container maxWidth={"md"}>
        <div className="Header">
          <Navbar/>
          <MyMenu  HandleLogOut={handleLogOut} HandleCurrentUser={handleCurrentUser} HandleChangePassword={handleChangePassword}/>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
