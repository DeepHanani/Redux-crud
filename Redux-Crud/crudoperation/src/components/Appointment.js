import { Button } from '@mui/material';
import React, { useState } from 'react'
import DisplayData from './DisplayData';
import Model from './Model';
import './Appoiment.css'

export default function Appointment() {

  const [array, setarray] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setId(-1);
  };

  const myid = (id) => {
    console.log(id,"IDD")
    setId(id)
    handleClickOpen();
  }

  return (
    <div className='main'>
      <button variant="outlined" onClick={handleClickOpen} className='addBtn'>
        Add Details
      </button>

      <DisplayData rows={array} setId={myid} />

      <Model
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        id={id}
        setId={setId}
        array={array}
        setarray={setarray}
      />
    </div>
  )
}