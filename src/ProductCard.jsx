import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        desc: product.description,
        img: product.image,
        price: product.price,
        quantity: 1,
      })
    );
  };
  return (
    <div className="max-w-[327px] w-full h-auto">
      <div className="w-full h-full relative bg-black rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="flex justify-center w-full h-[185px] bg-blue-50 rounded-lg">
            <img src={product.image} alt={product.description} />
          </div>
        </div>
        <p className="w-full text-white text-base font-normal leading-snug mb-8">{product.description}</p>
        <button
          className="w-full h-auto flex items-center justify-between px-4 py-3 bg-blue-500 rounded-lg border border-blue-500"
          onClick={handleAddToCart}
        >
          <span className="text-white text-base font-semibold leading-snug">Add to Cart</span>
          <span className="flex h-full items-end justify-end text-white text-lg font-medium leading-[30px]">${product.price}</span>
        </button>
      </div>
    </div>
  );
}
