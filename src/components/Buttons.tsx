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
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${COLORS.primary};
    color: ${COLORS.white};
  }
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
  transition: background .3s;

  &:hover {
    background: linear-gradient(
      130deg,
      hsl(264deg 100% 69%) 0%,
      hsl(277deg 100% 69%) 31%,
      hsl(289deg 100% 68%) 48%,
      hsl(302deg 100% 68%) 59%,
      hsl(315deg 100% 67%) 67%,
      hsl(328deg 100% 67%) 73%,
      hsl(340deg 100% 67%) 78%,
      hsl(353deg 100% 66%) 83%,
      hsl(6deg 100% 66%) 87%,
      hsl(18deg 100% 65%) 92%,
      hsl(31deg 100% 65%) 100%
  );
  }
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


