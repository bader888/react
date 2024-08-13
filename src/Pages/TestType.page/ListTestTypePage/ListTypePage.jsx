import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/header/Header";
import MyTable from "../../../Components/Table/Table";
import { clsTestType } from "../../../Module/clsTestType";
import { useNavigate } from "react-router-dom";

const ListTypePage = () => {
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        clsTestType.GetAll().then((data) => {
        setData(data);
        });
    }, []);

    const HandleRowClick = (TestTypeID) => {
        Navigate(`update/${TestTypeID}`)
    };

    return (
        <div>
        <Container maxWidth="md">
            <div>
            <Header title={"Test Types"} />
            </div>
            <MyTable handleRowClick={HandleRowClick} tableData={data} />
        </Container>
        </div>
    );
    };

export default ListTypePage;
