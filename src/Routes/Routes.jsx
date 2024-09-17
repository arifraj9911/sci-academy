import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Main />,
    children: [
      {
        path: "/profile",
        element: <div>Home Page</div>,
      },
      {
        path: "/profile/study-materials",
        element: <div>study</div>,
      },
      {
        path: "/profile/video-solutions",
        element: <div>Video</div>,
      },
      {
        path: "/profile/practice-test",
        element: <div>Practice Test</div>,
      },
      {
        path: "/profile/exam-centre",
        element: <div>Exam Centre</div>,
      },
      {
        // 404 not found
        path: "*",
        element: <div>404 Not Found Route</div>,
      },
    ],
  },
  {
    // 404 not found
    path: "*",
    element: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/signup",
    element: <div>Signup</div>,
  },
]);
