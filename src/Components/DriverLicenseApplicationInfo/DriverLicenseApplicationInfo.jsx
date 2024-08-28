import React, { useEffect, useState } from "react";
import "./DriverLicenseApplication.css";
import NumberIMG from "../../Resources/Number 32.png";
import ApplyForLicenseIMG from "../../Resources/License Type 32.png";
import PassedTestsIMG from "../../Resources/PassedTests 32.png";
import { clsLocalDriverLicenseApplications } from "../../Module/clsLocalDriverLicenseApplications";
import { Divider } from "@mui/material";
import BasicApplicationInfo from "../BasicApplicationInfo/BasicApplicationInfo";
//localDriverLicenseApplicationID ==> ldaID
const DriverLicenseApplicationInfo = ({ ldaID }) => {
  const [LocalDrivingApplication, setLocalDrivingApplication] = useState({
    ApplicationID: 1079,
    Success: true,
    data: {
      ApplicationDate: "2024-01-25T13:12:17.53",
      ClassName: "Class 3 - Ordinary driving license",
      FullName: "a a a a",
      LocalDrivingLicenseApplicationID: 40,
      NationalNo: "a19",
      PassedTestCount: 3,
      Status: "Completed",
    },
  });

  useEffect(() => {
    async function FetchData() {
      const response =
        await clsLocalDriverLicenseApplications.FindLocalDrivingLicenseApplication(
          ldaID
        );
      setLocalDrivingApplication(response);
    }

    FetchData();
  }, [ldaID]);

  return (
    <div>
      <section className="Basic-application-info__Container">
      <h4>Local driving License Application</h4>
        <p>
          D.L.App ID:{" "}
          <img alt="" src={NumberIMG} className="icon_section" />
          <span className="lable__section lable__ID">
            {LocalDrivingApplication.data.LocalDrivingLicenseApplicationID}
          </span>
        </p>
        <p>
          Class Name: <img alt=""src={ApplyForLicenseIMG}  className="icon_section" />
          <span className="lable__section lable__ID">
            {LocalDrivingApplication.data.ClassName}
          </span>
        </p>
        <p>
          Passed Test Count: <img alt="" src={PassedTestsIMG}  className="icon_section" />
          <span className="lable__section lable__ID">
            {LocalDrivingApplication.data.PassedTestCount}
          </span>
        </p> 
      </section>
      <Divider sx={{ padding: 1 }} />
      <BasicApplicationInfo
        applicationID={LocalDrivingApplication.ApplicationID}
      />
    </div>
  );
};

export default DriverLicenseApplicationInfo;
