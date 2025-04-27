import { FC } from "react";
import styled from "styled-components";
import { IAddition } from "../../types/types";
import { baseTheme } from "../../styles/theme";

const Container = styled.a`
  margin-block: 2rem;
  width: 450px;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(87, 199, 133, 1) 0%,
    rgba(31, 169, 255, 1) 100%
  );
  border-radius: 25px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${baseTheme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 70px;
    height: 70px;
    margin-top: 30px;
    align-self: center;
  }
`;
const Addition: FC<IAddition> = ({ text, image, link }) => {
  return (
    <Container href={link}>
      <img src={image} alt="" />
      {text}
    </Container>
  );
};
export default Addition;
