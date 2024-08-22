import {
  Container,
  TextField,
  Button,
  Box,
  Divider,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Autocomplete,
} from "@mui/material";
import "./CreatePerson.css";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import Person from "@mui/icons-material/Person";
import Numbers from "@mui/icons-material/Numbers";
import Email from "@mui/icons-material/Email";
import LocationCity from "@mui/icons-material/LocationCity";
import ContactPhone from "@mui/icons-material/ContactPhone";
import ImageAspectRatio from "@mui/icons-material/ImageAspectRatio";
import MaleImg from "../../../Resources/Male 512.png";
import FemaleImg from "../../../Resources/Female 512.png";
import BackIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import SaveIcon from "@mui/icons-material/Save";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DateToString } from "../../../Formate/DataFormate";
import { clsCountry } from "../../../Module/clsCountry";
import { clsPerson, person } from "../../../Module/clsPerson";
import clsNavigator from "../../../Urls/Navgator";

const CreatePerson = ({ Mode }) => {
  const [options, setOptions] = useState([]);
  const [PageTitle, setPageTitle] = useState("Add New Person");
  const [mode, setMode] = useState("");
  const { PersonID } = useParams();
  const [PersonData, setPersonData] = useState({ person });
  const redirect = useNavigate();

  useEffect(() => {
    setMode(Mode);

    clsCountry.GetAllCountry().then((Countries) => {
      setOptions(Countries);
    });

    //if update mode get the person data
    if (mode === "Update") {
      setPageTitle("Update Person");
      clsPerson.findPerson(PersonID).then((data) => {
        setPersonData(data.PersonInfo);
      });
    }
    setPersonData({ ...PersonData, LastName: " " });
  }, [mode, PersonID, Mode]);

  const handleCountryChage = async (event, newValue) => {
    setPersonData((prevPersonData) => ({
      ...prevPersonData,
      NationalityCountryID: newValue.ID, // Assuming `id` is the key you want from the option
    }));
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setPersonData({ ...PersonData, [name]: value });
  };

  const hanleSave = async (e) => {
    e.preventDefault();

    console.log(PersonData);
    let response = null;
    if (mode === "Create") {
      response = await clsPerson.createPerson(PersonData);
      console.log(response);
    } else {
      response = await clsPerson.Update(PersonData, PersonID);
      console.log(response);
    }

    Swal.fire({
      title: response.Success ? "Success" : "Error!",
      text: response.Message,
      icon: response.Success ? "success" : "error",
    });
  };

  const handleBack = () => {
    redirect("/" + clsNavigator.PeopleNavgate.ListPeoplePage);
  };

  return (
    <div>
      <Container
        maxWidth="md"
        className="Container"
        style={{ padding: "20px" }}
      >
        <h1 style={{ textAlign: "center" }}>{PageTitle}</h1>
        {/* full name national no */}
        <Box component={"section"} className="box">
          <TextField
            id="nationalNumber"
            value={PersonData.NationalNo}
            name="NationalNo"
            onChange={handleChange}
            style={{ flex: "3" }}
            label="National No."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Numbers />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="FirstName"
            value={PersonData.FirstName}
            name="FirstName"
            onChange={handleChange}
            label="First"
            style={{ flex: "3" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="SecondName"
            value={PersonData.SecondName}
            name="SecondName"
            onChange={handleChange}
            label="Second"
            style={{ flex: "3" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="ThirdName"
            value={PersonData.ThirdName}
            name="ThirdName"
            onChange={handleChange}
            label="Third"
            style={{ flex: "3" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Divider style={{ margin: "10px 0" }} />
        {/* email phone number address */}

        <Box component={"section"} className="box">
          <TextField
            type="email"
            value={PersonData.Email}
            name="Email"
            onChange={handleChange}
            label="Email"
            style={{ flex: "3" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            style={{ flex: "3" }}
            value={PersonData.Phone}
            name="Phone"
            onChange={handleChange}
            id="PhoneNumber"
            label="Phone Number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ContactPhone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="Address"
            value={PersonData.Address}
            name="Address"
            onChange={handleChange}
            style={{ flex: "3" }}
            label="Address"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Divider style={{ margin: "10px 0" }} />

        {/* egender and country*/}
        <Box component={"section"} className="box">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup row onChange={handleChange}>
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Female"
                name="Gendor"
                checked={PersonData.Gendor === "0"}
              />
              <FormControlLabel
                value="1"
                checked={PersonData.Gendor === "1"}
                name="Gendor"
                control={<Radio />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            id="combo-box-demo"
            style={{ flex: "3" }}
            options={options}
            getOptionLabel={(option) => option.CountryName}
            sx={{ width: 300 }}
            onChange={handleCountryChage}
            renderInput={(params) => <TextField {...params} label="Iraq" />}
          />

          <TextField
            value={DateToString(PersonData.DateOfBirth)}
            name="DateOfBirth"
            onChange={handleChange}
            id="birthDate"
            style={{ flex: "3" }}
            type="date"
          />
        </Box>

        <Divider style={{ margin: "10px 0" }} />
        {/* image*/}

        {/* images */}
        <Box component={"section"} className="box">
          <TextField
            required
            id="Image"
            name="ImagePath"
            onChange={handleChange}
            style={{ flex: "3" }}
            type="file"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ImageAspectRatio />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <div>
          <img
            src={PersonData.Gendor === "1" ? MaleImg : FemaleImg}
            alt=""
            className="img"
          />
        </div>
        {/* buttons save back */}
        <Divider style={{ margin: "10px 0" }} />
        <Box component={"section"} className="box">
          <Button
            variant="outlined"
            onClick={handleBack}
            startIcon={<BackIcon />}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            color="success"
            onClick={hanleSave}
          >
            Save
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CreatePerson;
