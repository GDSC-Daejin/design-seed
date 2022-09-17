import { jsx as _jsx } from "react/jsx-runtime";
import { SideMenuWrapper } from './styled';
const SideMenu = ({ children, isMenuOpen = false }) => {
    return _jsx(SideMenuWrapper, { animate: isMenuOpen, children: children });
};
export default SideMenu;
//# sourceMappingURL=index.js.map