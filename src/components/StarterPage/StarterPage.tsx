import styled from "styled-components";
import Header from "../Header/Header";
import { baseTheme } from "../../styles/theme";
import hero from "/hero.png";
import arrow_up from "/arrow_up.svg";
import arrow_down from "/arrow_down.svg";
import AboutUs from "../AboutUs/AboutUs";
import Block from "../Block/Block";
import { IBlock } from "../../types/types";
import literature from "/literature.svg";
import test_icon from "/test_icon.svg";
import megaphone_icon from "/megaphone_icon.svg";
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
  border-bottom-left-radius: 46px;
  border-bottom-right-radius: 46px;
`;

const Promo = styled.section`
  width: calc(100vw - 200px);
  background-color: ${baseTheme.colors.white};
  height: 504px;
  border-radius: 25px;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
`;
const leftMargin = 69;
const PromoText = styled.p`
  margin-left: ${leftMargin}px;
  margin-top: 104px;
  font-size: 48px;
  font-weight: 600;
`;
const Button = styled.button`
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  border: 0;
  height: 116px;
  width: 560px;
  margin-top: 50px;
  text-transform: uppercase;
  color: ${baseTheme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
const GoAhead = styled.p`
  color: ${baseTheme.colors.white};
  font-size: 40px;
  margin-block: 45px;
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
        image: literature,
      },
      {
        text: "Итоговый тест",
        image: test_icon,
      },
      {
        text: "Аудио-лекция",
        image: megaphone_icon,
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
        image: literature,
      },
      {
        text: "Итоговый тест",
        image: test_icon,
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
        image: literature,
      },
      {
        text: "Итоговый тест",
        image: test_icon,
      },
      {
        text: "Аудио-лекция",
        image: megaphone_icon,
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
        image: literature,
      },
      {
        text: "Итоговый тест",
        image: test_icon,
      },
      {
        text: "Аудио-лекция",
        image: megaphone_icon,
      },
    ],
  },
];
function StarterPage() {
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
      <Block {...blocks[0]}></Block>
      <Block {...blocks[1]}></Block>
      <Block {...blocks[2]}></Block>
      <Block {...blocks[3]}></Block>
    </>
  );
}

export default StarterPage;
