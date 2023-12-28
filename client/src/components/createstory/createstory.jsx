import "./createstory.css";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStory } from "../../Redux/StorySlice/StorySlice";
import { v4 as uuidv4 } from "uuid";

export const Createstory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    _id: uuidv4(),
    title: "",
    about: "",
    type: "",
    userId: user,
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
    if (user.name === undefined) {
      swal({
        title: "Login First",
        text: "you need to login first to create story",
        icon: "info",
        // dangerMode: true,
      });
      navigate("/login");
    } else {
      dispatch(addStory(form));
      swal({
        title: "Story Posted",
        text: `Story Posted with author ${user.name}`,
        icon: "success",
        // dangerMode: true,
      });
      setForm({
        _id: uuidv4(),
        title: "",
        about: "",
        type: "",
        userId: user,
      });
      navigate("/stories");
    }
  };
  return (
    <>
      <h1>Want be author write your story here</h1>
      <div>
        <form className="createstoryform" action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title of your story:</label>
          <br />
          <input
            required
            id="title"
            name="title"
            type="text"
            value={form.title}
            autoFocus
            placeholder="Enter Your Title Here"
            onInput={handleChange}
            maxLength={15}
          />
          <br />
          <label htmlFor="about">Description of your story:</label>
          <br />
          <input
            required
            id="about"
            name="about"
            type="text"
            value={form.about}
            autoFocus
            placeholder="Enter  Description Here"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="type">Type of your story</label>
          <br />
          <input
            required
            id="type"
            name="type"
            autoFocus
            type="text"
            value={form.type}
            placeholder="Enter The Type of Story Here"
            onInput={handleChange}
            maxLength={10}
          />
          <br />
          <input id="b1" type="submit" value="Post Story" />
        </form>
      </div>
    </>
  );
};
