import "./navbar.css";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import peopleIcon from "../../Resources/People 64.png";
import usersIcon from "../../Resources/users 64.png";
import ApplicationsIcon from "../../Resources/Applications 64.png";
import DriversIcon from "../../Resources/Drivers 64.png";
import TestsIcon from "../../Resources/Test Type 64.png";
import ApplicationTypesIcon from "../../Resources/Application Types 64.png";
import TestAppointments from "../../Resources/TestType 32.png";
import HomeIcon from "@mui/icons-material/Home";

import MenuIcon from "@mui/icons-material/Menu"; 

export default function Navbar() {
  const Icons = [
    HomeIcon,
    peopleIcon,
    usersIcon,
    ApplicationsIcon,
    DriversIcon,
    TestsIcon,
    ApplicationTypesIcon,
    TestAppointments,
  ];
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Home",
          "People",
          "Users",
          "Applications",
          "Drivers",
          "Test Types",
          "Application Types",
          "Test Appointments",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link
                  to={
                    text.includes(" ") === true ? text.replace(" ", "") : text
                  }
                >
                  {index === 0 ? (
                    <HomeIcon />
                  ) : (
                    <img className="Image" src={Icons[index]} alt="" />
                  )}{" "}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <MenuIcon />{" "}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
