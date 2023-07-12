import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {

  const [data, setdata] = useState({
    email: "",
    password: ""
  })
  const [auth, setAuth] = useState([]);

  const naviget = useNavigate()

  useEffect(() => {

    axios.get("http://localhost:5000/comments")
      .then(y => {
        console.log(y.data);
        setAuth(y.data);
      })

  }, []);

  const handlelogin = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const input = auth.find((item) => {
      return item?.email == data?.email && item?.password == data?.password;
    })
    console.log(input, "input")

    if(input){
      naviget("/Appoiment")
    }else{
      alert('user is Not Valid')
    }

  }


  return (

    <div className='main-Contener'>

      <div className='childContener'>

        <div className='login'>
          <h2>Login</h2>
        </div>

        {/* <div className='form'> */}
        <form className='form' autocomplete="off" onSubmit={(e) => { onSubmit(e) }} >

          <input
            type="text"
            className='filed'
            placeholder='Enter Email'
            name='email'
            onChange={handlelogin}
            autocomplete="off"
          ></input><br></br>

          <input
           type="password"
           className='filed'
           placeholder='Enter Password'
           name='password'
           onChange={handlelogin}></input><br></br>

          <button type='submit' className='LoginBtn'  >Login</button><br></br>

        </form>

      </div>

    </div>



  )
}
