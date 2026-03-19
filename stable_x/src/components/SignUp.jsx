import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const SignUp = () => {
     const[username,setUsername]=useState("")
     const[email,setEmail]=useState("")
     const[phone,setPhone]=useState("")
     const[password,setPassword]=useState("")


     const[loading,setLoading]=useState("")
     const[success,setSuccess]=useState("")
     const[error,setError]=useState("")


const submit=async(e)=>{
     e.preventDefault()
     setLoading("Please wait as we create your account.....")


     try {
          
     const data=new FormData
     
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)
     
      const response=await axios.post("https://isaacndirangu.alwaysdata.net/api/signup",data)    

     setLoading("")
     setSuccess(response.data.message)
     setEmail("")
     setPassword("")
     setPhone("")
     setUsername("")


     }
     
     catch (error) {
          

     setLoading("")
     setEmail(error.message)
     }



}










  return (
    <div className='row justify-content-center'>
     <div className='col-md-6 card shadow'>
     <form action="" onSubmit={submit}> 

          <h1>Sign Up</h1>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


     <br />
     <input type="text" placeholder='Enter Your Username' className='form-control' required value={username} onChange={(e)=>setUsername(e.target.value)} />
     <br /><br />
     <input type="email" placeholder='Enter Your Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <br /><br />
     <input type="tel" placeholder='Enter Your Phone number' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
     <br /><br />
     <input type="password" placeholder='Enter Your Password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <br /><br />
     <input type="submit" value="Submit" id='jamna' className='form-control'  />

     <b> <p >Already have an Account?<Link to="/SignIn">Sign In</Link></p></b>



     </form>



     </div>


    </div>
  )
}

export default SignUp