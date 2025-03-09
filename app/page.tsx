import { IResponse } from "./types/types";
import TaskItem from "@/components/taskItem/TaskItem";

const Home = async () => {
  // This line to test loading.tsx
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const tasks = (await data.json()) as IResponse[];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-100 p-6 sm:p-16 gap-12">
      <h1 className="text-4xl font-bold text-gray-800">Task Tracker</h1>
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-t-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">Task Tracker</h2>
          <p className="text-indigo-100 text-sm mt-1">
            Keep track of your daily activities
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="divide-y divide-gray-200">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 hover:bg-gray-50 transition duration-150"
                >
                  <TaskItem data={task} />
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p>No tasks available</p>
              </div>
            )}
          </div>

          <div className="bg-gray-50  px-4 py-3 text-sm text-gray-500 border-t border-gray-200">
            <span>{tasks.length} tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
