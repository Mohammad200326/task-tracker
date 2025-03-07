import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 flex items-center gap-2">
        Task Not Found
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Oops! The task you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
