import React from "react";
import "./people.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { clsPerson } from "../../Module/clsPerson";
import MyTable from "../../Components/Table/Table";
import Header from "../../Components/header/Header";
import { currentUser } from "../../Global/CurrentUser";
import MainHeader from "../../Components/MainHeader/MainHeader";

export default function ListPeople() {
  const [people, setPeople] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    clsPerson.GetAllPeople().then((people) => {
      setPeople(people);
    });
  }, []);

  const handleAddNew = () => {
    redirect("Create");
  };

  const handleRowClick = (PersonID) => {
    redirect(`/People/${PersonID}`);
  };

  return (
    <div> 
      <Container maxWidth="lg" className="Container">
        <div>
          <Header title={"Manage People"} />

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

        <MyTable tableData={people} handleRowClick={handleRowClick} />
      </Container>
    </div>
  );
}
