export const handleTypeColors = (type: string) => {
  switch (type) {
    case "success":
      return "#5cb85c";
    case "error":
      return "#d9534f";
    case "info":
      return "#5bc0de";
    case "warning":
      return "#f0ad4e";
    default:
      return "#5cb85c";
  }
};
