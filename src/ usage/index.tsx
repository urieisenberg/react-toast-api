import { useState } from "react";
import { useToast } from "../api/hooks/useToast";
import { IToast } from "../api/types";

export const Usage = () => {
  const { addToast } = useToast();
  const [toast, setToast] = useState<IToast>({
    message: "example message",
    type: "info",
    duration: 5000,
    color: "",
    background: "",
    border: "solid",
    borderColor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToast({
      ...toast,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToast({
      ...toast,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h4>
        <label htmlFor="message">Message</label>
      </h4>
      <input
        type="text"
        name="message"
        value={toast.message}
        onChange={handleChange}
      />
      <h4>
        <label htmlFor="type">Type</label>
      </h4>
      <select name="type" value={toast.type} onChange={handleSelect}>
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
        <option value="warning">Warning</option>
      </select>
      <h4>
        <label htmlFor="duration">Duration</label>
      </h4>
      <input
        type="number"
        name="duration"
        value={toast.duration}
        onChange={handleChange}
      />
      <h4>
        <label htmlFor="color">Color</label>
      </h4>
      <input
        type="text"
        name="color"
        value={toast.color}
        onChange={handleChange}
        placeholder="write a color"
      />
      <h4>
        <label htmlFor="background">Background</label>
      </h4>
      <input
        type="text"
        name="background"
        value={toast.background}
        onChange={handleChange}
        placeholder="write a color"
      />
      <h4>
        <label htmlFor="border">Border</label>
      </h4>
      <select name="border" value={toast.border} onChange={handleSelect}>
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="double">Double</option>
        <option value="groove">Groove</option>
        <option value="ridge">Ridge</option>
        <option value="inset">Inset</option>
        <option value="outset">Outset</option>
        <option value="none">None</option>
        <option value="hidden">Hidden</option>
      </select>
      <h4>
        <label htmlFor="borderColor">Border Color</label>
      </h4>
      <input
        type="text"
        name="borderColor"
        value={toast.borderColor}
        onChange={handleChange}
        placeholder="write a color"
      />
      <hr/>
      <button
        onClick={() => {
          addToast(toast);
        }}
      >
        Add Toast
      </button>
    </div>
  );
};
