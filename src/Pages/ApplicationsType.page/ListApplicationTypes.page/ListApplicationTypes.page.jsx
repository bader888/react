import React, { useEffect, useState } from "react";
import { clsApplicationType } from "../../../Module/clsApplicationsTypes";
import MyTable from "../../../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Header from "../../../Components/header/Header";
import { Add } from "@mui/icons-material";
import Swal from "sweetalert2";

const ListApplicationTypesPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    clsApplicationType.GetAll().then((data) => {
      setData(data);
    });
  }, []);

  const HandleRowClick = (applicationID) => {
    navigate(`Details/${applicationID}`);
    console.log(applicationID);
  };

  const handleAddNew = () => {
    navigate("CreateApplicationType")
  };
  return (
    <div>
      <Container maxWidth="md" className="Container">
        <div>
          <Header title={"Manage Application Types"} />
          <Button
            color="success"
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            {" "}
            Add New Application type
          </Button>
        </div>
        <MyTable HandleRowClick={HandleRowClick} tableData={data} />
      </Container>
    </div>
  );
};

export default ListApplicationTypesPage;
