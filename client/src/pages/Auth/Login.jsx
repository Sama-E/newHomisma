import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";

import CustomButton from "/src/components/Custom/CustomButton";
// import { AuthContext } from "/src/context/AuthContext";

const Login = () => {

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
  //   email: "",
  //   password: "",
  // });
  // const [err, setError] = useState(null);

  // const navigate = useNavigate();

  // const { login } = useContext(AuthContext);


  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(inputs)
      
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  return (
    <CustomBox>
      <FormBox>
        <h1>Login</h1>
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
        {/* <button onClick={handleSubmit}>Login</button> */}
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Login"
          heroBtn={true}
        />
        {/* {err && <p>{err}</p>} */}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </FormBox>
    </CustomBox>
  )
}

export default Login