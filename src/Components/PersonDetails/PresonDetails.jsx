import React from "react";
import "./PersonDetails.css"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  
import Swal from "sweetalert2";
import PersonCard from "./PersonCard";
import { useRef } from "react";
import MyDialog from "../myDialog/MyDialog";
import Actions from "../mainAction/Actions";
import { clsPerson } from "../../Module/clsPerson";
import { Container } from "@mui/material";

const PresonDetails = () => { 
  const { PersonID } = useParams();
  const [open, setOpen] = useState(false);
  const refPrsonCard = useRef();
  const redirect = useNavigate();
  
  useEffect(() => {
    refPrsonCard.current.FoundPerson(PersonID);
  }, []);


  const handleBackClick = () => {
    redirect("/People");
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleUpdateClick = () => {
    redirect(`/Update/${PersonID}`);
  };

  const handleConfirmDelete = async () => {
    setOpen(false);

    try {
      const resp = await clsPerson.Delete(PersonID); 
      Swal.fire({
        title: resp.Success === true ? "success" : "Faild",
        text: resp.Message,
        icon: resp.Success === true ? "success" : "error",
        confirmButtonText: "Ok",
      });

      if (resp.Success === true) redirect("/People");
    } catch (AxiosError) {
      console.log(AxiosError);
    }
  };

  const handleCloseDialoge = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container maxWidth="md">
        <PersonCard Person={PersonID} ref={refPrsonCard} />

        <Actions
          BackAction={handleBackClick}
          DeleteAction={handleDeleteClick}
          UpdateAction={handleUpdateClick}
        />

        <MyDialog
          Open={open}
          handleConfirm={handleConfirmDelete}
          handleClose={handleCloseDialoge}
          message={`if you click Confirm button you can't undo the change, and the
            person with ID =  "${PersonID}" will remove from the database`}
          title={`Are You Sure you want to delete Person with id = "${PersonID}"`}
        />
      </Container>
    </div>
  );
};

export default PresonDetails;
