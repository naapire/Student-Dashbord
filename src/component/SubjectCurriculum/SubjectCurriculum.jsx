// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './subjectCurriculum.css';
import Violet from "../../assets/group.svg";
import Group from '../../assets/violet.svg';
import Search from "../../assets/search.svg";
import Book from "../../assets/book.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import PageHeader from "../page2/PageHeader";
import Sidebar from "../../Sidebar";
import StudentCurriculum from "../StudentCurriculum/StudentCurriculum";

function SubjectCurriculum() {
  const [currentPage, setCurrentPage] = useState('subjectCurriculum');

  const handleCardClick = () => {
    setCurrentPage('studentCurriculum');
  };

  if (currentPage === 'studentCurriculum') {
    return <StudentCurriculum />;
  }

  return (
    <div className="grid-container">
      <Sidebar />
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
                {[...Array(4)].map((_, index) => (
                  <div className="card" key={index} onClick={handleCardClick}>
                    <div className="card-inner">
                      <img src={Violet} alt="Not" className="card_icon" />
                      <h3>Period {index + 1}</h3>
                      <div className="green">
                        <div>
                          <img src={Book} alt="Not" className="icon" />-
                        </div>
                        <div>|</div>
                        <div>
                          <img src={Book} alt="Not" className="icon" />
                          90%
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
        </div>
      </main>
    </div>
  );
}

export default SubjectCurriculum;
