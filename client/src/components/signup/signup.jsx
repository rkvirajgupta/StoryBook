import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";

import "./signup.css";
export const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    _id: uuidv4(),
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedForms = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailUnique = storedForms.every(
      (storedForm) => storedForm.email !== form.email
    );
    if (!isEmailUnique) {
      swal({
        title: "Error",
        text: "Email address must be unique. Please choose a different email.",
        icon: "error",
      });
      return;
    }
    const updatedForms = [...storedForms, form];
    localStorage.setItem("users", JSON.stringify(updatedForms));
    swal({
      title: "Signup Successful",
      text: "You are successfully registered!",
      icon: "success",
    });
    navigate("/login");
  };

  return (
    <div className="signupdiv">
      <h2>SignUp</h2>

      <form className="signupform" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          required
          id="name"
          name="name"
          type="text"
          autoFocus
          placeholder="Enter Your Name"
          onInput={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          onInput={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          required
          id="password"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          onInput={handleChange}
        />
        <br />
        <input id="submit" type="submit" value="Signup" />
      </form>
      <p>
        Already a User! <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};
