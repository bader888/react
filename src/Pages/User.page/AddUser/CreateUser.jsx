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
  const { UserID } = useParams();
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    setMode(Mode);
    if (mode === "update") {
      try {
        clsUser.findUser(UserID).then((data) => {
          setUserData(data);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [Mode, UserID, mode]);

  const handleChange = (event, newValue) => {
    if (userData.PersonID !== -1) {
      setValue(newValue);
      return;
    }

    Swal.fire("please select Person First");
  };

  const WhenPersonFound = (personID) => {
    setPersonID(personID);
    setUserData({ ...userData, PersonID: personID });
  };

  return (
    <Container maxWidth={"md"} className="Container">
      <Header
        title={
          mode === "update" ? `Update User with id = ${UserID}` : "Create User"
        }
      />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Select Person" value="1" />
              <Tab label="User Info." value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>
              <h6>
                {mode === "update"
                  ? `the person Id = ${userData.PersonID}`
                  : ""}
              </h6>
            </div>
            <PersonCardWithFilter handleWhenPersonFound={WhenPersonFound} />
          </TabPanel>
          <TabPanel value="2">
            <CreateUserDetials
              personID={personID}
              UserData={userData}
              UserID={UserID}
              mode={mode}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
