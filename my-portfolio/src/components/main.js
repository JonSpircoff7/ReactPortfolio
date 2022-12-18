import React from "react";

const Main = () => {
  const mainBodyStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    width: "600px",
  };

  const imageStyles = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div style={mainBodyStyles}>
      <a href="https://site1.com">
        <img src="/image1.jpg" alt="Site 1" style={imageStyles} />
      </a>
      <a href="https://site2.com">
        <img src="/image2.jpg" alt="Site 2" style={imageStyles} />
      </a>
      <a href="https://site3.com">
        <img src="/image3.jpg" alt="Site 3" style={imageStyles} />
      </a>
      <a href="https://site4.com">
        <img src="/image4.jpg" alt="Site 4" style={imageStyles} />
      </a>
      <a href="https://site5.com">
        <img src="/image5.jpg" alt="Site 5" style={imageStyles} />
      </a>
      <a href="https://site6.com">
        <img src="/image6.jpg" alt="Site 6" style={imageStyles} />
      </a>
    </div>
  );
};

export default Main;
