import React from "react";
import { useState } from "react";
import CartFavouriteIcons from "../cartfavouriteicons/CartFavouriteIcons";
import TopSidebar from "../topsidebar/TopSidebar";
import SidebarCartItems from "../sidebarcartItems/SidebarCartItems";
import SidebarContentLogic from "./SidebarContentLogic";
import SidebarFavouriteItems from "../sidebarfavouriteitems/SidebarFavouriteItems";

function SidebarContent({ isScrolled, isHomePage }) {
  let [isOpen, activeTab, handleModal, handleTabClick] = SidebarContentLogic();

  return (
    <>
      <CartFavouriteIcons
        handleModal={handleModal}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
      />
      {isOpen && (
        <>
          <div
            className="sidebar-overlay fixed top-0 left-0 w-full h-full bg-black opacity-10"
            onClick={() => handleModal(false)}
          ></div>
        </>
      )}

      <div
        className={`sidebar-modal w-full sm:w-[80%] md:w-[50%] xl:w-[35%] py-10 px-3 sm:p-10 text-primary ${
          isOpen === false ? "closing" : ""
        }`}
      >
        <TopSidebar activeTab={activeTab} handleTabClick={handleTabClick} />

        {activeTab == "cart" ? <SidebarCartItems /> : <SidebarFavouriteItems />}
      </div>
    </>
  );
}

export default SidebarContent;
