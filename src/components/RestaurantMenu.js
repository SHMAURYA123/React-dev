import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utility/constants";

const RestaurantMenu=()=>{
  const [resInfo,setResInfo]=useState(null);
   const {resId}=useParams();  // useparams give resId
     
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API+ resId);

    const json = await data.json();

    console.log(json);
   setResInfo(json.data);
     };
     if(resInfo==null) return <Shimmer/>;
     const {name, cuisines,costForTwoMessage,avgRatingString,totalRatingsString,areaName}=resInfo?.cards[2]?.card?.card?.info;
    const{slaString} =resInfo?.cards[2]?.card?.card?.info?.sla;
    const{itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    
 return(
    <div className="menu">
        <h1>{name}</h1>
        <h2>{avgRatingString} ({totalRatingsString})  . {costForTwoMessage}</h2>
        <h4>{cuisines.join(",")} </h4>
        <h4>{areaName}</h4>
        <h5>{slaString}</h5>

        
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) =>(
          <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
          ))}
            
        </ul>
    </div>
 );
};
export default RestaurantMenu;