// how we make the card dynamically by using the props
//props->  javascript argument passing in function

import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// chunking
// -> Code Splitting
//Dynamic Building
//lazy loading
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));

const AppLayout=()=>{
  return ( <div className="app">
    <Header/>
    <Outlet/>
  </div>
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