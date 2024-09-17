import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import VideoSolutions from "../Pages/VideoSolutions/VideoSolutions";
import Feedback from "../Pages/Feedback/Feedback";

export const router = createBrowserRouter([
  {
    path: "/",
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
        element: <VideoSolutions />,
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
        path: "/profile/feedback",
        element: <Feedback />,
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
