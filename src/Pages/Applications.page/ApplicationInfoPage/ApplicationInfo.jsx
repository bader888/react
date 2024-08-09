import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/header/Header";
import Actions from "../../../Components/mainAction/Actions";
import MyDialog from "../../../Components/myDialog/MyDialog";
import { clsApplication } from "../../../Module/clsApplications";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"; 
import MyDetails from "../../../Components/ClassDetails/MyDetails";

const ApplicationInfo = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { ID } = useParams("ID");
  const [data, setData] = useState({});
  const Naviagator = useNavigate();
  useEffect(() => {
    async function FetchData() {
      const response = await clsApplication.FindbyID(ID);
      console.log(response);
   let values = Object.values(response);
   let keys = Object.keys(response);
   console.log(values);
   console.log(keys);
      setData(response);
    }

    FetchData();
  }, [ID]);

  const handleBackAction = () => {
    Naviagator("/Applications");
  };

  const handleDeleteAction = () => {
    setOpenDialog(true);
  };

  const handleUpdateAction = () => {
    Naviagator(`/UpdateApplication/${ID}`);
  };

  const handleOnClose = () => {
    setOpenDialog(false);
  };

  const handleOnConfirm = async () => {
    try {
      const resp = await clsApplication.Remove(ID);
      console.log(resp);
      Swal.fire({
        title: resp.IsSuccess ? "success" : "Faild",
        text: resp.IsSuccess
          ? "Application  removed"
          : "Faild to remove the application ",
        icon: resp.IsSuccess ? "success" : "error",
      });

      if (resp.IsSuccess) {
        Naviagator("/Applications");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Container maxWidth="md" className="apllicationContainer shadow">
        <Header title={"Application Details"} />
      <MyDetails Data={data}/>
        <Actions
          BackAction={handleBackAction}
          DeleteAction={handleDeleteAction}
          UpdateAction={handleUpdateAction}
        />
      </Container>
      <MyDialog
        Open={openDialog}
        handleClose={handleOnClose}
        handleConfirm={handleOnConfirm}
        message={
          "Are you sure you want to delete this application? if you click confitm the application type will remove from the data base"
        }
        title={"Delete Application"}
      />
    </div>
  );
};

export default ApplicationInfo;
