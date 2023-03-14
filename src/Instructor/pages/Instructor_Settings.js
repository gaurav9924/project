import React from 'react';
import Sidebar from '../components/Sidebar';
import "./Setting.css"

const Instructor_Setting = () => {
  return (
    <div className='home'>
      <Sidebar/>
     <div className='container my-3 ' >
     <h1 className="text-center shadow pb-2" style={{color:"#c30d0d",fontFamily:"auto"}}>Edit Profile</h1>
      <div className='row mt-3'>
        <div className='col-sm-12  column shadow border-0 '>
      <form>
        <div className='row '>
        <div className='col-sm-6'>
      <div className=" txt form-group fullname">
            <span className=" inptxt">Full Name</span>
            <input
              type="text"
              className="form-control bg-white p-2 mb-5 rounded"
              name="name"
             
              placeholder="Enter Your Full Name"
            />
            {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
          </div>
          </div>
          <div className='col-sm-6'>
          <div className=" txt form-group">
            <span className=" inptxt">Email</span>
            <input
              type="email"
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
          <div className='row '>
        <div className='col-sm-6'>
      <div className=" txt form-group fullname">
            <span className=" inptxt">Mobile</span>
            <input
              type="number"
              className="form-control  bg-white p-2 mb-5 rounded"
           
             
              placeholder="Enter Your Number"
            />
            {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
          </div>
          </div>
          <div className='col-sm-6'>
          <div className=" txt form-group">
            <span className=" inptxt">Profile Pic</span>
            <input
              type="file"
          
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="form-control  bg-white p-2 mb-5 rounded"
           
            />
            {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
          </div>
          </div>
          </div>
          <div className='row '>
        <div className='col-sm-6'>
      <div className=" txt form-group fullname">
            <span className=" inptxt">Gender</span>
            <input
              type="text"
              className="form-control  bg-white p-2 mb-5 rounded"
              name="name"
             
              placeholder="Enter Your Full Name"
            />
            {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
          </div>
          </div>
          <div className='col-sm-6'>
          <div className=" txt form-group">
            <span className=" inptxt">College</span>
            <input
              type="text"
              name="college"
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
          <div className='row '>
        <div className='col-sm-6'>
      <div className=" txt form-group fullname">
            <span className=" inptxt">Address</span>
            <input
              type="text"
              className="form-control  address  bg-white p-2 mb-5 rounded"
              name="address"
             
              placeholder="Enter Your Address"
            />
            {/* {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
          </div>
          </div>
          <div className='col-sm-6'>
       <div className='form-group'>
        <button className=' update btn btn-success'>Update profile</button>
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

export default Instructor_Setting;
