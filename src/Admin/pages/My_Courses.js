import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import { toast } from "react-toastify";

const My_Courses = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var studentId = localStorage.getItem("studentId");
      // setLoading(true);

      const response = await axios.get(
        ` https://localhost:7037/api/Course/GetAllEnrollCourse?stdId=${studentId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      debugger;
      console.log(response.data.data);
      debugger;

      setPosts(response.data.data);

      // setLoading(false);
    };

    loadPost();
  }, []);

  // function enrollNow (data){
  //   {
  //     debugger
  //     let enrollData={ }
  //     // data.courseId = courseId;
  //     // values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
  //    var tokenData =   localStorage.getItem("tokenData");
  //     var studentId=localStorage.getItem("studentId")
  //     enrollData.studentId=studentId;
  //     enrollData.courseId=data

  //     fetch(
  //     "https://localhost:7037/api/Course/EnrollInCourse",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${tokenData}`,
  //         },
  //         body: JSON.stringify(enrollData),
  //       }
  //     ).then((result) => {
  //       debugger;
  //       // console.log("result", result);
  //       result.json().then((resp) => {
  //         // debugger
  //         console.log("resp", resp);
  
  //         if (resp.isSuccess == true) {
  //           //    debugger;
  //           toast.success("Enrolled In Course Successfully");
  //           // navigate("/instructor_all_courses");
  //           // window.location.reload();
  //         } else {
  //           toast.error(resp.message);
  //         }
  //       });
  
  //       //  console.log(posts)
  
  //       console.log(data);
        
  //     });
  //   }
  // }



  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="container  my-3 t">
          <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            My Courses
          </h1>

          <div className="row mt-3">
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              posts.map((item, index) =>
              

                {
                  console.log(item.courseName);
                  return (
                    <div className="col-md-4  mb-4  " key={index}>
                      <Card
                       courseName={item.courseName}
                       courseDesc={item.courseDesc}
                       courseCapacity={item.courseCapacity}
                       publish={item.isPublish}
                      //  courseId={item.courseId}
                      //  enrollNow={enrollNow}
                      />
                    </div>
                  );
                }
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Courses;
