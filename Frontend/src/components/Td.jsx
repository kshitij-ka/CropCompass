import { useNavigate } from "react-router-dom";
import EditFarm from "../pages/UserPanel/Farm/EditFarm";

const Td = ({ children }) => {
  const navigate = useNavigate();
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td
        className="px-6 py-4"
        onClick={() => {
          navigate(`farmpage/${children._id}`);
        }}
      >
        {children.name}
      </td>
      <td className="px-6 py-4">{children.location}</td>
      <td className="px-6 py-4">{children.soilType}</td>
      <td className="px-6 py-4">{children.size}</td>
      <td className="px-6 py-4">
        <EditFarm _id={children._id}></EditFarm>
      </td>
    </tr>
  );
};

export default Td;
