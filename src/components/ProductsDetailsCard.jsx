import { useState } from "react";

const ProductsDetailsCard = (props) => {
  // console.log(props);

  const {
    availabilityStatus,
    brand,
    category,
    description,
    dimensions,
    discountPercentage,
    images,
    price,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    stock,
    tags,
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
    <div>
      <div className="bg-base-100 mx-4 md:mx-2">
        <div className="flex flex-col lg:flex-row pt-6 gap-6 items-start">
          <div className="flex-1">
            <div className="flex flex-col">
              <img src={clickedImg} className="bg-base-300" />
              <div className="flex justify-center gap-2 items-center mt-6">
                {images.map((image, index) => (
                  <img
                    onClick={() => handleImageCliced(index)}
                    key={index}
                    src={image}
                    className={`bg-base-300 w-[60px] lg:w-[100px] shadow-2xl rounded-xl cursor-pointer badge-outline img-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="pt-6">{description}</p>

            <p className="pt-2 pb-6 text-sm">By company {brand}</p>

            <div className="card-actions justify-items-start">
              {tags.map((tag, index) => (
                <div key={index} className="capitalize badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
            <div>
              <div className="mt-4 space-x-4 badge badge-secondary">
                {rating}
              </div>
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
                  min={0}
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
              <table className="table text-center border-4 border-base-300">
                <thead>
                  <tr className="bg-base-300 ">
                    <th className="text-white px-2">depth</th>
                    <th className="text-white px-2">height</th>
                    <th className="text-white px-2">width</th>
                    <th className="text-white px-2">weight</th>
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
              <div className="collapse-title">More Information</div>
              <div className="collapse-content capitalize flex flex-col">
                <span className="text-xs pb-1">category : {category}</span>
                <span className="text-xs pb-1">Return Policy : {returnPolicy}</span>
                <span className="text-xs pb-1">shipping Information : {shippingInformation}</span>
                <span className="text-xs pb-1">warranty Information : {warrantyInformation}</span>
                <span className="text-xs pb-1">availability : {availabilityStatus}</span>
                <span className="text-xs pb-1">stock : {stock}</span>
              </div>
              </div>
          </div>
        </div>
      </div>

      <ul className="mx-2 list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl font-bold tracking-wide">
          Most popular reviews
        </li>
        {reviews.map((item, index) => {
          return (
            <li key={index} className="list-row custome-flex">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index + 1}
              </div>
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                />
              </div>
              <div className="list-col-grow">
                <div className="md:text-left text-center">
                  {item.reviewerName}
                </div>
                <div className="md:text-left text-center text-xs uppercase font-semibold opacity-60">
                  {item.comment}
                </div>
              </div>
              <div className="mt-4 space-x-4 badge ">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < Math.round(item.rating) ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 space-x-4 badge ">
                {new Date(item.date).toLocaleString()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsDetailsCard;
