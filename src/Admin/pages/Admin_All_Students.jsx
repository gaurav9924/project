import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./AdminStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";







const Admin_All_Students = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blockedbutton, SetBlockedButton] = useState();
  useEffect(() => {
    debugger;
    const loadPost = async () => {
      var tokenData = localStorage.getItem("tokenData");
      // setLoading(true);

      const response = await axios.get(
        "https://localhost:7037/api/Admin/GetAllStudents?PageNumber=1&PageSize=5",
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
    { field: 'studentId', headerName: 'ID', width: 220 },
    { field: 'fullName', headerName: 'Full Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'mobile', headerName: 'Mobile', width: 140 },
    {
      field: 'college',
      headerName: 'College',
     
      width: 120,
    },
    {
      field: 'address',
      headerName: 'Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 170,
      
    },
    {
      field: 'blockUser',
      headerName: 'Status',
      sortable: false,
      renderCell: (params) => {
      
        var onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  console.log(params.row.userId )
  
  var tokenData = localStorage.getItem("tokenData");
       
  fetch(`https://localhost:7037/api/Admin/ToggleBlockUser?UserId=${params.row.userId}`, {
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
         
        SetBlockedButton(params.row.isActice);
        
        };
        
  
        return <Button onClick={onClick}>{params.row.isActice?"block":"unblock" }</Button>;
      },
  
       
    }
  ];
  useEffect(() => {
 console.log(  "blocked")

  }, [blockedbutton]);
  

  return (
    <div className="home">
      <Sidebar />
      <div className="container  my-3">
        <h1
          className="text-center shadow pb-2"
          style={{ color: "#c30d0d", fontFamily: "auto" }}
        >
          All Students
        </h1>
        <center>
          <div className="row mt-4">
          

<div style={{ height: 400, width: '100%' }} >
      <DataGrid 
      getRowId={(row) => row.studentId}
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

export default Admin_All_Students;
