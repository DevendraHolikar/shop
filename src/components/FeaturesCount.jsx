const FeaturesCount = () => {
  return (
    <div className="max-w-[85rem] px-4 xl:px-0 py-10 lg:pt-0 lg:pb-14 mx-auto">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-foreground">
            Order accuracy
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            99.9%
          </p>
          <p className="mt-1 text-muted-foreground-1">successful deliveries</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-foreground">
            Products available
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            5,000+
          </p>
          <p className="mt-1 text-muted-foreground-1">
            across multiple categories
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-foreground">
            Happy customers
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            1M+
          </p>
          <p className="mt-1 text-muted-foreground-1">
            shoppers trust our store
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCount;
