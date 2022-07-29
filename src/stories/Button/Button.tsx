import { MouseEvent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const SeedButton = ({ children, onClick }: ButtonProps) => {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 4rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.blue400};
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.body2};

  &:hover {
    background: ${({ theme }) => theme.colors.blue300};
  }
  &:active {
    background: ${({ theme }) => theme.colors.googleBlue};
  }
`;
const ButtonElement = styled.button`
  ${style}
`;

export default SeedButton;
