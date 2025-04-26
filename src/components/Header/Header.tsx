import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import burger from "/images/burger.svg";
import { FC } from "react";
import { Link } from "react-router-dom";
import arrow_back from "/images/arrow_back.svg";
const Container = styled.header`
  margin-top: 1rem;
  position: fixed;
  min-width: 100vw;
  height: 72px;
`;
const Head = styled.div`
  
  width: 80vw;
  background-color: ${baseTheme.colors.white};
  height: 72px;
  display: flex;
  justify-self: center;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
const Button = styled.a`
  height: 60px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 5px;
  color: ${baseTheme.colors.white};
  border: none;
  font-size: 24px;
  margin-right: 23px;
  padding-inline: 1vw;
  padding-block: 18px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (${baseTheme.media.large}) {
    font-size: 1rem;
  }
  @media (${baseTheme.media.small}) {
    margin-right: 15px;
  }
`;
const Logo = styled.div`
  font-family: ${baseTheme.fonts.minor};
  color: ${baseTheme.colors.black};
  font-size: 2rem;
  @media (${baseTheme.media.large}) {
    font-size: 1rem;
  }
`;
const Burger = styled.div`
  margin-inline: 5% 18px;
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

        <Logo>tim lead</Logo>
        <Button href="https://t.me/barsuadlearn_bot">Чат-бот</Button>
      </Head>
    </Container>
  );
};
export default Header;
