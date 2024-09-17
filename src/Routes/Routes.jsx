import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import VideoSolutions from "../Pages/VideoSolutions/VideoSolutions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "/study-materials",
        element: <div>study</div>,
      },
      {
        path: "/video-solutions",
        element: <VideoSolutions/>,
      },
      {
        path: "/practice-test",
        element: <div>Practice Test</div>,
      },
      {
        path: "/exam-centre",
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
