import Hero from "./pages/Hero/Hero"
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Signup from "./pages/SignUp/SignUp"
import Login from "./pages/Login/Login"
import Root from "./pages/Root"
import DashboardMentor from "./pages/Dashboard/DashboardMentor/DashboardMentor"

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
        element: <Signup />
      },
      {
        path: `login`,
        element: <Login />
      },
      {
        path: `mentor/dashboard`,
        element: <DashboardMentor/>
      },
])

function App() {

  return <RouterProvider router={router} />
}

export default App
