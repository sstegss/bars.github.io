import { FC } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import { IDeserialization } from "../types/types";
//import CheckBox from "../components/CheckBox/CheckBox";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  width: calc(100vw - 200px);
  margin-inline: 100px;
  & ~ p {
  }
`;
const H1 = styled.h1`
  font-size: 64px;
  font-weight: 600;
  color: #4481f6;
  margin-block: 40px;
`;
const H2 = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-block: 40px;
`;
const H3 = styled.h3`
  font-size: 42px;
  font-weight: 600;
  margin-block: 40px;
  color: #5aa9f3;
`;
const P = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin-block: 40px;
`;
const UL = styled.ul`
  font-size: 36px;
  font-weight: 400;
  margin-left: 2.5rem;
  list-style-type: disc;
`;
const OL = styled.ol`
  font-size: 36px;
  font-weight: 400;
  margin-left: 2.5rem;
`;
const Deserialization: FC<IDeserialization> = ({ file }) => {
  return (
    <Container>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: H1,
            },
            p: {
              component: P,
            },
            h2: {
              component: H2,
            },
            h3: {
              component: H3,
            },
            ul: {
              component: UL,
            },
            ol: {
              component: OL,
            },
            image: {
              props: {
                className: "image",
              },
            },
          },
        }}
      >
        {file}
      </Markdown>
    </Container>
  );
};

export default Deserialization;
