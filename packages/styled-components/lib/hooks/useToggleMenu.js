import { useState } from 'react';
export const useToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return { isMenuOpen, toggleMenu };
};
//# sourceMappingURL=useToggleMenu.js.map