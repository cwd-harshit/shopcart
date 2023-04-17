import React from "react";
import ProductCard from "../product/ProductCard";
import img from "../../public/product-img.png";

const Section = (props) => {
  console.log(props);
  return (
    <div className="home__section">
      <p className="home__section__p">head</p>
      <div className="home__section__holder">
        <ProductCard
          name="Airpods"
          desc="Nice sound!"
          price="99999"
          img={img}
          rating={4.7}
          rat_no="1055"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}

export default Section;
