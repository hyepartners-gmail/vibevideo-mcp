import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./globals.css";

// createRoot(document.getElementById("root")!).render(<App />);
