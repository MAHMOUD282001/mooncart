import React, { useState } from "react";

function SidebarContentLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const handleModal = (state) => {
    setIsOpen(state);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return [isOpen, activeTab, handleModal, handleTabClick];
}

export default SidebarContentLogic;
