import React from 'react';
import Notif from './assets/note.svg';
import Notif1 from './assets/notif.svg';
import Arrowdown from './assets/arrow-down.svg';
import Image from './assets/Image.svg';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='header-top flex justify-between items-center p-4 bg-gray-100'>
        <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar} />
        </div>
        <div className='header-left flex items-center'>
          <BsSearch className='icon mr-2' />
          <div>Find anything from here easier</div>
        </div>
        <div className='header-right flex items-center'>
          <div><img src={Notif} alt="Notification Icon" className='icon mr-2' /></div>
          <div><img src={Notif1} alt="Notification Icon 1" className='icon mr-2' /></div>
          <div className='headerprofile flex items-center'>
            <img src={Image} alt="Profile" className='icon mr-2' />
            <div className='names'>
              <div className='john'>John Doe</div>
              <div className='super text-gray-600'>Superadmin</div>
            </div>
            <div><img src={Arrowdown} alt="Arrow Down" className='icon ml-2' /></div>
          </div>
        </div>
      </div>

      <div className='header-bottom flex justify-between items-center p-4 bg-white'>
        <div>Students</div>
        <button className='addStudent bg-blue-500 text-white py-2 px-4 rounded'>
          + Add Student
        </button>
      </div>
    </header>
  );
}

export default Header;
