import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./styles.css";
import Sidebar from "../../Sidebar";
import White from "../../assets/white.svg";
import Violet from "../../assets/group.svg";
import Search from "../../assets/search.svg";
import Book from "../../assets/book.svg";
import PageHeader from "./PageHeader";
import Detail from "../StudentDetails/Details";
import EditStudent from "../Logins/Editstudent";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const pieData = [
  { name: 'A', value: 125, color: 'rgba(59, 175, 168, 1)' },
  { name: 'C', value: 25, color: 'rgba(248, 239, 226, 1)' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key={0} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key={1} d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

function Page2() {
  const [currentPage, setCurrentPage] = useState('page2'); // State to manage current page
  const [minorView, setMinorView] = useState('default'); // State to manage minor container view

  const options = {
    series: [{
      name: 'Online',
      data: [44, 55, 41, 67, 22, 43],
      color: 'rgba(22, 45, 58, 1)' 
    }, {
      name: 'Offline',
      data: [13, 23, 20, 8, 13, 27],
      color: 'rgba(248, 239, 226, 1)' 
    }],
    chart: {
      type: 'bar',
      height: 350,
      width: 800, // Extend the width of the graph
      stacked: true,
      toolbar: {
        show: false // Disable toolbar
      },
      zoom: {
        enabled: false // Disable zoom
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: 'end', // 'around', 'end'
        borderRadiusWhenStacked: 'last', // 'all', 'last'
        dataLabels: {
          total: {
            enabled: false 
          }
        },
        columnWidth: '70%'
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Updated categories
      tickPlacement: 'between',
      labels: {
        style: {
          padding: 10 // Add padding to each category
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) =>` ${value}hr` // Updated labels
      },
      tickAmount: 4, // Show only 0hr, 20hr, 40hr, and 80hr
      min: 0,
      max: 80
    },
    legend: {
      position: 'top', // Display legend at the top of the graph
      horizontalAlign: 'center',
      offsetY: 0
    },
    fill: {
      opacity: 1
    }
  };

  // Function to handle card click
  const handleCardClick = (page) => {
    setCurrentPage(page);
  };

  // Function to handle view button click in minor container
  const handleViewClick = () => {
    setMinorView('editStudent');
  };

  // Function to handle close button click in EditStudent
  const handleCloseClick = () => {
    setMinorView('default');
  };

  if (currentPage === 'detail') {
    return <Detail />;
  }

  if (minorView === 'editStudent') {
    return (
      <div className="overlay">
        <EditStudent setCurrentPage={setCurrentPage} handleCloseClick={handleCloseClick} />
      </div>
    );
  }

  return (
    <div className='grid-container'>
      <Sidebar />
      <PageHeader pageTitle="Students" /> 
      <main className="main-container page relative-container">
        <div className="search-container">
          <div className="minor-container">
            {minorView === 'default' ? (
              <>
                <div className="icon-holder">
                  <div className="icon-wrapper">
                    <img src={White} alt="Not" className="icon" />
                    <div className="text-container">
                      <div className="text-title">John Doe</div>
                      <div className="text-value">Primary 1A</div>
                    </div>
                  </div>
                  <div className="view" onClick={handleViewClick}>View Profile</div>
                </div>
                <div className="score-container">
                  <div className="attendan-container ">
                    <div className="label">Class Average Attendance</div>
                    <div className="value">88%</div>
                  </div>
                  <div className="attendanc-container ">
                    <div className="label">Average Score</div>
                    <div className="value">91%</div>
                  </div>
                  <div className="attendance-container">
                    <div className="label">Total Subjects</div>
                    <div className="value">12</div>
                  </div>
                </div>
                <div className="main-cad">
                  <div className="main">
                    <div className="card">
                      <ReactApexChart options={options} series={options.series} type="bar" height={250} />
                    </div>
                  </div>
                  <div className="card">
                    <PieChart width={400} height={250}>
                      <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={pieData}
                        cx={cx}
                        cy={cy}
                        innerRadius={iR}
                        outerRadius={oR}
                        fill="linear-gradient(180deg, #FF9053 0%, rgba(255, 144, 83, 0) 100%)"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      {needle(value, pieData, cx, cy, iR, oR, '#d0d000')}
                    </PieChart>
                  </div>
                </div>
                <div className="main-card">
                  <div className="minor-search">
                    <div className="student-list">Subject Progress</div>
                    <div className="student-input">
                      <input type="text" placeholder="Search" />
                      <img src={Search} alt="Not" className="icon" />
                    </div>
                  </div>
                  <div className="main-cards">
                    {['Mathematics', 'English', 'Biology', 'Science', 'Civic', 'CRK', 'IRK', 'Technology', 'Commerce', 'Further Mathematics'].map((subject, index) => (
                      <div className="card" key={subject} onClick={() => handleCardClick('detail')}>
                        <div className="card-inner">
                          <img src={Violet} alt="Not" className="card_icon" />
                          <h6>{subject}</h6>
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
                  <button className="arrows previous" >
                    <BsArrowLeft className="icon" /> Previous
                  </button>
                  <div className="num-buttons">
                    {[...Array(10)].map((_, i) => (
                      <button className="buttons" key={i + 1}>{i + 1}</button>
                    ))}
                  </div>
                  <button className="arrows next">
                    Next <BsArrowRight className="icon" />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page2;
