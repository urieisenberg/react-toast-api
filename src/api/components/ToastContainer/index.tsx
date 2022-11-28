import { Portal } from "../Portal";
import { Toast } from "../Toast";
import { IToast } from "../../types";
import { Wrapper } from "./styles";


interface ToastContainerProps {
    toasts: IToast[];
}


export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <Portal id="toast">
      <Wrapper>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id as number}
            type={toast.type}
            border={toast.border}
            children={toast.message}
            background={toast.background}
            color={toast.color}
            borderColor={toast.borderColor}
            duration={toast.duration}
          />
        ))}
      </Wrapper>
    </Portal>
  );
};
