import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import Sobre from "../pages/sobre/index";
import User from "../pages/user/index";


const Rotas = ()=>{
    <BrowserRouter>
        <Routes>  

            
            <Route element={<Home/>} path="/" exact></Route>
            <Route component = {Sobre} path="/sobre" exact ></Route>
            <Route component ={User} path ="/user" exact></Route> 
        </Routes> 
    </BrowserRouter>
   
}

export default Rotas;