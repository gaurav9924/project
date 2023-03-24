import React , { useState, useEffect }from 'react';
import axios from "axios";
import Sidebar from '../components/Sidebar';
import Published_Card from './Published_Card';

const Admin_All_Published_Course = () => {

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
        console.log(response.data.data);
        console.log(response.data.data[0].isPublish );
  
        // setLoading(false);
      };
  
      loadPost();
    }, []);


  return (
    <>
    <div className="home">
      <Sidebar />
      <div className="container  my-3 t">
        <h1
          className="text-center shadow pb-2"
          style={{ color: "#c30d0d", fontFamily: "auto" }}
        >
          All Published Courses
        </h1>

        <div className="row mt-3">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            posts.map((item, index) => {
            //   console.log(item.courseName);
              return (item.isPublish?
                (<div className="col-md-4  mb-4  " key={index}>
                  <Published_Card
                    courseName={item.courseName}
                    courseDesc={item.courseDesc}
                    courseCapacity={item.courseCapacity}
                  //   publish={item.isPublish}
                      courseId={item.courseId}
                    //   publishCourse={publishCourse}
                  />
                </div>):""
              );
            })
          )
          
          
          
          }
        </div>
      </div>
    </div>
  </>
  );
};

export default Admin_All_Published_Course;
