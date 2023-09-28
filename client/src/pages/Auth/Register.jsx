import { Box, styled, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import CustomButton from "/src/components/Custom/CustomButton";

const Register = () => {

  /* STYLE */
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));


  /* FUNCTION */
  // const [inputs, setInputs] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  // const [err, setError] = useState(null);

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/api/auth/register", inputs);
  //     navigate("/login");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  return (
    <CustomBox>
      <FormBox>
      <h1>Register</h1>
        <input
          required
          type="text"
          placeholder="First Name"
          name="firstName"
          // onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Last Name"
          name="lastName"
          // onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Confirm Password"
          name="password"
          // onChange={handleChange}
        />
        {/* <button onClick={handleSubmit}>Register</button> */}
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
          heroBtn={true}
        />
        {/* {err && <p>{err}</p>} */}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </FormBox>
    </CustomBox>
  )
}

export default Register