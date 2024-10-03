import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signup from "../Pages/SIgnup/Signup";
import VideoSolutions from "../Pages/VideoSolutions/VideoSolutions";
import Feedback from "../Pages/Feedback/Feedback";
import About from "../Pages/About/About";
import PracticeTest from "../Pages/PracticeTest/PracticeTest";
import SelectMaterial from "../Pages/PracticeTest/SelectMaterial/SelectMaterial";
import ContentSummery from "../Pages/PracticeTest/ContentSummery/ContentSummery";
import Home from "../pages/Home";
import DetailsCourse from "../Pages/VideoSolutions/DetailsCourse/DetailsCourse";
import Signin from "../Pages/Signin/Signin";
import Membership from "../Pages/Membership and Pricing/Membership";
import PaymentForm from "../Pages/Membership and Pricing/PaymentForm/PaymentForm";
import ProfileHome from "../Pages/Profile Home/ProfileHome";
import ProfileBlogDetails from "../Pages/Profile Blog Details/ProfileBlogDetails";
import SignUpAlternative from "../Pages/SignUp Alternative/SignUpAlternative";
import PrivateRoute from "./PrivateRoute";
import UserLanding from "../Pages/User Landing/UserLanding";
import Courses from "../pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/home",
    element: (
      <PrivateRoute>
        <UserLanding></UserLanding>
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/profile",
        element: <ProfileHome></ProfileHome>,
      },
      {
        path: "/profile/blog-details/:id",
        element: <ProfileBlogDetails></ProfileBlogDetails>,
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
        path: "/profile/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/profile/membership/payment",
        element: <PaymentForm></PaymentForm>,
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
        path: "/profile/admin/courses",
        element: <Courses />,
      },
      {
        path: "/profile/faq",
        element: <Faq />,
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
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signup-alternative",
    element: <SignUpAlternative></SignUpAlternative>,
  },
]);
