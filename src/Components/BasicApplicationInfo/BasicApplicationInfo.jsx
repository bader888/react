import React, { useEffect, useState } from "react";
import "./BasicApplicationInfo.css"; 
import { clsApplication } from "../../Module/clsApplications";
import NumberIMG from "../../Resources/Number 32.png";
import FeesIMG from "../../Resources/money 32 - 2.png"; 
import ApplicantIMG from "../../Resources/Person 32.png";
import TypeIMG from "../../Resources/TestType 32.png";
import DateIMG  from "../../Resources/Calendar 32.png";
import UserIMG  from "../../Resources/User 32 -2.png";
import MoneyIMG  from "../../Resources/money 32 - 2.png";

const BasicApplicationInfo = ({ applicationID }) => {
  const [Application, setApplication] = useState({
    ApplicantPersonID: 1,
    ApplicationDate: "2023-09-24T03:24:20.553",
    ApplicationFees: 15,
    ApplicationID: 52,
    ApplicationStatus: 3,
    ApplicationTypeID: 1,
    ApplicationTypeTitle: "Issue Driving License Service (First Time)",
    CreatedByUser: 1,
    FullName: "bader2 haider huseen string",
    LastStatusDate: "2023-09-24T11:08:27.533",
    PaidFees: 15,
    Status: "completed",
  });

  useEffect(() => {
    clsApplication
      .FindbyID(applicationID)
      .then((resp) => {
        setApplication(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [applicationID]);

  return (
    <div>
      <section className="Basic-application-info__Container">
        <h4>Application basic info</h4> 
         <p>
           ID: <img alt="" src={NumberIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.ApplicationID}</span>
          </p>

          <p>
           status: <img alt="" src={NumberIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.Status}</span>
          </p>
          
          
          <p>
           Fees: <img alt="" src={FeesIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.ApplicationFees}</span>
          </p>

             
          <p>
           Paid Fees: <img alt="" src={MoneyIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.PaidFees}</span>
          </p>



          <p>
           type: <img alt="" src={TypeIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.ApplicationTypeTitle}</span>
          </p>


          <p>
           Applicant: <img alt="" src={ApplicantIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.FullName}</span>
          </p>


          <p>
           Date: <img alt="" src={DateIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.ApplicationDate}</span>
          </p>

          <p>
           Status Date: <img alt="" src={DateIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.LastStatusDate}</span>
          </p>

          <p>
           Create by: <img alt="" src={UserIMG} className="icon_section" />
            <span className="lable__section lable__ID">{Application.CreatedByUser}</span>
          </p>
      </section>
    </div>
  );
};

export default BasicApplicationInfo;
