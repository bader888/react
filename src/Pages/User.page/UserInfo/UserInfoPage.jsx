import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UserCard from "../../../Components/Users/UserCard/UserCard";
import Actions from "../../../Components/mainAction/Actions";
import { useNavigate, useParams } from "react-router-dom";
import { clsUser } from "../../../Module/clsUsers";
import Swal from "sweetalert2";
import MyDialog from "../../../Components/myDialog/MyDialog";
import ShowDetails from "../../../Components/Details/ShowDetails";

const UserInfoPage = () => {
  const { UserID } = useParams();
  const refUserCard = useRef();
  const redirect = useNavigate();
  const [user,userdata] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    refUserCard.current.FoundUser(UserID);
    clsUser.findUser(UserID)
    .then((resp) => {
   userdata(resp);
    })
  }, [UserID]);

  function HandleBackAction() {
    redirect("/Users");
  }

  const HandleUpdateAction = () => {
    Swal.fire({ title: "not implemented yet" });
  };

  async function HandleDeleteAction() {
    setOpen(true);
  }

  async function handleCloseDialoge() {
    setOpen(false);
  }

  const handleConfirmDelete = async () => {
    setOpen(false);

    try {
      const response = await clsUser.Delete(UserID);
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
      <Container maxWidth={"md"}>
        <UserCard ref={refUserCard} />
        <Actions
          BackAction={HandleBackAction}
          UpdateAction={HandleUpdateAction}
          DeleteAction={HandleDeleteAction}
        />
        <ShowDetails title={'pla pla'} Data={user}/>
      </Container>

      <MyDialog
        Open={open}
        handleConfirm={handleConfirmDelete}
        handleClose={handleCloseDialoge}
        message={`if you click Confirm button you can't undo the change, and the
            User with ID =  "${UserID}" will remove from the database`}
        title={`Are You Sure you want to delete User with id = "${UserID}"`}
      />
    </div>
  );
};

export default UserInfoPage;
