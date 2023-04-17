import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Top_Header = () => {
  return (
    <div className="top_header">
      <div className="top_header__left">
        <FiPhoneCall className="top_header__icon" />
        <span>+01234567890</span>
      </div>
      <div className="top__header__mid">
        <div>
          <Link href="/">
            <div>Get 50% Off on Selected Items</div>
          </Link>
        </div>
        <div>|</div>
        <div>
          <Link href="/no">
            <div>Shop Now</div>
          </Link>
        </div>
      </div>
      <div className="top__header__right">
        <p>About Us</p>
      </div>
    </div>
  );
};

export default Top_Header;
