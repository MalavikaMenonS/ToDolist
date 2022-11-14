import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SigninForm.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
// import {context} from '../../App'

function SigninForm() {
  //    const{setAuthorize}=useContext(context);

  const navigate = useNavigate();
  const [UserName, getUserName] = useState("");
  const [Password, setPassword] = useState("");

  const submitForm = () => {
    if (UserName === "Carestack" && Password === "abc@123") {
      localStorage.setItem("authorize", true);
      navigate(`/user/${UserName}`);
    } else navigate("/*");
  };

  return (
    <>
      <div className="signin">
        <h1 className="heading">SIGN IN</h1>
        <div className="name">
          <TextField
            onChange={(e) => getUserName(e.target.value)}
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
          />
        </div>
        <div className="pwd">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Enter password"
            variant="outlined"
          />
        </div>
        <br />
        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default SigninForm;
