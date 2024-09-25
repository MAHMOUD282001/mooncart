import React from "react";
import { productlists } from "../../../assets/data/data";
import ProductCard from "../productcard/ProductCard";
import { ProductsHeading } from "../../../router";
import ProductModal from "../productmodal/ProductModal";

export const PopularProducts = () => {
  return (
    <section className="px-4 my-28">
      <div className="container">
        <ProductsHeading
          title={"Most Popular Products"}
          firstSubTitle={"All Products (39)"}
          secondSubTitle={"Wooden Products (15)"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
            />
          ))}
        </div>
      </div>
      <ProductModal />
    </section>
  );
};
