import React from "react";
import "./styles/Login.css";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { signUpSchema } from "../schemas";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        debugger;
        
        toast.success("Login Successfull");

        console.log(values);
        action.resetForm();
      },
    });

  const handleSubmitForm = () => {
    if (
      values.email !== "" &&
      values.password !== "" &&
      values.confirm_password !== ""
    ) {
      console.log(values);

      fetch("https://localhost:7037/api/Login/Login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((result) => {
        // console.log("result", result);
        result.json().then((resp) => {
          // debugger
          console.log("resp", resp);
          // console.log(resp.data.roleType)

          if (resp.isSuccess == true) {
            localStorage.setItem("tokenData", resp.data.token);
            debugger;
            localStorage.setItem("UserId", resp.data.userId);
            //  localStorage.setItem("studentId", resp.data.studentId);
            // console.log(resp.data.studentId)

            localStorage.getItem("tokenData");

            if (resp.data.roleId == 1) {
              // navigate("/admin")
            } else if (resp.data.roleId == 2) {
              navigate("/instructorhomepage");
            } else if (resp.data.roleId == 3) {
              navigate("/studenthomepage");
            }

            // debugger;
            toast.success("User Login Successfull ");
          } else {
            toast.error(resp.message);
          }
        });

        //  console.log(posts)

        console.log(values);
      });

      // toast.success("User Login Successfull ")
    }
    // navigate("/my_courses")
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container bg-light  rounded ab p-4 shadow p-3 mb-5 bg-white rounded">
        <div className="login mt-2">Login Here</div>
        <form onSubmit={handleSubmit}>
          <div className=" txt-login form-group">
            <span className="fs-5 inptxt ">Email</span>
            <input
              type="email"
              name="email"
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error-lg">{errors.email}</p>
            ) : null}
          </div>
          <div className=" txt-login form-group">
            <span className="fs-5 inptxt">Password</span>
            <input
              type="password"
              name="password"
              className="form-control shadow  bg-white p-2 mb-5 rounded"
              placeholder="Enter Your Password "
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error-lg">{errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="btn btn-primary lg shadow   p-2  rounded"
            onClick={handleSubmitForm}
          >
            Login
          </button>
          <div className=" acc ">
            Create an Account?
            <NavLink to="/register" onClick={() => navigate("/register")}>
              Register Now
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
