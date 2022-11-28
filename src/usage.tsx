import { useState } from "react";
import { useToast } from "./api/hooks/useToast";

export const Usage = () => {
  const { addToast } = useToast();

  const [message, setMessage] = useState("");

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          addToast({
            message,
            type:'error',
          });
        }}
      >
        Add Toast
      </button>
    </>
  );
};
