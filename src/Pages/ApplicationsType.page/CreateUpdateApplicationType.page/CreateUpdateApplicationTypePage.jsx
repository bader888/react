import React, { useEffect, useState } from "react";
import "./CreateUpdateApplicationType.css";
import { Button, Container, TextField } from "@mui/material";
import Header from "../../../Components/header/Header";
import { Cancel, Save } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { clsApplicationType } from "../../../Module/clsApplicationsTypes";
import Swal from "sweetalert2";
const CreateUpdateApplicationTypePage = ({ mode }) => {
  const [title, setTitle] = useState("");
  const navigator = useNavigate();
  const { ID } = useParams("ID");
  const [ApplicationType, setApplicationType] = useState({
    ApplicationTypeTitle: " ",
    ApplicationFees: 0,
  });

  function validateForm() {
    let hasError = false;

    if (
      ApplicationType.ApplicationFees <= 0 ||
      isNaN(ApplicationType.ApplicationFees)
    ) {
      Swal.fire({
        title: "the fees can't be string or zero",
      });
      hasError = true;
    }

    if (ApplicationType.ApplicationTypeTitle.trim().length === 0) {
      Swal.fire({
        title: "the fees can't empty",
      });
      hasError = true;
    }

    return !hasError; //return true if not error accour
  }
  useEffect(() => {
    if (mode === "create") {
      setTitle("Create Application Type");
    } else {
      setTitle("Update Application Type");

      async function fetchData() {
        try {
          const resp = await clsApplicationType.FindbyID(ID);
          setApplicationType(resp);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
  }, [ID, mode]);

  const handleSave = async () => {
    if (validateForm()) {
      if (mode === "create") {
        const resp = await clsApplicationType.Create({
          ApplicationTypeTitle: ApplicationType.ApplicationTypeTitle,
          Fees: ApplicationType.ApplicationFees,
        });

        Swal.fire({
          title: resp.Success ? "Save Success" : "Save Faild",
          text: resp.Message,
          icon: resp.Success ? "success" : "error",
        });
      } else {
        const resp = await clsApplicationType.Update(
          {
            ApplicationTypeID: ID,
            ApplicationTypeTitle: ApplicationType.ApplicationTypeTitle,
            ApplicationFees: ApplicationType.ApplicationFees,
          },
          ID
        );
        Swal.fire({
          title: resp.Success ? "Update Success" : "Update Faild",
          text: resp.Message,
          icon: resp.Success ? "success" : "error",
        });
      }
    }

    setApplicationType({
      ...ApplicationType,
      ApplicationTypeTitle: "",
      ApplicationFees: 0,
    });
  };

  const handleCancel = () => {
    navigator("/ApplicationTypes");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setApplicationType({ ...ApplicationType, [name]: value });
  };
  return (
    <div>
      <Container maxWidth="md" className="ApplicationTypeContainer">
        <Header title={title} />
        <section className="shadow">
          <div className="shadow">
            <TextField
              onChange={handleOnChange}
              label="title"
              name="ApplicationTypeTitle"
              value={ApplicationType.ApplicationTypeTitle}
            />
          </div>
          <div className="shadow">
            <TextField
              onChange={handleOnChange}
              label="fees"
              name="ApplicationFees"
              value={ApplicationType.ApplicationFees}
            />
          </div>
          <div className="ActionWrapper">
            <Button
              variant="contained"
              color="info"
              endIcon={<Save />}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              endIcon={<Cancel />}
              onClick={handleCancel}
            >
              {" "}
              Cancel
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CreateUpdateApplicationTypePage;
