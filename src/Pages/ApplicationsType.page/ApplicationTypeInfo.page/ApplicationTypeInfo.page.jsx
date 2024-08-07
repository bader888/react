import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { clsApplicationType } from "../../../Module/clsApplicationsTypes";
import { Money, Numbers, SettingsApplications } from "@mui/icons-material";
import "./ApplicationtypeInfo.css";
import Actions from "../../../Components/mainAction/Actions";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Swal from "sweetalert2";
import MyDialog from "../../../Components/myDialog/MyDialog";

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
        <section>
          <div className="shadow">
            <span>ID</span>
            <i>
              <Numbers />
            </i>
            <span id="lblUserID shadow">{data.ApplicationTypeID}</span>
          </div>

          <div className="shadow">
            <span>Application Type Title</span>
            <i>
              <SettingsApplications />
            </i>
            <span>{data.ApplicationTypeTitle}</span>
          </div>

          <div className="shadow">
            <span>Application Fees</span>
            <i>
              <Money />
            </i>
            <span>{data.ApplicationFees}</span>
          </div>
        </section>
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
