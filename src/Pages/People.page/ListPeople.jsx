import React from "react";
import "./people.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import { clsPerson } from "../../Module/clsPerson";
import MyTable from "../../Components/Table/Table";
import Header from "../../Components/header/Header";

export default function ListPeople() {
  const [people, setPeople] = useState([]); 
  const redirect = useNavigate();
  
  useEffect(() => {
    clsPerson.GetAllPeople().then((people) => { 
      setPeople(people);
    });
  }, [ ]);

  const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
      backgroundColor: "#e0e0e0",
    },
    "&:hover": {
      cursor: "pointer",
    },
  });

  const handleAddNew = () => {
    redirect("Create");
  };

  const handleRowClick = (PersonID) => {
    console.log(PersonID);
    redirect(`/People/${PersonID}`);
  };

  return (
    <div>
      <Container maxWidth="lg" className="Container">
        <div>
         <Header title={"Manage People"}/>
          <Button
            color="success"
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            Add Person
          </Button>
        </div>
        <MyTable tableData={people} handleRowClick={handleRowClick}/> 
      </Container>
    </div>
  );
}
