const ProductCard = (props) => {
  const { title, thumbnail, description, tags ,rating} = props;
  return (
      <div className="card bg-base-300 w-89 shadow-sm ">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body gap-4">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {tags.map(tag => (
              <div key={tag} className="capitalize badge badge-outline">{tag}</div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
