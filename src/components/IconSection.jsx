const IconSection = () => {
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">

    {/* Fast Delivery */}
    <div className="text-center">
      <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
        <svg
          className="shrink-0 size-5 text-muted-foreground-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3h13v13H3z" />
          <path d="M16 8h5l-1.5 4.5H16z" />
          <circle cx="7.5" cy="18.5" r="1.5" />
          <circle cx="17.5" cy="18.5" r="1.5" />
        </svg>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-foreground">
          Fast Delivery
        </h3>
        <p className="mt-1 text-muted-foreground-2">
          Get your products delivered quickly and safely
        </p>
      </div>
    </div>

    {/* Secure Payments */}
    <div className="text-center">
      <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
        <svg
          className="shrink-0 size-5 text-muted-foreground-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-foreground">
          Secure Payments
        </h3>
        <p className="mt-1 text-muted-foreground-2">
          100% secure payments with trusted gateways
        </p>
      </div>
    </div>

    {/* Easy Returns */}
    <div className="text-center">
      <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
        <svg
          className="shrink-0 size-5 text-muted-foreground-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9" />
          <polyline points="3 4 3 10 9 10" />
        </svg>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-foreground">
          Easy Returns
        </h3>
        <p className="mt-1 text-muted-foreground-2">
          Hassle-free returns within 7 days
        </p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="text-center">
      <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
        <svg
          className="shrink-0 size-5 text-muted-foreground-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12a10 10 0 1 0-20 0" />
          <path d="M8 15h.01" />
          <path d="M16 15h.01" />
          <path d="M9 9a3 3 0 0 1 6 0" />
        </svg>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-foreground">
          24/7 Support
        </h3>
        <p className="mt-1 text-muted-foreground-2">
          We’re here to help anytime you need
        </p>
      </div>
    </div>

  </div>
</div>

  );
};

export default IconSection;
