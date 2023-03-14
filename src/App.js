import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from "./User/Login";
import Registration from "./User/Registration";
import Studenthomepage from "./User/Studenthomepage";
import Instructorhomepage from "./Instructor/Instructorhomepage";
import Sidebar from "./User/components/Sidebar";
import Overview from "./User/pages/All_Courses";

//  import Team from "./User/pages/Setting";
import All_Courses from "./User/pages/All_Courses";
import My_Courses from "./User/pages/My_Courses";
import Instructor_All_Courses from "./Instructor/pages/All_Courses";
import Instructor_Add_Courses from "./Instructor/pages/Instructor_Add_Courses";
import Add_Courses from "./Instructor/pages/Instructor_Add_Courses";
// import Courses from "./User/pages/All_Courses";
import Logout from "./User/pages/Logout";
// import Logout from "./Instructor/pages/Logout";
import Setting from "./User/pages/Settings";
import Instructor_Setting from "./Instructor/pages/Instructor_Settings";
// import Setting from "./Instructor/pages/Settings";

 export default  function App(){
    return<>

<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover 
/>
<BrowserRouter>
      <Routes>
        {/* <Route exact path="/Home" element={<Home/>}/> */}
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/studenthomepage" element={<Studenthomepage/>}/>
        <Route exact path="/instructorhomepage" element={<Instructorhomepage/>}/>
   
        <Route path="/all_courses" exact element={<All_Courses/>} />
        <Route path="/instructor_all_courses" exact element={<Instructor_All_Courses/>} />
        <Route path="/my_courses" exact element={<My_Courses/>} />
        <Route path="/instructor_add_courses" exact element={<Instructor_Add_Courses/>} />
      
<Route path="/setting" exact element={<Setting/>} />
<Route path="/instructor_setting" exact element={<Instructor_Setting/>} />

<Route path="/logout" exact element={<Logout/>} />
      </Routes>
      </BrowserRouter>
      </>
    
}


  {/* <Route path="/reports" exact element={<Reports/>} />
         <Route path="/reports/reports1" exact element={<ReportsOne/>} />
   <Route path="/reports/reports2" exact element={<ReportsTwo/>} />
<Route path="/reports/reports3" exact element={<ReportsThree/>} /> */}
// import React from "react";
// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Overview from "./pages/Overview";
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
// import Team from "./pages/Team";

// function App() {
//   return (
//     <Router>
//       <Sidebar />
//       <Switch>
//         <Route path="/overview" exact component={Overview} />
//         <Route path="/reports" exact component={Reports} />
//         <Route path="/reports/reports1" exact component={ReportsOne} />
//         <Route path="/reports/reports2" exact component={ReportsTwo} />
//         <Route path="/reports/reports3" exact component={ReportsThree} />
//         <Route path="/team" exact component={Team} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
// @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   font-family: 'Lato', sans-serif;
// }

// .home,
// .reports,
// .products,
// .team,
// .reports {
//   display: flex;
//   height: 90vh;
//   align-items: center;
//   justify-content: center;
//   font-size: 3rem;
// }
