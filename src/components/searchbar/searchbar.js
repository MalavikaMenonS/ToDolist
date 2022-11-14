import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Addlist from "../Addtolist/Addlist";
import { useEffect, useState } from "react";
import "./searchbar.css";
import { useNavigate, useParams } from "react-router-dom";

function Searchbar() {
  const [Userinput, setUserInput] = useState("");
  const [Listelement, setListElement] = useState([]);
  const [disp, setdisp] = useState([]);
  // console.log(Userinput);
  const navigate = useNavigate();
  const params = useParams();
  const Logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  async function Addtolist() {
    console.log(Userinput);
    // setListElement(Listelement.concat(Userinput));
    const response = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: Userinput }),
    });
    // const result = await response.json();
    fetchData();
  }
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/list", {
      headers: { accept: "application/json" },
    });
    const result = await response.json();
    console.log(result.data);
    setdisp(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (params.userId !== "Carestack") {
      navigate(`/${params.userId}`);
    }
  }, []);
  return (
    <div className="form">
      <Button variant="outlined" onClick={Logout}>
        Logout
      </Button>

      <div className="bar">
        <TextField
          id="name"
          label="Add new item"
          value={Userinput}
          onChange={(e) => setUserInput(e.target.value)}
          variant="outlined"
        />

        <br />
      </div>
      <div className="buton">
        <Button variant="outlined" onClick={Addtolist}>
          + ADD
        </Button>
      </div>

      <Addlist
        fetchData={fetchData}
        disp={disp}
        list={Listelement}
        setList={setListElement}
      />
    </div>
  );
}

export default Searchbar;
