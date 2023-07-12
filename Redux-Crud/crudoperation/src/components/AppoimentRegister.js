import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AppoimentRegister.css'


export default function AppoimentRegister() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleuser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    async function handlesubmit(e) {
        e.preventDefault()
        try {

            if (user.name != "" && user.email != "" && user.phone != "" && user.password != "") {
                await axios.post(" http://localhost:5000/comments", user)
                console.log(user)
                alert("Registration successfully")
                navigate("/Login")
            } else {
                alert("all fileds are required")
            }

        } catch (error) {
            console.log("something went wrong")
        }

    }


    return (
        <div className='mainContainer'>

            <div id='main'>

                <div className='sign'>
                    <h2>Signup</h2>
                </div>

                <form className='form'>

                    <input type="text" className='input_filed' placeholder='Enter Name' value={user.name} name='name' onChange={handleuser}></input><br></br>

                    <input type="email" className='input_filed' placeholder='Enter Email' value={user.email} name='email' onChange={handleuser} ></input><br></br>

                    <input type="number" className='input_filed' placeholder='Enter Number' value={user.phone} name='phone' onChange={handleuser} ></input><br></br>

                    <input type="password" className='input_filed' placeholder='Enter Password' value={user.password} name='password' onChange={handleuser} ></input><br></br>

                    <button type='submit' className='btn-primary' onClick={handlesubmit}>Signup</button><br></br>

                    <div className='account'>
                        <Link to='/Login'>Alredy have an Account</Link>
                    </div>

                </form>


            </div>
        </div>

    )

}
