import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart({ themeStyles }) {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  const theme = useSelector((state) => state.theme.theme);
  const styles = themeStyles[theme];

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className={`${styles.background} min-h-screen`}>
      <div
        className={`${styles.background} h-[100%] mx-auto flex flex-col md:flex-row justify-center`}
      >
        {cart.length > 0 ? (
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8">
            <div className="lg:w-[60%]">
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    themeStyles={themeStyles}
                  />
                );
              })}
            </div>

            <div className="md:w-[40%] w-full flex flex-col justify-between gap-8">
              <div className="mt-20">
                <div className=" text-xl font-semibold text-green-700 uppercase">
                  Your Cart
                </div>
                <div className=" text-5xl font-semibold text-green-700 uppercase mb-4">
                  Summary
                </div>
                <p className={`font-semibold ${styles.text} text-[18px]`}>
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="mb-20">
                <p className={`${styles.text} text-xl font-bold mb-5`}>
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>
                <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d] border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6">
            <h1 className={`text-xl font-semibold ${styles.text}`}>
              Cart Empty!
            </h1>

            <NavLink to={"/"}>
              <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
