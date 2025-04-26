import { ICheckBox } from "../../types/types";
import { FC } from "react";
import CheckBoxIcon from "/images/checkbox_icon.svg";
import "./Checkbox.css";


const CheckBox: FC<ICheckBox> = ({ title, children }) => {
  return (
      <div className="CheckBox--Container">
        <img src={CheckBoxIcon} alt="" />

        <div className="CheckBox--Content">
          <p className="Content--Title">{title}</p>
          <p className="Content--Text">{children}</p>
        </div>
      </div>
  );
};

export default CheckBox;
