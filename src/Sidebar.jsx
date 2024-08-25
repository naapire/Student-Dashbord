import React from 'react';
import Teesa from './assets/teesa.svg'
import Search from "./assets/search.svg";
import Farm from "./assets/farm.svg";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillPeopleFill,
  BsPersonLinesFill,
  BsFillPersonBadgeFill,
  BsFillBriefcaseFill,
  BsBuilding,
  BsFillJournalBookmarkFill,
  BsFillCalendarCheckFill,
  BsFillClockFill,
  BsGraphUp,
  BsFillGearFill,
  BsFillEnvelopeFill,
  BsPersonPlusFill,
  BsShieldFill,
  BsFillBookFill,
  BsBellFill
} from 'react-icons/bs';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <img src={Teesa} alt="Teesa Logo" className='teesa-logo' />
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div>Change Institution Here</div>
          <div className='input-wrapper'>
            <img src={Farm} alt="Farm Icon" className='input-icon' />
            <input className='search-school' type="text" placeholder="Adetola's International" />
            <div className='search-button'>
              <img src={Search} alt="Search Icon" className='search-icon' />
            </div>
          </div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillPeopleFill className='icon' /> Student
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPersonLinesFill className='icon' /> Teachers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillPersonBadgeFill className='icon' /> Principal
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillBriefcaseFill className='icon' /> Clerks
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBuilding className='icon' /> Branches
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillJournalBookmarkFill className='icon' /> Classes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillCalendarCheckFill className='icon' /> Subject
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillClockFill className='icon' /> Academic Timetable
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGraphUp className='icon' /> Session
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGraphUp className='icon' /> Grade Rubric
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Manager Roles
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillEnvelopeFill className='icon' /> Communication
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPersonPlusFill className='icon' /> Transfer Students
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsShieldFill className='icon' /> Admin Users
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillBookFill className='icon' /> Library
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBellFill className='icon' /> Notifications
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
