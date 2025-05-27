"use client";

import { ErrorPage } from "@/components/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage
      statusCode="404"
      title="Page Not Found"
      description="Oops! The page you're looking for doesn't exist or has been moved."
    />
  );
};

export default NotFound;
