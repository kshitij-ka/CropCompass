import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import { useGetTasksByFarmQuery } from "../../../store/api/taskApi";

const DisplayTast = ({ farmId }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    data: taskList,
    error: taskError,
    isLoading,
  } = useGetTasksByFarmQuery(farmId);

 

  // Function to delete a task and update the state
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/task/${taskId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      // Assuming that a successful deletion returns a 200 status code
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      // Optionally check the response, but we'll update state regardless.
      // Remove the deleted task from state.
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

    } catch (error) {
      console.error("Error deleting task:", error);
      // Optionally, you could set an error state here.
    }
  };

  useEffect(() => {
    if (taskList) {
      setTasks(taskList);
      setLoading(false);
    }
  }, [farmId, taskList]);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!tasks || tasks.length === 0) {
    return <div className="p-4">No tasks found for this farm.</div>;
  }

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="w-full text-sm text-left border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Task Type</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Assigned Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{task.taskType}</td>
              <td className="px-6 py-4">{task.description}</td>
              <td className="px-6 py-4">
                {new Date(task.assignedDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">{task.status}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  type="button"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTast;
