import { jsx as _jsx } from "react/jsx-runtime";
import { MobileMenuWrapper } from './styled';
const MobileMenu = ({ children, isMenuOpen = false }) => {
    return _jsx(MobileMenuWrapper, { animate: isMenuOpen, children: children });
};
export default MobileMenu;
//# sourceMappingURL=index.js.map