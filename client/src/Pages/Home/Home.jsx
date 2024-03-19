import React from "react";
import "./Home.css";
import hero_image from "./Assets/hero.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="homepage-welcome">
        <p className="greeting-text">
          Hello! <br /> Welcome to,
        </p>
        <p className="brand-name">Whimsy</p>

        <p className="hero-greet-text">
          Welcome to Whimsy, where imagination meets reality! Join us on this
          whimsical journey, where every story is a magical adventure waiting
          two unfold. Embrace the joy of curiosity, and let the charm of Whimsy
          captivate your imagination. Happy reading!
        </p>
        <div className="home-buttons">
          <button className="home-hero-btn">Explore</button>

          <Link to={"./sign-up"}>
            <button className="home-hero-btn">SignUp</button>
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img className="img" src={hero_image} alt="" />
      </div>
    </div>
  );
};
