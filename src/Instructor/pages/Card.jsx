import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useFormik } from "formik";

const initialValues = {
  courseName: "",
  courseDesc: "",

  courseCapacity: 0,
};

function Card(props) {
  {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const {
      courseName,
      courseDesc,
      courseCapacity,
      courseId,
      update,
      addCourseMaterial,
      materialDetails
    } = props;
    useEffect(() => {
      // console.log(props);
      const loadPost = async () => {
        // Till the data is fetch using API
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that
        // promise settles and return its result
        const response = await axios
          .get
          // ` https://localhost:7037/api/Course/GetCourseDetails?courseID=${}`
          ();

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
        <div className="card shadow border-0  ">
          <div className="card-body">
            <h5 className="card-title text-center">{courseName}</h5>

            <p className="card-text " style={{ fontFamily: "auto" }}>
              {courseDesc}
            </p>
            <button
              type="button"
              className="bg-white border border-0 text-primary "
              style={{textDecoration:"underline"}}
              onClick={() => materialDetails(courseId)}
          
            >
              Material 
            </button>
            <h6 className="card-subtitle mb-2 text-muted  course_capacity_text">
              {" "}
              Course Capacity: {courseCapacity}
            </h6>
            {/* <a href="#" className="card-link">Card link</a> */}
            <button
              type="button"
              className="btn btn-primary edit_button "
              onClick={() => update(courseId)}
            >
              Edit
            </button>
            <div className="container  my-3 t"></div>
            <button
              type="button"
              className="btn btn-success add_material_btn"
              onClick={() => addCourseMaterial(courseId)}
            >
              Add Material
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
