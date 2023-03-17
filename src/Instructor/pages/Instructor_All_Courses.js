import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const Instructor_All_Courses = () => {
  const [loading, setLoading] = useState(false);
  const [load_id, setLoad_id] = useState([]);
  const [all_courses, setAll_courses] = useState([]);



  useEffect(() => {
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var UserId = localStorage.getItem("UserId");
      setLoading(true);

      const response = await axios.get(
        `https://localhost:7037/api/Instructor/GetInstructorByLoginId?userId=${UserId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );

      const success = response;
      setLoad_id(response.data.data);
      // debugger;
      // console.log(success.data);
      // console.log(success.data.data.instructorId);
      localStorage.setItem("createdBy_InstId", success.data.data.instructorId);
      console.log(localStorage.getItem("createdBy_InstId"));

      setLoading(false);
    };

    loadPost();
  }, []);

  useEffect(() => {
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var createdBy_InstId = localStorage.getItem("createdBy_InstId");

      setLoading(true);

      const response = await axios.get(
        `https://localhost:7037/api/Course/GetAllCourseOfInstructor?instId=${createdBy_InstId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );

      const success = response;
      setAll_courses(response.data.data);
      // debugger;
      console.log(success.data.data);
      // console.log(success.data.data[0].courseId);
      console.log(success.data);
      // localStorage.setItem("courseId", success.data.data[0].courseId);
      // console.log(success.data.data.instructorId);
      //   localStorage.setItem('createdBy_InstId', success.data.data.instructorId)
 
     
      console.log(localStorage.getItem("createdBy_InstId"));

      setLoading(false);
    };

    loadPost();
  }, []);

  return (
    <>
       <div className="home">
         <Sidebar />
 <div className="container  my-3 t">
         <h1 className="text-center shadow pb-2" style={{color:"#c30d0d",fontFamily:"auto"}}>All Courses</h1>

         <div className="row mt-3">
           {loading ? (
             <h4>Loading...</h4>
           ) : (
            all_courses.map((item,index) =>
               // Presently we only fetch
               // title from the API
               {
                 return <div className="col-md-4  mb-4  " key={index}><Card courseName={item.courseName} courseDesc={item.courseDesc} courseCapacity={item.courseCapacity}/></div>;
               }
             )
           )}
         </div>
       </div>
       </div>
    </>
  );
};

export default Instructor_All_Courses;

// const My_Courses = () => {

//   useEffect(() => {
//     const loadPost = async () => {
//       // Till the data is fetch using API
//       // the Loading page will show.
//       setLoading(true);

//       // Await make wait until that
//       // promise settles and return its result
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/"
//       );

//       // After fetching data stored it in posts state.
//       setPosts(response.data);

//       // Closed the loading page
//       setLoading(false);
//     };

//     // Call the function
//     loadPost();
//   }, []);

//   return (
//     <>
//       <div className="home">
//         <Sidebar />
// <div className="container  my-3 t">
//         <h1 className="text-center shadow pb-2" style={{color:"#c30d0d",fontFamily:"auto"}}>My Courses</h1>

//         <div className="row mt-3">
//           {loading ? (
//             <h4>Loading...</h4>
//           ) : (
//             posts.map((item,index) =>
//               // Presently we only fetch
//               // title from the API
//               {
//                 return <div className="col-md-4  mb-4  " key={index}><Card/></div>;
//               }
//             )
//           )}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default My_Courses;
