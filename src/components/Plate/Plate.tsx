import { FC } from "react";
import { ICheckBox } from "../../types/types";
import "./Plate.css"



const Plate: FC<ICheckBox> = ({ title, children }) => {
    return (
      <div className="Plate--Container">
        <div className="Plate--Staff">
            <p className="Plate--Title">{title}</p>
            <p className="Plate--Text">{children}</p>
        </div>
      </div>
    );
  };
  
  export default Plate;