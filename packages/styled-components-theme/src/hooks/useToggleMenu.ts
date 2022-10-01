import { useState } from 'react';

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuHandler = (type: boolean) => {
    setIsMenuOpen(type);
  };
  return { isMenuOpen, toggleMenu, menuHandler };
};
