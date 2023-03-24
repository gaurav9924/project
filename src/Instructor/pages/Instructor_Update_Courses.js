import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import "./Instructor.css";

import { useFormik } from "formik";

const initialValues = {
  
    courseName: "",
    courseDesc: "",
   
    courseCapacity: 0
  
};

const Instructor_Update_Courses = () => {
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
      //  ` https://localhost:7037/api/Course/GetCourseDetails?courseID=${}`
      );

      // After fetching data stored it in posts state.
      setPosts(response.data);

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);


  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    // validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      debugger;
      values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
      var tokenData = localStorage.getItem("tokenData");

      // debugger;

      debugger;
      fetch("https://localhost:7037/api/Course/AddCourse", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
        body: JSON.stringify(values),
      }).then((result) => {
        debugger;
        // console.log("result", result);
        result.json().then((resp) => {
          // debugger
          console.log("resp", resp);

          if (resp.isSuccess == true) {
            //    debugger;
            toast.success("Course Added Successfully");
          } else {
            toast.error(resp.message);
          }
        });

        //  console.log(posts)

        console.log(values);
        action.resetForm();
      });
    },
  });

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="container  my-3 t">
          {/* <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            Update Courses
          </h1>

          <div className="col-sm-8 bg-light shadow p-5 add">
            <form onSubmit={handleSubmit}>
              <div className="row ms-5">
                <p className="course">
                  Course Name:
                  <input type="text"   name="courseName" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseName} className="course_input ms-4" />
                </p>
              </div>

              <div className="row ms-5 mt-1">
                <p className="course mt-2">
                  Course Desc :<input type="text"name="courseDesc" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseDesc}  className="course_desc " />
                </p>
              </div>
            
              <div className="row ms-5 mt-1">
                <p className="course mt-2">
                  Course Capacity:
                  <input type="number"name="courseCapacity" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseCapacity}  className="course_capacity " />
                </p>
              </div>
              <button type="submit" className="btn btn-primary mt-4 btn_add">
                Update Course
              </button>
            </form>
          </div> */}

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
      <h1
            className="text-center  pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            Update Courses
          </h1>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
      <div className="col-sm-8 bg-light  p-4 add" style={{width:"457px",height:"400px"}}>
            <form onSubmit={handleSubmit}>
              <div className="row ms-5">
                <p className="course" style={{marginLeft:"-55px"}}>
                  Course Name:
                  <input type="text"   name="courseName" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseName} className="course_input ms-4" />
                </p>
              </div>

              <div className="row ms-5 mt-1">
                <p className="course mt-2">
                  Course Desc :<input type="text"name="courseDesc" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseDesc}  className="course_desc " />
                </p>
              </div>
            
              <div className="row ms-5 mt-1">
                <p className="course mt-2">
                  Course Capacity:
                  <input type="number"name="courseCapacity" onChange={handleChange}
                      onBlur={handleBlur}  style={{marginLeft:"30px"}}  value={values.courseCapacity}  className="course_capacity " />
                </p>
              </div>
              {/* <button type="submit" className="btn btn-primary mt-4 btn_add">
                Update Course
              </button> */}
            </form>
          </div>
      </div>
      <div className="modal-footer">
       
        <button type="submit" className="btn btn-primary mt-2 btn_add" style={{height:"100px"}}>
                Update Course
              </button>
      </div>
    </div>
  </div>
</div>


      </div>
</div>
    </>
  );
};

export default Instructor_Update_Courses;
