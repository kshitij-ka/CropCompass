const Farm = ({ data }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td className="px-6 py-4">{data.name}</td>
      <td className="px-6 py-4">{data.location}</td>
      <td className="px-6 py-4">{data.soilType}</td>
      <td className="px-6 py-4">{data.size}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};
export default Farm;
