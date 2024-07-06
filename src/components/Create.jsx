import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate =  useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductsHandler = (e) => {
    e.preventDefault();
    // refresh hone se rokne k liye
    if (
      title.trim().length < 1 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5 ||
      discription.trim().length < 5
    ) {
      alert("each input have must 4 characters");
      return;
    }
    const info = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products , info]);
    localStorage.setItem("products",JSON.stringify([...products , info]));
    toast.success("Product Added Successfully")
    navigate("/");

  };

  return (
    <form
      onSubmit={AddProductsHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Products</h1>

      <input
        type="url"
        placeholder="image link"
        className="text-1xl rounded w-1/2 bg-zinc-300 p-3 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="title"
        className="text-1xl rounded w-1/2 bg-zinc-300 p-3 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className=" w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl rounded w-[45%] bg-zinc-300 p-3 mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="price"
          className="text-1xl rounded w-[45%] bg-zinc-300 p-3 mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdiscription(e.target.value)}
        value={discription}
        placeholder="Enter Products Discription Here ..."
        className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className="py-3 px-5 border rounded border-blue-200 text-blue-300">
          Add New Products
        </button>
      </div>
    </form>
  );
};

export default Create;
