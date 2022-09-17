import { useState } from 'react';

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenu = (type: boolean) => {
    setIsMenuOpen(type);
  };
  return { isMenuOpen, toggleMenu, handleMenu };
};
