import React from "react";
import { ProductsHeading } from "../productsheading/ProductsHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productlists } from "../../../assets/data/data";
import ProductCard from "../productcard/ProductCard";
import ProductModal from "../productmodal/ProductModal";
import RecentProductsLogic from "./RecentProductsLogic";

export const RecentProducts = () => {
  let [settings] = RecentProductsLogic();

  return (
    <section className="px-4 my-28">
      <div className="container">
        <ProductsHeading
          title={"Recent Products"}
          firstSubTitle={"Discover Our Recent Products"}
        />

        <Slider {...settings}>
          {productlists.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                images={product.images}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                featured={product.featured}
                color={product.color}
                isTrending={true}
              />
          ))}
        </Slider>

        <ProductModal />
      </div>
    </section>
  );
};
