import { useState } from "react";

const ProductsDetailsCard = (props) => {
  console.log(props);

  const {
    availabilityStatus,
    brand,
    category,
    description,
    dimensions,
    discountPercentage,
    images,
    minimumOrderQuantity,
    price,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    stock,
    tags,
    thumbnail,
    title,
    warrantyInformation,
    weight,
  } = props;
  const [clickedImg, setClickedImg] = useState(images[0]);
  const [qntCount, setQntCount] = useState(1);
  const handleImageCliced = (imgID) => {
    setClickedImg(images[imgID]);
  };

  const handleQntCountPluss = () => {
    setQntCount(qntCount + 1);
  };
  const handleQntCountMin = () => {
    if (qntCount <= 0) return;
    setQntCount(qntCount - 1);
  };

  return (
    <div className="hero bg-base-100 w-full">
      <div className="hero-content flex-col lg:flex-row pt-6 gap-6 items-start">
        <div className="flex-1">
          <div className="flex flex-col">
            <img src={clickedImg} className="bg-base-300" />
            <div className="flex justify-center gap-2 items-center mt-6">
              {images.map((image, index) => (
                <img
                  onClick={() => handleImageCliced(index)}
                  key={index}
                  src={image}
                  className={` w-[100px] border-2 border-solid rounded-xl cursor-pointer badge-outline img-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="pt-6">{description}</p>

          <p className="pt-2 pb-6 text-sm">By {brand}</p>

          <div className="card-actions justify-items-start">
            {tags.map((tag, index) => (
              <div key={index} className="capitalize badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
          <div>
            <div className="mt-4 space-x-4 badge badge-secondary">{rating}</div>
          </div>

          <div className="flex items-center space-x-4 my-4">
            <div className="rounded-lg bg-base-300  flex py-2 px-3">
              <span className="mr-1 mt-1">$</span>
              <span className="font-bold text-3xl">{price}</span>
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">
                Save {discountPercentage}%
              </p>
              <p className=" text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <div className="flex py-4 space-x-4">
            <div className="flex gap-2">
              <button onClick={handleQntCountMin} className="btn btn-soft">
                −
              </button>
              <input
                value={qntCount}
                onChange={(e) => setQntCount(e.target.value)}
                type="number"
                placeholder="Qty"
                className="input w-12"
              />
              <button onClick={handleQntCountPluss} className="btn btn-soft">
                +
              </button>
            </div>

            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>

          <div className="py-4 overflow-x-auto capitalize">
            <table className="table">
              <thead>
                <tr className="bg-base-300 ">
                  <th className="text-white">depth</th>
                  <th className="text-white">height</th>
                  <th className="text-white">width</th>
                  <th className="text-white">weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>{dimensions.depth}</td>
                  <td>{dimensions.height}</td>
                  <td>{dimensions.width}</td>
                  <td>{weight}</td>

                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-base-300 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title ">More Information</div>
            <div className="collapse-content capitalize flex flex-col">
              <span>category : {category}</span>
              <span>Return Policy : {returnPolicy}</span>
              <span>shipping Information : {shippingInformation}</span>
              <span>warranty Information : {warrantyInformation}</span>
              <span>availability : {availabilityStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsCard;
