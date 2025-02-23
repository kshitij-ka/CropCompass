import AddCrop from "./AddCrop";
import EditFarm from "./EditFarm";

const Farm = ({ farmData, farmId }) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4 m-3">{farmData.name}</h1>
        <AddCrop farmId={farmId}></AddCrop>
      </div>

      <table className="min-w-full text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Farm Name
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Size (acres)
            </th>
            <th scope="col" className="px-6 py-3">
              Water Content
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700">
            {/* Clicking on the name cell can navigate to a more detailed view if needed */}
            <td
              className="px-6 py-4 cursor-pointer hover:text-blue-600 transition"
              onClick={() => {
                // Navigate to a detailed view for this farm if desired
                navigate(`farmpage/${farmData._id}`);
              }}
            >
              {farmData.name}
            </td>
            <td className="px-6 py-4">{farmData.location}</td>
            <td className="px-6 py-4">{farmData.soilType}</td>
            <td className="px-6 py-4">{farmData.size}</td>
            <td className="px-6 py-4">{farmData.waterContent}</td>
            <td className="px-6 py-4">
              <EditFarm></EditFarm>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Farm;
