import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledTextArea, StyledTextAreaWrapper } from './styled';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { error, disabled, ...rest } = props;
    return (
      <StyledTextAreaWrapper error={error} disabled={disabled}>
        <StyledTextArea
          ref={ref}
          className={'formInput'}
          disabled={disabled}
          {...rest}
        />
      </StyledTextAreaWrapper>
    );
  },
);
