import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDlete }) => {
  return (
    <>
      {items.length > 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDlete={handleDlete}
        />
      ) : (
        <p>Your List is empty</p>
      )}
    </>
  );
};

export default Content;
