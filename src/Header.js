import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <div className="headerbardiv" style={{ backgroundColor: "black" }}>
        <Headerbar isToggled={isToggled} userToggled={userToggled}>
          {/* 햄버거 버튼(bar) */}
          <div
            className="toggle"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>

          {/* Apple 로고 */}
          <div className="logo">
            {/* <FontAwesomeIcon icon={faApple} /> */}
            <span>
              <Link to={`/`}>10x</Link>
            </span>
          </div>

          {/* User 버튼 */}
          <div
            className="user"
            onClick={() => {
              setUserToggled(!userToggled);
            }}
          >
            <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
          </div>

          {/* 메뉴 리스트 */}
          <ul className="header__menulist">
            <li>
              <Link to={`/`}>홈</Link>
            </li>
            <li>
              <Link to={`/fruit`}>10x프룻클래스</Link>
            </li>
            <li>
              <Link to={`/community`}>커뮤니티</Link>
            </li>
          </ul>

          {/* User 메뉴 리스트 */}
          <ul className="header__right">
            <li>
              <Link to={`/login`}>로그인</Link>
            </li>
          </ul>
        </Headerbar>
      </div>
    </div>
  );
}

export default Header;

const Headerbar = styled.div`
  top: 0;
  max-width: 980px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
    "gulim", "굴림", "Tahoma";
  .logo {
    margin: 0 1rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
      "gulim", "굴림", "Tahoma";
  }

  .header__menulist {
    list-style: none;

    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 10;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;
