import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const My_Courses = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData=  localStorage.getItem('tokenData')
      var studentId=  localStorage.getItem('studentId')
      // setLoading(true);

      const response = await axios.get(
       ` https://localhost:7037/api/Course/GetAllEnrollCourse?stdId=${studentId}`,{
          headers: {
            "Authorization":`Bearer ${tokenData}`
          }
        }
      );
      debugger;
      console.log(response);
      debugger;

      setPosts(response.data);

      // setLoading(false);
    };

    loadPost();
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
<div className="container  my-3 t">
        <h1 className="text-center shadow pb-2" style={{color:"#c30d0d",fontFamily:"auto"}}>My Courses</h1>
      
        {/* <div className="row mt-3">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            posts.map((item,index) =>
              // Presently we only fetch
              // title from the API
            
              {
                console.log(item.title)
                return <div className="col-md-4  mb-4  " key={index}><Card item={item.title}/></div>;
              }
            )
          )}
        </div> */}
      </div>
      </div>
    </>
  );
};

export default My_Courses;
