import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clsNavigator from "../../Urls/Navgator";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { AddCard, KeyboardArrowRight } from "@mui/icons-material";
import DeleteIMG from "../../Resources/Delete 32 2.png";
import CancelIMG from "../../Resources/delete.png";
import ApplicationDetailsIMG from "../../Resources/PersonDetails 32.png";
import EditIMG from "../../Resources/edit 32.png";
import SechduleTestIMG from "../../Resources/Schedule Test 32.png";
import IssueLicenseIMG from "../../Resources/IssueDrivingLicense 32.png";
import ShowLicenseIMG from "../../Resources/License View 32.png";
import ShowPersonLicenseHistoryIMG from "../../Resources/PersonLicenseHistory 32.png";
import VisionIMG from "../../Resources/Vision Test 32.png";
import WrittenIMG from "../../Resources/Written Test 32 Sechdule.png";
import StreetIMG from "../../Resources/Street Test 32.png";

//LocalDriverLicenseApplicationID ====> ldaID
const LocalDriverLicenseApplicationsContextMenu = ({ ldaID }) => {
  const redirect = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (ldaID === -1) {
      Swal.fire("Please select Application first");
      return;
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
  };
  
  const handleSubmenuClick = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleShowApplicationDetails = () => {
    redirect(clsNavigator.Applications.LocalDriverLicenseApplicationPageWithID(ldaID));
  };

  const handleDeleteApplication = () => {
    console.log("delete application with id =" + ldaID);
  };

  const handleEditApplication = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleCancelApplication = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleShowLicense = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleShowPersonHistory = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleIssueLicenseFirstTime = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  //sub menu methods
  
  const handleScheduleVisionTest = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleScheduleWrittenTest = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  const handleScheduleStreetTest = () => {
    redirect(clsNavigator.PeopleNavgate.UpdatePersonPageWithID(ldaID));
  };

  return (
    <div>
      <Button
        variant="outlined"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<AddCard />}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleShowApplicationDetails}>
          <ListItemIcon>
            <img src={ApplicationDetailsIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>show Application details</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleEditApplication}>
          <ListItemIcon>
            <img src={EditIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Edit Application</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteApplication}>
          <ListItemIcon>
            <img src={DeleteIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Delete Application</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCancelApplication}>
          <ListItemIcon>
            <img src={CancelIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Cancel Application</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSubmenuClick}>
          <ListItemIcon>
            <img src={SechduleTestIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Sechdule Test</ListItemText>
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
        </MenuItem>
        {/* sub menu */}
        <Menu
          anchorEl={submenuAnchorEl}
          open={Boolean(submenuAnchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleScheduleVisionTest}>
            <ListItemIcon>
              <img src={VisionIMG} alt="person details" />
            </ListItemIcon>
            <ListItemText>Schedule Vision Test</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleScheduleWrittenTest}>
            <ListItemIcon>
              <img src={WrittenIMG} alt="person details" />
            </ListItemIcon>
            <ListItemText>Schedule Written Test</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleScheduleStreetTest}>
            <ListItemIcon>
              <img src={StreetIMG} alt="person details" />
            </ListItemIcon>
            <ListItemText>Schedule Street Test</ListItemText>
          </MenuItem>
        </Menu>
        <Divider />
        <MenuItem onClick={handleIssueLicenseFirstTime}>
          <ListItemIcon>
            <img src={IssueLicenseIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>issue Driving License(First time)</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleShowLicense}>
          <ListItemIcon>
            <img src={ShowLicenseIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Show License</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleShowPersonHistory}>
          <ListItemIcon>
            <img src={ShowPersonLicenseHistoryIMG} alt="person details" />
          </ListItemIcon>
          <ListItemText>Show Person License History</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LocalDriverLicenseApplicationsContextMenu;
