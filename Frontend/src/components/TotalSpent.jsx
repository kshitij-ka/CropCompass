const TotalSpent = () => {
  return (
    <div className="h-full">
      <a
        href="#"
        className="h-full block max-w-sm p-6 bg-no-repeat bg-center bg-cover border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="absolute right-0 top-0 h-full w-48 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 200 800"
            className="absolute right-0 h-full transform translate-x-16 fill-green-100"
          >
            <path d="M0,0 Q100,200 0,400 Q100,600 0,800 L200,800 L200,0 Z" />
          </svg>
          <svg
            viewBox="0 0 200 800"
            className="absolute right-0 h-full transform translate-x-8 fill-green-200/40"
          >
            <path d="M0,0 Q80,200 0,400 Q80,600 0,800 L200,800 L200,0 Z" />
          </svg>

          <svg
            viewBox="0 0 100 100"
            className="absolute right-12 top-20 w-16 h-16 fill-green-300/30"
          >
            <path d="M50,0 Q100,50 50,100 Q0,50 50,0 Z" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="absolute right-16 top-48 w-12 h-12 fill-green-400/20"
          >
            <path d="M50,0 Q100,50 50,100 Q0,50 50,0 Z" />
          </svg>
        </div>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          100,000
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          This is the total cost which you spent on this farm
        </p>
      </a>
    </div>
  );
};

export default TotalSpent;
