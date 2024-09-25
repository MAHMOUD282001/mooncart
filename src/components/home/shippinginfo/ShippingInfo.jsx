import React from "react";
import { additionalInfo } from "../../../assets/data/data";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";
import { BodyOne, Title } from "../../common/CustomComponents";

export const ShippingInfo = () => {
  return (
    <section className="my-28 px-4 py-12 bg-white-100">
      <div className="container w-full md:w-[80%] mx-auto">
        <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="text-primary-green">
                {item.title.toLocaleLowerCase().includes("free shipping") ? (
                  <FaShippingFast size={50} />
                ) : item.title.toLocaleLowerCase().includes("24/7 support") ? (
                  <MdOutlineMarkUnreadChatAlt size={50} />
                ) : (
                  <FaCircleDollarToSlot size={50} />
                )}
              </div>
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary p-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <BiChat size={100} color="white" />

            <div>
              <Title level={4} className={"text-white"}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Title>

              <BodyOne className={"text-gray-300"}>
                Get Latest News, Offers and Discount
              </BodyOne>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <input
              type="text"
              className="outline-none border-none w-full p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
