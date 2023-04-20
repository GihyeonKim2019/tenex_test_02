import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home_Reviews from "./Home_Reviews";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 400px;
  margin: 0 auto;
  max-width: 980px;
  overflow: hidden;
`;

function Home_Carousel() {
  const settings = {
    dots: false, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 3000, // 다음 컨텐츠 까지의 속도
    slidesToShow: 4, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 3, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: "10px", // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 100, // 자동 캐러셀 속도
    draggable: false, // 드래그
    fade: false, // 사라졌다 나타나는 효과
    arrows: true, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: true, // hover시 정지
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 980, // (숫자)px 이하일 경우
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {/* <Slider {...settings}>
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
      </Slider> */}
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        <Home_Reviews />
        {/* <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1> */}
      </Slider>
    </Wrapper>
  );
}

export default Home_Carousel;
