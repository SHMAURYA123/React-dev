
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utility/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu=()=>{
  
   const {resId}=useParams();  // useparams give resId
     
   const resInfo=useRestaurantMenu(resId);
   const [showIndex,setShowIndex]=useState(null);
   // console.log(resInfo);
  
     if(resInfo==null) return <Shimmer/>;
     const {name, cuisines,costForTwoMessage,avgRatingString,totalRatingsString,areaName}=resInfo?.cards[2]?.card?.card?.info;
    const{slaString} =resInfo?.cards[2]?.card?.card?.info?.sla;
    const{itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   // console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);   
 
     const categories=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      c=> c?.card?.["card"]?.["@type"]===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   //  console.log(categories);
    
 return(
    <div className="text-center">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
           {cuisines.join(",")} - {costForTwoMessage} 
        </p>
        
        {categories.map((category,index)=>(
         //controlled component
         <RestaurantCategory 
         key={category?.card?.card?.title} 
         data={category?.card?.card}
         showItems={index===showIndex?true:false}
         setShowIndex={()=> setShowIndex(index)}
         />
        ))}
     </div>
 );
};
export default RestaurantMenu;