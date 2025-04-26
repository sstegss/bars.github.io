import styled from "styled-components";
import wall_image from "/images/wall_image.png";
import stats from "/images/stats.png";
import { baseTheme } from "../../styles/theme";

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: calc(100vw - 10%);
  display: grid;
  justify-content: space-between;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 40px;
  @media (${baseTheme.media.large}) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
    column-gap: 0;
    row-gap: 2rem;
  }
`;

const Best = styled.p`
  font-size: 2.5rem;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column: span 2;
  align-self: center;
  justify-self: center;
  padding-block: 2.5rem;
  @media (${baseTheme.media.large}) {
    font-size: 2rem;
    grid-row-start: 1;
  }
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
  @media (${baseTheme.media.small}) {
    font-size: 1rem;
  }
`;

const WallImage = styled.img`
  grid-column-start: 1;
  grid-row: 2/4;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  @media (${baseTheme.media.large}) {
    justify-self: center;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    grid-column-start: 2;
    grid-row: 2/3;
  }
`;

const Mission = styled.div`
  font-size: 1.875rem;
  grid-column-start: 2;
  grid-row-start: 2;
  @media (${baseTheme.media.large}) {
    grid-row-start: 3;
    align-self: center;
    justify-self: center;
  }
  @media (${baseTheme.media.medium}) {
    font-size: 1.25rem;
  }
  @media (${baseTheme.media.small}) {
    font-size: 1rem;
  }
`;

const Stats = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: end;
  @media (${baseTheme.media.large}) {
    grid-row-start: 4;
  }
`;

export default function AboutUs() {
  return (
    <Container>
      <Content>
        <Best>
          Ты можешь стать лучше. Ты можешь все! <br /> Нужно только правильное
          место.
        </Best>
        <WallImage src={wall_image} alt="" />
        <Mission>
          Миссия курса <span style={{ color: "#35D98D" }}>TIM LEAD</span> — Дать
          возможность каждому <br /> человеку найти себя в профессии, которая
          будет <br /> реализовывать его мечты.
        </Mission>
        <Stats src={stats} alt="" />
      </Content>
    </Container>
  );
}
