import React from 'react';
import './ShoppingCart.css';

function Item({ item, onDelete, index, onIncrement, onDecrement }) {

  return (
    <li className="item">
      {item.itemName}
      <div className='quantity-wrapper'>
        <button onClick={() => onDecrement(index)} className="">-</button>
        {item.quantity}
        <button onClick={() => onIncrement(index)} className="">+</button>
      </div>
      <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
    </li>
  )
}

export default Item