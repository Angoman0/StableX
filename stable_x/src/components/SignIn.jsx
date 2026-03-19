import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

     const[email,setEmail]=useState("")
     const[password,setPassword]=useState("")

    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    
    //hook used to redirect a user
//     const navigate=useNavigate();
const navigate=useNavigate()
//function to send data to database

  const submit =async (e)=> {

    e.preventDefault()
    setLoading("Please wait......")
    // setSuccess("")
    // setError(error)


  try{
  
  const data =new FormData()

  data.append("email",email)
  data.append("password",password)
   
  const response=await axios.post("https://isaacndirangu.alwaysdata.net/api/signin",data)

    // setSuccess(response.data.message)
    setLoading("") // after successful posting, clear the loading message
    setEmail("")
    setPassword("")

    if (response.data.user){
      //if user is found,store user details in localstorage

      localStorage.setItem("user",JSON.stringify(response.data.user)); //saves user to the chrome

      setSuccess(response.data.message);

      //redirect to /getproducts component

      setTimeout(() => {
        navigate("/")
        
      },2000);

    }


    else{
        //user Not Found,Show Error message

        setError(response.data.message)


    }


}
catch (error) {

  setLoading("");
  setError(error.data.message);

}
  }







  return (
    <div className='row justify-content-center'>
     
     <div className='col-md-6 card shadow'>
<form action="" onSubmit={submit}>
          <h1>Login</h1>


        <p className='text-warning'>{loading}</p>
        <p className='text-danger'>{error} </p>
        <p className='text-success'>{success}</p>

      
     <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail (e.target.value) }/>
     <br /><br />
     <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e)=>setPassword (e.target.value) }/>
     <br />
     <input type="submit" value='Submit' className='form-control' id='jamna' />

     <b><p>Don't have an account<Link to="/signup">Sign up</Link></p></b>



</form>

     </div>


    </div>
    
  )
}

export default SignIn