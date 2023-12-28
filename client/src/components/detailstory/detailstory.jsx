import "./detailstory.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Updatestory } from "../updatestory/updatestory";
import { Updater } from "../../Redux/FlagSlice/FlagSlice";
import swal from "sweetalert";
import { deleteStory } from "../../Redux/StorySlice/StorySlice";

export const DetailStory = () => {
  const userData = useSelector((state) => state.user.user);
  const updater = useSelector((state) => state.flag.updater);
  const story = useSelector((state) => state.storydetails.storydetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(Updater(!updater));
  };

  const handleDelete = () => {
    dispatch(deleteStory(story._id))
    swal({
      title: "Story Deleted",
      text: `Story Deleted with author ${userData.name}`,
      icon: "warning",
      dangerMode: true,
    });
    navigate("/stories");
  };

  useEffect(() => {
    return () => {
      dispatch(Updater(false));
    }
  },[])

  useEffect(() => {
    dispatch(Updater(false));
  },[userData])

  return (
    <>
      {!updater && <div className="dsr0">
        <div>
          <h2 className="sr1">{story.title}</h2>
          <div className="dsr" style={{ display: "flex" }}>
            <div className="dsr1">
              <p>
                Visitor's visted this story{" "}
                <span>{Math.floor(Math.random() * 80 + 50)}</span>
              </p>
              <p>
                Rated by Viewer's{" "}
                <span>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</span>
              </p>
              <p>
                Story related to <span>{story.type}</span>
              </p>
            </div>
            <div className="dsr2">"{story.about}".</div>
          </div>

          <i className="dsr3">
            {" "}
            Written by: <span> {story?.userId?.name}</span>
          </i>
        </div>
        {userData.email === story?.userId?.email ? (
          <div>
            <button className="btn7" onClick={() => handleEdit()}>
              {updater === false ? "Edit Story" : "Stay on Story"}
            </button>
            <button className="btn8" onClick={() => handleDelete()}>
              Delete Story
            </button>
          </div>
        ) : (
          ""
        )}
      </div>}
      {userData.email === story?.userId?.email ? (
        <div>{updater && <Updatestory />}</div>
      ) : (
        ""
      )}
    </>
  );
};
