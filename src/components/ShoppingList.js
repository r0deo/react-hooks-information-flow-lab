import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, selectedCategory }) {

  const itemToDisplay  = items.filter((item) => {
    if (selectedCategory == 'All') return true;
        return item.category == selectedCategory;
   } ) ;
   return (
    <div className="ShoppingList">
      <Filter />
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
   
}

export default ShoppingList;
