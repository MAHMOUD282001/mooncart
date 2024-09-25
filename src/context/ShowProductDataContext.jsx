import { createContext, useContext, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

let ShowProductDataContext = createContext();

const renderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key={i} color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }

  return stars;
};

export const ShowProductDataProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    images: [],
    price: "",
    discount: "",
    rating: "",
  });

  const handleModal = (state) => {
    setIsModalOpen(state === "open" ? true : false);
  };

  const getModalData = (
    title,
    description,
    images,
    price,
    discount,
    rating,
  ) => {
    setModalData({
      title,
      description,
      images,
      price,
      discount,
      rating,
    });
  };

  return (
    <ShowProductDataContext.Provider
      value={{ isModalOpen, handleModal, modalData, getModalData, renderRatingStars }}
    >
      {children}
    </ShowProductDataContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowProductDataContext);
