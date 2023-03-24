import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import All_Card from "./All_Card";
import { toast } from "react-toastify";

const Admin_All_Courses = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [courseStatus, setCourseStatus] = useState(false)
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      // setLoading(true);

      const response = await axios.get(
        "https://localhost:7037/api/Admin/GetAllCourse?PageNumber=1&PageSize=20",
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      debugger;
      // console.log(response);
      debugger;

      setPosts(response.data.data);
      console.log(response.data.data);

      // setLoading(false);
    };

    loadPost();
  }, [courseStatus]);

  function deleteCourse (data){
    {
      debugger
    //   let publishData={ }
      // data.courseId = courseId;
      // values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
     var tokenData =   localStorage.getItem("tokenData");
     
    
    //  publishData.courseId=data

      fetch(
      `https://localhost:7037/api/Course/DeleteCourse?courseId=${data}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenData}`,
          },
          body: JSON.stringify(data),
        }
      ).then((result) => {
        debugger;
        // console.log("result", result);
        result.json().then((resp) => {
          // debugger
          console.log("resp", resp);
  
          if (resp.isSuccess == true) {
            //    debugger;
            setCourseStatus(!courseStatus)
            toast.success("Course Deleted Successfully");
            // navigate("/instructor_all_courses");
            // window.location.reload();
          } else {
            toast.error(resp.message);
          }
        });
  
        //  console.log(posts)
  
        console.log(data);
        
      });
    }
  }



  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="container  my-3 t">
          <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            All Courses
          </h1>

          <div className="row mt-3">
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              posts.map((item, index) => {
                console.log(item.courseName);
                return (
                  <div className="col-md-4  mb-4  " key={index}>
                    <All_Card
                      courseName={item.courseName}
                      courseDesc={item.courseDesc}
                      courseCapacity={item.courseCapacity}
                    //   publish={item.isPublish}
                        courseId={item.courseId}
                        deleteCourse={deleteCourse}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_All_Courses;
