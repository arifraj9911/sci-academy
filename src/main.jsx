import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { router } from "./Routes/Routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    {/* </AuthProvider> */}
  </StrictMode>
);
