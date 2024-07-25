import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import "./FilterHeader.css";
import { Search } from "@mui/icons-material";

const FilterHeader = ({ handleSearchClick, searchLable }) => {
  const [value, setValue] = useState("");

  function sendValueToParent() { 
    handleSearchClick(value);
  }

  function handleTextChange(e) {
    let { value } = e.target; 
    setValue(value);
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
      </section>
    </div>
  );
};

export default FilterHeader;
