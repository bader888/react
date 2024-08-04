import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonCardWithFilter from "../../../Components/PersonDetails/PersonCardWithFilter";
import { Container } from "@mui/material";
import CreateUserDetials from "../../../Components/Users/UserCard/CreateUser/CreateUserDetials";
import Swal from "sweetalert2";
import "./CreateUser.css";
import Header from "../../../Components/header/Header";
import { useParams } from "react-router-dom";
import { clsUser } from "../../../Module/clsUsers";

export default function CreateUser({ Mode }) {
  const [value, setValue] = React.useState("1");
  const [personID, setPersonID] = React.useState(-1);
  const [mode, setMode] = React.useState("");
  const [header, setHeader] = React.useState("");
  const {UserID} = useParams();

  React.useEffect(() => {
    setMode(Mode);
    if (mode === "create") {
      setHeader("Add New User");
    }else{
      setHeader("Update User");
      clsUser.findUser(UserID).then((data) =>{
      console.log("Not implemented yet");
      }) 
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const WhenPersonFound = (PersonID) => {
    setPersonID(PersonID);
  };

  const WhenUserSave = (Data) => {
    if (Data.Success === true) {
      Swal.fire({
        title: "Success",
        text: Data.Message,
      });
    } else {
      Swal.fire({
        title: "Faild!",
        text: Data.Message,
      });
    }
  };

  return (
    <Container maxWidth={"md"} className="Container">
      <Header title={header} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Select Person" value="1" />
              <Tab label="User Info." value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonCardWithFilter handleWhenPersonFound={WhenPersonFound} />
          </TabPanel>
          <TabPanel value="2">
            <CreateUserDetials
              personID={personID}
              handleWhenUserSave={WhenUserSave}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
