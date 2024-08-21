import React, { useEffect, useState } from "react";
import { clsUser } from "../../../Module/clsUsers";
import { Button, Container, TextField } from "@mui/material";
import MyTable from "../../../Components/Table/Table";
import Header from "../../../Components/header/Header";
import { Add, Search } from "@mui/icons-material";
import UserContextMenu from "../../../Components/ContextMenu/UserContextMenu";
import { useNavigate } from "react-router-dom";
import "./ListUserPage.css";

const users = await clsUser.GetAllUsers();

const ListUsersPage = () => { 
  const [userID, setUserID] = useState(0); 
  const redirect = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const FilterUsers = users.filter(user =>
    user.UserName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNew = () => {
    console.log("add new user clicked");
    redirect("/Users/Create");
  };

  const handleRowClick = (ID) => {
    setUserID(ID);
  };
 
  return (
    <div>
      <Container maxwidth={"md"} className="Container">
        <div>
          <Header title={"manage users"} />
          <div className="UserActionContainer">
            <UserContextMenu UserID={userID} />
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={handleAddNew}
            >
              Create User
            </Button>
          </div>
          <div className="filterContainer">
            <TextField
              label="filter"
              placeholder="write user name"
              onChange={e => setSearchTerm(e.target.value)} 
              value={searchTerm}
            /> 
          </div>
        </div>

        <MyTable tableData={FilterUsers} HandleRowClick={handleRowClick} />
      </Container>
    </div>
  );
};

export default ListUsersPage;
