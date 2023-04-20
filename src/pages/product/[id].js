import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import baseUrl from "../../../helpers/baseUrl";
import Image from "next/image";
import img from "../../../public/product-img.png";
import ReactStars from "react-stars";
import Dash from "../../../components/layout/Dash";
import { BsTruck } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { patc } from "../../../reducers/cartSlice";

const Product = ({ prod, success }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [atc, setAtc] = useState(1);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [price, setPrice] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [numOfReviews, setNumOfReviews] = useState(null);
  const [stock, setStock] = useState(null);
  useEffect(() => {
    setProduct(prod);
    setImages(prod.images);
    setReviews(prod.reviews);
    setPrice(prod.price);
    setRatings(prod.ratings);
    setNumOfReviews(prod.numOfReviews);
    setStock(prod.stock);
  }, [prod]);

  if (!product || !images) {
    return (
      <div className="loader">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (atc <= 0) {
    setAtc(1);
  }
  if (success === false) {
    return <h1>Product not found</h1>;
  }
  let imgList = null;
  if (product) {
    imgList =
      images &&
      images.map((image, index) => {
        return (
          <div
            className="productDetail_simg"
            key={image._id}
            onClick={() => {
              setCount(index);
              console.log(count);
            }}
          >
            <Image
              alt="off"
              src={image.url}
              // src={img}
              width={100}
              height={100}
            />
          </div>
        );
      });
  }
  const title = `ShopCart - ${product.name}`;
  const p = {
    product,
    count: atc,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="productDetail">
        <div className="breadcrumb">
          Shop / {product.category} / <b> {product.name}</b>
        </div>
        <div className="productDetail_">
          <div className="productDetail_left">
            <div className="productDetail_img_holder">
              <div className="productDetail_mimg">
                <Image
                  alt="off"
                  src={images[count].url}
                  // src={img}
                  width={230}
                  height={230}
                />
              </div>
              <div className="productDetail__imgs">{imgList}</div>
            </div>
          </div>
          <div className="productDetail_right">
            <div className="productDetail_right_">
              <div className="productDetail_1">
                <div className="productDetail_name">
                  <p>{product.name}</p>
                </div>
                <div className="productDetail_desc">
                  <p>{product.description}</p>
                </div>
                <div className="productDetail_rating">
                  <ReactStars
                    value={ratings}
                    color2="#209c20"
                    edit={false}
                    half={true}
                    size={24}
                  />
                  {""}
                  <span>({numOfReviews})</span>
                </div>
              </div>
              <Dash />
              <div className="productDetail_2">
                <div className="productDetail_price">
                  <p>₹{price}</p>
                </div>
                <div className="productDetail_pricen">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis harum laborum asperiores!
                  </p>
                </div>
              </div>
              <Dash />
              <div className="productDetail_3">
                <div className="productDetail_opt">
                  <p>Choose a Color</p>
                </div>
                <div className="productDetail_opt_">
                  {product.variations &&
                    product.variations.map((variation) => (
                      <div
                        className="productDetail_opt__"
                        key={variation._id}
                        style={{
                          backgroundColor: `${variation.color}`,
                          borderColor: "green",
                          borderWidth: "1px",
                        }}
                        onClick={() => {
                          setImages(variation.images);
                          setReviews(variation.reviews);
                          setPrice(variation.price);
                          setRatings(variation.ratings);
                          setNumOfReviews(variation.numOfReviews);
                          setStock(variation.stock);
                          console.log(variation, product);
                        }}
                      />
                    ))}
                </div>
              </div>
              <Dash />
              <div className="productDetail_3">
                <div className="productDetail_counter">
                  <div className="productDetail_counter_">
                    <div onClick={() => setAtc(atc - 1)}>-</div>
                    <div className="gj">{atc}</div>
                    <div onClick={() => setAtc(atc + 1)}>+</div>
                  </div>
                  <div className="productDetail_stock">
                    <p>
                      Only <span>{stock} Items</span> Left!
                    </p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Don't Miss it</p>
                  </div>
                </div>
                <div className="productDetail_ctas">
                  <div className="productDetail_b">
                    <p>Buy Now</p>
                  </div>
                  <div
                    className="productDetail_a"
                    onClick={() => dispatch(patc(p))}
                    // onClick={() => console.log(p)}
                  >
                    <p>Add To Cart</p>
                  </div>
                </div>
              </div>
              <div className="productDetail_4">
                <div className="productDetail_4_">
                  <div className="productDetail_4_i">
                    <BsTruck />
                  </div>
                  <div className="productDetail_4_r">
                    <p>
                      <b>Free Delivery</b>
                    </p>
                    <p>Enter your Postal code for Delivery Availablity</p>
                  </div>
                </div>
                <div className="productDetail_4_">
                  <div className="productDetail_4_i">
                    <GiReturnArrow />
                  </div>
                  <div className="productDetail_4_r">
                    <p>
                      <b>Retrun Delivery</b>
                    </p>
                    <p>
                      Free 30 days delivery returns. <span>Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export async function getStaticProps({ params: { id } }) {
//   let res = null;
//   let data = null;
//   try {
//     res = await fetch(`http://localhost:3000/api/product/${id}`);
//     data = await res.json();
//   } catch (err) {}
//   return {
//     props: {
//       success: data.success,
//       prod: data.product,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "643fc9c81e0931b488f30acf" } }],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params: { id } }) {
  let res = null;
  let data = null;
  try {
    res = await fetch(`http://localhost:3000/api/product/${id}`);
    data = await res.json();
  } catch (err) {}
  return {
    props: {
      success: data.success,
      prod: data.product,
    },
  };
}

export default Product;
