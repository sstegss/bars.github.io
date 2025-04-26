import { ICheckBox } from "../../types/types";
import { FC } from "react";
import CheckBoxIcon from "/images/checkbox_icon.svg";
import "./Checkbox.css";

const CheckBox: FC<ICheckBox> = ({ title, children }) => {
  return (
    <div className="CheckBox--Container">
      <div className="CheckBox--Staff">
        <img src={CheckBoxIcon} alt="" />

        <div className="CheckBox--Content">
          <p className="CheckBox--Title">{title}</p>
          <p className="CheckBox--Text">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
