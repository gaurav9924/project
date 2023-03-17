import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./styles/studenthomepage.css"

import Sidebar from "./components/Sidebar";

function Instructorhomepage() {


  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      var tokenData=  localStorage.getItem('tokenData')
       var UserId=  localStorage.getItem('UserId')
      setLoading(true);

      const response = await axios.get(
       `https://localhost:7037/api/Instructor/GetInstructorByLoginId?userId=${UserId}`,{
          headers: {
            "Authorization":`Bearer ${tokenData}`
          }
        }
      );

      const success = response;
      setPosts(response.data.data);
      // debugger;
      console.log(success.data);
      // console.log(success.data.data.instructorId);
      localStorage.setItem('createdBy_InstId', success.data.data.instructorId)
     console.log( localStorage.getItem('createdBy_InstId'))

      setLoading(false);
    };

    loadPost();
  }, []);



  return (
   <>
 <Sidebar/>
  </>
  )
}

export default Instructorhomepage;

