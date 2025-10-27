import React from 'react';
import {useCart } from 'react-use-cart'

function Cart(){
    const {isEmpty, items, updateItemQuantity, removeItem, totalItems} = useCart();
    if (isEmpty) return <h4> your cart is empty</h4>
    return(
        <div className='container my-4'>
            <h2>Cart Product</h2>
            <ul className='list-group'>
                {items.map((item) =>(
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong> — ₹{item.dic_amount} × {item.quantity}
            </div>
            <div>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
                ))}
            </ul>

        </div>
    )
}
export default Cart;