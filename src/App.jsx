import "./App.css";
import CartCard from "./CartCard";
import ProductCard from "./ProductCard";
import { productCardDetails } from "./constants/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyCart } from "./redux/cartSlice";

function App() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <>
      {/* ==========PRODUCTS========== */}
      <div className="relative">
        <div className="h-full flex items-center justify-between mb-8">
          {productCardDetails?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* ==========CART========== */}
        <div className="bg-black w-full min-h-[335px] rounded-lg text-white pb-12">
          <div className="flex items-center justify-center gap-2 py-8">
            <h3 className="text-2xl">Cart</h3>
            <span className="text-2xl">{products.length}</span>
          </div>
          <div>
            <button className="bg-red-600 py-2 px-6 rounded-lg" onClick={() => dispatch(emptyCart())}>
              Empty Cart
            </button>
            <div className="grid grid-cols-3 place-items-center gap-y-6">
              {products.map((product, idx) => (
                <CartCard key={idx} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
