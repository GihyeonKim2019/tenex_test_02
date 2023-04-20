import styled from "styled-components";

function Home_Reviews() {
  return (
    <HomeReview>
      <div>
        <div className="userimgdiv">
          <img className="userimg" src="logo192.png"></img>
        </div>

        <h1 className="usertext">리액트 님</h1>
        <h1 className="reviewtext">"손에 꼽을 정도의 명강의입니다"</h1>
      </div>
    </HomeReview>
  );
}

export default Home_Reviews;

const HomeReview = styled.div`
  margin: 20px;
  width: 210px;
  height: 320px;
  background: #f1f1f1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 25px;

  .userimgdiv {
    margin: 30px;
  }

  .userimg {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .usertext {
    font-family: "Inter";
    font-style: normal;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .reviewtext {
    margin-top: 30px;
    text-align: center;
  }
`;
