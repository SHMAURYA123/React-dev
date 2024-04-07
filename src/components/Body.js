 import RestaurantCard from "./RestaurantCard";
 import resList from "../utility/mockdata";
 import { useEffect, useState } from "react";
 import resList from "../utility/mockdata";
 
 
 const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState(resList);
     
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
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        };
       
        return (
            <div className="body">
              <div className="filter">
                <button
                  className="filter-btn"
                  onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                      (res) => res.info.avgRating > 4.4
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