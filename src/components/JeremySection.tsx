import styled from "styled-components"
import { COLORS, QUERIES } from "../constant";

const Wrapper = styled.section`
  background: ${COLORS.primary};
  border-radius: 16px;
  padding: 0 16px 64px 16px;
  margin: 0 -16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    padding: 0 58px 64px 58px;
  }

`;

const TranslateSpacer = styled.div`
    transform: translateY(-150px);
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    margin: 0 auto;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    box-shadow: 0px 40px 30px 100px hsla(264, 100%, 69%, 0.3);
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 40px;
    margin-bottom: 35px;
    background-image: url(./assets/pattern-curved-line-2.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4rem;
    letter-spacing: -0.42px;
    font-weight: 400;
    line-height: 48px;
    color: ${COLORS.white};
    margin-bottom: 40px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 32px;
    letter-spacing: -0.18px;
    text-transform: uppercase;
    color: ${COLORS.white};
  }

  span {
    font-size: 1.6rem;
    line-height: 26px;
    letter-spacing: 2.5px;
    color: ${COLORS.ash};
    text-transform: uppercase;
  }
`;

const BlockQuote = styled.blockquote`
  margin-bottom: 40px;

  p {
    font-size: 1.8rem;
    line-height: 32px;
    letter-spacing: 0.09px;
    text-align: center;
    color: ${COLORS.ash};
  }
`;

function JeremySection(): JSX.Element {
  return (
    <Wrapper>
      <TranslateSpacer>
        <ImageWrapper>
          <img src="./assets/image-jeremy-small.png" alt="" />
        </ImageWrapper>
        <ContentWrapper>
          <h2>It just <b>works.</b></h2>
          <BlockQuote>
            <p>
              “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”
            </p>
          </BlockQuote>
          <h3>jeremy robinson</h3>
          <span>cmo, fylo</span>
        </ContentWrapper>
      </TranslateSpacer>
    </Wrapper>
  )
}

export default JeremySection