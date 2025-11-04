import Hero from "./pages/Hero/Hero"
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Root from "./pages/Root"
import DashboardMentor from "./pages/Dashboard/DashboardMentor/DashboardMentor"
import LeftSide from "./pages/Dashboard/DashboardMentor/LeftSide/LeftSide"
import MentorJobFeed from "./pages/Dashboard/DashboardMentor/MentorJobFeed"
import MentorMyStats from "./pages/Dashboard/DashboardMentor/MentorMyStats"
import Signup from "./pages/Signup/Signup"
import MyStatsStartup from "./pages/Dashboard/DashboardStartup/MyStats"
import MyStats from "./pages/Dashboard/DashboardStartup/MyStats"
import DashboardStartup from "./pages/Dashboard/DashboardStartup/DashboardStartup"
import StartupJobsDashboard from "./pages/Dashboard/DashboardStartup/StartupJobsDashboard"
import Main from "./pages/Main/Main"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
      {
        path: `signup`,
        element: <Signup/>
      },
      {
        path: `login`,
        element: <Login />
      },
      {
        path: 'mentor',
        children: [
              { path: 'job-feed', element: <MentorJobFeed/>},
              { path: 'dashboard', element: <DashboardMentor/>},
              { path: 'my-stats', element: <MentorMyStats/>}
        ]
      },
      {
        path: 'startup',
        children: [
          { path: 'dashboard', element: <DashboardStartup/>},
          { path: 'mentors', element: <Main/>},
          { path: 'jobs', element: <StartupJobsDashboard/>}
        ]
      }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
