import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu=()=>{
  const [resInfo,setResInfo]=useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10583&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
   setResInfo(json.data);
     };
     if(resInfo==null) return <Shimmer/>;
     const {name, cuisines,costForTwo,avgRatingString,totalRatingsString,areaName}=resInfo?.cards[2]?.card?.card?.info;
    const{slaString} =resInfo?.cards[2]?.card?.card?.info?.sla;
    const{itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    
 return(
    <div className="menu">
        <h1>{name}</h1>
        <h2>{avgRatingString} ({totalRatingsString})  . {costForTwo}</h2>
        <h4>{cuisines.join(",")} </h4>
        <h4>{areaName}</h4>
        <h5>{slaString}</h5>

        
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) =>(
          <li>{item.card.info.name}</li>
          ))}
            
        </ul>
    </div>
 );
};
export default RestaurantMenu;