

import React from "react";
import ReactDOM  from "react-dom/client";

const Header=()=>{
  return ( 
  <div className="header">
    <div className="logo-container">
     <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"/> </div>
  
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
  </div>
  </div>
)};

const RestaurantCard=() =>{
  return (
    <div className="res-cards">
       <img className="res-logo" 
      alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rwks2yva4dbppsekgw6a"/>
      <h1>Bikanervala</h1>
      <h3>North Indian</h3>
      <h4>4.5 stars</h4>
      <h5>25 minutes</h5>
    </div>
  )
};

const Body=()=>{
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
      </div>
    </div>
  )
}
const AppLayout=()=>{
  return ( <div className="app">
    <Header/>
    <Body/>
  </div>
)};


  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<AppLayout/>);