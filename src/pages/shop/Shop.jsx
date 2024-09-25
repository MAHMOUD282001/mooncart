import React, { useEffect } from "react";
import { productlists } from "../../assets/data/data";
import ProductCard from "../../components/home/productcard/ProductCard";
import ProductModal from "../../components/home/productmodal/ProductModal";

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-white px-4">
      <div className="container">
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
