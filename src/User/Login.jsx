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
  confirm_password: "",
};

const Login = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,


      onSubmit: (values, action) => {
        debugger
        toast.success("Login Successfull");
       
        console.log(values);
        action.resetForm();
      },
    });

    const handleSubmitForm=()=>{
      if (values.email!=="" && values.password!==""&& values.confirm_password!==""){
console.log(values)
toast.success("User Login Successfull ")}
  // navigate("/studenthomepage")
    }

  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setconfirmPassword] = useState("");

  //getting email password

  // const userName=localStorage.getItem('email')
  // ?localStorage.getItem('email'):'admin@admin.com'

  // const userPassword=localStorage.getItem('password')
  // ?localStorage.getItem('password'):'admin'

  // const handlesubmit = (event) => {
  //   if(email === ""){
  //     toast.error("email is required")
  //   }
  //   else if(password === ""){
  //     toast.error("password is required")
  //   }else if(confirmpassword === ""){
  //     toast.error("confirmpassword is required")
  //   }else  if(password ===confirmpassword ){

  //      localStorage.setItem('email',email)
  //      localStorage.setItem('password',password)
  //      localStorage.setItem('confirmpassword',confirmpassword)

  //     // navigate("/registration")69
  //   }else{
  //     toast.error("Invalid Email Or Password")
  //   }
  // };

  return (
    <>
      <div className="container bg-light border border-dark rounded ab p-4 shadow p-3 mb-5 bg-white rounded">
        <div className="login">Login Here</div>
        <form onSubmit={handleSubmit}>
          <div className=" txt form-group">
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
          <div className=" txt form-group">
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
          <div className=" txt fs-5 form-group">
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
              <p className="form-error-lg">{errors.confirm_password}</p>
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
