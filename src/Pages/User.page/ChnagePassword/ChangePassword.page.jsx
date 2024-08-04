import React, { useEffect, useRef } from "react";
import "./changePassword.page.css";
import { useParams } from "react-router-dom";
import UserCard from "../../../Components/Users/UserCard/UserCard";
import { Container } from "@mui/material";
import ChangePassWord from "../../../Components/Users/ChangePassword/ChangePassWord.Comp";
const ChangePasswordPage = () => {
  const { UserID } = useParams();
  const refFoundUser = useRef();
  useEffect(() => {
    refFoundUser.current.FoundUser(UserID);
  }, []);


  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  
  return (
    <div>
      <Container maxWidth="md">
        <UserCard ref={refFoundUser} />
        <ChangePassWord HangleOnChange={handleOnChange} UserID={UserID}/>
      </Container>
    </div>
  );
};

export default ChangePasswordPage;
