import styled from "styled-components";
import wall_image from "/images/wall_image.png";
import stats from "/images/stats.png";
const Container = styled.div`
  max-width: calc(100vw - 10%);
  margin-top: 90px;
  align-self: center;
`;
const Ad = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.875rem;
  justify-content: space-between;
  align-content: space-between;
`;
const Best = styled.p`
  font-size: 2.5rem;
`;
export default function AboutUs() {
  return (
    <Container>
      <Best>
        Ты можешь стать лучше. Ты можешь все! <br /> Нужно только правильное
        место.
      </Best>
      <Ad>
        <img src={wall_image} alt="" />
        <Mission>
          <p>
            Миссия курса <span style={{ color: "#35D98D" }}>TIM LEAD</span> —
            Дать возможность каждому <br /> человеку найти себя в профессии,
            которая будет <br /> реализовывать его мечты.
          </p>
          <img src={stats} alt="" />
        </Mission>
      </Ad>
    </Container>
  );
}
