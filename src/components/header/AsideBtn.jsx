import React, { useState } from 'react';

import CloseIcon from '../../assets/icon-close.svg';
import MenuIcon from '../../assets/icon-menu.svg';

const AsideBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
    document.getElementsByTagName("body")[0].classList.toggle("menu-closed");
  }
  return (
    <button
      data-testid="menuBtn"
      className="flex items-center justify-center w-full h-14 md:h-[72px] bg-neutral-400 hover:bg-primary-100"
      onClick={toggleSidebar}
    >
      <span className="sr-only">{isMenuOpen ? "close menu" : "show menu"}</span>
      <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="" />
    </button>
  );
}

export default AsideBtn