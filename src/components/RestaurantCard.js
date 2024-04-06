import { CDN_URL } from "../utility/constants";


const RestaurantCard=(props) =>{
    const{resData}=props; //de
  
    const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;  // optional channing
    const{deliveryTime}=resData?.info.sla;
    return (
      <div className="res-cards">
         <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>
        <h5>{deliveryTime} minutes</h5>
      </div>
    )
  };

  export default RestaurantCard;