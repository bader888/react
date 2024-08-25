import React from "react";
import "./Applications.css";
import { useNavigate } from "react-router-dom";
import clsNavigator from "../../../Urls/Navgator";
import { Button, Container } from "@mui/material";
import driverLicenseServicesImg from "../../../Resources/Driver License 32.png";
import ManageLocalDriverLicenseImg from "../../../Resources/Local 32.png";
import ManageInternationalDriverLicenseImg from "../../../Resources/International 32.png";
import manageAppplicationTypeImg from "../../../Resources/Manage Applications 32.png";
import manageTestTypeImg from "../../../Resources/TestType 32.png";
import DetainLicenseImg from "../../../Resources/Detain 32.png";
import Header from "../../../Components/header/Header";

const Applications = () => {
  const navgator = useNavigate();
  const moveToDriverLicenseServicePage = () => {
    navgator(clsNavigator.Applications.DriverLicenseServices);
  };
  return (
    <div>
      <Header title={"Applications"} />
      <Container maxWidth="md" className="Applications">
        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={driverLicenseServicesImg} alt="" />
          driver license services
        </Button>

        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={ManageLocalDriverLicenseImg} alt="" />
          manage local D.L.A
        </Button>

        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={ManageInternationalDriverLicenseImg} alt="" />
          manage International D.L.A
        </Button>

        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={DetainLicenseImg} alt="" />
          detain license
        </Button>

        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={manageAppplicationTypeImg} alt="" />
          manage application type
        </Button>

        <Button onClick={moveToDriverLicenseServicePage} variant="outlined">
          <img src={manageTestTypeImg} alt="" />
          manage test type
        </Button>
      </Container>
    </div>
  );
};

export default Applications;
