import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { addToCart } from "../../reducers/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productCard">
      <div className="productCard__img">
        <div className="productCard__img_">
          <Link href={`/product/${props.id}`}>
            <Image alt="noob" src={props.img} width={140} height={140} />
          </Link>
        </div>
        <div className="productCard__ico">
          <AiOutlineHeart />
        </div>
      </div>
      <Link href={`/product/${props.id}`}>
        <div className="productCard_">
          <div className="productCard__name">
            <p>{props.name}</p>
          </div>
          <div className="productCard__price">
            <p>₹{props.price}</p>
          </div>
        </div>

        <div className="productCard__">
          <div className="productCard__desc">
            <p>{props.desc}</p>
          </div>
          <div className="productCard__rating">
            <ReactStars
              value={props.rating}
              color2="#209c20"
              edit={false}
              half={true}
              size={20}
            />
            {""}
            <span className="productCard__rating_">({props.rat_no})</span>
          </div>
        </div>
      </Link>
      <div
        className="productCard__cta"
        onClick={() => handleAddToCart(props.product)}
      >
        <p>Add To Cart</p>
      </div>
    </div>
  );
};

export default ProductCard;
