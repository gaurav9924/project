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
  
  materialName: "",
  materialDesc: "",
   
  file_Base64: ""
  
};

const Instructor_AddCourse_Material = () => {
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
          <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            Add Courses Material
          </h1>

          <div className="col-sm-8 bg-light shadow p-5 add">
            <form onSubmit={handleSubmit}>
              <div className="row ms-5">
                <p className="course " style={{fontSize:"18px"}}>
                  Material Name:
                  <input type="text"   name="materialName" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseName} className="course_input ms-4" />
                </p>
              </div>

              <div className="row ms-5 mt-1">
                <p className="course mt-4"  style={{fontSize:"18px"}}>
                  Material Desc :<input type="text"name="materialDesc" onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseDesc}  className="course_desc " />
                </p>
              </div>
            
              <div className="row  mt-1">
                <p className="course mt-2" style={{fontSize:"18px",marginLeft:"60px"}}>
                  File:
                  <input type="file"name="file_Base64" style={{marginLeft:"100px"}} onChange={handleChange}
                      onBlur={handleBlur}   value={values.courseCapacity}  className="course_capacity " />
                </p>
              </div>
              <button type="submit" className="btn btn-primary mt-4 btn_add" >
                Add Material
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor_AddCourse_Material ;
