 import RestaurantCard from "./RestaurantCard";
 import resList from "../utility/mockdata";
 import { useState } from "react";
 
 
 const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState(
        [
            {
                "info": {
                  "id": "55272",
                  "name": "La Pino'z Pizza",
                  "cloudinaryImageId": "zk3cneuiyjqbxoaunpuh",
                  "locality": "Major Sudesh Kumar Marg",
                  "areaName": "Rajouri Garden",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "parentId": "4961",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 6.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "6.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                }
              },
              {
                "info": {
                  "id": "24194",
                  "name": "Domino's Pizza",
                  "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                  "locality": "Karol Bagh",
                  "areaName": "East Patel Nagar",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                  ],
                  "avgRating": 4.3,
                  "parentId": "2456",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "1.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                }
              },
              {
                "info": {
                  "id": "332202",
                  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                  "cloudinaryImageId": "pduijutxbxfsnb29kpyo",
                  "locality": "D Block",
                  "areaName": "Tagore Garden",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Ice Cream"
                  ],
                  "avgRating": 4.7,
                  "veg": true,
                  "parentId": "582",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "6.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                }
              },
              {
                "info": {
                  "id": "47853",
                  "name": "The Burger Club",
                  "cloudinaryImageId": "x7bcibhxfnrupph6bcft",
                  "locality": "Karol Bagh",
                  "areaName": "Karol Bagh",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "American",
                    "Beverages",
                    "Desserts"
                  ],
                  "avgRating": 4.2,
                  "parentId": "2285",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                } 
              },   
        ]);

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