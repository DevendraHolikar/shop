import { Link } from "react-router-dom";

const HomeTrendProducts = () => {
  return (
    <div className="max-w-[85rem] px-4 xl:px-0 py-10 lg:pt-0 lg:pb-14 mx-auto">
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-foreground font-semibold text-2xl md:text-4xl md:leading-tight">
          Trending products
        </h2>
        <p className="mt-1 text-muted-foreground-1">
          Discover our most popular products, loved by customers and trending
          right now — handpicked for quality, style, and unbeatable value. Shop
          the latest favorites before they sell out.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 m-auto">
        <Link to={"/products/" + 3} data-discover="true">
          <div class="card bg-base-300 w-72 md:w-80 shadow-sm">
            <figure class="pt-6 pl-6 pr-6">
              <img
                class="bg-base-100 "
                alt="Powder Canister"
                src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
              />
            </figure>
            <div class="card-body gap-4">
              <h2 class="card-title">
                Powder Canister<div class="badge badge-secondary">4.64</div>
              </h2>
              <p class="description">
                The Powder Canister is a finely milled setting powder designed
                to set makeup and control shine. With a lightweight and
                translucent formula, it provides a smooth and matte finish.
              </p>
              <div class="card-actions justify-end">
                <div class="capitalize badge badge-outline">beauty</div>
                <div class="capitalize badge badge-outline">face powder</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/products/" + 4} data-discover="true">
          <div class="card bg-base-300 w-72 md:w-80 shadow-sm">
            <figure class="pt-6 pl-6 pr-6">
              <img
                class="bg-base-100 "
                alt="Red Lipstick"
                src="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
              />
            </figure>
            <div class="card-body gap-4">
              <h2 class="card-title">
                Red Lipstick<div class="badge badge-secondary">4.36</div>
              </h2>
              <p class="description">
                The Red Lipstick is a classic and bold choice for adding a pop
                of color to your lips. With a creamy and pigmented formula, it
                provides a vibrant and long-lasting finish.
              </p>
              <div class="card-actions justify-end">
                <div class="capitalize badge badge-outline">beauty</div>
                <div class="capitalize badge badge-outline">lipstick</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/products/" + 5} data-discover="true">
          <div class="card bg-base-300 w-72 md:w-80 shadow-sm">
            <figure class="pt-6 pl-6 pr-6">
              <img
                class="bg-base-100 "
                alt="Red Nail Polish"
                src="https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
              />
            </figure>
            <div class="card-body gap-4">
              <h2 class="card-title">
                Red Nail Polish<div class="badge badge-secondary">4.32</div>
              </h2>
              <p class="description">
                The Red Nail Polish offers a rich and glossy red hue for vibrant
                and polished nails. With a quick-drying formula, it provides a
                salon-quality finish at home.
              </p>
              <div class="card-actions justify-end">
                <div class="capitalize badge badge-outline">beauty</div>
                <div class="capitalize badge badge-outline">nail polish</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/products/" + 6} data-discover="true">
          <div class="card bg-base-300 w-72 md:w-80 shadow-sm">
            <figure class="pt-6 pl-6 pr-6">
              <img
                class="bg-base-100 "
                alt="Calvin Klein CK One"
                src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
              />
            </figure>
            <div class="card-body gap-4">
              <h2 class="card-title">
                Calvin Klein CK One<div class="badge badge-secondary">4.37</div>
              </h2>
              <p class="description">
                CK One by Calvin Klein is a classic unisex fragrance, known for
                its fresh and clean scent. It's a versatile fragrance suitable
                for everyday wear.
              </p>
              <div class="card-actions justify-end">
                <div class="capitalize badge badge-outline">fragrances</div>
                <div class="capitalize badge badge-outline">perfumes</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeTrendProducts;
