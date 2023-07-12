import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Appoiment.css'

export default function DisplayData(data) {
  const [rows, setRows] = useState([]);
  console.log(data, 'dtaaaaa')


  const getallData = () => {
    fetch("https://itchy-plum-caridea.cyclic.app/api/tutorials").then(y => y.json())
      .then(y => {
        setRows(y)
      });
  }

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 300
    },
    {
      field: 'title', headerName: 'title', width: 130
    },
    { field: 'description', headerName: 'description', width: 330 },

    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      renderCell: (params) => {

        // console.log(params);
        // you will find row info in params
        return (
          <button className='deletBtn' onClick={() => {

            fetch(`https://itchy-plum-caridea.cyclic.app/api/tutorials/${params.row.id}`, {
              method: "delete"
            }).then(y => y.json())
              .then(y => {

                getallData();
                alert("delete sucssecfully");
              });
          }}>Delete</button>)
      }
    },

    {
      field: "Edit",
      headerName: "Edit",
      width: 90,
      renderCell: (params) => {

        // console.log(params);
        // you will find row info in params
        return (<button className='editBtn' onClick={() => { data.setId(params.row.id) }}>Edit</button>)
      }
    }

  ];



  useEffect(() => {

    getallData();

  }, [data])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}

      />
    </div>
  )
}