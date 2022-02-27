import GlobalStyles from './globalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import { COLORS } from './constant';

const Wrapper = styled.div`
  max-width: 1010px;
  margin: 0 auto;
  padding: 24px 16px 80px 16px;
  background-color: ${COLORS.white};
`;
function App(): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
    </Wrapper>
  );
}

export default App;
