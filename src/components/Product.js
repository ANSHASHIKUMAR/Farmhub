import React from 'react';
import down from '../images/arrow-down.svg'
import './Product.css'
import arrow from '../images/arrow-3.svg'
import img1 from '../images/image-1.svg'
import img2 from '../images/image-2.svg'
import img3 from '../images/image-3.svg'
import img4 from '../images/image-4.svg'
import img5 from '../images/image-5.svg'
import img6 from '../images/image-6.svg'
import img7 from '../images/image-7.svg'
import img8 from '../images/image-8.svg'
import img9 from '../images/image-9.svg'
import img10 from '../images/image-10.svg'
import img12 from '../images/image-12.svg'
import img11 from '../images/image-11.svg'
import {useCart} from 'react-use-cart';

function  Product(){
  const {addItem, updateItemQuantity, getItem} = useCart();

    const products=[
        {
            id:1,
            name:"Borosan",
            img:img1,
            tech_name:"(Technical Name)",
            rating:"4.4 (93 reviews)",
            dic_amount:1000,
            act_amount:1100,
        },
        {
            id:2,
            name:"Kalpvruksha",
            img:img2,
            tech_name:"(Technical Name)",
            rating:"3.4 (284 reviews)",
            dic_amount:2300,
            act_amount:2499,
        },
        {
            id:3,
            name:"ZINC 33",
            img:img3,
            tech_name:"(Technical Name)",
            rating:"3.5 (24 reviews)",
            dic_amount:999,
            act_amount:1100,
        },
        {
            id:4,
            name:"G-1",
            img:img4,
            tech_name:"(Technical Name)",
            rating:" 2.4 (83 reviews)",
            dic_amount:2300,
            act_amount:2499,
        },
        {
            id:5,
            name:"Zinc EDTA",
            img:img5,
            tech_name:"(Technical Name)",
            rating:"4.9 (884 reviews)",
            dic_amount:1399,
            act_amount:1499,
        },
        {
            id:6,
            name:"Borosan",
            img:img6,
            tech_name:"(Technical Name)",
            rating:"4.4 (93 reviews)",
            dic_amount:1000,
            act_amount:1100,
        },
        {
            id:7,
            name:"Neem Powder",
            img:img7,
            tech_name:"(Technical Name)",
            rating:"3.4 (284 reviews)",
            dic_amount:2399,
            act_amount:3499,
        },
        {
            id:8,
            name:"Mangala Gold",
            img:img8,
            tech_name:"(Technical Name)",
            rating:"2.4 (84 reviews)",
            dic_amount:8999,
            act_amount:"",
        },
        {
            id:9,
            name:"Bio Gold Plus",
            img:img9,
            tech_name:"(Technical Name)",
            rating:" 4.4 (93 reviews)",
            dic_amount:1000,
            act_amount:"",
        },
        {
            id:10,
            name:"Kalpavruksha",
            img:img2,
            tech_name:"(Technical Name)",
            rating:"3.4 (93 reviews)",
            dic_amount:2300,
            act_amount:2499,
        },
        {
            id:11,
            name:"Navrathna Power",
            img:img11,
            tech_name:"(Technical Name)",
            rating:"3.5 (24 reviews)",
            dic_amount:5032,
            act_amount:"",
        },
        {
            id:12,
            name:"Borosan",
            img:img1,
            tech_name:"(Technical Name)",
            rating:"* 4.4 (93 reviews)",
            dic_amount:1000,
            act_amount:1100,
        },
        {
            id:13,
            name:"Borosan",
            img:img10,
            tech_name:"(Technical Name)",
            rating:"4.4 (93 reviews)",
            dic_amount:1000,
            act_amount:1100,
        },
        {
            id:14,
            name:"Bio 20 Tea",
            img:img12,
            tech_name:"(Technical Name)",
            rating:"4.9 (884 reviews)",
            dic_amount:2888,
            act_amount:"",
        },
        {
            id:15,
            name:"ZINC 33",
            img:img10,
            tech_name:"(Technical Name)",
            rating:"* 3.5 (24 reviews)",
            dic_amount:999,
            act_amount:1100,
        },
        {
            id:16,
            name:"G-1",
            img:img10,
            tech_name:"(Technical Name)",
            rating:"2.4 (84 reviews)",
            dic_amount:2300,
            act_amount:2499,
        }
    ]
    return(
      <div className="product-info my-4 mx-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap border rounded p-3 mb-3">
        <p className="fw-bold mb-2 mb-md-0">
          Showing 1 - 30 products of 106 products
        </p>
        <div className="d-none d-lg-flex align-items-center text-muted">
          <p className="mb-0 me-2">Sort By:</p>
          <p className="fw-semibold mb-0 bg-light rounded px-3 py-2 d-flex align-items-center">
            <img src={arrow} alt="arrow" className="me-2" />
            Most Relevant
            <img src={down} alt="down" className="ms-2" />
          </p>
        </div>
      </div>

      <div className="row g-3">
        {products.map((product) => {
          const itemInCart=getItem(product.id);

          return(
            <div key={product.id} className="col-6 col-sm-4 col-md-4 col-lg-3">
            <div className="border rounded p-3 h-100 d-flex flex-column">
              <div className="bg-light text-center  rounded mb-3 p-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-fluid prod-img"
                  style={{ maxHeight: "120px", objectFit: "contain" }}
                />
              </div>

              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1 text-start">{product.name}</h6>
                <p className="text-black small mb-1 text-start">{product.tech_name}</p>
                <p className="text-black small mb-2 text-start"> * {product.rating}</p>

                <div className="d-flex align-items-center mb-2">
                  <span className="dic-amount me-2">
                    ₹{product.dic_amount}
                  </span>
                  {product.act_amount && (
                    <span className="act-amount">
                      ₹{product.act_amount}
                    </span>
                  )}
                </div>

                <p className="text-secondary small mb-2 text-start">Sizes</p>

                <div className="d-flex  flex-column flex-xl-row flex-wrap align-items-center gap-2 w-100">
                <select className="form-select select-for">
                  <option>5KG</option>
                  <option>10KG</option>
                  <option>20KG</option>
                  <option>30KG</option>
                </select>

                {!itemInCart ? (
                  <button
                    className="btn add-button"
                    onClick={() =>
                      addItem({
                        ...product,
                        price: product.dic_amount || product.act_amount || 0,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex justify-content-center align-items-center add-to-cart rounded p-1">
                <button
                  className="btn cart-btn mx-1"
                  onClick={() => updateItemQuantity(product.id, itemInCart.quantity - 1)}
                >
                  −
                </button>

                <span className="fw-bold quantity-box">{itemInCart.quantity}</span>

                <button
                  className="btn cart-btn mx-1"
                  onClick={() => updateItemQuantity(product.id, itemInCart.quantity + 1)}
                >
                  +
                </button>
              </div>
                )}
              </div>

              </div>
            </div>
          </div>
          )
        }
        )}
      </div>
    </div>      
    )
}

export default Product;