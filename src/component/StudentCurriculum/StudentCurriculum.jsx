import React from "react";
import '../StudentDetails/studentdetails.css';
import White from "../../assets/white.svg";
import Violet from "../../assets/group.svg";
import Group from '../../assets/violet.svg';
import Search from "../../assets/search.svg";
import Misc from "../../assets/Misc.svg";
import Sidebar from "../../Sidebar";
import PageHeader from "../page2/PageHeader";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function StudentCurriculum() {
  return (
   <div className="grid-container">
    <Sidebar/>
    <PageHeader  pageTitle="Student Subject Curriculum" />
    
    <main className="main-container relative-container none">
      <div className="search-container">
        <div className="minor-container">
          <div className="icon-holder">
            <div className="icon-wrapper">
              <img src={Group} alt="Not" className="icon" />
              <div className="text-container">
                <div className="text-title">John Doe</div>
                <div className="text-value">Primary 1A</div>
              </div>
            </div>
            {/* <div className="view">View Profile</div> */}
          </div>
          <div className="dent">Mathematics</div>
          <div className="score-container">
            <div className="attendan-container">
              <div className="label">Average Attendance</div>
              <div className="value">90%</div>
            </div>
            <div className="attendanc-container">
              <div className="label">Average Score</div>
              <div className="value">82%</div>
            </div>
          </div>

          <div className="main-card">
            <div className="minor-search">
              <div className="student-list">Subject Curriculum</div>
              <div className="student-input">
                <input type="text" placeholder="Search" />
                <img src={Search} alt="Not" className="icon" />
              </div>
            </div>
            <div className="main-cards">
              <div className="car">
                <div className="card-inner">
                  <div className="gren bray">
                    <div>
                      <img src={Misc} alt="Not" className="icon" /> Curriculum Doc
                    </div>
                  </div>
                </div>
              </div>
              <div className="car">
                <div className="card-inner">
                  <div className="gren bray">
                    <div>
                      <img src={Misc} alt="Not" className="icon" /> Lesson Note
                    </div>
                  </div>
                </div>
              </div>
              <div className="car">
                <div className="card-inner">
                  <div className="gren bray">
                    <div>
                      <img src={Misc} alt="Not" className="icon" /> Pop Quiz
                    </div>
                  </div>
                </div>
              </div>
              <div className="car">
                <div className="card-inner">
                  <div className="gren bray">
                    <div>
                      <img src={Misc} alt="Not" className="icon" /> Assignment
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="next-container">
              <button className="arrows">
                <BsArrowLeft className="icon" /> Previous
              </button>
              <div className="num-buttons">
                <button className="buttons">1</button>
                <button className="buttons">2</button>
                <button className="buttons">3</button>
                <button className="buttons">4</button>
                <button className="buttons">5</button>
                <button className="buttons">6</button>
                <button className="buttons">7</button>
                <button className="buttons">8</button>
                <button className="buttons">9</button>
                <button className="buttons">10</button>
              </div>
              <button className="arrows">
                Next <BsArrowRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div> 
  );
}

export default StudentCurriculum;
