import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import "./Setting.css";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
// import { signUpSchema } from "../../schemas";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useFormik } from "formik";

const initialValues = {
 fullName:"",
  mobile: 0,
  college: "",
  address: "",
  gender: "",
  profilePic: null,
};

const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  const [postImage, setPostImage] = React.useState({

    myFile: null,
    
    profilePic: null
    });


    const convertToBase64 = (file) => {
debugger
      return new Promise((resolve, reject) => {
      
        const fileReader = new FileReader();
      
        fileReader.readAsDataURL(file);
      
        fileReader.onload = () => {
      
          resolve(fileReader.result);
      
        };
      
        fileReader.onerror = (error) => {
      
          reject(error);
      
        };
      
      });
      };



      const handleFileUpload = async (e) => {
debugger
        const file = e.target.files[0];
        
        const base64 = await convertToBase64(file);
        
        setPostImage({ ...postImage, myFile: base64, profilePic: base64 });
        };

  useEffect(() => {
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var UserId = localStorage.getItem("UserId");
      setLoading(true);

      const response = await axios.get(
        `https://localhost:7037/api/Student/GetStudentByLoginId?UserId=${UserId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );

      const success = response;
      // debugger;
      // setPosts(response.data.data);
      setPosts(success.data.data);
      // console.log(success.data.data.fullName);
      initialValues.fullName=posts.fullName

      setLoading(false);
    };

    loadPost();
  }, []);

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        debugger;
        values.UserId = localStorage.getItem("UserId");
        var tokenData = localStorage.getItem("tokenData");
        values.profilePic=postImage.profilePic
        // console.log(postImage);

        // debugger;
      
    debugger
     
      

        debugger;
        fetch("https://localhost:7037/api/Student/UpdateStudentDetails", {
          method: "PUT",
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
               toast.success("User Updated Successfully");
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
    <div className="home">
      <Sidebar />
      <div className="container my-3 ">
        <h1
          className="text-center shadow pb-2"
          style={{ color: "#c30d0d", fontFamily: "auto" }}
        >
          Edit Profile
        </h1>
        <div className="row mt-3">
          <div className="col-sm-12  column shadow border-0 ">
            <form onSubmit={handleSubmit}>
              <div className="row ">
                <div className="col-sm-6">
                  <div className=" txt form-group fullname">
                    <span className=" inptxt">Full Name</span>
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly
                      value={posts.fullName}
                      className="form-control bg-white p-2 mb-5 rounded"
                      placeholder="Enter Your Full Name"
                    />
                    {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className=" txt form-group">
                    <span className=" inptxt">Email</span>
                    <input
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly
                      value={posts.email}
                      name="email"
                      // value={values.email}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      className="form-control  bg-white p-2 mb-5 rounded"
                      placeholder="Enter your Email"
                    />
                    {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-6">
                  <div className=" txt form-group fullname">
                    <span className=" inptxt">Mobile</span>
                    <input
                      type="number"
                      name="mobile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobile}
                      className="form-control  bg-white p-2 mb-5 rounded"
                      placeholder="Enter Your Number"
                    />
                    {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className=" txt form-group">
                    <span className=" inptxt">Profile Pic</span>
                    <input
                      type="file"
                      name="profilePic"
                      accept=".jpg, .png|image/*"
                      value={values.profilePic}
                      onChange={handleFileUpload}
                      onBlur={handleBlur}
                      className="form-control  bg-white p-2 mb-5 rounded"
                    />
                    {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-6">
                  <div className="row">
                    <div className=" txt form-group fullname">
                      <span className=" inptxt">Gender</span>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-check">
                            <input
                              name="gender"
                              value="male"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-check-input"
                              type="radio"
                              // name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Male
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <input
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-check-input"
                            type="radio"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className=" txt form-group">
                    <span className=" inptxt">College</span>
                    <input
                      type="text"
                      name="college"
                      value={values.college}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // value={values.email}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      className="form-control   bg-white p-2 mb-5 rounded"
                      placeholder="Enter your College"
                    />
                    {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-6">
                  <div className=" txt form-group fullname">
                    <span className=" inptxt">Address</span>
                    <input
                      type="text"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control  address  bg-white p-2 mb-5 rounded"
                      name="address"
                      placeholder="Enter Your Address"
                    />
                    {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <button className=" update btn btn-success" type="submit">
                      Update profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
