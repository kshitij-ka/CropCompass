import React, { useState } from "react";
import Loader from "../../../components/Loader";
import { useAddTransactionMutation } from "../../../store/api/financeApi";

const AddTransaction = ({ farmId, financeId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [addTransaction] = useAddTransactionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const transactionData = {
      type,
      amount: parseFloat(amount),
      description,
    };
   

    try {
      const response = await addTransaction({ financeId, transactionData });
      // const response = await fetch(
      //   `http://localhost:8000/api/v1/finance/${farmId}/transaction`,
      //   {
      //     method: "POST",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       type,
      //       amount: parseFloat(amount),
      //       description,
      //     }),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to create transaction");
      // }

      // const data = await response.json();
    
      setMessage("Transaction created successfully!");
      // Optionally clear the form
      setType("Expense");
      setAmount("");
      setDescription("");
    } catch (error) {
      console.error("Error creating transaction:", error);
      setMessage("Error creating transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Add Transaction
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add Transaction
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* Modal Body */}
              <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="transaction-type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Type
                    </label>
                    <select
                      id="transaction-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    >
                      <option value="Expense">Expense</option>
                      <option value="Revenue">Revenue</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="transaction-amount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      id="transaction-amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="transaction-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="transaction-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {loading ? <Loader></Loader> : "Add Transaction"}
                  </button>
                </form>
                {message && (
                  <p className="mt-4 text-sm text-center text-green-600">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransaction;
