import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {  //component rendering shopping list with each Item component
const [selectedCategory,setSelectedCategory] = useState( "All" ) //state function with default set to all options in list

function switchCategory (event) { //select a specific category to display
  setSelectedCategory(event.target.value);
}

const filteredItems = selectedCategory !== 'All' ? //displays categorically filtered items
 items.filter(item => item.category === selectedCategory): 
  items;


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={switchCategory}> {/* interpolate current state variable and function for selecting different category */}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
