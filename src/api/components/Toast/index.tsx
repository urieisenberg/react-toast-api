import { useEffect } from "react";
import { Wrapper, Container } from "./styles";
import { ToastWrapperStyledProps } from "../../types";

interface ToastProps extends ToastWrapperStyledProps {
  children: React.ReactNode;
  duration?: number;
  id: number;
}

export const Toast = ({ children, duration, id, ...props }: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout");
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration]);
  return (
    <Wrapper position={props.position}>
      <Container {...props}>{children}</Container>
    </Wrapper>
  );
};
