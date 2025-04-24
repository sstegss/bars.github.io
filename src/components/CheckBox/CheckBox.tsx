import styled from "styled-components";
import { ICheckBox } from "../../types/types";
import { FC } from "react";
import CheckBoxIcon from "/images/checkbox_icon.svg";
import "./Checkbox.css";
// const Container = styled.div`
//   width: 745px;
//   min-height: 265px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 25px;
//   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
//   margin-right: 40px;
//   margin-bottom: 40px;
// `;
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Title = styled.p`
//   font-size: 32px;
//   font-weight: 600;
//   margin-bottom: 5px;
// `;
// const Text = styled.p`
//   font-size: 28px;
//   color: #6c6c72;
// `;
// const Image = styled.div`
//   margin: 40px;
// `;
const Component = styled.div`
  display: inline;
`;
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
