import { Button, Container } from "@mui/material";
import React from "react";
import DriverLicenseApplicationInfo from "../../../../Components/DriverLicenseApplicationInfo/DriverLicenseApplicationInfo";
import Header from "../../../../Components/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import clsNavigator from "../../../../Urls/Navgator";

const LocalDriverLicenseApplicationPage = () => {
  const { ID } = useParams("ID");
  const navigator = useNavigate();

  const handleBack = () => {
    navigator(
      "/" +
        clsNavigator.Applications.Applications +
        "/" +
        clsNavigator.Applications.ManageLocalDriverLicenseApplications
    );
  };

  return (
    <div>
      <Container maxWidth="md">
        <Header title={"Local Driver License application details"} />
        <DriverLicenseApplicationInfo ldaID={ID} />
        <div>
          <Button
            startIcon={<ArrowBack />}
            variant="outlined"
            onClick={handleBack}
            sx={{margin:2}}
          >
            Back
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LocalDriverLicenseApplicationPage;
