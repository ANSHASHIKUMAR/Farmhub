import React from "react";
const Filterbyprice = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  setPriceFilterActive,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold mb-1">Filter by Price</p>
        <p className="mb-1 text-muted">₹{minPrice} to ₹{maxPrice}</p>
      </div>
      <div className="range-container position-relative">
        <input
          type="range"
          min="99"
          max="9999"
          value={minPrice}
          onChange={(e) => {
            setPriceFilterActive(true);
            setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))
          }
          }
          className="thumb thumb--left"
        />
        <input
          type="range"
          min="99"
          max="9999"
          value={maxPrice}
          onChange={(e) => {
            setPriceFilterActive(true);
            setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))
          }
          }
          className="thumb thumb--right"
        />
        <div className="slider">
          <div className="slider__track"></div>
          <div
            className="slider__range"
            style={{
              left: `${((minPrice - 99) / (9999 - 99)) * 100}%`,
              right: `${100 - ((maxPrice - 99) / (9999 - 99)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2 mt-3">
        <select
          className="form-select  border-0 w-100 w-md-auto"
          value={minPrice}
          onChange={(e) => { setPriceFilterActive(true); setMinPrice(Number(e.target.value)) }}>
          <option value="999">MIN</option>
          <option value="3500">3500</option>
          <option value="7500">7500</option>
        </select>
        <span>to</span>
        <select
          className="form-select  border-0 w-100 w-md-auto"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="8999">MAX</option>
          <option value="3000">3000</option>
          <option value="6000">6000</option>
          <option value="8500">8500</option>
        </select>
      </div>
    </div>
  )
}

export default Filterbyprice
