import { createBrowserRouter } from "react-router-dom";
import StarterPage from "../components/StarterPage/StarterPage";
import NotFoundPage from "../pages/NotFoundPage";
import Deserialization from "../pages/Deserialization";

// {additions.map((addition) => (
//   <Addition
//     key={addition.text}
//     text={addition.text}
//     image={imageChange(addition.image)}
//   />
// ))}

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <StarterPage />,
    errorElement: <NotFoundPage/>,
  },
  ...[`Timemanagement`,`Matrix`,`ABCDE`,`Lider`,`LiderStyle`, `SettingTasks`,`Delegate`,`TeamRoles`].map(()=>(
    {
      path: `/:name`,
      element: (<Deserialization back="/"/>),
      errorElement: <NotFoundPage/>,
    }
  ))
]); 
export default router