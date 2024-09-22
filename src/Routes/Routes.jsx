import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import VideoSolutions from "../Pages/VideoSolutions/VideoSolutions";
import Feedback from "../Pages/Feedback/Feedback";
import About from "../Pages/About/About";
import PracticeTest from "../Pages/PracticeTest/PracticeTest";
import SelectMaterial from "../Pages/PracticeTest/SelectMaterial/SelectMaterial";
import ContentSummery from "../Pages/PracticeTest/ContentSummery/ContentSummery";
import Home from "../pages/Home";
import DetailsCourse from "../Pages/VideoSolutions/DetailsCourse/DetailsCourse";

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
        element: <VideoSolutions />,
      },
      {
        path: "/profile/video-solutions/:id",
        element: <DetailsCourse />,
      },
      {
        path: "/profile/practice-test",
        element: <PracticeTest />,
      },
      {
        path: "/profile/practice-test/:id",
        element: <SelectMaterial />,
      },
      {
        path: "/profile/practice-test/:id/summery",
        element: <ContentSummery />,
      },
      {
        path: "/profile/exam-centre",
        element: <div>Exam Centre</div>,
      },
      {
        path: "/profile/about",
        element: <About />,
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
