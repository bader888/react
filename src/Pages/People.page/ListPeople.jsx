import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Container, TextField } from "@mui/material";
import { clsPerson } from "../../Module/clsPerson";
import Add from "@mui/icons-material/Add";
import MyTable from "../../Components/Table/Table";
import Header from "../../Components/header/Header";
import PeopleContextMenu from "../../Components/ContextMenu/PeopleContextMenu";
import clsNavigator from "../../Urls/Navgator";
import "./people.css";

export default function ListPeople() {
  const [people, setPeople] = useState([]);
  const [personID, setPersonID] = useState(-1);
  const redirect = useNavigate();
  const [searchTerm, SetSearchTerm] = useState("");

  useEffect(() => {
    clsPerson
      .GetAllPeople()
      .then((people) => {
        setPeople(people);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const FilterPeople = people.filter((person) =>
    person.FullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNew = () => {
    redirect(clsNavigator.PeopleNavgate.CreatePersonPage);
  };

  const handleRowClick = (PersonID) => {
    setPersonID(PersonID);
  };

  return (
    <div>
      <Container maxWidth="lg" className="Container">
        <div>
          <Header title={"Manage People"} />
          <div className="peopleActionContainer">
            <PeopleContextMenu PersonID={personID} />
            <Button
              color="success" 
              variant="outlined"
              startIcon={<Add />}
              onClick={handleAddNew}
            >
              Add Person
            </Button>
            <TextField
              label="filter"
              placeholder="write Person Full name"
              sx={{ flexGrow: 3 }}
              onChange={(e) => SetSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <MyTable tableData={FilterPeople} HandleRowClick={handleRowClick} />
      </Container>
    </div>
  );
}
