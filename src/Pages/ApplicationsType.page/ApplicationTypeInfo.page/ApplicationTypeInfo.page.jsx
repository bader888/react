import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { clsApplicationType } from "../../../Module/clsApplicationsTypes";   
import "./ApplicationtypeInfo.css";
import Actions from "../../../Components/mainAction/Actions";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Swal from "sweetalert2";
import MyDialog from "../../../Components/myDialog/MyDialog";
import MyDetails from "../../../Components/ClassDetails/MyDetails";


const ApplicationTypeInfoPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { ID } = useParams("ID");
  const [data, setData] = useState({});
  const Naviagator = useNavigate(); 
  useEffect(() => {
    async function FetchData() {
      const response = await clsApplicationType.FindbyID(ID);

      setData(response);
    }

    FetchData();
  }, [ID]);

  const handleBackAction = () => {
    Naviagator("/ApplicationTypes");
  };

  const handleDeleteAction = () => {
    setOpenDialog(true);
  };

  const handleUpdateAction = () => {
    Naviagator(`/UpdateApplicationType/${ID}`);
  };

  const handleOnClose = () => {
    setOpenDialog(false);
  };

  const handleOnConfirm = async () => {
    try {
      const resp = await clsApplicationType.Remove(ID);
      console.log(resp);
      Swal.fire({
        title:resp.IsSuccess?"success":"Faild",
        text:resp.IsSuccess?"Application type removed":"Faild to remove the application type",
        icon:resp.IsSuccess?"success":"error", 
      })

      if(resp.IsSuccess)
      {
        Naviagator("/ApplicationTypes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container maxWidth="md" className="apllicationTypeContainer shadow">
        <Header title={"Application Type Details"} />
       <MyDetails Data={data}  />
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
          "Are you sure you want to delete this application type? if you click confitm the application type will remove from the data base"
        }
        title={"Delete Application Type"}
      />
    </div>
  );
};

export default ApplicationTypeInfoPage;
