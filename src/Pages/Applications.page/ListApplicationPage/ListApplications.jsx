import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/header/Header'
import { Add } from '@mui/icons-material'
import MyTable from '../../../Components/Table/Table'
import { useNavigate } from 'react-router-dom'
import { clsApplication } from '../../../Module/clsApplications'

const ListApplications = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
      clsApplication.GetAll().then((data) => {
        console.log(data);
        setData(data);
      });
    }, []);
  
    const HandleRowClick = (applicationID) => {
      navigate(`ApplicationDetails/${applicationID}`);
      console.log(applicationID);
    };
  
    const handleAddNew = () => {
      navigate("Create")
    };
  return (
    <div>
        <Container maxWidth="md">
        <div>
          <Header title={"Manage Applications"} />
          <Button
            color="success"
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            {" "}
            Add New Application
          </Button>
        </div>
        <MyTable handleRowClick={HandleRowClick} tableData={data} />
      </Container>
    </div>
  )
}

export default ListApplications
