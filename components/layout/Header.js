import React from "react";
import Top_Header from "./Top_Header";
import Link from "next/link";
import { SiBigcartel } from "react-icons/si";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { RiAccountBoxLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <Top_Header />
      <div className="header">
        <div>
          <Link href="/">
            <div className="header__logo">
              <SiBigcartel className="header__micon" />
              <p>Shopcart</p>
            </div>
          </Link>
        </div>
        <div className="header__menu">
          <div>
            <Link href="/">
              <p>Categories</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              <p>Deals</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>What's New</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              <p>Delivery</p>
            </Link>
          </div>
        </div>
        <div className="header__search">
          <div className="header__search__input">
            <input type="text" placeholder="Search Products" />
          </div>
          <BsSearch className="header__search__icon" />
        </div>
        <div className="header__user">
          <Link href="/account">
            <div>
              <RiAccountBoxLine className="header__user__icon" />
              <p>Account</p>
            </div>
          </Link>
          <Link href="/cart">
            <div>
              <div className="header__user_">
                <BsCart4 className="header__user__icon" />
                <span className="cart-span">1</span>
              </div>
              <p>Cart</p>
            </div>
          </Link>
        </div>
        <div className="header__mob">
          <div className="header__user_">
            <BsCart4 className="header__user__icon" />
            <span className="cart-span">1</span>
          </div>
          <div>
            <FiMenu className="header__user__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
