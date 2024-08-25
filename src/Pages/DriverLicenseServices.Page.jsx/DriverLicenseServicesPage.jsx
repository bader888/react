import React from "react";
import { Button, Container } from "@mui/material"
import './DriverLicenseServices.css'
import newLocalDriverLicenseImg from '../../Resources/New Driving License 32.png'
import NewInternationalLicenseImg from '../../Resources/International 32.png'
import ReplacementForDamageOrLostImg from '../../Resources/Damaged Driving License 32.png'
import ReleaseLicenceImg from '../../Resources/Release Detained License 32.png'
import RetaketestImg from '../../Resources/Retake Test 32.png'
import Header from "../../Components/header/Header";
const DriverLicenseServicesPage = () => {
  const doSomthing =() => 
  {
    console.log("something");

  }
  return (
    <div>
       <Header title={"driver license services"} /> 
      <Container maxWidth="md" className="driver-license-services-container">
        <Button onClick={doSomthing} variant="outlined">
          <img src={newLocalDriverLicenseImg} alt="" />
          new driver local license 
        </Button>

        <Button onClick={doSomthing} variant="outlined">
          <img src={NewInternationalLicenseImg} alt="" />
          new driver internationl license
        </Button>

        <Button onClick={doSomthing} variant="outlined">
          <img src={ReplacementForDamageOrLostImg} alt="" />
          Replacement for lost or damaged license
        </Button>

        <Button onClick={doSomthing} variant="outlined">
          <img src={ReleaseLicenceImg} alt="" />
          Release detained driving license
        </Button>

        <Button onClick={doSomthing} variant="outlined">
          <img src={RetaketestImg} alt="" />
          Retake test
        </Button> 
      </Container>
       <div>
       
     
    </div>
    </div>
  )
}

export default DriverLicenseServicesPage
