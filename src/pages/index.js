import Home_ad from "../../components/home/Home_ad";
import Home_sort from "../../components/home/Home_sort";
import ProductCard from "../../components/product/ProductCard";
import baseUrl from "../../helpers/baseUrl";
import img from "../../public/product-img.png";
import Head from "next/head";

export default function Home({ products }) {
  const productList = products.map((product) => {
    return (
      <ProductCard
        product={product}
        key={product._id}
        id={product._id}
        name={product.name}
        desc={product.desc}
        price={product.price}
        img={product.images[0].url}
        rating={product.ratings}
        rat_no={product.numOfReviews}
      />
    );
  });
  return (
    <>
      <Head>
        <title>ShopCart</title>
      </Head>
      <main className="home">
        <Home_ad />
        <Home_sort />
        <div className="home__section">
          <p className="home__section__p">Headphones For You!</p>
          <div className="home__section__holder">{productList}</div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}
