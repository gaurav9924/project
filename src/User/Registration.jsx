import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./styles/Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, NavLink } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirm_password: "",
  role: 0,
};
const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get(
        "https://localhost:7037/api/Login/GetRoleTypes"
      );

      const success = response.data;
      setPosts(response.data.data);
      // debugger;
      // console.log(success);

      setLoading(false);
    };

    loadPost();
  }, []);

  //   return (
  //       <>
  //           <div className="App">
  //               {loading ? (
  //                   <h4>Loading...</h4>) :
  //                   (posts.map((item) =>
  //                       // Presently we only fetch
  //                       // title from the API
  //                       <h4>{item}</h4>)
  //                   )
  //               }
  //           </div>
  //       </>
  //   );

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        toast.success("User Registered");

        //  console.log(posts)
        // navigate("/");
        console.log(values);
        action.resetForm();
      },
    });

  function saveUser() {
    let totalData = values ;
    // debugger;
    console.log(totalData);
    fetch("https://localhost:7037/api/Login/SignUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(totalData),
    }).then((result) => {
      // console.log("result", result);
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="App">{/* {loading ? <h4>Loading...</h4> :  } */}</div>

      <div className="container bg-light border border-dark rounded abc p-4 shadow p-3 mb-5 bg-white rounded">
        <div className="text-center login mb-3 text-info">Welcome To LMS</div>
        <div className="login fs-5">Register Here</div>
        <form style={{ height: "500px " }} onSubmit={handleSubmit}>
          <div className=" txt form-group">
            <span className=" inptxt">Full Name</span>
            <input
              type="text"
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Full Name"
            />
            {errors.fullName && touched.fullName ? (
              <p className="form-error">{errors.fullName}</p>
            ) : null}
          </div>

          <div className=" txt form-group">
            <span className=" inptxt">Email</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              placeholder="Enter your Email"
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>

          <div className=" txt form-group">
            <span className=" inptxt">Password</span>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              placeholder="Enter Your Password"
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className=" txt form-group">
            <span className=" inptxt"> Confirm Password</span>
            <input
              type="password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              placeholder="Confirm Your Password"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}
          </div>

          <div className="txt form-group">
            <select
              className="form-select shadow  bg-light text-dark p-2 mb-3 mt-4 rounded"
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-label="Default select example"
            >
              {posts.map((item, index) => (
                <option value={item.id} key={item.id}>
                  {item.roleName}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit "
            className="btn btn-primary shadow  rg p-2 mb-5 rounded"
            onClick={saveUser}
            // onClick={handleSubmitForm}
          >
            Register Now
          </button>
          <div className="loginhere">
            Already Have an Account?
            <NavLink to="/">
              {/* () => navigate("/") */}
              Login Here
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
