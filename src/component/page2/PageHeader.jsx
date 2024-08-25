import React from 'react';
import Notif from '../../assets/note.svg';
import Notif1 from '../../assets/notif.svg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Arrowdown from '../../assets/arrow-down.svg'
import Image from '../../assets/Image.svg'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function PageHeader({ OpenSidebar, pageTitle }) {
  return (
    <header className='header'>
      <div className='header-top'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
            <div>Find anything from here easier</div>
        </div>
        <div className='header-right'>
            <img src={Notif} alt="Notification Icon" className='icon' />
            <img src={Notif1} alt="Notification Icon 1" className='icon' />
            <div className='headerprofile'>
          <div className='miniall'>
            <img src={Image} alt="Notification Icon" className='icon' />
         <div className='names'>
           <div className='john'>John Doe</div>
           <div className='super'>Superadmin</div>
         </div>
         <div><img src={Arrowdown} alt="Notification Icon" className='icon' /></div>
         </div>

         </div>
        </div>
      </div> 
      <div className='head-bottoms'>
        <div className='changing'><span className='back'> <BsArrowLeft className="icon" />Back</span>{pageTitle}</div>
       
      </div> 
    </header>
  );
}

export default PageHeader;
