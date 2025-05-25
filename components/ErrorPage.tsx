"use client";

import React from "react";
import { ErrorIllustration } from "@/components/ErrorIllustration";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ErrorPageProps {
  statusCode: "404" | "403";
  title: string;
  description: string;
}

export function ErrorPage({ statusCode, title, description }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full mx-auto"
      >
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ErrorIllustration type={statusCode} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title}
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button
              onClick={() => router.push("/")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              Go Home
            </Button>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Go Back
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
