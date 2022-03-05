import styled from "styled-components"
import { COLORS } from '../constant';

const StyledOutlinedButton = styled.button`
  padding: 14px 16px 10px 16px;
  background: transparent;
  border: 1px solid ${COLORS.primary};
  line-height: 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  letter-spacing: -0.14px;
`;

const StyledButton = styled.button`
  padding: 14px 32px 10px 32px;
  width: max-content;
  background: ${COLORS.primary};
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: -0.18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

type ButtonProps = {
  children: React.ReactNode;
}

export function OutlinedButton({ children }: ButtonProps): JSX.Element {
  return (
    <StyledOutlinedButton>{children}</StyledOutlinedButton>
  )
}

export function Button({ children }: ButtonProps): JSX.Element {
  return (
    <StyledButton>{children}</StyledButton>
  )
}


