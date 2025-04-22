import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import line from "/line.svg";
import { FC } from "react";
import { IBlock } from "../../types/types";
import arrow_link from "/arrow_link.svg";
import Addition from "../Addition/Addition";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: calc(100vw - 200px);
  margin-inline: 200px;
  margin-top: 90px;
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
  margin-bottom: 50px;
`;
const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  margin-block: 41px 36px;
`;
const Additions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
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
            image={addition.image}
          />
        ))}
      </Additions>
    </Container>
  );
};
export default Block;
