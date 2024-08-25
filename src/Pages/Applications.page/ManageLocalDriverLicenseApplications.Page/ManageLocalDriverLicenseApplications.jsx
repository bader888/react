import { Button, Container, Table, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/header/Header";
import MyTable from "../../../Components/Table/Table";
import { clsLocalDriverLicenseApplications } from "../../../Module/clsLocalDriverLicenseApplications";
import { Add, Sort, SortByAlpha } from "@mui/icons-material";
import PeopleContextMenu from "../../../Components/ContextMenu/PeopleContextMenu";

const ManageLocalDriverLicenseApplications = () => {
  const [localDriverLicnseApplications, setLocalDriverLicenseApplications] =
    useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const [LocalApplicationID, setLocalApplicationID] = useState(-1);

  const handleRowClick = (LocalApplicationID) => {
    setLocalApplicationID(LocalApplicationID);
  };
  useEffect(() => {
    clsLocalDriverLicenseApplications
      .GetAll()
      .then((resp) => {
        console.log(resp);
        setLocalDriverLicenseApplications(resp);
      })
      .catch(() => {
        console.error("some thing wron");
      });
  }, []);

  const FilterLocalApplications = localDriverLicnseApplications.filter(
    (application) =>
      application.NationalNo.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
 const handleSort=()=>
 {
    FilterLocalApplications.sort((a, b) => {
         
        if (a.FullName < b.FullName) {
          return -1;
        }
        if (a.FullName  >  b.FullName) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });

      setLocalDriverLicenseApplications(FilterLocalApplications);
 }
  const handleAddNew = () => {
    console.log("move to add new local driver license application");
  };

  return (
    <div>
      <Container maxWidth="lg">
        <div>
          <Header title={"manage local driver license applications"} />
          <div className="peopleActionContainer">
            <PeopleContextMenu PersonID={LocalApplicationID} />
            <Button
              color="success"
              variant="outlined"
              startIcon={<Add />}
              onClick={handleAddNew}
            >
              L.D.L.A
            </Button>
            <Button
              startIcon={<SortByAlpha />}
              color="success"
              variant="outlined"
              onClick={handleSort}
            >
              sort
            </Button>
            <TextField
              label="filter"
              placeholder="write National Number"
              sx={{ flexGrow: 3 }}
              onChange={(e) => SetSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <MyTable
          HandleRowClick={handleRowClick}
          tableData={FilterLocalApplications}
        />
      </Container>
    </div>
  );
};

export default ManageLocalDriverLicenseApplications;
