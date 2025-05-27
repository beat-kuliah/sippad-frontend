'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowLeft, DoorClosed, Lock } from 'lucide-react';
import withAuth from '@/components/hocs/withAuth';

const Forbidden = () => {
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
        {/* Door with Lock Icon */}
        <div className="fade-in opacity-0 transition-all duration-500 p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl relative group hover:scale-105 cursor-pointer">
          <DoorClosed size={64} className="text-gray-600 dark:text-gray-400 transform group-hover:rotate-12 transition-transform" />
          <div className="absolute top-6 right-6 bg-blue-100 dark:bg-blue-900 rounded-full p-2 transform group-hover:scale-110 transition-transform">
            <Lock size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        {/* Error code */}
        <h1 className="fade-in opacity-0 transition-opacity duration-500 text-8xl font-bold text-gray-600 dark:text-gray-400">
          403
        </h1>
        
        {/* Error message */}
        <div className="space-y-4">
          <h2 className="fade-in opacity-0 transition-opacity duration-500 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            This door is locked
          </h2>
          <p className="fade-in opacity-0 transition-opacity duration-500 text-gray-600 dark:text-gray-400">
            You don't have permission to enter through this door.
          </p>
        </div>
        
        {/* Return link styled as a door handle */}
        <Link 
          href="/" 
          className="fade-in opacity-0 transition-opacity duration-500 group mt-8 flex items-center px-6 py-3 text-sm rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-all hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Find another door
        </Link>
      </div>
    </div>
  );
}

export default withAuth(Forbidden);