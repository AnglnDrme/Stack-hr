import React from "react";
import "./../components/style.css";

function EditLimitModal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "editlimitcontainer") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="editlimitcontainer"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded relative">
        {/* Close button */}
        <button
          className="absolute top-0 right-0 m-2 shadow-sm"
          onClick={onClose}
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

        <div className="bg-white p-2 rounded">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mr-2 mt-5">
              <label class="block mb-2 font-bold">
                Current Limit: <span class="text-blue-500">₱10,000</span>
              </label>
            </div>

            {/* Amount input */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mx-2 relative">
              <label class="block mb-2 font-bold" for="date">
                Enter New Limit:
              </label>
              <input
                type="number"
                className="p-2 rounded border-gray-300 w-full"
                placeholder="Enter Limit"
              />
            </div>
          </div>
          {/* Edit limit button */}
          <div className="flex justify-end m-1 md:m-2">
            <button class="bg-gradient-to-br from-orange-400 via-f0b673 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Edit Limit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLimitModal;
