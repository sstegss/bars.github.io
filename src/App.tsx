import StarterPage from "./components/StarterPage/StarterPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Deserialization from "./pages/Deserialization.tsx";
import GlobalStyles from "./styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Импортируем глобальные стили

 const router = createBrowserRouter([

  {
    path: "/",
    element: <StarterPage />,
    errorElement: <NotFoundPage/>
  },
  {
    path: `/:path`,
    element: <Deserialization file='' />,
  }
]);
export default function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
        
        <GlobalStyles />
    </>
  );
}
