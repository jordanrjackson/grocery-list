import React from "react";
import Grocery from "./Grocery";

const List = ({ name, items, groceryClick }) => (
  <div>
    <h2>{ name }</h2>
    <ul>
      { items.map( item => <Grocery key={item.id} {...item} groceryClick={groceryClick} /> ) }
    </ul>
  </div>
);

export default List;