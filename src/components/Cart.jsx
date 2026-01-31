import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart?.items || []);
  console.log()
  const [shippingValue, setShippingValue] = useState(10);
  const [promoInput, setPromoInput] = useState("");
  const [discount, setDiscount] = useState(0);

  const itemPlusQuantity = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const finalTotal =
    Math.round((itemPlusQuantity + shippingValue - discount) * 100) / 100;

  const handleShippingValue = (e) => {
    setShippingValue(Number(e.target.value));
  };

  const handlePromoCode = () => {
    const code = promoInput.trim().toUpperCase();

    let discountAmount = 0;

    if (code === "SAVE10") {
      discountAmount = 10;
    } else if (code === "SAVE20") {
      discountAmount = 20;
    } else {
      alert("Invalid promo code");
      return;
    }

    if (discountAmount >= finalTotal) {
      alert("Cart amount must be higher than discount");
      return;
    }

    setDiscount(discountAmount);
  };

  return (
    <div>
      <div className="max-w-[85rem] mx-auto mt-10">
        <div className="flex shadow-md my-10 gap-4 flex-col md:flex-row">
          <div className="w-full md:w-3/4 p-6  bg-base-300">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{items.length} Items</h2>
            </div>

            {items.length === 0 ? (
              <h2 className="text-center text-white mt-2">Your cart is empty!</h2>
            ) : (
              items.map((cardItem, index) => {
                return <CartCard key={index} cardItem={cardItem}></CartCard>;
              })
            )}

            <Link
              to={"/products"}
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div className="w-full md:w-1/4 p-6 bg-base-300">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {items.length}
              </span>
              <span className="font-semibold text-sm">
                ${itemPlusQuantity.toFixed(2)}
              </span>
            </div>
            <div className="flex-col flex">
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>

              <select
                value={shippingValue}
                onChange={handleShippingValue}
                className="select w-full"
              >
                <option value={10}>Standard shipping - $10.00</option>
                <option value={15}>Plus shipping - $15.00</option>
                <option value={20}>Pro shipping - $20.00</option>
              </select>
            </div>
            <div className="py-10 flex-col flex">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input  w-full"
              />
            </div>
            <button
              onClick={handlePromoCode}
              className="btn btn-secondary w-full"
            >
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${items.length === 0 ? "0" : finalTotal.toFixed(2)}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
