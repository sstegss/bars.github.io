import { createBrowserRouter } from "react-router-dom";
import StarterPage from "../components/StarterPage/StarterPage";
import NotFoundPage from "../pages/NotFoundPage";
import Deserialization from "../pages/Deserialization";
import timemanagement from '../markdownText/timemanagement/Timemanagement.md?raw'
import matrix from "../markdownText/matrix/Matrix.md?raw";
import abcde from "../markdownText/abcde/Abcde.md?raw";

const router = createBrowserRouter([

  {
    path: "/",
    element: <StarterPage />,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/Timemanagement`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/Matrix`,
    element: <Deserialization  file={matrix}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/ABCDE`,
    element: <Deserialization  file={abcde}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/Lider`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/LiderStyle`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/SettingTasks`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/Delegate`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/WorkCulture`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: `/TeamRoles`,
    element: <Deserialization  file={timemanagement}/>,
    errorElement: <NotFoundPage/>,
  }

]); 
export default router