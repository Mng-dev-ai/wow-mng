import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "@/components/landing-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App