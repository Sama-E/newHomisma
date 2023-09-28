import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "/src/context/AuthContext";

const Login = () => {
  return (
    <div className="auth">
    <form>
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
      <button>Login</button>
      {/* {err && <p>{err}</p>} */}
      <span>
        Don't you have an account? <Link to="/register">Register</Link>
      </span>
    </form>
  </div>
  )
}

export default Login