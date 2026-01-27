import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../utils/cartSlice";
import { useState } from "react";

const CartCard = (props) => {
  const { thumbnail, title, brand, price, id, quantity } = props.cardItem;
  const dispatch = useDispatch();
  const handleRemoveCart = (id) => {
    dispatch(removeItem(id));
  };
  const [qntCount, setQntCount] = useState(quantity);

  const handleQntCountPluss = () => {
    const newQty = qntCount + 1;
    setQntCount(newQty);
    dispatch(updateQuantity({ id, quantity: newQty }));
  };
  const handleQntCountMin = () => {
    if (qntCount <= 1) return;
    const newQty = qntCount - 1;
    setQntCount(newQty);
    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  return (
    <div className="flex items-center hover:bg-base-300 -mx-8 px-8 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={thumbnail} alt="" />
        </div>
        <div className="flex flex-col justify-start ml-4 gap-1">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-xs">{brand}</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <div className="flex gap-2">
          <button onClick={handleQntCountMin} className="btn btn-soft">
            −
          </button>
          <input
            value={qntCount}
            onChange={(e) => setQntCount(e.target.value)}
            type="number"
            min={1}
            placeholder="Qty"
            className="input w-12"
          />
          <button onClick={handleQntCountPluss} className="btn btn-soft">
            +
          </button>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${Math.round((price * qntCount) * 100) / 100}
      </span>

      <button
        onClick={() => handleRemoveCart(id)}
        className="btn btn-active btn-error p-1"
      >
        <svg
          className="text-white w-6 h-6 m-auto "
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CartCard;
