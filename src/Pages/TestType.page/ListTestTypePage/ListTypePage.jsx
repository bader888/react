import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/header/Header";
import MyTable from "../../../Components/Table/Table";
import { clsTestType } from "../../../Module/clsTestType";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListTypePage = () => {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    clsTestType.GetAll().then((data) => {
      setData(data);
    });
  }, []);

  const HandleRowClick = (ID) => {
    console.log(ID);
    //  Navigate(`update/${ID}`)
  };

  const HandleUpdate = (ID) => {
    Navigate(`update/${ID}`);
  };

  const HandleDelete = (ID) => {
   Swal.fire({title:"not implemented yet"})
  };

  const HandleShowDetails = (ID) => {
   Swal.fire({title:"not implemented yet"})
    
  };

  return (
    <div>
      <Container maxWidth="md">
        <div>
          <Header title={"Test Types"} />
        </div>
        <MyTable
          handleUpdate={HandleUpdate}
          handleRowClick={HandleRowClick}
          handleDelete={HandleDelete}
          handleShowDetails={HandleShowDetails}
          tableData={data}
        />
      </Container>
    </div>
  );
};

export default ListTypePage;
