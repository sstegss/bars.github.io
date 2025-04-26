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
  min-width: calc(100vw - 20rem);
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const BlockNumber = styled.div`
  font-size: 4rem;
  justify-self: center;
  font-family: ${baseTheme.fonts.minor};
  @media (${baseTheme.media.megaLarge}) {
    font-size: 3rem;
  }
  @media (${baseTheme.media.large}) {
    font-size: 2rem;
  }
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
`;
const Theme = styled.div`
  font-size: 4rem;
  font-family: ${baseTheme.fonts.main};
  margin-bottom: 3rem;
  @media (${baseTheme.media.megaLarge}) {
    font-size: 3rem;
  }
  @media (${baseTheme.media.large}) {
    font-size: 2rem;
  }
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
`;
const Line = styled.img`
  max-width: 80vw;
`;
const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.25rem;
  margin-block: 2rem;
  @media (${baseTheme.media.megaLarge}) {
    font-size: 3rem;
  }
  @media (${baseTheme.media.large}) {
    font-size: 2rem;
  }
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
`;
const Additions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  
`;

const SomeText = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-block: 3rem;
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
`;

function imageChange(imageName: string): string {
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
      <BlockNumber>блок{blockNumber}.</BlockNumber>
      <Theme>{theme}</Theme>
      <Line src={line} alt="" />
      {chilren.map((child) => (
        <section key={child.name}>
          <ContentLine>
            {child.name}
            <Link to={child.link}>
              <img src={arrow_link} alt="" />
            </Link>
          </ContentLine>
          <Line src={line} alt="" />
        </section>
      ))}
      <SomeText>Дополнительно:</SomeText>
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
