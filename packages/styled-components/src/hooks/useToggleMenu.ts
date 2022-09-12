import { useState } from 'react';

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return { isMenuOpen, toggleMenu };
};
