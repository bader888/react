import React, {
  forwardRef,
  useState,
  useImperativeHandle, 
} from "react";
import "./PersonDetails.css";
import { Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";
import MaleIcon from "@mui/icons-material/Male";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import LocationOn from "@mui/icons-material/LocationOn";
import Header from "../header/Header";
import { person, clsPerson } from "../../Module/clsPerson";
import Swal from "sweetalert2";

const PersonCard = forwardRef((PersonID, ref) => {
  const [Person, setPerson] = useState(person); 
  
  useImperativeHandle(ref, () => ({
    async FoundPerson(id) {
      resetDefultValue();
      try {
        const resp = await clsPerson.findPerson(id);
        if (resp !== null) {
          setPerson(resp.PersonInfo);
        } else {
          Swal.fire({
            title: "Oppps!",
            text: "Person Not Found",
            icon: "error",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  }));

  function resetDefultValue() {
    setPerson({
      PersonID: "[????]",
      FirstName: "[????]",
      SecondName: "[????]",
      ThirdName: "[????]",
      Email: "[????]",
      Phone: "[????]",
      NationalityCountryID: "[????]",
      NationalNo: "[????]",
      FullName: "[????]",
      DateOfBirth: "[????]",
      Address: "[????]",
      Gendor: "[????]",
    });
  }

  return (
    <div>
      <Container maxWidth="md">
        <div class="UserDetails">
          <Header title={"Person Details"} /> 
          <div>
            <span>
              <NumbersIcon />
            </span>
            <span>Person ID: </span>
            <span id="lblPersonID">{Person.PersonID}</span>
          </div>

          <div>
            <span>
              <PersonIcon />
            </span>
            <span>Full Name: </span>
            <span id="lblFullName">
              {Person.FirstName +
                " " +
                Person.SecondName +
                " " +
                Person.ThirdName}
            </span>
          </div>

          <div>
            <span>
              <NumbersIcon />{" "}
            </span>
            <span>National No.: </span>
            <span id="lblNationalNO">{Person.NationalNo}</span>
          </div>

          <div>
            <span>
              <Email />
            </span>
            <span>Email: </span>
            <span id="lblEmail">{Person.Email ?? "UnKnow"}</span>
          </div>

          <div>
            <span>
              <ContactPhone />
            </span>
            <span>Phone: </span>
            <span id="lblPhone">{Person.Phone}</span>
          </div>

          <div>
            <span>
              <MaleIcon />
            </span>
            <span>Gender: </span>
            <span id="lblGender">
              {Person.Gendor == "0" ? "Female" : "Male"}
            </span>
          </div>

          <div>
            <span>
              <LocationOn />
            </span>
            <span>Address: </span>
            <span id="lblAddress">{Person.Address}</span>
          </div>

          <div>
            <span>
              <CalendarMonthIcon />
            </span>
            <span>Date Of Birth: </span>
            <span id="lblDateOfBirth">{Person.DateOfBirth}</span>
          </div>

          <div>
            <span>
              <PublicIcon />
            </span>
            <span>Country: </span>
            <span id="lblCountry">{Person.NationalityCountryID}</span>
          </div>
        </div>
      </Container>
      <section></section>
    </div>
  );
});

export default PersonCard;
