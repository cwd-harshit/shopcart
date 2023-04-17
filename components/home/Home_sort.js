import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";

const Home_sort = () => {
  return (
    <div className="home__sort">
      <div className="home__sort__left">
        <div>
          <p>Type</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>Price</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>Review</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>Color</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>Material</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>Offer</p>
          <AiOutlineDown className="home__sort__icon" />
        </div>
        <div>
          <p>All Filters</p>
          <BiFilter className="home__sort__icon_" />
        </div>
      </div>
      <div className="home__sort__right">
        <p>Sort By</p>
        <AiOutlineDown className="home__sort__icon" />
      </div>
    </div>
  );
};

export default Home_sort;
