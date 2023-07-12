import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Model(props) {


  

  const [data, setData] = React.useState({
    title: "",
    description: "",
    Id: "",
  });


  React.useEffect(() => {

    if (props.id != -1) {
      fetch(`https://itchy-plum-caridea.cyclic.app/api/tutorials/${props.id}`)
        .then(y => y.json())
        .then(y => {
          setData(y);
        })

    }

  }, [props.id])


  const formHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const saveData = () => {

    let url = "https://itchy-plum-caridea.cyclic.app/api/tutorials";
    let method = "post";

    if (props.id != -1) {
      url = `https://itchy-plum-caridea.cyclic.app/api/tutorials/${props.id}`;
      method = "PUT"

    }

    fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then(y => y.json()).then(y => {
      props.setId(-1);
      props.handleClose();
      setData('')

    })

  }


  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>

        <TextField
          autoFocus
          margin="dense"
          id="title"
          name='title'
          label="title"
          type="text"
          fullWidth
          variant="standard"
          onChange={formHandler}
          value={data.title}
        />

        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="description"
          type="text"
          name='description'
          fullWidth
          variant="standard"
          value={data.description}
          onChange={formHandler}
        />

      </DialogContent>
      
      <DialogActions>
        <Button onClick={saveData}>Save</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}