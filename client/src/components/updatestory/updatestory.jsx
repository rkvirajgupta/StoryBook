import "./updatestory.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Updater } from "../../Redux/FlagSlice/FlagSlice";
import swal from "sweetalert";
import { StorydetailsData } from "../../Redux/StorydetailsSlice/StorydetailsSlice";
import { updateStory } from "../../Redux/StorySlice/StorySlice";
export const Updatestory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const flag = useSelector((state) => state.flag);
  const story = useSelector((state) => state.storydetails.storydetails);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    _id: story._id,
    title: story.title,
    about: story.about,
    type: story.type,
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
      alert("you need to login first to update story");
      navigate("/login");
    } else {
      dispatch(updateStory(form));
      dispatch(StorydetailsData(form));
      swal({
        title: "Story Updated",
        text: `Story Updated with author ${user.name}`,
        icon: "success",
        // dangerMode: true,
      });
      dispatch(Updater(false));
    }
  };

  const handleEdit = () => {
    dispatch(Updater(false));
  };

  return (
    <div
      style={flag.updater === true ? { display: "block" } : { display: "none" }}
    >
      <h1>Update your story here</h1>
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
        />
        <br />
        <input id="b1" type="submit" value="Update Story" />
        <button id="bts" onClick={handleEdit}>
          Back to Story
        </button>
      </form>
    </div>
  );
};
