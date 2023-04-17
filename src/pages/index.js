import Home_ad from "../../components/home/Home_ad";
import Home_sort from "../../components/home/Home_sort";
import ProductCard from "../../components/product/ProductCard";
import img from "../../public/product-img.png";

export default function Home({ products }) {
  const productList = products.map((product) => {
    return (
      <ProductCard
        key={product._id}
        id={product._id}
        name={product.name}
        desc={product.desc}
        price={product.price}
        img={img}
        rating={product.ratings}
        rat_no={product.numOfReviews}
      />
    );
  });
  return (
    <main className="home">
      <Home_ad />
      <Home_sort />
      <div className="home__section">
        <p className="home__section__p">Headphones For You!</p>
        <div className="home__section__holder">{productList}</div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}
