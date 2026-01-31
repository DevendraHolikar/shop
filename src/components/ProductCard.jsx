const ProductCard = (props) => {
  const { title, thumbnail, description, tags ,rating} = props;
  return (
      <div className="card bg-base-300 w-72 md:w-89 shadow-sm">
        <figure className="pt-6 pl-6 pr-6">
          <img className="bg-base-100 " src={thumbnail} alt={title} />
        </figure>
        <div className="card-body gap-4">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p className="description">{description}</p>
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
