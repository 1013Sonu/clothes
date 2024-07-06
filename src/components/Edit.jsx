import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title:"",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const ChangeHandler =(e)=>{
// console.log(e.target.name , e.target.value);

setproduct({...product,[e.target.name]: e.target.value})
  }

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductsHandler = (e) => {
    e.preventDefault();
    // refresh hone se rokne k liye
    if (
      product.title.trim().length < 1 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5
    ) {
      alert("each input have must 4 characters");
      return;
    }

    console.log(product);
    const pi = products.findIndex((p) => p.id === id);
    const copyData = [...products]
    copyData[pi] = {...products[pi], ...product}
    console.log(product,pi)
  
    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
  };

  return (
    <form
      onSubmit={AddProductsHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Products</h1>

      <input
        type="url"
        placeholder="image link"
        className="text-1xl rounded w-1/2 bg-zinc-300 p-3 mb-3"
        name="image"
        onChange={ ChangeHandler}
        value={product && product.image}
      />

      <input
        type="text"
        placeholder="title"
        className="text-1xl rounded w-1/2 bg-zinc-300 p-3 mb-3"
        name="title"
        onChange={ ChangeHandler}
        value={product && product.title}
      />

      <div className=" w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl rounded w-[45%] bg-zinc-300 p-3 mb-3"
          name="category"
        onChange={ ChangeHandler}
          value={ product && product.category}
        />

        <input
          type="number"
          placeholder="price"
          className="text-1xl rounded w-[45%] bg-zinc-300 p-3 mb-3"
          name="price"
          onChange={ ChangeHandler}
          value={ product && product.price}
        />
      </div>
      <textarea
         name="description"
         onChange={ ChangeHandler}
        placeholder="Enter Products Discription Here ..."
        value={product && product.description}
        className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className="py-3 px-5 border rounded border-blue-200 text-blue-300">
          Edit Products
        </button>
      </div>
    </form>
  );
};

export default Edit;
