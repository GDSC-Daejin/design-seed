import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledInputInner, StyledInputWrapper } from './styled';

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
}
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { error, disabled } = props;
    return (
      <StyledInputWrapper error={error} disabled={disabled}>
        <StyledInputInner className={'formInput'} {...props} ref={ref} />
      </StyledInputWrapper>
    );
  },
);
