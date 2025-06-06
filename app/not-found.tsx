"use client";

import { ArrowLeft, DoorClosed } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-300 dark:from-gray-900 dark:via-blue-800 dark:to-blue-900 p-4">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-8">
        {/* Door Icon with hover effect */}
        <div className="fade-in opacity-0 transition-all duration-500 p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl hover:scale-105 cursor-pointer group">
          <DoorClosed size={64} className="text-gray-600 dark:text-gray-400 transform group-hover:rotate-12 transition-transform" />
        </div>
        
        {/* Error code */}
        <h1 className="fade-in opacity-0 transition-opacity duration-500 text-8xl font-bold text-gray-600 dark:text-gray-400">
          404
        </h1>
        
        {/* Error message */}
        <div className="space-y-4">
          <h2 className="fade-in opacity-0 transition-opacity duration-500 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            This door leads nowhere
          </h2>
          <p className="fade-in opacity-0 transition-opacity duration-500 text-gray-600 dark:text-gray-400">
            The page you're looking for might have been moved or doesn't exist.
          </p>
        </div>
        
        {/* Return link styled as a door handle */}
        <Link
          href="/" 
          className="fade-in opacity-0 transition-opacity duration-500 group mt-8 flex items-center px-6 py-3 text-sm rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-white transition-all hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-900"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Open the right door
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
