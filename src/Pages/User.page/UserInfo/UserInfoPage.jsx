import { Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import UserCard from "../../../Components/Users/UserCard/UserCard";
import Actions from "../../../Components/mainAction/Actions";
import { useNavigate, useParams } from "react-router-dom";
import { clsUser } from "../../../Module/clsUsers";
import Swal from "sweetalert2";

const UserInfoPage = () => {
  const { UserID } = useParams();
  const refUserCard = useRef();
  const redirect = useNavigate();

  useEffect(() => {
    refUserCard.current.FoundUser(UserID);
  }, []);

  function HandleBackAction() {
    redirect("/Users");
  }

  function HandleUpdateAction() {}

  async function HandleDeleteAction() {
    try {
      const response = await clsUser.Delete(UserID);
      console.log(response);
      Swal.fire({
        title:response.Success === true? "Success": "Oppps!",
        text: response.Message ,
        icon: response.Success === true ? "success" : "error",
      });

      if(response.Success === true)
        redirect("/Users");

    } catch (error) {
      console.error(error);
    } 
  }

  return (
    <div>
      <Container maxWidth={"md"}>
        <UserCard ref={refUserCard} />
        <Actions
          BackAction={HandleBackAction}
          UpdateAction={HandleUpdateAction}
          DeleteAction={HandleDeleteAction}
        />
      </Container>
    </div>
  );
};

export default UserInfoPage;
