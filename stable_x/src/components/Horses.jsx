import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Horses = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])


  const navigate=useNavigate()

  const image_url="https://isaacndirangu.alwaysdata.net/static/images/"

  // function to fetch the api
  const fetchProducts = async()=>{
    setLoading("Please wait as we retrieve your products")

    try {
      // call api
      const response=await axios.get("https://isaacndirangu.alwaysdata.net/api/getproductdetails")
      console.log("the response is", response);
      
      setProducts(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  };
  // end of function and callign of useEffect

  useEffect(()=>{
    fetchProducts()

  },[]);

  return (
    <div  className='row'>
        <h1>Browse Horses</h1>

        <p  className='text-warning'>{loading}</p>
        <p  className='text-danger'>{error}</p>

        {/* calling .map method to iterate thru each item  */}
        {products.map((product)=>(

 


        <div  className='col-md-3 justify-content-center'>

          <div  className='card shadow  mb-3 '>

            <img src={image_url + product.product_photo} alt="cake" className='product_img mt-4 w-100 h-100 '/>

            <div id='b' className='card-body'>
              <h5 id='' className=''>{product.product_name}</h5>
              <p  id='a'className=''>{product.product_description.substring(0,60)}</p>
              <p id='mark' className=''>{product.product_cost}</p>
              <input type="button" className='btn btn-success w-100'value="Purchase Now" onClick={()=>navigate("/mpesa",{state:{product}})}/>
            </div>

          </div>

        </div>
))}


    </div>
  )
}

export default Horses