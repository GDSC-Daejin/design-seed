import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultPlaceholder: string;
  errorToggle?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}
