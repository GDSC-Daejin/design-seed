import { ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    outsideClick: (target: EventTarget | null) => void;
    trigger?: boolean;
}
declare const OutsideClickHandler: ({ children, outsideClick, trigger, }: Props) => JSX.Element;
export default OutsideClickHandler;
