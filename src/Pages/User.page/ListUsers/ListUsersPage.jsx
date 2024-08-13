import React, { useEffect, useState } from "react";
import { clsUser, UserData } from "../../../Module/clsUsers";
import { Button, Container } from "@mui/material";
import MyTable from "../../../Components/Table/Table";
import Header from "../../../Components/header/Header";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListUsersPage = () => {
  const [user, setUser] = useState({ UserData });
  const redirect = useNavigate();
  useEffect(() => {
    clsUser.GetAllUsers().then((resp) => {
      setUser(resp);
    });
  }, []);

  const handleAddNew = () => {
    redirect("/Users/Create");
  };

  const handleRowClick = (userid) => {
    //redirect(`/Users/${userid}`);
  };

  const HandleShowDetails = (userid) => {
    redirect(`Details/${userid}`);
  };

  const HandleUpdate = (userid) => {
    redirect(`Update/${userid}`);
  };

  const HandleDelete = async () => {
    try {
      const response = await clsUser.Delete(1);
      Swal.fire({
        title: response.Success === true ? "Success" : "Oppps!",
        text: response.Message,
        icon: response.Success === true ? "success" : "error",
      });

      if (response.Success === true) redirect("/Users");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container maxwidth={"md"} className="Container">
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

        <MyTable
          tableData={user}
          handleUpdate={HandleUpdate}
          handleDelete={HandleDelete}
          handleRowClick={handleRowClick}
          handleShowDetails={HandleShowDetails}
        />
      </Container>
    </div>
  );
};

export default ListUsersPage;
