import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  // console.log(products);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category === "undefined")
      setfilteredProducts(products);
    if (category !== "undefined") 
    // getproductscategory();
    setfilteredProducts(products.filter((p) => p.category === category))
  }, [category, products]);

  console.log(filteredProducts,345);
  return products ? (
    <>
      <Nav />

      <div className="h-fit w-[85%] pt-5 flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              className="card p-5 border shadow rounded w-[20%] h-[50vh] flex justify-center items-center flex-col"
            >
              <div className="hover:scale-110 w-full h-[80%] bg-no-repeat bg-contain bg-center">
                <img
                  className="h-full py-6 w-full object-contain"
                  src={p.image}
                  alt=""
                />
              </div>

              <h1>{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
