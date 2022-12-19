import React from "react";
import gym from "../assets/gym.png";
import builtright from "../assets/image.png";
import main from "../assets/main.gif";
import main2 from "../assets/main2nd.gif";
import Tos from "../assets/TOS.gif";

const Main = () => {
  const mainBodyStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto",
    width: "1000px",
    height: "100vh",
  };

  const imageStyles = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    margin: "10px",
  };

  return (
    <div style={mainBodyStyles}>
      <a href="https://site1.com">
        <img src={builtright} alt="Site 1" style={imageStyles} />
      </a>
      <a href="https://site2.com">
        <img src={gym} alt="Site 2" style={imageStyles} />
      </a>
      <a href="https://site3.com">
        <img img src={main} alt="Site 3" style={imageStyles} />
      </a>
      <a href="https://site4.com">
        <img img src={Tos} alt="Site 4" style={imageStyles} />
      </a>
      <a href="https://site5.com">
        <img img src={main2} alt="Site 5" style={imageStyles} />
      </a>
      <a href="https://site6.com">
        <img img src={gym} alt="Site 6" style={imageStyles} />
      </a>
    </div>
  );
};

export default Main;
