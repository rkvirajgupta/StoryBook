import "./product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StorydetailsData } from "../../Redux/StorydetailsSlice/StorydetailsSlice";

export const Stories = () => {
  const stories = useSelector((state) => state.story.stories);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleStory = () => {
    if (user.name === undefined) {
      alert("you need to login first to create story");
      navigate("/login");
    }
    if (user.name !== undefined) {
      navigate("/createstory");
    }
  };
  const handleDetailClick = (e) => {
    dispatch(StorydetailsData(e));
    navigate("/detailstory");
  };

  return (
    <>
      <p className="verse">
        <span>!!!</span> YOUR STORIES <span>!!!</span>
      </p>
      {user.name === undefined ? (
        ""
      ) : (
        <button className="btn5" onClick={() => handleStory()}>
          Create Storie's
        </button>
      )}
      <div className="main">
        {stories.map((ele) => {
          return (
            <div className="main1" key={ele._id}>
              <h3>{ele.title}</h3>

              <div className="main1div1">
                <p>
                  Visitor's visted this story{" "}
                  <span>{Math.floor(Math.random() * 80 + 50)}</span>
                </p>
                <p>
                  Rated by Viewer's{" "}
                  <span>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</span>
                </p>
                <p>
                  {" "}
                  Story related to <span>{ele.type}</span>
                </p>
              </div>
              <button className="btn3" onClick={() => handleDetailClick(ele)}>
                Detailed view
              </button>
              <p
                style={{
                  fontSize: "small",
                  textAlign: "right",
                  marginRight: "40px",
                }}
              >
                Written by:{" "}
                <span style={{ color: "rgb(1,88,255)" }}>
                  {ele.userId.name}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <p className="testimonials">What our customers say about us!</p>
      <div className="mainpro1">
        <div>
          <h5>★★★★★</h5>
          <p>
            These guys seemed too good to be true… believe it! They are
            exceptional. What an easy, joyful experience. I don’t know how we
            were so lucky to have found StoryBook!
          </p>
          <span>Mike.E</span>
          <p style={{ color: "rgb(1,88,255)" }}>Paint Manufacturer</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            StoryBook has smart people and offers outstanding resources for
            building and managing websites. Highly recommended.These guys seemed
            too good to be true working for the new comers.
          </p>
          <span>Charles E.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Environmental Consultant</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            StoryBook was very helpful with our local Rotary website! They
            assisted us in redesigning our website and adding user-friendly
            functions. We get compliments all the time on our site is awosome!
          </p>
          <span>Meredith P.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Real Estate Agent</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            StoryBook is my online solution for me. They have created a website
            with great visual interest and an easy to navigate format. They are
            innovators in connecting with my clients in meaningful and
            interesting ways!{" "}
          </p>
          <span>Kimberly L.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Local Rotary Chapter</p>
        </div>
      </div>
    </>
  );
};
