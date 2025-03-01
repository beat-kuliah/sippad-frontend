import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (e: AxiosError) => {
  // toast(JSON.stringify(e.response?.data) || e.message, {
  //   type: "error",
  // });

  const errorMessage =
    (e.response?.data as { error?: string })?.error ?? e.message;
  toast(errorMessage, { type: "error" });
};
