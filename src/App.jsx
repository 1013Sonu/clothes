import React from "react";
import {Routes,Route, Link, useLocation} from "react-router-dom"
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { ToastContainer } from "react-toastify";



const App = () => {

  const {search,pathname } = useLocation();
  return (
    <div className="w-screen h-screen flex gap-16">
      {(pathname !="/" || search.length>0  ) && (
        <Link to="/" className="text-red-300 justify-center items-center flex gap-1 font-bold absolute left-[16%] top-[3%]">HOME
        <img className="h-5" src="./home.png" alt="" />
        </Link>
      )}
      
<Routes>
<Route  path = "/" element = {<Home/>} />
<Route  path = "/create" element = {<Create/>} />
<Route  path = "/details/:id" element = {<Details/>} />
<Route  path = "/edit/:id" element = {<Edit/>} />
{/* <ToastContainer /> */}

</Routes>
    </div>
  );
};

export default App;
