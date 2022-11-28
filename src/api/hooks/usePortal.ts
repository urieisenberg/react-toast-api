import { useEffect, useRef } from "react";

export const usePortal = (id: string) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let el: HTMLDivElement | null = document.getElementById(
      id
    ) as HTMLDivElement;

    if (!ref.current) {
      el = document.createElement("div");
      el.setAttribute("id", `toast-${id}`);
      document.body.appendChild(el);
      ref.current = el;
    }

    return () => {
      ref.current = null;
      document.body.removeChild(el as HTMLDivElement);
    };
  }, [id]);

  return ref.current;
};
