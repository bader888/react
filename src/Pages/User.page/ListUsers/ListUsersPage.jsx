import React, { useEffect, useState } from "react";
import { clsUser, UserData } from "../../../Module/clsUsers";
import { Button, Container } from "@mui/material";
import MyTable from "../../../Components/Table/Table";
import Header from "../../../Components/header/Header";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../../Components/MainHeader/MainHeader";

const ListUsersPage = () => {
  const [user, setUser] = useState({ UserData });
  const redirect = useNavigate();

  useEffect(() => {
    clsUser.GetAllUsers().then((resp) => {
      setUser(resp);
    });
  }, []);

  const handleAddNew = () => {
    console.log("add new user");
    redirect("/Users/Create");
  };

  const handleRowClick = (userid) => { 
    redirect(`/Users/${userid}`);
  };

  return (
    <div>
      <Container  maxwidth={"md"}  className="Container" > 
        <div>
          <Header title={"manage users"} />

          <Button
            color="success"
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            Add User
          </Button>
        </div>

        <MyTable tableData={user} handleRowClick={handleRowClick} />
      </Container>
    </div>
  );
};

export default ListUsersPage;
