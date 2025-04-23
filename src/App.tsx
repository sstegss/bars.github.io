import GlobalStyles from "./styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";

export default function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
        
        <GlobalStyles />
    </>
  );
}
