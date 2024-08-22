import React from "react";
import DeleteICon from "@mui/icons-material/Delete";
import BackIcon from "@mui/icons-material/ArrowBackIosNewSharp"; 
import { Button } from "@mui/material"; 

import "./Action.css"

const Actions = ({BackAction,DeleteAction,UpdateAction}) => {
 
    function handleOnClickback()
    {
        BackAction();
    }

 
    function handleOnClicKDelete()
    {
        DeleteAction();
    }

  return (
    <div>
      <div className="btn-Wrapper">
        <Button
          variant="outlined"
          onClick={handleOnClickback}
          startIcon={<BackIcon />}
        >
          Back
        </Button>
 
        <Button
          onClick={handleOnClicKDelete}
          variant="outlined"
          startIcon={<DeleteICon />}
          color="error"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Actions;
