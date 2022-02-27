import styled from "styled-components"
import { COLORS } from '../constant';

const StyledOutlinedButton = styled.button`
  padding: 14px 16px 10px 16px;
  background: transparent;
  border: 1px solid ${COLORS.primary};
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  letter-spacing: -0.14px;
`;

type OutlinedButtonProps = {
  children: React.ReactNode;
}

export function OutlinedButton({ children }: OutlinedButtonProps): JSX.Element {
  return (
    <StyledOutlinedButton>{children}</StyledOutlinedButton>
  )
}

export function Button(): JSX.Element {
  return (
    <StyledOutlinedButton>Button</StyledOutlinedButton>
  )
}


