import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utility/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handledClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white border rounded-lg m-2 p-2"
          onClick={handledClearCart}
        >
          Clear Cart
        </button>
         {cartItems.length===0&& <h1> Cart is empty. Add Items to the cart !</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
