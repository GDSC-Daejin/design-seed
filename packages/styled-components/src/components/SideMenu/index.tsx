import { ReactNode, useEffect } from 'react';
import { SideMenuWrapper } from './styled';
import OutsideClickHandler from '../../utils/OutsideClickHandler';

interface SideMenuProps {
  isMenuOpen?: boolean;
  children?: ReactNode;
  menuHandler: (type: boolean) => void;
}

const SideMenu = ({
  children,
  isMenuOpen = false,
  menuHandler,
}: SideMenuProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!isMenuOpen) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isMenuOpen]);
  return (
    <SideMenuWrapper animate={isMenuOpen}>
      <OutsideClickHandler outsideClick={() => menuHandler(false)}>
        {children}
      </OutsideClickHandler>
    </SideMenuWrapper>
  );
};

export default SideMenu;
