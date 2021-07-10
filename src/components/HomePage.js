import React from "react";
import RecruitersPage from "./RecruitersPage";
import portalImage from "../images/portalhomepage.jpg";
import { Link } from "react-router-dom";
import "../CSS/HomePage.css";
function HomePage() {
  return (
    <div className="home">
      <img src={portalImage} alt=""></img>
      <div className="cover">
        <h4>Jobclues</h4>
        <p className="text">Find your dream job here</p>
        <div className="buttonContainer">
          <Link to="/recruiterspage">
            <button>Post a job</button>
          </Link>
          <Link to="/applications">
            <button>Search for jobs</button>
          </Link>
        </div>
      </div>

      <div className="options">
        <div className="iconContainer">
          <i className="ui  computer icon"></i>
          <p>IT Industry</p>
        </div>
        <div className="iconContainer">
          <i className="ui  book icon"></i>
          <p>Educational</p>
        </div>
        <div className="iconContainer">
          <i className="ui  suitcase icon"></i>
          <p>Management</p>
        </div>
        <div className="iconContainer">
          <i className="ui chart line icon"></i>
          <p>Accounting and Finance</p>
        </div>
        <div className="iconContainer">
          <i className="ui building icon"></i>
          <p>Civil Engineers</p>
        </div>
        <div className="iconContainer">
          <i className="ui gavel icon"></i>
          <p>Lawyers</p>
        </div>
      </div>
      <div className="para">Start finding your dream job now</div>
    </div>
  );
}
export default HomePage;
