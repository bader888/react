import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Search, SearchOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./FilterHeader.css";

const FilterHeader = ({ handleSearchClick, searchLable }) => {
  const [value, setValue] = useState("");
  const navigator = useNavigate();
  function sendValueToParent() {
    handleSearchClick(value);
  }

  function handleTextChange(e) {
    let { value } = e.target;
    setValue(value);
  }

  function handleSeePeople() {
    navigator("/People");
  }

  return (
    <div>
      <section className="filterContainer">
        <TextField label={searchLable} onChange={handleTextChange} />
        <Button
          onClick={sendValueToParent}
          variant="outlined"
          startIcon={<Search />}
        >
          search
        </Button>
        <Button
          onClick={handleSeePeople}
          variant="outlined"
          startIcon={<SearchOff />}
        >
          see people
        </Button>
      </section>
    </div>
  );
};

export default FilterHeader;
