import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Horses = () => {
  
  const[search,setSearch]=useState("")
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
          {/* <input type="text" placeholder='Search.......'value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control mb-3' /> */}

          <div  className='card shadow  mb-3 ' id='bg'>

            <img src={image_url + product.product_photo} alt="cake" className='product_img mt-4 w-100 h-100 '/>

            <div id='b' className='card-body'>
              <h5 id='' className=''>{product.product_name}</h5>
              <p  id='a'className=''>{product.product_description.substring(0,60)}</p>
              <p id='mark' className=''>{product.product_cost}/hour</p>
              <input type="button" className='btn btn-success w-100'value="Rent Now" onClick={()=>navigate("/mpesa",{state:{product}})}/>
            </div>

          </div>

        </div>
))}


    </div>
  )
}

export default Horses

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Horses = () => {
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState("");
//   const [error, setError] = useState("");
//   const [products, setProducts] = useState([]);

//   const navigate = useNavigate();
//   const image_url = "https://isaacndirangu.alwaysdata.net/static/images/";

//   // Function to fetch products
//   const fetchProducts = async () => {
//     setLoading("Please wait as we retrieve your products");

//     try {
//       const response = await axios.get("https://isaacndirangu.alwaysdata.net/api/getproductdetails");
//       setProducts(response.data);
//       setLoading("");
//     } catch (error) {
//       setLoading("");
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Filter products based on search input
//   const filteredProducts = products.filter(
//     (product) =>
//       product.product_name.toLowerCase().includes(search.toLowerCase()) ||
//       product.product_description.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className='row'>
//       <h1>Browse Horses</h1>

//       {/* Loading and Error Messages */}
//       <p className='text-warning'>{loading}</p>
//       <p className='text-danger'>{error}</p>

//       {/* Search Bar */}
//       <div className='col-12 mb-3'>
//         <input
//           type="text"
//           placeholder='Search horses by name or description...'
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className='form-control w-30'
//         />
//       </div>

//       {/* Products */}
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <div key={product._id} className='col-md-3 mb-3 d-flex justify-content-center'>
//             <div className='card shadow w-100' id='bg'>
//               <img
//                 src={image_url + product.product_photo}
//                 alt={product.product_name}
//                 className='product_img mt-4 w-100 h-100'
//                 style={{ objectFit: "cover", height: "200px" }}
//               />

//               <div className='card-body'>
//                 <h5>{product.product_name}</h5>
//                 <p>{product.product_description.substring(0, 60)}</p>
//                 <p>{product.product_cost}/hour</p>
//                 <input
//                   type="button"
//                   className='btn btn-success w-100'
//                   value="Rent Now"
//                   onClick={() => navigate("/mpesa", { state: { product } })}
//                 />
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className='text-center'>No horses found</p>
//       )}
//     </div>
//   );
// };

// export default Horses;