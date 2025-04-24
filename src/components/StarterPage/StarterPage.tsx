import styled from "styled-components";
import Header from "../Header/Header";
import { baseTheme } from "../../styles/theme";
import hero from "/public/images/hero.png";
import arrow_up from "/public/images/arrow_up.svg";
import arrow_down from "/public/images/arrow_down.svg";
import AboutUs from "../AboutUs/AboutUs";
import Block from "../Block/Block";
import { IBlock } from "../../types/types";
// import text from "/src/markdownText/matrix/Matrix.md?raw"; // сделать прокидку файла при переходе на страницу
const Container = styled.div`
  background: linear-gradient(
    32deg,
    rgba(87, 199, 133, 1) 0%,
    rgba(31, 169, 255, 1) 100%
  );
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 4.6rem;
  border-bottom-right-radius: 4.6rem;
`;

const Promo = styled.section`
  width: calc(100vw - 20rem);
  background-color: ${baseTheme.colors.white};
  height: 50.4rem;
  border-radius: 2.5rem;
  margin-top: 20rem;
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;
`;
const PromoText = styled.p`
  margin-left: 6.9rem;
  margin-top: 10.4rem;
  font-size: 4.8rem;
  font-weight: 600;
`;
const Button = styled.button`
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  border: 0;
  height: 11.6rem;
  width: 56rem;
  margin-top: 5rem;
  text-transform: uppercase;
  color: ${baseTheme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
const GoAhead = styled.p`
  // заменить на существительное
  color: ${baseTheme.colors.white};
  font-size: 40px;
  margin-block: 4.5rem;
`;
const blocks: IBlock[] = [
  {
    blockNumber: 1,
    theme: "Тайм-менеджмент",
    chilren: [
      { name: "Тайм менеджмент тим лида", link: "/Timemanagement" },
      { name: "Матрица Эйзенхауэра", link: "/Matrix" },
      { name: "МЕТОД Abcde", link: "/ABCDE" },
    ],
    additions: [
      {
        text: "Дополнительный материал",
        image: "literature",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
      },
    ],
  },
  {
    blockNumber: 2,
    theme: "Навык Лидерство",
    chilren: [
      { name: "Кто такой лидер?", link: "/Timemanagement" },
      { name: "Стили лидерства", link: "/Timemanagement" },
    ],
    additions: [
      {
        text: "Дополнительный материал",
        image: "literature",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
      },
    ],
  },
  {
    blockNumber: 3,
    theme: "Управление задачами",
    chilren: [
      { name: "Постановка задач модели", link: "/Timemanagement" },
      { name: "Делегирование", link: "/Timemanagement" },
    ],
    additions: [
      {
        text: "Дополнительный материал",
        image: "literature",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
      },
    ],
  },
  {
    blockNumber: 4,
    theme: "Управление с командой",
    chilren: [
      { name: "Культура совместной работы", link: "/Timemanagement" },
      { name: "Роли в команде", link: "/Timemanagement" },
    ],
    additions: [
      {
        text: "Дополнительный материал",
        image: "literature",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
      },
    ],
  },
];
//сделать запрос blocks с бека
function StarterPage() {
  // file await
  return (
    <>
      <Header />
      <Container>
        <Promo>
          <PromoText>
            Добро пожаловать на платформу <br />
            <span style={{ color: "#4481F6" }}>«Тим Лид»</span> — вашу стартовую
            точку в мире <br />
            эффективного лидерства!
            {/* <img src={hero} alt="" /> */}
            <Button>
              записаться
              <img src={arrow_up} alt="" />
            </Button>
          </PromoText>
          <img src={hero} alt="" style={{ alignContent: "end" }} />
        </Promo>
        <GoAhead>Станьте лидером, за которым хочется идти.</GoAhead>
        <img src={arrow_down} alt="" />
      </Container>
      <AboutUs />
      {blocks.map((block) => (
        <Block key={block.blockNumber}{...block}></Block>
      ))}
    </>
  );
}

export default StarterPage;
