import { FC } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import CheckBox from "../components/CheckBox/CheckBox";
import Plate from "../components/Plate/Plate";
import "./Deserialization.css";
// import timemanagement from '../markdownText/timemanagement/timemanagement.md?raw'
// import matrix from "../markdownText/matrix/Matrix.md?raw";
// import abcde from "../markdownText/abcde/Abcde.md?raw";
// import lider from "../markdownText/lider/lider.md?raw";
// import liderStyle from "../markdownText/liderStyle/liderStyle.md?raw";
// import settingTask from "../markdownText/settingTask/settingTask.md?raw";
// import delegate from "../markdownText/delegate/delegate.md?raw";
// import workCulture from "../markdownText/workCulture/workCulture.md?raw";
import teamRole from "../markdownText/teamRole/teamRole.md?raw";

const Container = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding-block: 140px;
  width: 80vw;
  margin-inline: 10vw;
`;

interface Props {
  back?: string | " ";
}
const Deserialization: FC<Props> = ({ back }) => {
  const content = useParams();
  console.log(content);
  // //тут я как бы получаю данный с бд.
  // const file = import(`../markdownText/${content.name}/${content.name}.md?raw`)
  // fetch

  return (
    <>
      <Header back={back}></Header>
      <Container>
        <Markdown
          options={{
            overrides: {
              CheckBox: {
                component: CheckBox,
                props: {
                  className: "CheckBox",
                },
              },
              Plate: {
                component: Plate,
                props: {
                  className: "Plate",
                },
              },
            },
          }}
        >
          {teamRole}
        </Markdown>
      </Container>
    </>
  );
};

export default Deserialization;
