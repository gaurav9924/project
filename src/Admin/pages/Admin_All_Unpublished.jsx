import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import UnPublished_Card from "./UnPublished_Card";
import { toast } from "react-toastify";

const Admin_All_UnPublished_Course = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      // setLoading(true);

      const response = await axios.get(
        "https://localhost:7037/api/Admin/GetAllCourse?PageNumber=1&PageSize=20",
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      debugger;
      // console.log(response);
      debugger;

      setPosts(response.data.data);
      console.log(response.data.data[0].isPublish);

      // setLoading(false);
    };

    loadPost();
  }, []);

  function publishCourse(data) {
    {
      debugger;
      //   let publishData={ }
      // data.courseId = courseId;
      // values.createdBy_InstId = localStorage.getItem("createdBy_InstId");
      var tokenData = localStorage.getItem("tokenData");

      //  publishData.courseId=data

      fetch(`https://localhost:7037/api/Admin/PublishCourse?courseId=${data}`, {
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
            toast.success("Course Published Successfully");
            // navigate("/instructor_all_courses");
            // window.location.reload();
          } else {
            toast.error(resp.message);
          }
        });

        //  console.log(posts)

        console.log(data);
      });
    }
  }

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="container  my-3 t">
          <h1
            className="text-center shadow pb-2"
            style={{ color: "#c30d0d", fontFamily: "auto" }}
          >
            All UnPublished Courses
          </h1>

          <div className="row mt-3">
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              posts.map((item, index) => {
                //   console.log(item.courseName);
                return !item.isPublish ? (
                  <div className="col-md-4  mb-4  " key={index}>
                    <UnPublished_Card
                      courseName={item.courseName}
                      courseDesc={item.courseDesc}
                      courseCapacity={item.courseCapacity}
                      //   publish={item.isPublish}
                      courseId={item.courseId}
                      publishCourse={publishCourse}
                    />
                  </div>
                ) : null;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_All_UnPublished_Course;
