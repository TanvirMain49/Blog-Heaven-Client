import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider.jsx";

// Wrapper component to handle dark mode
const App = () => {
  const { dark } = useContext(AuthContext);

  return (
    <div className={dark ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
