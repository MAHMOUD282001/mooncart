import React from "react";
import { IoClose } from "react-icons/io5";
import { BodyOne, Title } from "../../common/CustomComponents";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useShowModal } from "../../../context/ShowProductDataContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slice/cartSlice";
import { toast } from "react-toastify";

function ProductModal() {
  const {
    isModalOpen,
    handleModal,
    modalData,
    getModalData,
    renderRatingStars,
  } = useShowModal();

  let disatch = useDispatch();

  const addItemToCart = () => {
    let discountedPrice = (
      modalData.price[0].value -
      (modalData.price[0].value * modalData.discount) / 100
    ).toFixed(2);

    disatch(
      addToCart({
        id: modalData.id,
        name: modalData.title,
        price: discountedPrice,
        images: modalData.images,
      })
    );
    toast.success("Product Added To Cart");
  };

  return (
    <>
      {isModalOpen && (
        <div>
          <div
            className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-10 z-[1002]"
            onClick={() => handleModal("close")}
          ></div>

          <div className="modal-content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] md:w-[80%] h-[90%] lg:h-[500px] flex flex-col lg:flex-row items-center justify-center bg-white opacity-1 z-[1003] rounded-lg">
            <div className="w-full lg:w-1/2 h-[350px] lg:h-[500px]">
              <img
                src={modalData.images[0].image}
                alt="Product Img"
                className="w-full h-full object-contain lg:object-cover rounded-lg"
              />
            </div>

            <div className="product-details w-full lg:w-1/2 h-[300px] lg:h-[500px] overflow-y-scroll p-6 md:p-10">
              <button className="bg-indigo-500 px-5 py-2 text-white font-medium mb-3">
                Sale {modalData.discount}% OFF
              </button>

              <Title level={3}>{modalData.title}</Title>

              <div className="flex items-center gap-2 mt-2">
                {renderRatingStars(modalData.rating)}
              </div>

              <div className="flex items-center gap-3 mt-3">
                {modalData.price.slice(0, 1).map((priceItem) => (
                  <>
                    <BodyOne className={"line-through"}>
                      ${priceItem.value}
                    </BodyOne>

                    <Title level={4} className={"text-primary-green"}>
                      $
                      {(
                        priceItem.value -
                        (priceItem.value * modalData.discount) / 100
                      ).toFixed(2)}
                    </Title>
                  </>
                ))}
              </div>

              <BodyOne className={"leading-6"}>{modalData.description}</BodyOne>

              <div className="flex items-center gap-3 mt-5">
                <input
                  type="text"
                  value="1"
                  className="w-12 h-12 outline-none border-2 border-primary px-4"
                />

                <button className="primary-btn" onClick={addItemToCart}>
                  Add To Cart
                </button>
              </div>

              <hr className="my-5" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Title level={5} className={"text-lg"}>
                    Category:{" "}
                    <span className="font-normal">Wooden Product</span>
                  </Title>
                </div>

                <div className="flex items-center gap-3">
                  <Title level={5} className={"text-lg"}>
                    Tag: <span className="font-normal">Wooden</span>
                  </Title>
                </div>

                <div className="flex items-center gap-3">
                  <Title level={5} className={"text-lg"}>
                    Share:
                  </Title>

                  <div className="flex items-center gap-3">
                    <FaFacebookF />
                    <AiFillInstagram />
                    <FaTwitter />
                  </div>
                </div>
              </div>

              <button
                className="btn-close absolute top-0 right-0 bg-red-900 w-12 h-12 flex items-center justify-center text-white text-2xl rounded-tr-lg"
                onClick={() => handleModal("close")}
              >
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;
