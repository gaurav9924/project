import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import "./Card.css"


function Card(props) {
  return (
   <>
   <div className="card shadow border-0  " >
  <div className="card-body">
    <h5 className="card-title text-center">{props.courseName}</h5>
    
    <p className="card-text " style={{fontFamily:"auto"}}>{props.courseDesc}</p>
    <h6 className="card-subtitle mb-2 text-muted  course_capacity_text"  > Course Capacity: {props.courseCapacity}</h6>
    {/* <a href="#" className="card-link">Card link</a> */}
    <button type="button" class="btn btn-primary edit_button ">
      <NavLink to="/instructor_update_courses" className="text-white" style={{textDecoration:"none"}}>Edit</NavLink></button>
      <button type="button" class="btn btn-danger add_material_btn">
      <NavLink to="/instructor_add_coursematerial" className="text-white" style={{textDecoration:"none"}}>Add Material</NavLink></button>
  </div>
</div>
   
   </>
  )
}

export default Card
