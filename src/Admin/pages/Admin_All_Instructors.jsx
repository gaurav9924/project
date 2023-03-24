import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams ,useGridApiRef  } from '@mui/x-data-grid';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./AdminStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";







const Admin_All_Instructors = () => {
  const [buttonText, setButtonText] = useState('Block');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiRef = useGridApiRef();
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      // setLoading(true);

      const response = await axios.get(
        "https://localhost:7037/api/Admin/GetAllInstructors?PageNumber=1&PageSize=10",
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

      // setLoading(false);
    };

    loadPost();
  }, [posts]);
 
  
const columns = [
  { field: 'instructorId', headerName: 'Instructor Id', width: 220 },
  { field: 'fullName', headerName: 'Full Name', width: 140 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'mobile', headerName: 'Mobile', width: 140 },
  {
    field: 'experience',
    headerName: 'Experience',
   type:"number",
    width: 100,
  },
  {
    field: 'specialization',
    headerName: 'Specialization',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    
  },  {
    field: 'blockUser',
    headerName: 'Status',
    sortable: false,
    renderCell: (params) => {
    
      const onClick = (e) => {
        debugger
        e.stopPropagation(); // don't select this row after clicking
console.log(params.row.userId )
var tokenData = localStorage.getItem("tokenData");

     
fetch(`https://localhost:7037/api/Admin/ToggleBlockUser?UserId=${params.row.userId }`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
        body: JSON.stringify(),
      }).then((result) => {
        debugger;
        // console.log("result", result);
        result.json().then((resp) => {
          // debugger
          console.log("resp", resp);

          if (resp.isSuccess == true) {
            //    debugger;
            toast.success(resp.message);
          } else {
            toast.error(resp.message);
          }
        });

        //  console.log(posts)

        // console.log(values);
        // action.resetForm();
      });
      // setButtonText('Unblock');
      // const handleUpdateRow = () => {
      //   setRows((prevRows) => {
      //     const rowToUpdateIndex = randomInt(0, rows.length - 1);
    
      //     return prevRows.map((row, index) =>
      //       index === rowToUpdateIndex ? { ...row, username: randomUserName() } : row,
      //     );
      //   });
      // };
      debugger
    
    
      };

      return <Button onClick={onClick} >{params.row.isActice?"block":"unblock" }</Button>;
    },

     
  }
];


  return (
    <div className="home">
      <Sidebar />
      <div className="container  my-3">
        <h1
          className="text-center shadow pb-2"
          style={{ color: "#c30d0d", fontFamily: "auto" }}
        >
          All Instructors
        </h1>
        <center>
          <div className="row mt-4">
            {/* <table className="table table-hover">
              <thead >
                <tr>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              {posts.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className="bg-light">{val.fullName}</td>
                    <td className="bg-light">{val.email}</td>
                    <td className="bg-light">{val.mobile}</td>
                  </tr>
                );
              })}
            </table> */}
            {/* <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">FullName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">College</th>
                  <th scope="col">Profile Pic</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.fullName}</td>
                      <td>{val.email}</td>
                      <td>{val.mobile}</td>
                      <td>{val.address}</td>
                      <td>{val.college}</td>
                      <td><img src={val.profilePicPath}/></td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}

<div style={{ height: 400, width: '100%' }} >
      <DataGrid 
      getRowId={(row) => row.instructorId}
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
  );
};

export default Admin_All_Instructors;
