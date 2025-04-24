import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import line from "/images/line.svg";
import { FC } from "react";
import { IBlock } from "../../types/types";
import arrow_link from "/images/arrow_link.svg";
import Addition from "../Addition/Addition";
import { Link } from "react-router-dom";

import literature from "/images/literature.svg";
import test_icon from "/images/test_icon.svg";
import megaphone_icon from "/images/megaphone_icon.svg";

const Container = styled.div`
  max-width: calc(100vw - 20rem);
  margin-inline: 20rem;
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlockNumber = styled.div`
  font-size: 65px;
  font-family: ${baseTheme.fonts.minor};
`;
const Theme = styled.div`
  font-size: 65px;
  font-family: ${baseTheme.fonts.main};
  margin-bottom: 5rem;
`;
const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.6rem,;
  margin-block: 4.1rem 3.6rem;
`;
const Additions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
function imageChange(imageName: string) : string {
  switch (imageName) {
    case "literature":
      return literature;
    case "test_icon":
      return test_icon;
    case "megaphone_icon":
      return megaphone_icon;
    default:
      return " ";
  }
}
const Block: FC<IBlock> = ({ blockNumber, theme, chilren, additions }) => {
  return (
    <Container>
      <BlockNumber>блок {blockNumber}.</BlockNumber>
      <Theme>{theme}</Theme>
      <img src={line} alt="" />
      {chilren.map((child) => (
        <section key={child.name}>
          <ContentLine>
            <p> {child.name} </p>
            <Link to={child.link}>
              <img src={arrow_link} alt="" />
            </Link>
          </ContentLine>
          <img src={line} alt="" />
        </section>
      ))}
      <h3
        style={{ fontSize: "48px", fontWeight: "700px", marginBlock: "145px" }}
      >
        Дополнительно:
      </h3>
      <Additions>
        {additions.map((addition) => (
          <Addition
            key={addition.text}
            text={addition.text}
            image={imageChange(addition.image)}
          />
        ))}
      </Additions>
    </Container>
  );
};
export default Block;
