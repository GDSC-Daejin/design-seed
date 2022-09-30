import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledTextArea, StyledTextAreaWrapper } from './styled';

export interface TextInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextInputProps>(
  (props, ref) => {
    const { error, disabled } = props;
    return (
      <StyledTextAreaWrapper error={error}>
        <StyledTextArea ref={ref} className={'formInput'} disabled={disabled} />
      </StyledTextAreaWrapper>
    );
  },
);
