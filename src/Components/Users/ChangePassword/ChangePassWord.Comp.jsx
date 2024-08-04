import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ChangePassword.comp.css";
import "../../../Global/Global.css";
import ActionsChangePassword from "./ActionsChangePassword.comp";
import { Password } from "@mui/icons-material";
import { clsUser, UserData } from "../../../Module/clsUsers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const data = [
  {
    lable: "current password",
    name: "oldPaassword", 
  },
  {
    lable: "new password",
    name: "NewPassword", 
  },
  {
    lable: "confirm password",
    name: "ConfirmPassword", 
  },
];
const ChangePassWord = ({ HangleOnChange, UserID }) => {
  const [user, setUser] = useState(UserData);
  const redirect = useNavigate();
  const [userPassword, setUserPassword] = useState({
    oldPaassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  }); 

  useEffect(() => {
    clsUser.findUser(UserID).then((data) => {
      setUser(data);
    });
  }, []);

  const validatePassword = () => {
    let hasError = false;

    if (user.Password.trim() !== userPassword.oldPaassword.trim()) {
      Swal.fire({
        title: "faild to change password",
        text: "wrong password",
        icon: "error",
      });
      hasError = true;
    }

    if (
      userPassword.NewPassword.trim() !== userPassword.ConfirmPassword.trim()
    ) {
      Swal.fire({
        title: "faild to change password",
        text: "the new password not match the confirm password",
        icon: "error",
      });
      hasError = true;
    }

    return !hasError; // Return true if there's no error
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserPassword({ ...userPassword, [name]: value });
   
  };

  const handleOnConfirm = async () => {
    if (validatePassword()) {
      console.log("the password change successfully");
      const resp = await clsUser.ChangePassword({
        UserID: user.UserID,
        NewPassword: userPassword.NewPassword,
      });

      Swal.fire({
        title: resp.Success ? "success" : "faild",
        text: resp.Data.Message,
        icon: resp.Success ? "success" : "error",
      });
    }
  };

  const handleOnCancel = () => {
    redirect("/Users")
  };

  return (
    <div>
      <Container className="changePasswordContainer shadow">
        <section>
          {data.map((element) => (
            <TextField
              label={element.lable}
              name={element.name}
              onChange={handleOnChange}
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Password />
                  </InputAdornment>
                ),
              }}
            />
          ))}
          <ActionsChangePassword
            HandleOnCancel={handleOnCancel}
            HandleOnConfirm={handleOnConfirm}
          />
        </section>
      </Container>
    </div>
  );
};

export default ChangePassWord;
