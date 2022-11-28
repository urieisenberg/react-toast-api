import { useEffect } from "react";
import { useToast } from "../../hooks/useToast";
import { Wrapper, CloseButton } from "./styles";
import { ToastStyledProps } from "../../types";

interface ToastProps extends ToastStyledProps {
  children: React.ReactNode;
  id: number;
  duration?: number;
}

export const Toast = ({
  children,
  duration = 3000,
  id,
  ...props
}: ToastProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, id, removeToast]);

  return (
    <Wrapper {...props}>
      <CloseButton onClick={() => removeToast(id)}>x</CloseButton>
      {children}
    </Wrapper>
  );
};
