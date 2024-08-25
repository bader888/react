import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/header/Header";
import { Add } from "@mui/icons-material";
import MyTable from "../../../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { clsApplication } from "../../../Module/clsApplications";

const ManageLocalDriverLicenseApplications = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  const HandleRowClick = () => {};

  const handleAddNew = () => {};
  return (
    <div>
      <Container maxWidth="md">
        <div>
          <Header title={"Manage local driver license applications"} />
          <Button
            color="success"
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            Add New Application
          </Button>
        </div>
        <MyTable handleRowClick={HandleRowClick} tableData={data} />
      </Container>
    </div>
  );
};

export default ManageLocalDriverLicenseApplications;
