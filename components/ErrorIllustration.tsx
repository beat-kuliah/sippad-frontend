import React from "react";
import { cn } from "@/lib/utils";

type ErrorType = "404" | "403";

interface ErrorIllustrationProps {
  type: ErrorType;
  className?: string;
}

export function ErrorIllustration({ type, className }: ErrorIllustrationProps) {
  return (
    <div className={cn("relative w-full max-w-[400px] mx-auto", className)}>
      <div className="relative">
        {/* Error number */}
        <div className="absolute -top-10 left-0 font-bold text-8xl text-purple-600/90 z-10">
          {type}
        </div>

        {/* Door with error */}
        <div className="bg-gray-50 rounded-xl p-8 mt-16 relative">
          <div className="w-48 h-64 bg-purple-400 rounded-lg mx-auto relative shadow-lg transform hover:scale-105 transition-transform">
            {/* Door handle */}
            <div className="absolute right-3 top-1/2 w-2 h-4 bg-gray-700 rounded-full"></div>

            {/* Error label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-1 rounded text-sm font-semibold">
              ERROR
            </div>

            {/* Caution tape for 403 */}
            {type === "403" && (
              <>
                <div className="absolute bottom-6 left-0 right-0 h-4 bg-yellow-400 transform -rotate-12 z-10 overflow-hidden">
                  <div className="whitespace-nowrap text-[8px] font-bold text-black animate-marquee">
                    FORBIDDEN • FORBIDDEN • FORBIDDEN • FORBIDDEN •&nbsp;
                  </div>
                </div>
                <div className="absolute bottom-14 left-0 right-0 h-4 bg-yellow-400 transform rotate-12 z-10 overflow-hidden">
                  <div className="whitespace-nowrap text-[8px] font-bold text-black animate-marquee2">
                    FORBIDDEN • FORBIDDEN • FORBIDDEN • FORBIDDEN •&nbsp;
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Security guard for 403 */}
        {type === "403" && (
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/4">
            <div className="relative">
              {/* Speech bubble */}
              <div className="absolute -top-8 right-0 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                FORBIDDEN
                <div className="absolute bottom-0 right-4 w-2 h-2 bg-purple-600 transform rotate-45 translate-y-1/2"></div>
              </div>

              {/* Guard figure */}
              <div className="w-28 h-40">
                <div className="absolute bottom-0 w-16 h-24 bg-gray-800"></div>
                <div className="absolute bottom-24 w-16 h-8 bg-purple-500"></div>
                <div className="absolute bottom-32 w-16 h-8 bg-[#E2C0FF] rounded-full"></div>
                <div className="absolute bottom-8 left-2 w-6 h-16 bg-gray-700"></div>
                <div className="absolute bottom-8 right-2 w-6 h-16 bg-gray-700"></div>
                <div className="absolute top-2 right-4 w-8 h-6 bg-gray-800 rounded-t-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Plant decoration */}
        <div className="absolute -left-6 bottom-4">
          <div className="w-16 h-20">
            <div className="absolute bottom-0 w-10 h-10 bg-gray-800 rounded"></div>
            <div className="absolute bottom-8 left-1 w-4 h-10 bg-purple-500 rounded-t-full transform -rotate-12"></div>
            <div className="absolute bottom-8 left-4 w-4 h-12 bg-purple-400 rounded-t-full"></div>
            <div className="absolute bottom-8 left-7 w-4 h-8 bg-purple-300 rounded-t-full transform rotate-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
