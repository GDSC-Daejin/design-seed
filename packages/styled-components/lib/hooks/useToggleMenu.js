import { useState } from 'react';
export const useToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (isOpen) => {
        isOpen ? setIsMenuOpen(isOpen) : setIsMenuOpen((prev) => !prev);
    };
    return { isMenuOpen, toggleMenu };
};
//# sourceMappingURL=useToggleMenu.js.map