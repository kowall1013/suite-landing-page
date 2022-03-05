import styled from "styled-components"
import { COLORS, QUERIES } from "../constant";
import { Button } from './Buttons';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const GridWrapper = styled.div`
  display: grid;
  place-items: center;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 5fr 4fr;
  }


`;

const ContentWrapper = styled.div`
  margin-bottom: 55px;
  display: grid;
  place-items: center;

  @media ${QUERIES.tabletAndUp} {
    justify-items: flex-start;

  }
`;

const Title = styled.p`
  font-size: 3.8rem;
  line-height: 4.4rem;
  letter-spacing: -0.53px;
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndUp} {
    font-size: 5.6rem;
    line-height: 6.4rem;
    letter-spacing: -0.78px;
    width: calc(100% + 150px);
    z-index: 1;
    /* width: 140%;
    z-index: 1; */
  }

  span {
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    transform: translateY(-100%);
    background-image: url("./assets/pattern-curved-line-1.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: ${COLORS.secendary};
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 80%;
  }
`;

const ImageWrapper = styled.picture`
  margin-bottom: 56px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 237px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Score = styled.div`
  display: grid;
  place-items: center;

  span {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.6rem;
    color: ${COLORS.primary};
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: ${COLORS.secendary};
  }
`;

function SuperSoluctionSection(): JSX.Element {


  return (
    <Wrapper>
      <GridWrapper>
        <ContentWrapper>
          <Title>A <b>super <span>solution</span></b><br /> for your <b>business.</b></Title>
          <Text>Our marketing and sales automations help you scale your outreach to get more leads for your company.</Text>
          <Button>Request Beta Access</Button>
        </ContentWrapper>
        <ImageWrapper>
          <source srcSet="./assets/image-hero-portrait@2x.png" media="(min-width: 550px)" />
          <img src="./assets/image-hero-landscape@2x.png" alt="smarthphone" />
        </ImageWrapper>
      </GridWrapper>
      <ScoreWrapper>
        <Score>
          <span>2K+</span>
          <p>companies</p>
        </Score>
        <Score>
          <span>8</span>
          <p>languages</p>
        </Score>
        <Score>
          <span>1.2M</span>
          <p>leads</p>
        </Score>
      </ScoreWrapper>
    </Wrapper>
  )
}

export default SuperSoluctionSection