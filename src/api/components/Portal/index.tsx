import { createPortal } from "react-dom";
import { usePortal } from "../../hooks/usePortal";

interface PortalProps {
  id: string;
  children: React.ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
  const el = usePortal(id);
  return el ? createPortal(children, el) : null;
};
