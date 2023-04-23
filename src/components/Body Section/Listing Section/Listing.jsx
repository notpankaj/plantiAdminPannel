import React from "react";
import "./listing.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img from "../../../assets/plant2.png";
const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="seeContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="image name" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="image name" />
          <h3>Coffee Plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="image name" />
          <h3>Button Fern</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="image name" />
          <h3>Spider Plant</h3>
        </div>
      </div>
    </div>
  );
};

export default Listing;
