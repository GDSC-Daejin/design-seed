import { ChangeEvent, HTMLAttributes } from 'react';

export interface FileInputProps extends HTMLAttributes<HTMLInputElement> {
  defaultPlaceholder: string;
  errorToggle?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}
