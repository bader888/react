import React, {
  useState,
  useImperativeHandle,
  forwardRef, 
} from "react";
import "./UserCard.css";
import {
  Numbers,
  PermIdentity,
  Person,
  QuestionMark,
} from "@mui/icons-material";
import { clsUser, UserData } from "../../../Module/clsUsers";
import Swal from "sweetalert2"; 

const UserCard = forwardRef((UserID,ref) => {
  const [user, setUser] = useState({ UserData }); 

  useImperativeHandle(ref, () => ({
    async FoundUser(id) {
      resetDefultValue();
      try {
        const resp = await clsUser.findUser(id); 
        if (resp !== null) { 
          setUser(resp);
        } else {
          Swal.fire({
            title: "Oppps!",
            text: "User Not Found",
            icon: "error",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  }));

  function resetDefultValue() {
    setUser({
      UserID: "[????]",
      PersonID: "[????]",
      UserName: "[????]",
      Password: "[????]",
      IsActive: "[????]",
    });
  }

  return (
    <div>
      <section className="UserCard">
        <div className="CardHeader">
          <h2>User Details</h2>
        </div>

        <div className="userid">
          <span>User ID</span>
          <i>
            <Numbers />
          </i>
          <span id="lblUserID">{user.UserID}</span>
        </div>

        <div className="username">
          <span>User Name</span>
          <i>
            <Person />
          </i>
          <span id="lblUserName">{user.UserName}</span>
        </div>

        <div className="permistions">
          <span>permistions</span>
          <i>
            <PermIdentity />
          </i>
          <span id="lblpermistions">{user.Permisstions}</span>
        </div>

        <div className="isactive">
          <span>Is Active </span>
          <i>
            <QuestionMark />
          </i>
          <span id="lblisactive">{user.IsActive === true ? "Yes" : "No"}</span>
        </div>
      </section>

    </div>
  );
});

export default UserCard;
