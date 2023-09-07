import { useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";

/* eslint-disable react/prop-types */
export default function CartCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[327px] w-full h-auto">
      <div className="w-full h-full relative bg-white rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="flex justify-center w-full h-[185px] bg-blue-50 rounded-lg">
            <img src={product.img} alt={product.desc} />
          </div>
        </div>
        <p className="w-full text-black text-base font-normal leading-snug mb-8">{product.desc}</p>
        <div className="flex items-center justify-between">
          <span className="flex h-full items-end justify-end text-black text-lg font-medium leading-[30px]">Qty: {product.quantity}</span>
          <span className="flex h-full items-end justify-end text-black text-lg font-medium leading-[30px]">${product.price}</span>
        </div>
        <button className="bg-orange-500 py-2 px-6 rounded-lg" onClick={() => dispatch(removeFromCart(product.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}
