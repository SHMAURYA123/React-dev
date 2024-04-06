 import RestaurantCard from "./RestaurantCard";
 import resList from "../utility/mockdata";
 import { useState } from "react";
 import resList from "../utility/mockdata";
 
 
 const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState(resList);

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