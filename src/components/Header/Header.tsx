import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import burger from "/burger.svg";
import logo from "/logo.svg";
const Container = styled.header`
  margin-top: 60px;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
`;  
const Head = styled.div`
  width: calc(100vw - 200px);
  background-color: ${baseTheme.colors.white};
  height: 72px;
  display: flex;
  color: blue;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  
`;
const Button = styled.button`
  width: 140px;
  height: 60px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 5px;
  color: ${baseTheme.colors.white};
  border: none;
  font-size: 24px;
  margin-right: 23px;
  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.div`
  margin: 0;
`;
const Burger = styled.div`
  margin-inline: 100px 18px;
`;

export default function Header() {
  return (
    <Container>
      <Head>
        <Burger>
          <img src={burger} alt="" />
        </Burger>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Button>Чат-бот</Button>
      </Head>
    </Container>
  );
}
