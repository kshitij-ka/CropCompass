const TotalSpent = () => {
  return (
    <div className="h-full">
      <a
        href="#"
        className="h-full block max-w-sm p-6 bg-no-repeat bg-center bg-cover border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{
          backgroundImage: `url("/home/atharva/git repo/Frontend/public/images/plant-1573.svg")`,
        }}
      >
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
