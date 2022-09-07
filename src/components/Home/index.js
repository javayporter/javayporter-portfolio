import "./index.scss";
import jphoto from "../assets/IMG_8750-removebg-preview.png";
import "/Users/javayporter/javayporter-portfolio/src/components/Contact/index.scss";

const Home = () => {
  const selfie = "public/assets/IMG_8750-removebg-preview.png";
  const image = "public/assets/IMG_8750-removebg-preview.png";
  return (
    <div>
      <div className="grid-container side-container">
        <div className="grid-child">
          <h1>Javay Porter.</h1>
          <div>Social Media links</div>
          <button className="form-submit-button">Learn More or Contact</button>
        </div>
        <div className="grid-child img-container">
          <img src={jphoto} alt="selfie" />
        </div>
        <div className="grid-child">
          <h1>Full Stack Web Developer</h1>
          <h1>Test Engineer</h1>
        </div>
      </div>
      <div className="languages">Programming languages</div>
    </div>
  );
};

export default Home;
