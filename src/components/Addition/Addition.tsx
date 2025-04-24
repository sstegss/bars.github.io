import { FC } from "react";
import styled from "styled-components";
import { IAddition } from "../../types/types";
import { baseTheme } from "../../styles/theme";

const Container = styled.a`
  width: 45rem;
  height: 20rem;
  background: linear-gradient(
    180deg,
    rgba(87, 199, 133, 1) 0%,
    rgba(31, 169, 255, 1) 100%
  );
  border-radius: 2.5rem;
  font-size: 24px;
  font-weight: 700;
  color: ${baseTheme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
 
  & > img {
    width: 7rem;
    height: 7rem;
    margin-top: 3rem;
    align-self: center;
  }
`;
const Addition: FC<IAddition> = ({ text, image }) => {
  return (
    <Container href="exaple.com">
      
      <img src={image} alt="" />
      <p>{text}</p>
    </Container>
  );
};
export default Addition;
