import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { UserData } from "../../Redux/UserSlice/UserSlice";
import swal from "sweetalert";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const { email, password } = form;
      const user = storedUsers.find((user) => user.email === email);

      if (!user || user.password !== password) {
        swal({
          title: "Invalid Credentials",
          text: "Please check your email and password and try again.",
          icon: "error",
        });
      } else {
        dispatch(
          UserData({
            _id: user._id,
            email: user.email,
            name: user.name,
          })
        );

        swal({
          title: "Login Successful",
          text: `Login successful, welcome ${user.name}!`,
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="logindiv">
      <h2>Login</h2>

      <form className="loginform" action="" onSubmit={handleSubmit}>
        <label htmlFor="loginemail">Email:</label>
        <br />
        <input
          required
          id="loginemail"
          name="email"
          type="email"
          autoFocus
          placeholder="Enter Your Email"
          onInput={handleChange}
        />
        <br />
        <label htmlFor="loginpassword">Password:</label>
        <br />
        <input
          required
          id="loginpassword"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          onInput={handleChange}
        />
        <br />
        <input type="submit" className="submit" id="submit" value="Login" />
      </form>
      <p>
        New User! <Link to="/signup">SignUp here</Link>
      </p>
    </div>
  );
};
