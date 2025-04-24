import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import burger from "/images/burger.svg";
import logo from "/images/logo.svg";
import { FC } from "react";
import { Link } from "react-router-dom";
import arrow_back from "/images/arrow_back.svg";
const Container = styled.header`
  margin-top: 6rem;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Head = styled.div`
  width: calc(100vw - 20rem);
  background-color: ${baseTheme.colors.white};
  height: 72px;
  display: flex;
  color: blue;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
const Button = styled.a`
  width: 14rem;
  height: 6rem;
  background-color: ${baseTheme.colors.blue};
  border-radius: 5px;
  color: ${baseTheme.colors.white};
  border: none;
  font-size: 24px;
  margin-right: 2.3rem;
  padding-inline: 2.5rem 1.8rem;
  padding-block: 1.8rem;
  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.div`
  margin: 0;
`;
const Burger = styled.div`
  margin-inline: 10rem 1.8rem;
`;
interface Props {
  back?: string;
}
const Header: FC<Props> = ({ back }) => {
  return (
    <Container>
      <Head>
        <Burger>
          {back ? (
            <Link to={back}>
              <img src={arrow_back} alt="" />
            </Link>
          ) : (
            <img src={burger} alt="" />
          )}
        </Burger>

        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Button href="https://t.me/barsuadlearn_bot">Чат-бот</Button>
      </Head>
    </Container>
  );
};
export default Header;
