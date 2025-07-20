import type { Toast, ToastType } from "@models/toast";
import { useState, type ReactNode, } from "react";
import { ToastContext } from "./toastContext";


export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

const addToast = (message: string, type: ToastType = 'success') => {
    const newToast: Toast = {
      id: Date.now(),
      message,
      type
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => removeToast(newToast.id), 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};