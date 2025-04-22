import styled from "styled-components";
import wall_image from "/wall_image.png";
import stats from "/stats.png";
const Container = styled.div`
  max-width: calc(100vw - 200px);
  margin-inline: 200px;
  margin-top: 90px;
`;
const Add = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  justify-content: space-between;
  align-content:space-between;
`;
export default function AboutUs() {
  return (
    <Container>
      <p style={{ fontSize: "40px" }}>
        Ты можешь стать лучше. Ты можешь все! <br /> Нужно только правильное
        место.
      </p>
      <Add>
        <img src={wall_image} alt="" />
        <Mission>
          <p>
            Миссия курса <span style={{ color: "#35D98D" }}>TIM LEAD</span> —
            Дать возможность каждому <br /> человеку найти себя в профессии,
            которая будет <br /> реализовывать его мечты.
          </p>
          <img src={stats} alt="" />
        </Mission>
      </Add>
    </Container>
  );
}
