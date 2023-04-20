import styles from "../css/Home.module.css";
import Home_Reviews from "./homecomponents/Home_Reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home_Carousel from "./homecomponents/Home_Carousel";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className={styles.wholediv}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div className={styles.valuetextdiv}>
          <div
            style={{
              maxWidth: "328px",
              marginBottom: "100px",
              margin: "0 auto",
            }}
          >
            <span className={styles.valuetext_1}>10x는 다릅니다.</span>
            <p className={styles.valuetext_2}>
              10배 빠른 수강경험,
              <br /> 10배의 가성비, <br />
              10배의 효용, <br />
              10배의 경험.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.fruitdiv}>
        <div>
          <h1 className={styles.fruittext_1}>
            올 여름, 과일 위탁판매로 <br></br> 월 천 벌 수 있다면.
          </h1>
          <h1 className={styles.fruittext_2}>
            50억 매출 은우쌤이 떠먹여주는 내 사업 <br></br>지금 도전하세요
          </h1>
          <Link to="/fruit">
            <button className={styles.fruitbutton}>
              은우쌤의 10x 클래스 수강하기
            </button>
          </Link>
        </div>
        <div>
          <img src="mrcha.png"></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <h1 className={styles.reviewtext_1}>
          수강생들의 생생한 후기와 <br></br>성공 사례를 만나보세요.
        </h1>
        <Link to="/community">
          <button className={styles.communitybutton}>성공사례 확인하기</button>
        </Link>
      </div>
      <div className={styles.reviewdiv}>
        <div className={styles.reviewCarousel}>
          <Home_Carousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
