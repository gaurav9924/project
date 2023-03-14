import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";


const All_Courses = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      // After fetching data stored it in posts state.
      setPosts(response.data);

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
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
            posts.map((item,index) =>
              // Presently we only fetch
              // title from the API
              {
                return <div className="col-md-4  mb-4 " key={index}><Card/></div>;
              }
            )
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default All_Courses;



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

