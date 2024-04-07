 import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
 import { useEffect, useState } from "react";
 
 
 
 const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
     
    useEffect(()=>{
     fetchData();
    },[]);
    
   

    const fetchData= async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
       
         const json=await data.json();

         console.log(json);
         //optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        
       
        return listOfRestaurant.length===0 ?<Shimmer/>:(
            <div className="body">
              <div className="filter">
                <button
                  className="filter-btn"
                  onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                      (res) => res.info.avgRating > 4.3
                    );
                    setListOfRestaurant(filteredList);
                  }}
                >
                  Top Rated Restaurant
                </button>
              </div>
              <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
              </div>
            </div>
          );
        };

  export default Body;