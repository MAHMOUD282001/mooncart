import React from "react";
import logo from "../../../assets/common/logo.png";
import { BodyOne, Caption, CustomLink, Title } from "../CustomComponents";

function Footer() {
  return (
    <footer className="py-14 bg-white-100">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Logo" className="h-7" />

          <div className="flex flex-col gap-2 mt-5">
            <Caption>Address: Menofia, Elbajour</Caption>
            <Caption>Email: example@example.com</Caption>
            <Caption>Phone: 0123456789</Caption>
          </div>

          <BodyOne>Subscribe Our Newsletter</BodyOne>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white-100 border-gray-300 rounded-md outline-none"
          />
        </div>

        <div>
          <Title level={5}>Our Stories</Title>
          <div className="flex flex-col gap-4 mt-5">
            <CustomLink className={"text-primary-gray"}>Normal</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Sidebar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Category</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Filters Topbar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Wide</CustomLink>
          </div>
        </div>
        
        <div>
          <Title level={5}>Our Stories</Title>
          <div className="flex flex-col gap-4 mt-5">
            <CustomLink className={"text-primary-gray"}>Normal</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Sidebar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Category</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Filters Topbar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Wide</CustomLink>
          </div>
        </div>
        
        <div>
          <Title level={5}>Our Stories</Title>
          <div className="flex flex-col gap-4 mt-5">
            <CustomLink className={"text-primary-gray"}>Normal</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Sidebar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop With Category</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Filters Topbar</CustomLink>
            <CustomLink className={"text-primary-gray"}>Shop Wide</CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
