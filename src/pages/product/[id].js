import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>loading</h3>;
  }

  return (
    <div>
      {product.name} {product.description}
    </div>
  );
};

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data.product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "623fecf14da2b43428de1a6c" } }],
    fallback: true,
  };
}

export default Product;
