import { useEffect } from "react";

const AddCrop = () => {
  return (
    <>
      {" "}
      <form onSubmit={handleAvatar}>
        <div className="flex items-center justify-center w-full">
          <img src={formData.avatar && `${formData.avatar}`} alt="" />
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {avatar ? (
                  <span className="font-semibold">
                    Avatar uploaded successfulky
                  </span>
                ) : (
                  <span className="font-semibold">
                    Click to upload and press Upload button
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <button
                type="submit"
                className="bg-gray-600 px-4 py-1 rounded-lg text-white font-semibold my-4"
              >
                Upload
              </button>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => {
                setAvatar(e.target.files[0]);
                //console.log(e.target.files[0]);
              }}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default AddCrop;
