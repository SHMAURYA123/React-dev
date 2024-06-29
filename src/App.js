// how we make the card dynamically by using the props
//props->  javascript argument passing in function

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utility/UserContext";
import { Provider } from "react-redux";
import appStore from "./utility/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// chunking
// -> Code Splitting
//Dynamic Building
//lazy loading
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));



const AppLayout=()=>{
  
  const[userName,setUserName]=useState();
//Authentication
useEffect(()=>{
  //Make an API call and send username and password
  const data={
    name:"Sourabh Maurya",
  };
  setUserName(data.name);
},[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
    <Header/>
    <Outlet/>
  </div>
  </UserContext.Provider>
  </Provider>
)};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading1......</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
       path:"/cart",
       element:<Cart/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
    ],
    
  },
  
]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<RouterProvider router={appRouter}/>);