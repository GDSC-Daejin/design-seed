import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { SideMenuWrapper } from './styled';
import OutsideClickHandler from '../../utils/OutsideClickHandler';
const SideMenu = ({ children, isMenuOpen = false, toggleMenu, }) => {
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
    return (_jsx(SideMenuWrapper, { animate: isMenuOpen, children: _jsx(OutsideClickHandler, { outsideClick: () => toggleMenu(), children: children }) }));
};
export default SideMenu;
//# sourceMappingURL=index.js.map