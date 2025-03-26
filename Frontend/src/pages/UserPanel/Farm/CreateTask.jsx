import React, { useState } from "react";
import { useCreateTaskMutation } from "../../../store/api/taskApi";

const CreateTask = ({ farmId, onTaskCreated }) => {
  const [farm, setFarm] = useState(farmId);
  const [taskType, setTaskType] = useState("Sowing");
  const [description, setDescription] = useState("Started Sowing the seeds");
  const [assignedDate, setAssignedDate] = useState("2025-04-15");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [createTask] = useCreateTaskMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // In a real app, you might also fetch or choose a crop.
    // For now, we assume crop is provided.
    const crop = "67ba388f9c4979463e64a39a";
    const taskData = {
      farm,
      crop,
      taskType,
      description,
      assignedDate,
      status,
    };

  

    try {
      const res = await createTask(taskData).unwrap();

      setMessage("Task created successfully!");
      setModalOpen(false);
      // Call the parent's callback with the newly created task
      if (onTaskCreated) onTaskCreated(data);
    } catch (error) {
      console.error("Error creating task:", error);
      setMessage("Error creating task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Create Task
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-800">Create Task</h2>
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="task-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Type
                  </label>
                  <select
                    id="task-type"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-2 focus:ring-green-400"
                    required
                  >
                    <option value="Sowing">Sowing</option>
                    <option value="Watering">Watering</option>
                    <option value="Fertilization">Fertilization</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Harvesting">Harvesting</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-green-400"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="assignedDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Assigned Date
                  </label>
                  <input
                    type="date"
                    id="assignedDate"
                    value={assignedDate}
                    onChange={(e) => setAssignedDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-2 focus:ring-green-400"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex justify-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {loading ? "Creating Task..." : "Create Task"}
                </button>
              </form>
              {message && (
                <p className="mt-4 text-center text-sm text-green-600">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTask;
