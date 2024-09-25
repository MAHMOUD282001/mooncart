import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { ImagesContent, ProductDetailsContent } from "../../router";

export const ProductDetails = () => {
  let { id } = useParams();

  let product = productlists.find((product) => product.id == id);

  let { title, description, color, discount, rating, price, featured, images } =
    product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="my-20 product-details overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <ImagesContent images={images} title={title} />

          <ProductDetailsContent
            id={id}
            color={color}
            description={description}
            discount={discount}
            price={price}
            rating={rating}
            title={title}
            images={images}
          />
        </div>
      </div>
    </section>
  );
};
