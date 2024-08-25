import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Page2 from "./component/page2/page2";
import Detail from "./component/StudentDetails/Details";
import SubjectCurriculum from "./component/SubjectCurriculum/SubjectCurriculum";
import StudentCurriculum from "./component/StudentCurriculum/StudentCurriculum";
import About from "./component/About/About";
import AddStudent from "./component/Logins/AddStudent";
import PageHeader from "./component/page2/PageHeader";

import EditStudent from "./component/Logins/Editstudent";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Home />
      {/* <Page2/> */}
      {/* <SubjectCurriculum/> */}
      {/* <StudentCurriculum/> */}
      {/* <Detail/> */}
      {/* <About/> */}
      {/* <AddStudent /> */}
      {/* <PageHeader/> */}
    
      {/* <EditStudent/> */}
    </div>
  );
}

export default App;
