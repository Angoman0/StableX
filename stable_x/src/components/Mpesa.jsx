import React, { useState } from 'react'
import { Await, useLocation } from 'react-router-dom'
import axios from 'axios'
const Mpesa = () => {


    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const[phone,setPhone]=useState("")


    const{product}=useLocation().state || {} //helps receive a product...curyl brackets are used bcus its like we are unboxing that product from getproducts...hyo state imeekwa apo ni enye iliekwa kwa getproducts....|| has been used ndo product ikiwa haiko inasema product undefined
    const image_url="https://isaacndirangu.alwaysdata.net/static/images/"


    const submit= async(e)=>{
      e.preventDefault()
      setLoading("Please wait as we process your payment")
    



    try {
      const data=new FormData()
        
      data.append("phone",phone)
      data.append("amount",product.product_cost)
     


        const response=await axios.post("https://isaacndirangu.alwaysdata.net/api/mpesa_payment",data)
      setLoading("")

      setSuccess(response.data.message)

      
    } catch (error) {

      setError(error.message)
      setLoading("")
      
    
}
    }

  return (
    <div className='row justify-content-center'>
      <h1>Mpesa payment-Lipa na Mpesa</h1>
      
      <img src={ image_url + product.product_photo} alt="cake" className='product_image'/> 
      <p className='text-success'>{product.product_name}</p>
      <p className='text-secondary'>{product.product_description}</p>
      <p className="text-warning">{product.product_cost}</p>
       
      

      <div className='col-md-6 card shadow '>
        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          



          <input type="tel" className='form-control' placeholder='Enter  phone  starting with +254' value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          <br />
          <input type="button" className='btn btn-secondary w-100 mb-3' value="Make Payments" />

        </form>


      </div>
    </div>
  )
}

export default Mpesa