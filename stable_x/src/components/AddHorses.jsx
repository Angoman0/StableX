import React, { use, useState } from 'react'
import axios from 'axios'
const AddHorses = () => {

  //initialising hooks

  const[product_name,setProductname]=useState("")
  const[product_description,setProductdescription]=useState("")
  const[product_cost,setProductcost]=useState("")
  const[product_photo,setProductphoto]=useState("")

//other hooks

const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")



const submit=async (e)=>{
e.preventDefault()
setLoading("Please wait......")


try {
  

const data=new FormData()
data.append("product_name",product_name)
data.append("product_description",product_description)
data.append("product_cost",product_cost)
data.append("product_photo",product_photo)


const response=await axios.post("https://isaacndirangu.alwaysdata.net/api/addproducts",data)

setLoading("")
setSuccess(response.data.message)
setProductname("")
setProductcost("")
setProductdescription("")
setProductphoto("")


} 

catch (error) {
  setLoading("")
  setError(error.data.message)
  
}


}




  return (
    <div className='row justify-content-center mt-3'>


      <div className='card shadow col-md-6' >
      <h1 className='m-3'>Add Horse</h1>

      



      <form action="" onSubmit={submit}>

      <p className='text-warning'>{loading}</p>
      <p className='text-success'>{success}</p>
      <p className='text-danger'>{error}</p>

      <input type="text" placeholder='Enter Product Name' className='form-control' value={product_name} onChange={(e)=>setProductname(e.target.value)} required/>
      <br /><br />

      <textarea name="" placeholder='Describe your Horse' id="" className='form-control' value={product_description} onChange={(e)=>setProductdescription(e.target.value)} required></textarea>
      <br /><br />

      <input type="number" placeholder='Enter Rent Per hour'  className='form-control' value={product_cost} onChange={(e)=>setProductcost(e.target.value)} required/>

      <br /><br />
       <b>Upload Horse Photo</b>
      <input type="file" className='form-control' accept='image/*' onChange={(e)=>setProductphoto(e.target.files[0])} required />
    {/* accept is used to allow files w image extesnions only */}
      <br /><br />

      <input type="submit" value="Upload Horse" className='form-control bg-info' />













      </form>




      </div>


    </div>
  )
}

export default AddHorses