import { FC } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import CheckBox from "../components/CheckBox/CheckBox";
import "./Deserialization.module.css";
//import CheckBox from "../components/CheckBox/CheckBox";

import timemanagement from '../markdownText/timemanagement/Timemanagement.md?raw'
import matrix from "../markdownText/matrix/Matrix.md?raw";
import abcde from "../markdownText/abcde/Abcde.md?raw";

// import file from '../markdownText/matrix/matrix.md?raw'

const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
  width: calc(100vw - 200px);
  margin-inline: 10rem;
`;

interface Props {
  back?: string | " ";
}
const Deserialization: FC<Props> = ({ back }) => {
  // const content = useParams();
  // //тут я как бы получаю данный с бд.
  // const file = import(`../markdownText/${content.name}/${content.name}.md?raw`)

  
  return (
    <>
      <Header back={back}></Header>
      <Container>
        <Markdown
          options={{
            overrides: {
              CheckBox: {
                component: CheckBox,
                props:{
                  className: "CheckBox"
                }
              },
            },
          }}
        >
          {timemanagement}
        </Markdown>
      </Container>
    </>
  );
};

export default Deserialization;
