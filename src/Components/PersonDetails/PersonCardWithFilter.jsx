import React, { useState } from "react";
import FilterHeader from "../FilterHeader/FilterHeader";
import PersonCard from "./PersonCard";
import { Container } from "@mui/material";
import { useRef } from "react";

const PersonDetailsWithFilter = () => {
  const [personID, setPersonID] = useState(-1);
  const refPrsonCard = useRef();

  const HandleSearchClick = (PersonID) => {
    console.log("Person id from the person card comp"+ PersonID);  
    refPrsonCard.current.FoundPerson(PersonID);
    setPersonID(PersonID); 
  }; 
 
  return (
    <div>
      <Container maxWidth={"md"}>
        <FilterHeader
          handleSearchClick={HandleSearchClick}
          searchLable={"Enter PersonID"}
        />

        <PersonCard Person={personID} ref={refPrsonCard}  />
      </Container>
    </div>
  );
};

export default PersonDetailsWithFilter;
