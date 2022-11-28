import { Portal } from "../Portal";
import { Toast } from "../Toast";
import { IToast } from "../../types";

interface ToastContainerProps {
  toasts: IToast[];
}

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <Portal id="toast">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id as number}
          position={toast.position}
          type={toast.type}
          border={toast.border}
          children={toast.message}
          background={toast.background}
          color={toast.color}
          borderColor={toast.borderColor}
          duration={toast.duration}
        />
      ))}
    </Portal>
  );
};
