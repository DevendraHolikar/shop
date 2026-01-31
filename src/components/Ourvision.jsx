const Ourvision = () => {
  return (
    <div className="max-w-[85rem] px-4 xl:px-0 py-10 lg:pt-14 lg:pb-0 mx-auto">
      <div className="">
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-foreground font-bold lg:text-4xl">
              Our vision
            </h2>
            <p className="mt-3 text-muted-foreground-2">
              Our vision is to redefine online shopping by creating a trusted,
              customer-first platform where quality products, fair pricing, and
              seamless experiences come together — making everyday shopping
              effortless and enjoyable.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>

              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  Quality products you can trust
                </h3>
                <p className="mt-1 text-muted-foreground-2">
                  Every product is carefully selected and reviewed to ensure
                  quality, durability, and value — so you shop with confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>

              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  Customer-first experience
                </h3>
                <p className="mt-1 text-muted-foreground-2">
                  From easy browsing to secure checkout and responsive support,
                  everything is designed around customer convenience and
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>

              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  Simple, secure & transparent shopping
                </h3>
                <p className="mt-1 text-muted-foreground-2">
                  No hidden costs, no confusion. Enjoy transparent pricing,
                  secure payments, fast delivery, and hassle-free returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourvision;
