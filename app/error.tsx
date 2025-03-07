"use client";

interface IProps {
  error: Error;
  reset: () => void;
}
const Error = (props: IProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg text-center border border-red-300">
        <h1 className="text-2xl font-bold text-red-600 flex items-center justify-center gap-2 mb-4">
          ⚠️ Something went wrong!
        </h1>
        <p className="text-gray-700 mb-4">
          You can{" "}
          <button
            onClick={() => props.reset()}
            className="text-blue-600 font-medium hover:underline"
          >
            try again
          </button>{" "}
          or{" "}
          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 font-medium hover:underline"
          >
            refresh the page
          </button>{" "}
          later.
        </p>
        <p className="text-sm text-gray-600 bg-gray-200 p-3 rounded-lg border border-gray-300">
          <strong>Contact the system administrator</strong> and provide the
          following info:{" "}
          <span className="text-red-500 font-semibold">
            {props.error.message}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Error;
