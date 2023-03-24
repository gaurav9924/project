import React, { useState, useEffect, useRef } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  useGridApiRef,
} from "@mui/x-data-grid";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import SubMenu from "../components/SubMenu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "./modal.css"

var initialValues = {
  courseName: "",
  courseDesc: "",

  courseCapacity: 0,
};
// var initialValues2 = {
//   materialName: "",
//   materialDesc: "",

//   file_Base64: "",
// };

// Get Course Material

const columns = [
  { field: "courseId", headerName: "Course Id", width: 80 },
  { field: "id", headerName: "Id", width: 80 },
  { field: "materialDesc", headerName: "MaterialDesc", width: 80 },
  { field: "materialName", headerName: "Material Name", width: 80 },

 
  // {
  //   field: "blockUser",
  //   headerName: "Status",
  //   sortable: false,
  //   renderCell: (params) => {
  //     const onClick = (e) => {
  //       debugger;
  //       e.stopPropagation(); // don't select this row after clicking
  //       console.log(params.row.userId);
  //       var tokenData = localStorage.getItem("tokenData");

  //       fetch(
  //         `https://localhost:7037/api/Admin/ToggleBlockUser?UserId=${params.row.userId}`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-type": "application/json",
  //             Authorization: `Bearer ${tokenData}`,
  //           },
  //           body: JSON.stringify(),
  //         }
  //       ).then((result) => {
  //         debugger;
  //         // console.log("result", result);
  //         result.json().then((resp) => {
  //           // debugger
  //           console.log("resp", resp);

  //           if (resp.isSuccess == true) {
  //             //    debugger;
  //             toast.success(resp.message);
  //           } else {
  //             toast.error(resp.message);
  //           }
  //         });

  //         //  console.log(posts)

  //         // console.log(values);
  //         // action.resetForm();
  //       });
  //       // setButtonText('Unblock');
  //       // const handleUpdateRow = () => {
  //       //   setRows((prevRows) => {
  //       //     const rowToUpdateIndex = randomInt(0, rows.length - 1);

  //       //     return prevRows.map((row, index) =>
  //       //       index === rowToUpdateIndex ? { ...row, username: randomUserName() } : row,
  //       //     );
  //       //   });
  //       // };
  //       debugger;
  //     };

  //     return (
  //       <Button onClick={onClick}>
  //         {params.row.isActice ? "block" : "unblock"}
  //       </Button>
  //     );
  //   },
  // },
];

// Get Course Material

const Instructor_All_Courses = () => {
  const [loading, setLoading] = useState(false);
  const [load_id, setLoad_id] = useState([]);
  const [all_courses, setAll_courses] = useState([]);
  const [posts, setPosts] = useState([]);
  const [courseId, setCourseId] = useState();
  const [courseStatus, setCourseStatus] = useState(false)

  const inputEl = useRef(null);
  const addMaterial = useRef(null);
  const material = useRef(null);

  function update(id) {
    debugger;
    inputEl.current.click();
    console.log("update");
    // console.log(id);
    setCourseId(id);
    console.log(courseId);
    loadModal(id);

    
  }

  function addCourseMaterial(id) {
    debugger;
    addMaterial.current.click();
    console.log("update");
    // console.log(id);
    setCourseId(id);
    console.log(courseId);
    loadModal(id);
  }

  function materialDetails(id) {
    debugger;
    const loadModal = async (id) => {
      var tokenData = localStorage.getItem("tokenData");

      const response = await axios.get(
        `https://localhost:7037/api/CourseMaterial/GetCourseMaterial?courseId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      debugger;

      // setPosts(response.data);
      console.log(response);
      setPosts(response.data.data);
      console.log(response.data.data);
    };

    material.current.click();
    console.log("update");
    // console.log(id);

    setCourseId(id);
    console.log(courseId);
    loadModal(id);
  }

  const loadModal = async (id) => {
    var tokenData = localStorage.getItem("tokenData");
    setLoading(true);

    const response = await axios.get(
      ` https://localhost:7037/api/Course/GetCourseDetails?courseID=${id}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      }
    );
    debugger;

    // setPosts(response.data);
    console.log(response);
    setPosts(response.data.data);
    initialValues.courseName = response.data.data.courseName;
    initialValues.courseDesc = response.data.data.courseDesc;
    setLoading(false);
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        courseName: posts.courseName,
        courseDesc: posts.courseDesc,

        courseCapacity: posts.courseCapacity,
      },
      enableReinitialize: true,

      onSubmit: (values, action) => {
        debugger;

        debugger;
      },
    });
  const navigate = useNavigate();
  function handleSubmitUpdate() {
    values.courseId = courseId;
    values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
    var tokenData = localStorage.getItem("tokenData");
    fetch("https://localhost:7037/api/Course/UpdateCourse", {
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
          setCourseStatus(!courseStatus)
          toast.success("Course Updated Successfully");

          // navigate("/instructor_all_courses");
          // window.location.reload();
        } else {
          toast.error(resp.message);
        }
      });

      //  console.log(posts)

      console.log(values);
      //
    });
  }

  function handleSubmitDelete() {
    values.courseId = courseId;
    values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
    var tokenData = localStorage.getItem("tokenData");
    fetch(
      `https://localhost:7037/api/Course/DeleteCourse?courseId=${courseId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
        body: JSON.stringify(values),
      }
    ).then((result) => {
      debugger;
      // console.log("result", result);
      result.json().then((resp) => {
        // debugger
        console.log("resp", resp);

        if (resp.isSuccess == true) {
          setCourseStatus(!courseStatus)
          //    debugger;
          toast.success("Course Deleted Successfully");
          // navigate("/instructor_all_courses");
          // window.location.reload();
        } else {
          toast.error(resp.message);
        }
      });

      //  console.log(posts)

      console.log(values);
      //
    });
  }
  debugger;
  function handleAddMaterial(data) {
    debugger;
    data.courseId = courseId;
    debugger;
    // values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
    var tokenData = localStorage.getItem("tokenData");
    fetch("https://localhost:7037/api/CourseMaterial/AddCourseMaterial", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenData}`,
      },
      body: JSON.stringify(data),
    }).then((result) => {
      debugger;
      // console.log("result", result);
      result.json().then((resp) => {
        // debugger
        console.log("resp", resp);

        if (resp.isSuccess == true) {
          //    debugger;
          setCourseStatus(!courseStatus)
          toast.success("Material Added Successfully");

          // window.location.reload();
        } else {
          toast.error(resp.message);
        }
      });

      console.log(data);
    });
  }

  useEffect(() => {
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var UserId = localStorage.getItem("UserId");
      setLoading(true);

      const response = await axios.get(
        `https://localhost:7037/api/Instructor/GetInstructorByLoginId?userId=${UserId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );

      const success = response;
      setLoad_id(response.data.data);
      // debugger;
      // console.log(success.data);
      // console.log(success.data.data.instructorId);
      localStorage.setItem("createdBy_InstId", success.data.data.instructorId);
      // console.log(localStorage.getItem("createdBy_InstId"));

      setLoading(false);
    };

    loadPost();
  }, []);

  useEffect(() => {
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      var createdBy_InstId = localStorage.getItem("createdBy_InstId");

      setLoading(true);

      const response = await axios.get(
        `https://localhost:7037/api/Course/GetAllCourseOfInstructor?instId=${createdBy_InstId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );

      const success = response;
      setAll_courses(response.data.data);
      // debugger;
      console.log(success.data.data);
      // console.log(success.data.data[0].courseId);
      console.log(success.data);
      // localStorage.setItem("courseId", success.data.data[0].courseId);
      // console.log(success.data.data.instructorId);
      //   localStorage.setItem('createdBy_InstId', success.data.data.instructorId)

      // console.log(localStorage.getItem("createdBy_InstId"));

      setLoading(false);
    };

    loadPost();
  }, [courseStatus]);

  return (
    <>
      <div className="container  my-3 t">
        <button
          ref={inputEl}
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        ></button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="text-center  pb-2"
                  style={{ color: "#c30d0d", fontFamily: "auto" }}
                >
                  Update Courses
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="col-sm-8 bg-light  p-4 add"
                  style={{ width: "457px", height: "400px" }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="row ms-5">
                      <p className="course" style={{ marginLeft: "-55px" }}>
                        Course Name:
                        <input
                          type="text"
                          name="courseName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.courseName}
                          className="course_input "
                        />
                      </p>
                    </div>

                    <div className="row ms-5 mt-1">
                      <p className="course mt-2">
                        Course Desc :
                        <input
                          type="text"
                          name="courseDesc"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.courseDesc}
                          className="course_desc "
                        />
                      </p>
                    </div>

                    <div className="row ms-5 mt-1">
                      <p className="course mt-2">
                        Course Capacity:
                        <input
                          type="number"
                          name="courseCapacity"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ marginLeft: "30px" }}
                          value={values.courseCapacity}
                          className="course_capacity "
                        />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary mt-2 update_course "
                  style={{ height: "50px", marginRight: "150px" }}
                  onClick={handleSubmitUpdate}
                >
                  Update Course
                </button>

                <button
                  type="submit"
                  className="btn btn-danger  btn_add"
                  style={{
                    height: "50px",
                    marginTop: "-55px",
                    lineHeight: "18px",
                  }}
                  onClick={handleSubmitDelete}
                >
                  Delete Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* addCourseMaterial */}

      <div className="container  my-3 t">
        <button
          ref={addMaterial}
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter1"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="text-center  pb-2"
                  style={{ color: "#c30d0d", fontFamily: "auto" }}
                >
                  Add Course Material
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="col-sm-8 bg-light  p-4 add"
                  style={{ width: "457px", height: "400px" }}
                >
                  {/* formik form */}

                  <Formik
                    initialValues={{
                      courseId: "",
                      materialName: "",
                      materialDesc: "",
                      file_Base64: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        handleAddMaterial(values);
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row ms-5">
                          <p className="course" style={{ marginLeft: "-55px" }}>
                            Material Name:
                            <input
                              type="text"
                              name="materialName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.materialName}
                              className="course_input "
                            />
                          </p>
                        </div>
                        <div className="row ms-5 mt-1">
                          <p className="course mt-2">
                            Material Desc :
                            <input
                              type="text"
                              name="materialDesc"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.materialDesc}
                              className="course_desc "
                            />
                          </p>
                        </div>
                        <div className="row ms-5 mt-1">
                          <p className="course mt-2">
                            File:
                            <input
                              type="file"
                              name="file_Base64"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={{ marginLeft: "75px" }}
                              value={values.file_Base64}
                              className="course_capacity "
                            />
                          </p>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-primary  update_course "
                            style={{
                              height: "50px",
                              marginRight: "48px",
                              marginTop: "-11px",
                            }}
                          >
                            Add Material
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Material Details */}

      <div className="container  my-3 t">
        <button
          ref={material}
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter2"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        
        >
          <div className="modal-dialog modal-dialog-centered content" role="document" >
            <div className="modal-content " >
              <div className="modal-header">
                <h1
                  className="text-center  pb-2"
                  style={{ color: "#c30d0d", fontFamily: "auto" }}
                >
                  Course Material
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body " style={{padding:"0px 0px"}}>
                <div
                  className="col-sm-8 bg-light   add"
                  style={{ width: "457px", height: "400px" }}
                >
                  <center>
                    <div className="row " style={{marginBottom:"-10px"}}>
                      <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                          getRowId={(row) => row.courseId}
                          className="shadow"
                          rows={posts}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                        />
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home">
        <Sidebar />
        <div className="container  my-3 t">
          <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            All Courses
          </h1>

          <div className="row mt-3">
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              all_courses.map((item, index) => {
                return (
                  <div className="col-md-4  mb-4  " key={index}>
                    <Card
                      courseName={item.courseName}
                      courseDesc={item.courseDesc}
                      courseCapacity={item.courseCapacity}
                      update={update}
                      addCourseMaterial={addCourseMaterial}
                      materialDetails={materialDetails}
                      courseId={item.courseId}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor_All_Courses;
