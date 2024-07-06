import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
// import  axios  from "../utils/axios";
import Loading from "./Loading";

const Details = () => {

   const navigate = useNavigate();
  const [products1, setproducts1] = useContext(ProductContext);
  const [products, setproducts] = useState(null)
const {id} = useParams ();
console.log(id);

const getsingleproduct =  async () => {
// try {
//   const {data} = await axios.get(`/products/${id}`) 
//   setproducts(data);
// } catch (error) {
//   console.log(error)
// }
};

useEffect(()=>{
  if(!products){
    setproducts(products1.filter((p) => p.id == id)[0]);
  }
  // getsingleproduct();
},[]); 


// for delete
const ProductDeleteHandler  = (id) =>{
 const filteredProducts = products1.filter((p) => p.id !== id)
 setproducts(filteredProducts);
 console.log(localStorage.getItem("products"),890);
 localStorage.setItem("products", JSON.stringify(filteredProducts))
 navigate("/")
};

console.log(products,123);
  return products? (
    <>
      <div className="w-[70%] h-screen  m-auto p-[10%] flex items-center  gap-5 px-2  justify-center">
      <img className="h-[70%] w-[50%] object-contain"
        src={`${products.image}`}
        alt=""
      />
      <div className="content gap-2 flex flex-col">
        <h1 className="text-3xl">{products.title}</h1>
        <h2 className="text-sm text-slate-300">{products.categroy}</h2>
        <h2 className="text-red-200">${products.price}</h2>
        <h3>{products.description}</h3>
        <Link  to={`/edit/${products.id}`} className="py-3 w-28 px-5 border rounded border-blue-200 text-blue-300">Edit</Link>
        <button onClick={() => ProductDeleteHandler(products.id)} className="py-3 w-28 px-5 border rounded border-red-200 text-red-300">Delete</button>
      </div>
    </div>
    </>
  
  ):<Loading/>
};

export default Details;
