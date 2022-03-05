import GlobalStyles from './globalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import { COLORS, QUERIES } from './constant';
import SuperSoluctionSection from './components/SuperSoluctionSection';
import JeremySection from './components/JeremySection';
import Footer from './components/Footer';

const Wrapper = styled.div`
  max-width: 1010px;
  margin: 0 auto;
  padding: 24px 16px 80px 16px;
  background-color: ${COLORS.white};

  @media ${QUERIES.tabletAndUp} {
    padding: 40px 40px 72px 40px;
  }
`;
function App(): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <SuperSoluctionSection />
      <JeremySection />
      <Footer />
    </Wrapper>
  );
}

export default App;
