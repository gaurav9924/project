import React, { useState } from "react";
import { toast } from "react-toastify";
import "./styles/Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, NavLink } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "student",
};
const Registration = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        // debugger
        toast.success("User Registered");
        navigate("/studenthomepage");
        console.log(values);
        action.resetForm();
      },
    });
  // console.log(errors)

  const navigate = useNavigate();

  // const [fullname, setfullname] = useState("")
  // const [email, setEmail] = useState("")
  // const [role,setRole] = useState("")

  // const [password, setPassword] = useState("")
  // const [confirmpassword, setconfirmPassword] = useState("")

  // const handleSubmitForm=(e)=>{
  //   e.preventDefault();
  //   if(fullname === ""){
  //     toast.error("FullName is required")
  //   }else if(email === ""){
  //     toast.error("email is required")
  //   }
  //   else if(password === ""){
  //     toast.error("password is required")
  //   }else if(confirmpassword === ""){
  //     toast.error("confirmpassword is required")
  //   }else  if(password ===confirmpassword ){
  //          localStorage.setItem('fullname',fullname)
  //      localStorage.setItem('email',email)
  //     //  localStorage.setItem('role',role)
  //      localStorage.setItem('password',password)
  //      localStorage.setItem('confirmpassword',confirmpassword)
  //
  //

  //     // navigate("/registration")69
  //   }else{
  //     toast.error("Invalid Email Or Password")
  //   }

  // }
  // const handleSubmitForm=(e)=>{

  // }

  return (
    <>
      <div className="container bg-light border border-dark rounded abc p-4 shadow p-3 mb-5 bg-white rounded">
        <div className="text-center login mb-3 text-info">Welcome To LMS</div>
        <div className="login fs-5">Register Here</div>
        <form style={{ height: "500px " }} onSubmit={handleSubmit}>
          <div className=" txt form-group">
            <span className=" inptxt">Full Name</span>
            <input
              type="text"
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Full Name"
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
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
              <option selected>Who You Are?</option>
              <option value="instructor">Instructor</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit "
            className="btn btn-primary shadow  rg p-2 mb-5 rounded"
            // onClick={handleSubmitForm}
          >
            Register Now
          </button>
          <div className=" loginhere">
            Already Have an Account?{" "}
            <NavLink to="/" onClick={() => navigate("/")}>
              Login Here
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
