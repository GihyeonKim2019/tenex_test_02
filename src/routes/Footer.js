import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Footerline />
      <Footerdiv>
        <div className="companyinfo">
          <div className="companynamediv">테넥스(주)</div>
          <address>
            <p className="companyinfop">
              <strong className="companyinfostrong">대표자명</strong>
              <span className="companyinfospan">차은우</span>
            </p>
            <p className="companyinfop">
              <strong className="companyinfostrong">사업자번호</strong>
              <span className="companyinfospan">010-26-567907</span>
            </p>
            <p className="companyinfop">
              <strong className="companyinfostrong">통신판매업신고번호</strong>
              <span className="companyinfospan">2023-서울동대문-0108호</span>
            </p>
            <p className="companyinfop">
              <strong className="companyinfostrong">개인정보보호책임자</strong>
              <span className="companyinfospan">차은우</span>
            </p>
            <p className="companyinfop">
              <strong className="companyinfostrong">주소</strong>
              <span className="companyinfospan">
                서울특별시 경희대로 26 삼의원창업센터 414호
              </span>
            </p>
          </address>
          <cite className="companycite">
            Ⓒ Copyright 2023 TENEX. All right reserved.
          </cite>
        </div>
        <div className="companycontact">
          <p className="companycontactp">
            <strong className="companyinfostrong">고객센터</strong>
            <span className="companyinfospan">월-금 09:00-17:00</span>
          </p>
          <p className="companycontactp">
            <strong className="companyinfostrong">이메일</strong>
            <span className="companyinfospan">contact@tenex.kr</span>
          </p>
          <p className="companycontactp">
            <strong className="companyinfostrong">핫가이 번호</strong>
            <span className="companyinfospan">010-5531-7828</span>
          </p>
          <button className="contactbutton">문의하기</button>
        </div>
      </Footerdiv>
    </div>
  );
}
export default Footer;

const Footerline = styled.div`
  height: 1px;

  background-color: #9f9f9f;
`;

const Footerdiv = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 980px;

  .companyinfo {
    min-height: 300px;
    width: 400px;
  }

  .companynamediv {
    display: block;
    margin: 0 0 18px 0;
    line-height: 20px;
    font-size: 20px;
    font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
      "gulim", "굴림", "Tahoma";
    font-weight: 800;
    color: #151b26;
  }

  .companyinfop {
    display: flex;
    align-items: flex-start;
    line-height: 30px;
  }

  .companyinfostrong {
    margin: 0 15px 0 0;
    font-weight: bold;
    font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
      "gulim", "굴림", "Tahoma";
    white-space: nowrap;
  }

  .companyinfospan {
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
      "gulim", "굴림", "Tahoma";
    letter-spacing: -0.5px;
  }

  .companycite {
    display: block;
    margin-top: 42px;
    line-height: 32px;
    font-size: 14px;
    color: #b2b2b2;
  }

  .companycontact {
    width: 400px;
  }

  .companycontactp {
    display: flex;
    justify-content: flex-end;
    line-height: 30px;
  }

  .contactbutton {
    width: 240px;
    height: 50px;
    margin-top: 21px;
    border-radius: 30px;
    font-family: "AppleSDGothic", "Pretendard", "Malgun Gothic", "dotum", "돋움",
      "gulim", "굴림", "Tahoma";
    font-size: 18px;
    font-weight: 600;
    background-color: black;
    color: white;
    float: right;
  }
`;
