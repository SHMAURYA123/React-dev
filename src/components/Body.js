import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utility/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json,listOfRestaurant);
    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
   return <h1>Look's Like your Offline!! Please check your Internet Connection</h1>
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex  ">
        <div className="search  m-4 p-4 " >
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
        />

          <button className="px-2  bg-green-400 m-2 rounded-md"  onClick={()=>{
            const filteredList=listOfRestaurant.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filteredList); 
          }}>Search</button>
        </div>
        <div className=" m-4 p-4 flex items-center rounded-md ">
        <button
          className="px-4 py-2 bg-gray-100"
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
        
      </div>
      <div className=" flex flex-wrap ">
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
