import { FC, useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import CheckBox from "../components/CheckBox/CheckBox";
import Plate from "../components/Plate/Plate";
import "./Deserialization.css";

import timemenegement from '../markdownText/Timemanagement/Timemanagement.md?raw';

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
  // const { name } = useParams(); // Получаем параметр из URL
  // const [file, setFile] = useState(""); // Состояние для данных
  // const [error, setError] = useState(""); // Состояние для ошибок

  // const API = "https://localhost:7006";

  // useEffect(() => {
  //   if (!name) {
  //     setError("Название подтемы не указано");
  //     return;
  //   }

  //   fetch(`${API}/api/subthemes/${name}/content`, {mode:'no-cors'})
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Ошибка: ${response.status}`);
  //       }
  //       return response.text(); 
  //     })
  //     .then((data) => {
  //       setFile(data); 
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       console.error("Ошибка:", err);
  //     });
  // }, [name]); // Зависимость от name — запрос обновится, если name изменится

  return (
    <>
      <Header back={back}></Header>
      <Container>
        {/* {error ? (
          <p style={{ color: "red" }}>Ошибка: {error}</p>
        ) : file ? ( */}
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
            {timemenegement}
          </Markdown>
        {/* ) : (
          <p>Загрузка...</p>
        )} */}
      </Container>
    </>
  );
};

export default Deserialization;