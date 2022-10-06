import { HTMLAttributes } from 'react';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
}
