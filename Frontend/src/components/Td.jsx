const Td = ({ children }) => {
  console.log(children);
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td className="px-6 py-4">{children.name}</td>
      <td className="px-6 py-4">{children.location}</td>
      <td className="px-6 py-4">{children.soilType}</td>
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

export default Td;
