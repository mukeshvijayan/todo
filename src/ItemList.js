import React from "react";

import { LineItem } from "./LineItem";

const itemList = ({ items, handleCheck, handleDlete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDlete={handleDlete}
        />
      ))}
    </ul>
  );
};

export default itemList;
