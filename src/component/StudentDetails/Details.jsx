import React, { useState } from "react";
import '../StudentDetails/studentdetails.css';
import White from "../../assets/white.svg";
import Violet from "../../assets/group.svg";
import Group from '../../assets/violet.svg';
import Search from "../../assets/search.svg";
import Misc from "../../assets/Misc.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Sidebar from "../../Sidebar";
import PageHeader from "../page2/PageHeader";
import SubjectCurriculum from "../SubjectCurriculum/SubjectCurriculum";

function Detail() {
  const [currentPage, setCurrentPage] = useState('detail'); // State to manage current page

  // Function to handle card click
  const handleCardClick = () => {
    setCurrentPage('subjectCurriculum');
  };

  if (currentPage === 'subjectCurriculum') {
    return <SubjectCurriculum />;
  }

  return (
    <div className="grid-container">
      <Sidebar />
      <PageHeader  pageTitle="Student Details" />
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
                {[...Array(8)].map((_, index) => (
                  <div className="car" key={index} onClick={handleCardClick}>
                    <div className="card-inner">
                      <div className="green bray">
                        <div>
                          <img src={Misc} alt="Not" className="icon" /> Week {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
             </div> 
            <div className="next-container">
              <button className="arrows">
                <BsArrowLeft className="icon" /> Previous
              </button>
              <div className="num-buttons">
                {[...Array(10)].map((_, i) => (
                  <button className="buttons" key={i + 1}>{i + 1}</button>
                ))}
              </div>
              <button className="arrows">
                Next <BsArrowRight className="icon" />
              </button>
            </div>
          </div>
          <div/>
        </div>
      </main>
    </div>
  );
}

export default Detail;
