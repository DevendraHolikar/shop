import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="bg-background">
      <div className="max-w-[85rem] px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-foreground font-semibold text-2xl md:text-4xl md:leading-tight">
            Our shopping approach
          </h2>
          <p className="mt-1 text-muted-foreground-1">
            {" "}
            Our approach focuses on delivering a seamless shopping experience —
            from product discovery and quality assurance to secure checkout,
            fast delivery, and ongoing customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Online shopping experience"
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-primary text-xs font-medium uppercase">
                Steps
              </h3>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-line-2 text-primary font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-muted-foreground-1">
                  <span class="text-foreground">
                    Customer Needs & Product Research:
                  </span>
                  We analyze customer preferences, trends, and demand to curate
                  products that offer real value and quality.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-line-2 text-primary font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-muted-foreground-1">
                  <span class="text-foreground">
                    Product Selection & Quality Check:
                  </span>
                  Each product goes through careful selection and quality checks
                  to ensure reliability, durability, and satisfaction.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-line-2 text-primary font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-muted-foreground-1">
                  <span class="text-foreground">
                    Order Processing & Fast Delivery:
                  </span>
                  Once ordered, products are securely packed and delivered
                  quickly with real-time order tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-line-2 text-primary font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-muted-foreground-1">
                  <span class="text-foreground">
                    Customer Support & Continuous Improvement:
                  </span>
                  We listen to customer feedback, offer easy returns, and
                  continuously improve our services and product range.
                </p>
              </div>
            </div>

            <Link
              class="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary border border-primary-line text-primary-foreground font-medium text-sm rounded-full focus:outline-hidden"
              to={"/products"}
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
