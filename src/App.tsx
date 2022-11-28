import ToastProvider from "./api/context";
import { Usage } from "./usage";

function App() {
  return (
    <ToastProvider>
      <Usage />
    </ToastProvider>
  );
}

export default App;
