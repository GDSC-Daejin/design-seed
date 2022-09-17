import { ReactNode, Ref, useCallback, useEffect, useRef } from 'react';

export interface Props {
  children: ReactNode;
  outsideClick: (target: EventTarget | null) => void;
  trigger?: boolean;
}
const OutsideClickHandler = ({
  children,
  outsideClick,
  trigger = true,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const handleClick = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        outsideClick(e.target);
      }
    },
    [outsideClick],
  );
  useEffect(() => {
    if (trigger) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
    }
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick, trigger]);
  return <div ref={ref as Ref<HTMLDivElement>}>{children}</div>;
};

export default OutsideClickHandler;
