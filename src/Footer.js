import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length.length} list {length.length > 1 ? "items" : "item"}
    </footer>
  );
};

export default Footer;
