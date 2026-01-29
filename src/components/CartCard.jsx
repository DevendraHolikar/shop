import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../utils/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartCard = (props) => {
  const { discountPercentage, thumbnail, title, brand, price, id, quantity } = props.cardItem;
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
    <div className="flex gap-4 md:gap-0 items-start md:items-center hover:bg-base-100 mt-8  md:p-4 flex-col md:flex-row">
      <div className="flex w-full md:w-2/5 gap-4 flex-col md:flex-row">

    
        <div className="w-40 md:w-20 m-auto md:m-0">
          <Link to={"/productsdetails/" + id}><img className="w-full md:w-24 bg-base-200" src={thumbnail} alt="" /></Link>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <Link to={"/productsdetails/" + id}><span className="font-bold text-sm">{title}</span></Link>
          <span className="text-xs">{brand}</span>
          <span className="text-xs">Discount {discountPercentage}%</span>
        </div>


      </div>
      <div className="flex justify-items-start md:justify-center w-full md:w-1/5">
        <div className="flex gap-2 w-full justify-center">
          <button onClick={handleQntCountMin} className="btn btn-soft w-10">
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
          <button onClick={handleQntCountPluss} className="btn btn-soft w-10">
            +
          </button>
        </div>
      </div>
      <span className="flex gap-2 flex-row md:flex-col justify-between md:items-center w-full md:w-1/5 font-semibold text-sm">Main Price<span className="text-xs">${price}</span></span>
      <span className="flex gap-2 flex-row md:flex-col justify-between md:items-center w-full md:w-1/5 font-semibold text-sm">Main Price + Q<span className="text-xs">${Math.round((price * qntCount) * 100) / 100}</span>
      </span>
      <button
        onClick={() => handleRemoveCart(id)}
        className="btn btn-active btn-error p-1 w-full md:w-14 "
      >
        <svg
          className="text-white w-6 h-4 m-auto "
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
