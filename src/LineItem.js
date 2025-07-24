import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const LineItem = ({ item, handleCheck, handleDlete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDlete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};
