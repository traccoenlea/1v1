import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import App from "./App";
import Classement from "./components/Classement";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        element: <Classement />,
        path: "/classement",
      },
    ],
  },
]);
