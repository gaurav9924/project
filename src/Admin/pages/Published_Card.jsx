import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"

function Published_Card(props) {
  const { courseName, courseDesc, courseCapacity, publishCourse,enrollNow,courseId } = props;
  return (
    <>
     
        <div className="card shadow border-0  ">
          <div className="card-body">
            <h5 className="card-title text-center">{courseName}</h5>
            <p className="card-text " style={{ fontFamily: "auto" }}>
              {courseDesc}
            </p>
            <h6 className="card-subtitle mb-2 text-muted course_capacity_text">
              {" "}
              Course Capacity: {courseCapacity}
            </h6>
            {/* <button
              type="button"
              className="btn btn-primary enroll_button "
            onClick={()=>publishCourse(courseId)}
            >
              Publish 
            </button> */}
            <div className="container  my-3 t"></div>
            
          </div>
        </div>
     
    </>
  );
}

export default Published_Card;
