import React, { useEffect, useRef, useState } from "react";

function HeaderLogic() {
  let [isOpen, setIsOpen] = useState(false);
  let [isScrolled, setIsScrolled] = useState(false);
  let menuRef = useRef(null);

  let toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let closeMenuOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", closeMenuOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", closeMenuOutside);
    };
  });

  let isHomePage = window.location.pathname === "/";

  return [isOpen, isScrolled, menuRef, toggleMenu, isHomePage];
}

export default HeaderLogic;
