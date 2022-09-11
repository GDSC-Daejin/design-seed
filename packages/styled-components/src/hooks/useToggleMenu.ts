import { useState } from 'react';

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (isOpen?: boolean) => {
    isOpen ? setIsMenuOpen(isOpen) : setIsMenuOpen((prev) => !prev);
  };
  return { isMenuOpen, toggleMenu };
};
