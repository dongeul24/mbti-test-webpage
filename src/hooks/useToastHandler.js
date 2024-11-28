import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const useToastHandler = () => {
  const showSuccess = (message) => {
    toast.success(message, toastOptions);
  };

  const showError = (message) => {
    toast.error(message, toastOptions);
  };

  const showWarning = (message) => {
    toast.warn(message, toastOptions);
  };

  const showInfo = (message) => {
    toast.info(message, toastOptions);
  };

  return { showSuccess, showError, showWarning, showInfo };
};
