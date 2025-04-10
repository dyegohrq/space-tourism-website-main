import { RouterProvider } from "react-router";
import { route } from "./routes";

export default function App() {
  return(
    <>
      <RouterProvider router={route} />
    </>
  )
}