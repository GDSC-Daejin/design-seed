import { MouseEvent, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  /** 버튼 안의 내용 */
  label: ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, onClick }, ref) => {
    return (
      <ButtonElement onClick={onClick} ref={ref}>
        {label}
      </ButtonElement>
    );
  },
);

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 4rem;
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.colors.blue400};
  color: white;
  border-radius: 10px;
  line-height: 1;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.body2};

  &:hover {
    background: ${({ theme }) => theme.colors.blue300};
  }
  &:active {
    background: ${({ theme }) => theme.colors.blue900};
  }
`;
const ButtonElement = styled.button`
  ${style}
`;

export default Button;
