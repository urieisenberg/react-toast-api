import { createContext, useState, useCallback } from "react";
import { ToastContainer } from "../components/ToastContainer";
import { IToast } from "../types";

interface IToastContext {
  addToast: (toast: IToast) => void;
  removeToast: (id: number) => void;
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);

let id = 1;

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback(
    (toast: IToast) => {
      setToasts((state) => [...state, { ...toast, id: id++ }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((state) => state.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;


