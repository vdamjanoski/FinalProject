import Header from "./pages/Header/Header"
import Hero from "./pages/Hero/Hero"
import Footer from "./pages/Footer/Footer"
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
