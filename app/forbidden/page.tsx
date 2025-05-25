import { ErrorPage } from "@/components/ErrorPage";

export default function ForbiddenPage() {
  return (
    <ErrorPage
      statusCode="403"
      title="Access Forbidden"
      description="Sorry, you don't have permission to access this page."
    />
  );
}
