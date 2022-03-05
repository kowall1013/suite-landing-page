import styled from "styled-components";
import { OutlinedButton } from "./Buttons";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <h1>
        <a href="www.google.com">
          <img src="./assets/logo.svg" alt="" />
        </a>
      </h1>
      <OutlinedButton>
        Request Beta Access
      </OutlinedButton>
    </StyledHeader>
  )
}

export default Header;