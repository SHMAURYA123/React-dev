import { CDN_URL } from "../utility/constants";


const RestaurantCard=(props) =>{
    const{resData}=props; //de
   
    const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;  // optional channing
    const{deliveryTime}=resData?.info.sla;
    return (
      <div className="m-4 p-4 w-[350px] bg-gray-100 rounded-lg hover:bg-gray-200">
         <img className="rounded-lg " alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h1 className="font-bold py-4 text-lg">{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>
        <h5>{deliveryTime} minutes</h5>
      </div>
    )
  };

  export default RestaurantCard;