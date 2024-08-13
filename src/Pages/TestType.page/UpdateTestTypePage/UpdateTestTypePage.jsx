    import { Box, Button, Container, TextField } from "@mui/material";
    import React, { useEffect, useState } from "react";
    import Header from "../../../Components/header/Header";
    import { useNavigate, useParams } from "react-router-dom";
    import { clsTestType } from "../../../Module/clsTestType";
    import "./UpdateTestType.css"; 
    import Swal from "sweetalert2";

    const UpdateTestTypePage = () => {
        const navigate = useNavigate();
    const { ID } = useParams("ID");
    const [TestType, setTestType] = useState({
        TestTypeID: 0,
        TestTypeTitle: "string",
        TestTypeDescription: "string",
        TestTypeFees: 0,
    });
    useEffect(() => {
        async function fetchData() {
        try {
            const resp = await clsTestType.FindbyID(ID);
            setTestType(resp);
        } catch (error) {
            console.error(error);
        }
        }

        fetchData();
    }, [ID]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setTestType({ ...TestType, [name]: value });
    };

    const handleOnSave = async () => {
        const resp = await clsTestType.Update(ID, TestType);

        if (resp === true) {
        Swal.fire({
            title: "Successd",
            text: "the test type updated successfully",
            icon: "success",
        });
        } else {
        Swal.fire({
            title: "Faild",
            text: "faild to update the test type ",
            icon: "error",
        });
        }
    };

    const handleOnBack = () => {
        navigate("/TestTypes")
    };
    return (
        <div>
        <Container maxWidth={"md"} className="Container">
            <Header title={"update test type"} />
            <Box sx={{ width: "100%", typography: "body1" }}>
            <section className="updateTestTypeContainer">
                <div>
                    <p>{TestType.TestTypeTitle}</p>
                    <p>{TestType.TestTypeDescription}</p>
                </div>
                <div>
                <TextField
                    label="Fees"
                    name="TestTypeFees"
                    value={TestType.TestTypeFees}
                    onChange={handleOnChange}
                />
                </div>
                <div className="actions">
                    <Button variant="outlined" color="success" onClick={handleOnSave}>
                        save
                    </Button>
                    <Button
                        sx={{ mt: "10px" }}
                        variant="outlined"
                        color="info"
                        onClick={handleOnBack}
                    >
                        back
                    </Button>
                </div>
            </section>
            </Box>
        </Container>
        </div>
    );
    };

    export default UpdateTestTypePage;
