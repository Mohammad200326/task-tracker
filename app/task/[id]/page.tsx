"use client";
import { IResponse } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TaskDetails = () => {
  const [task, setTask] = useState<IResponse>();
  const { id } = useParams();

  useEffect(() => {
    if (Number(id) > 200) {
      notFound();
    }
    fetchTasks();
  }, [id]);

  async function fetchTasks() {
    if (Number(id) > 200) {
      notFound();
    } else {
    }
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const taskData: IResponse = await data.json();
    setTask(taskData);
  }

  const copyTask = async () => {
    if (task?.title) {
      await navigator.clipboard.writeText(task.title);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      <Link href="/" className="mb-6 text-blue-600 font-medium hover:underline">
        ← Back to Tasks
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md text-center border">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Task #{task?.id}
        </h3>
        <h3
          className={`text-lg font-semibold mb-4 ${
            task?.completed ? "text-green-600" : "text-red-600"
          }`}
        >
          {task?.completed ? "Completed ✅" : "Pending ⏳"}
        </h3>
        <h3 className="text-gray-700 text-lg mb-4">{task?.title}</h3>
        <button
          onClick={copyTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Copy the task title
        </button>
        <div className="mt-6 flex justify-center items-center">
          <Image
            src={`https://ui-avatars.com/api/?name=${id}&size=200`}
            alt={`Robot Image ${id}`}
            width={200}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    // <div>
    //   <Link href="/">Back to Tasks</Link>
    //   <div>
    //     <h3>{task?.id}</h3>
    //     <h3>{task?.completed ? "Completed" : "Pending"}</h3>
    //     <h3>{task?.title}</h3>{" "}
    //     <button onClick={copyTask}>Copy the task title</button>
    //     <Image
    //       src={`https://robohash.org/${id}?size=200x300`}
    //       alt={`robot Image ${id}`}
    //       width={200}
    //       height={300}
    //     />
    //   </div>
    // </div>
  );
};

export default TaskDetails;
