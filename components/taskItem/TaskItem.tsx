import { IResponse } from "@/app/types/types";
import Image from "next/image";
import React from "react";
import completed from "../../public/completed.png";
import pending from "../../public/pending.png";
import Link from "next/link";

interface IProps {
  data: IResponse;
}

const TaskItem = (props: IProps) => {
  const isCompleted = props.data.completed;

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 bg-white"
      style={{
        borderLeftColor: isCompleted ? "#10b981" : "#ef4444",
        borderLeftWidth: "4px",
      }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {isCompleted ? (
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-green-300 to-transparent" />
        ) : (
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-red-300 to-transparent" />
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 relative z-10">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-800 truncate pr-4">
            {props.data.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 self-end sm:self-auto">
          <div className="flex justify-center items-center gap-1">
            <Image
              src={isCompleted ? completed : pending}
              alt={isCompleted ? "Completed" : "Pending"}
              width={16}
              height={16}
              className="opacity-80"
            />
            <span className="text-sm font-medium whitespace-nowrap">
              {isCompleted ? "Completed" : "Pending"}
            </span>
          </div>

          <Link
            href={`/task/${props.data.id}`}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
          >
            <span>Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
