import styled from "styled-components";
import Header from "../Header/Header";
import { baseTheme } from "../../styles/theme";
import hero from "/images/hero.png";
import arrow_up from "/images/arrow_up.svg";
import arrow_down from "/images/arrow_down.svg";
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
  border-bottom-left-radius: 46px;
  border-bottom-right-radius: 46px;
`;

const Promo = styled.section`
  width: 80vw;
  background-color: ${baseTheme.colors.white};
  height: 50vh;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 60% 40%;
  justify-content: space-between;
  align-self: center;
  margin-top: 100px;
`;
const PromoText = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  margin-inline: 3vw;
  margin-top: 3vw;
  font-size: 2rem;
  font-weight: 600;
  align-self: center;
  
  @media (${baseTheme.media.megaLarge}) {
    font-size: 2rem;
  }
  @media (${baseTheme.media.large}) {
    grid-column: span 2;
  }
  @media (${baseTheme.media.small}) {
    font-size: 1rem;
  }
  @media (max-height: 550px) {
    font-size: 1.5rem;
  }
  @media (max-height: 400px) {
    font-size: 1rem;
  }
`;
const Button = styled.button`
  margin-left: 3vw;
  margin-bottom: 3vw;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  border: 0;
  min-width: 29vw;
  max-width: 560px;
  height: 10vh;
  text-transform: uppercase;
  color: ${baseTheme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  font-size: 2.5rem;
  font-weight: 700;
  object-fit: none;
  &:hover {
    cursor: pointer;
  }

  @media (${baseTheme.media.extraLarge}) {
    font-size: 2rem;
    height: 4rem;
    & > img {
      width: 2rem;
    }
  }

  @media (${baseTheme.media.large}) {
    font-size: 1.5rem;
    height: 3rem;
    & > img {
      width: 1.5rem;
    }
  }
  @media ${baseTheme.media.small} {
    height: 3rem;
    font-size: 1rem;
    & > img {
      display: none;
    }
  }
`;
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  grid-column-start: 2;
  grid-row: span 2;
  
  & > img {
    margin-block: 0;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
  @media (${baseTheme.media.large}) {
    grid-row-start: 2;
    grid-row: span 1;
  }
`;
const GoAhead = styled.p`
  // заменить на существительное
  color: ${baseTheme.colors.white};
  font-size: 40px;
  text-align: center;
  margin-top: 15px;
  @media ${baseTheme.media.small} {
    font-size: 1rem;
  }
`;

//сделать запрос blocks с бека
function StarterPage() {
  // file await
  return (
    <>
      <Header />
      <Container>
        <Promo>
          <PromoText>
            Добро пожаловать на платформу
            <span style={{ color: "#4481F6" }}> «Тим Лид»</span> — вашу
            стартовую точку в мире эффективного лидерства!
          </PromoText>
          <Button>
            записаться
            <img src={arrow_up} alt="" />
          </Button>

          <Hero>
            <img src={hero} alt="" />
          </Hero>
        </Promo>
        <GoAhead>
          Станьте лидером, за которым <br />
          хочется идти.
        </GoAhead>
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
        link: "example.com",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
        link: "example.com",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
        link: "example.com",
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
        link: "example.com",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
        link: "example.com",
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
        link: "example.com",
      },
      {
        text: "Итоговый тест",
        image: "test_icon",
        link: "example.com",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
        link: "example.com",
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
        link: "example.com",
      },
      {
        text: "Аудио-лекция",
        image: "megaphone_icon",
        link: "example.com",
      },
    ],
  },
];
