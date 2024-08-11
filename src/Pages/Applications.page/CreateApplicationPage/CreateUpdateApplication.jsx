import { Cancel, Save } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Tab,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { clsApplication } from "../../../Module/clsApplications";
import Header from "../../../Components/header/Header";
import PersonDetailsWithFilter from "../../../Components/PersonDetails/PersonCardWithFilter";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { clsApplicationType } from "../../../Module/clsApplicationsTypes";
import { currentUser } from "../../../Global/CurrentUser";
import { ChangeDateToMMDDYYformate } from "../../../Formate/DataFormate";
import "./CreateUpdateaApplicaion.css";
import "../../../Global/CurrentUser";
import "../../../Module/clsApplications";
import "../../../Formate/DataFormate";
import "../../../Module/clsApplicationsTypes";

const CreateUpdateApplication = ({ mode }) => {
  const [options, setOptions] = useState([]);
  const [title, setTitle] = useState("");
  const navigator = useNavigate();
  const [value, setValue] = React.useState("1");
  const { ID } = useParams("ID");
  const [Application, setApplication] = useState({
    ApplicantPersonID: 0,
    ApplicationTypeID: 0,
    PaidFees: 0,
    CreateByUser: -1,
    ApplicationDate: 0,
  });

  function validateForm() {
    let hasError = false;
    if (Application.ApplicantPersonID === 0) {
      Swal.fire({
        title: "please select person",
        icon: "error",
      });
      hasError = true;
    }
    if (Application.ApplicationTypeID === 0) {
      Swal.fire({
        title: "please select Application type",
        icon: "error",
      });
      hasError = true;
    }
    if (Application.ApplicationDate === 0) {
      Swal.fire({
        title: "please select Application Date",
        icon: "error",
      });
      hasError = true;
    }
    return !hasError; //return true if not error accour
  }
  useEffect(() => {
    setApplication({ ...Application, CreateByUser: currentUser.UserID });

    clsApplicationType.GetAll().then((ApplicationTypes) => {
      setOptions(ApplicationTypes);
    });

    if (mode === "create") {
      setTitle("Create Application");
    } else {
      setTitle("Update Application");
      async function fetchData() {
        try {
          const resp = await clsApplication.FindbyID(ID);
          setApplication({
            ...Application,
            ApplicantPersonID: resp.ApplicantPersonID,
            ApplicationTypeID: resp.ApplicationTypeID,
            CreateByUser: currentUser.UserID,
            PaidFees: resp.PaidFees,
            ApplicationDate: resp.ApplicationDate,
          });
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
      setValue("2");
    }
  }, [ID, mode]);

  const handleSave = async () => {
    if (validateForm()) {
      if (mode === "create") {
        const resp = await clsApplication.Create({ Application });
        try {
          Swal.fire({
            title: resp.Success ? "Save Success" : "Save Faild",
            text: resp.Message,
            icon: resp.Success ? "success" : "error",
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error,
            icon: "error",
          });
          console.error(error);
        }
      } else {
        const resp = await clsApplication.Update(
          Application.ApplicationDate,
          ID
        );
        console.log(resp);
        try {
          Swal.fire({
            title: resp.isUpdated ? "Update Success" : "Save Faild",
            text: resp.Message,
            icon: resp.isUpdated ? "success" : "error",
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Internal error, Conact your admin",
            icon: "error",
          });
          console.error(error);
        }
      }
    }
  };

  const handleApplicationChange = async (event, newValue) => {
    setApplication((prevApplicationData) => ({
      ...prevApplicationData,
      ApplicationTypeID: newValue.ApplicationTypeID,
      PaidFees: newValue.ApplicationFees,
    }));
  };

  const handleCancel = () => {
    navigator("/Applications");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setApplication({ ...Application, [name]: value });
  };

  const WhenPersonFound = (personID) => {
    setApplication({ ...Application, ApplicantPersonID: +personID });
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Container maxWidth="md" className="ApplicationContainer">
        <Header title={title} />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Select Applicant" value="1" />
                <Tab label="Select Application type." value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PersonDetailsWithFilter
                handleWhenPersonFound={WhenPersonFound}
              />
            </TabPanel>
            <TabPanel value="2">
              <section className="shadow Application">
                <div className="shadow">
                  <Autocomplete
                    className="Compobox"
                    disabled={mode === "update" ? true : false}
                    options={options}
                    getOptionLabel={(option) => option.ApplicationTypeTitle}
                    onChange={handleApplicationChange}
                    isOptionEqualTo={(option, Application) =>
                      option.ApplicationTypeID === Application.ApplicationTypeID
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Application type" />
                    )}
                  />
                </div>
                <div className="shadow">
                  <TextField
                    type="date"
                    className="ApplicationDate"
                    onChange={handleOnChange}
                    label="Application Date"
                    name="ApplicationDate"
                    value={ChangeDateToMMDDYYformate(
                      Application.ApplicationDate
                    )}
                  />
                </div>
                <div className="shadow">
                  <TextField
                    className="FeesFeild"
                    label="fees"
                    disabled
                    name="Application Fees"
                    value={Application.PaidFees + " $"}
                  />
                </div>
                <div className="ActionWrapper">
                  <Button
                    variant="outlined"
                    color="info"
                    endIcon={<Save />}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    endIcon={<Cancel />}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </section>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
};

export default CreateUpdateApplication;
