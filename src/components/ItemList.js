import { CDN_URL } from "../utility/constants";

const ItemList=({items})=>{
    // console.log(items);
    return(
        <div>
             {items.map((item)=>
             (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                <span className="font-semibold text-xl ">{item.card.info.name}</span> 
                <br/>
                <span className="font-bold font-sans"> ₹{item.card.info.price
                    ?item.card.info.price/100
                    :item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-sm mt-auto font-sans">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 ">
                <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
                <div className=" absolute mb-4">
                <button className=" w-[100px]  mx-4 rounded-lg bg-white text-green-700 hover:shadow-md">ADD +</button>
                </div>
                </div>
                </div>
             ))}
        </div>
    );
};
export default ItemList;