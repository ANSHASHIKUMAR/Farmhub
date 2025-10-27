import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import clear from "../images/close-circle.svg";
import add from "../images/add-circle.svg";
import minus from "../images/add-circle (1).svg";
import arrow from "../images/arrow-right.svg";
import filter from "../images/filter.svg";

const SidebarContent = ({showFilter,setShowFilter,handleSubmit,appliedFilters,removeFilter,clearAllFilters,minPrice,maxPrice,
  setMaxPrice,setMinPrice,showCropCare,setshowCropCare,showNano,setShowNano,showNutrients,setShowNutrients,showFarming,
  setShowFarming,showShop,setShowShop,showDis,setShowDis,showCustom,setShowCustom,
  showDelivery,setShowDelivery,showDelMode,setShowDelMode,selectedOptions,handleCheckboxChange,setSelectedOptions,setPriceFilterActive
}) => {
  return (
    <div className="sidebar border rounded mt-4 p-3">
      <div className="pb-3">
        <p className="fw-bold fs-6 d-none d-md-block">Filters</p>
        <p className="fw-bold fs-6 d-block d-md-none">Search</p>
        <form onSubmit={handleSubmit} className="d-flex align-items-center gap-3">
          <input
            type="text"
            placeholder="Search for Products..."
            className=" form-control rounded-3"
            onChange={(e) => setShowFilter(e.target.value)}
            value={showFilter}
          />
          <button type="submit" className="btn sea-btn fw-bold w-50 w-md-auto">Search</button>
        </form>
      </div>
      <hr />
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold mb-0">Applied Filters</p>
          {(appliedFilters.length > 0 || selectedOptions.length > 0) &&(
            <p className="fw-bold mb-0 text-success" style={{ cursor: "pointer" }} onClick={clearAllFilters}>
            Clear all
          </p>
           )}
        </div>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {[...appliedFilters, ...selectedOptions].map((item, index) => (
            <span
              key={index}
              className="border spn-fliter rounded-3 px-2 py-2 d-flex align-items-center"
            >
              {item}
              <img
                src={clear}
                alt="clear"
                className="ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => removeFilter(item)}
              />
            </span>
          ))}
          {appliedFilters.length === 0 && selectedOptions.length === 0 && (
            <span className="text-muted small">No filters applied</span>
          )}
        </div>
      </div>
      <hr />
  <div className="mt-3">
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
        onChange={(e) =>{
          setPriceFilterActive(true);
          setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))}
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
          setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))}
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
      className="form-select bg-light border-0 w-100 w-md-auto"
      value={minPrice}
      onChange={(e) =>{setPriceFilterActive(true); setMinPrice(Number(e.target.value))}}>
      <option value="999">MIN</option>
      <option value="3500">3500</option>
      <option value="7500">7500</option>
    </select>
    <span>to</span>
    <select
      className="form-select bg-light border-0 w-100 w-md-auto"
      value={maxPrice}
      onChange={(e) => setMaxPrice(Number(e.target.value))}
    >
      <option value="8999">MAX</option>
      <option value="3000">3000</option>
      <option value="6000">6000</option>
      <option value="8500">8500</option>
    </select>
    </div>
    <hr className="mt-3" />
    </div>
      <div>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0">Categories</p>
        </div>
        <ul className="list-unstyled mt-2">
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={() => setshowCropCare(!showCropCare)}
          >
            <li className="fw-bold mb-2">Crop care</li>
            <img src={showCropCare ? minus : add} alt="add" />
          </div>
          {showCropCare && (
            <div className="ps-3">
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Fungicide")} onChange={handleCheckboxChange} value="Fungicide"/>Fungicide</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Herbicide")} onChange={handleCheckboxChange} value="Herbicide"/>Herbicide</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Insecticide")} onChange={handleCheckboxChange} value="Insecticide"/>Insecticide</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Plant Growth")} onChange={handleCheckboxChange} value="Plant Growth"/>Plant Growth</label></p></li>
            </div>
          )}
        
          <div
            className="d-flex justify-content-between align-items-center mt-2"
            onClick={() => setShowNano(!showNano)}
          >
            <li className="fw-bold mb-2">Nano Products</li>
            <img src={showNano ? minus : add} alt="minus" />
          </div>
          {showNano && (
            <div className="ps-3">
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("NAno DAP")} onChange={handleCheckboxChange} value="Nano DAP"/> Nano DAP</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Nano Urea")} onChange={handleCheckboxChange} value="Nano"/>Nano Urea</label></p></li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-2"
            onClick={() => setShowNutrients(!showNutrients)}
          >
            <li className="fw-bold mb-2">Specialty Plant Nutrients</li>
            <img src={showNutrients ? minus : add} alt="add" />
          </div>
          {showNutrients && (
            <div className="ps-3">
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Organics")} onChange={handleCheckboxChange} value="Organics"/> Organics</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("WSF")} onChange={handleCheckboxChange} value="WSF"/>WSF</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Micronutrients")} onChange={handleCheckboxChange} value="Micronutrient"/> Micronutrient</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Soil Condition")} onChange={handleCheckboxChange} value="Soil Condition"/> Soil Condition</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Specialty Liquids")} onChange={handleCheckboxChange} value="Specialty Liquids"/>Specialty Liquids</label></p></li>
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <li className="fw-bold mb-2">Seeds</li>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <li className="fw-bold mb-2">Animal Nutrition</li>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <li className="fw-bold mb-2">Fertilizer</li>
            <img src={arrow} alt="arrow" />
          </div>
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowFarming(!showFarming)}
          >
            <li className="fw-bold mb-2">Farming Equipment</li>
            <img src={showFarming ? minus : add} alt="add" />
          </div>
          {showFarming && (
            <div className="ps-3">
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Drip")} onChange={handleCheckboxChange} value="Drip" /> Drip</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Mulching Sheet")} onChange={handleCheckboxChange} value="Mulching Sheet"/>Mulching Sheet</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("SE")} onChange={handleCheckboxChange} value="SE"/>SE</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Small Equipment")} onChange={handleCheckboxChange} value="Small Equipment"/> Small Equipment</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Sprayers")} onChange={handleCheckboxChange} value="Sprayers"/> Sprayers</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Tools")} onChange={handleCheckboxChange} value="Tools"/> Tools</label></p></li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowShop(!showShop)}
          >
            <li className="fw-bold mb-2">Shop by crops</li>
            <img src={showShop ? minus : add} alt="toggle" />
          </div>
          {showShop && (
            <div className="ps-3">
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Ash Gourd")} onChange={handleCheckboxChange} value="Ash Gourd"/>Ash Gourd</label></p></li>
              <li><p><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Peas")} onChange={handleCheckboxChange} value="Peas"/>Peas</label></p></li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowDis(!showDis)}
          >
            <li className="fw-bold mb-2">Discounts</li>
            <img src={showDis ? minus : add} alt="toggle" />
          </div>
          {showDis && (
            <div className="ps-3">
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Discounts 10%")} onChange={handleCheckboxChange} value="Tools"/>Discounts 10%</label></p>
                <p className="pe-2">6</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Discount 20%")} onChange={handleCheckboxChange} value="Tools"/>Discounts 20%</label></p>
                <p className="pe-2">12</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Discount 30%")} onChange={handleCheckboxChange} value="Tools"/>Discounts 30%</label></p>
                <p className="pe-2">91</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox"  className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Discounts 40%")} onChange={handleCheckboxChange} value="Discounts 40%"/>Discounts 40%</label></p>
                <p className="pe-2">102</p>
              </li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowCustom(!showCustom)}
          >
            <li className="fw-bold mb-2">Customer Ratings</li>
            <img src={showCustom ? minus : add} alt="toggle" />
          </div>
          {showCustom && (
            <div className="ps-3">
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("5 *")} onChange={handleCheckboxChange} value="Tools"/>5 *</label></p>
                <p className="pe-2">6</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("4 * & Above")} onChange={handleCheckboxChange} value="Tools"/>4 * & Above</label></p>
                <p className="pe-2">12</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("3 * & Above")} onChange={handleCheckboxChange} value="Tools"/>3 * & Above</label></p>
                <p className="pe-2">91</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("2 * & Above")} onChange={handleCheckboxChange} value="Tools" />2 * & Above</label></p>
                <p className="pe-2">102</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox"  className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("1 * & Above")} onChange={handleCheckboxChange} value="Tools"/>1 * & Above</label></p>
                <p className="pe-2">102</p>
              </li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowDelivery(!showDelivery)}
          >
            <li className="fw-bold mb-2">Delivery</li>
            <img src={showDelivery ? minus : add} alt="toggle" />
          </div>
          {showDelivery && (
            <div className="ps-3">
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Home Delivery")} onChange={handleCheckboxChange} value="Home Delivery"/>Home Delivery</label></p>
                <p className="pe-2">6</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox"  className="form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Store Pickup")} onChange={handleCheckboxChange} value="Store Pickup"/>Store Pickup</label></p>
                <p className="pe-2">6</p>
              </li>
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input rounded-circle me-2 custom-round"  checked={selectedOptions.includes("Both")} onChange={handleCheckboxChange} value="Both"/>Both</label></p>
                <p className="pe-2">6</p>
              </li>
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center mt-1"
            onClick={() => setShowDelMode(!showDelMode)}
          >
            <li className="fw-bold mb-2">Delivery Mode</li>
            <img src={showDelMode ? minus : add} alt="toggle" />
          </div>
          {showDelMode && (
            <div className="ps-3">
              <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox"  className=" form-check-input rounded-circle me-2 custom-round" checked={selectedOptions.includes("Include out of stocks")} onChange={handleCheckboxChange} value="Include out of stocks"/>Include out of Stock</label></p>
                <p className="pe-2">6</p>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
const Sidebar = () => {
  const [showCropCare, setshowCropCare] = useState(false);
  const [showNano, setShowNano] = useState(false);
  const [showNutrients, setShowNutrients] = useState(false);
  const [showFarming, setShowFarming] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showDis, setShowDis] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showDelMode, setShowDelMode] = useState(false);
  const [showFilter, setShowFilter] = useState("");
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [minPrice, setMinPrice] = useState(999);
  const [maxPrice, setMaxPrice] = useState(8999);
  const [priceFilterActive, setPriceFilterActive] = useState(false);

  const updatePriceFilter = (min, max) => {
    const priceLabel =`Price: ₹${min} - ₹${max}`;

    setAppliedFilters((prev) => {
      const others = prev.filter((f) => !f.startsWith("Price:₹"));
      return [...others, priceLabel];
    });
  };

  const handleMinChange = (value) => {
    const newMin = Math.min(Number(value), maxPrice - 500);
    setMinPrice(newMin);
    updatePriceFilter(newMin, maxPrice);
  };

  const handleMaxChange = (value) =>{
    const newMax = Math.max(Number(value), minPrice + 500);
    setMaxPrice(newMax);
    updatePriceFilter(minPrice, newMax);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedFilter = showFilter.trim();
    if (trimmedFilter !==""){
      setAppliedFilters([...appliedFilters, trimmedFilter]);
      setShowFilter("");
    }
    
  };
  useEffect(() => {
    if(priceFilterActive){
      const priceLabel = `Price: ₹${minPrice} - ₹${maxPrice}`;
      setAppliedFilters((prev) => {
      const others = prev.filter((f) => !f.startsWith("Price: ₹"));
      return [...others, priceLabel];
    });
    }
  }, [minPrice, maxPrice]);


  const removeFilter =(itemToRemove)=>{
    if(itemToRemove.startsWith("Price: ₹")){
      setMinPrice(999);
      setMaxPrice(8999);
      setPriceFilterActive(false);
    }
    setAppliedFilters((prev) => prev.filter((item) => item !== itemToRemove));
    setSelectedOptions((prev) => prev.filter((item) => item !== itemToRemove));
  }


  const clearAllFilters = () =>{
    setAppliedFilters([]);
    setSelectedOptions([]);
    setMinPrice(999);
    setMaxPrice(8999);
      setPriceFilterActive(false);
  } 

  const handleCheckboxChange = (e) =>{
    const { value, checked } = e.target;
    if(checked){
      setSelectedOptions((prev) => [...prev, value]);
    }
    else{
      setSelectedOptions((prev) => prev.filter((item) => item !== value))
    }
  };

  
  return (
    <>
      <p className="d-md-none mb-2 mt-2 d-flex justify-content-between align-items-center mx-2 ms-2">
        <button
          className="btn btn-info text-black bg d-flex align-items-center fil-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#mobileMenuModal2"
        >
          <img src={filter} alt="filter" width="15" height="17" className="me-2" />
          Filters
        </button>
        <div className="d-flex align-items-center">
          <span className="me-2">Sort by:</span>
          <select>
            <option>English</option>
            <option>Kannada</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Hindi</option>
          </select>
        </div>
      </p>
      <div
        className="modal fade"
        id="mobileMenuModal2"
        tabIndex="-1"
        aria-labelledby="mobileMenuModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="mobileMenuModalLabel">
                Filters
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <SidebarContent
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                handleSubmit={handleSubmit}
                appliedFilters={appliedFilters}
                removeFilter={removeFilter}
                clearAllFilters={clearAllFilters}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
                showCropCare={showCropCare}
                setshowCropCare={setshowCropCare}
                showNano={showNano}
                setShowNano={setShowNano}
                showNutrients={showNutrients}
                setShowNutrients={setShowNutrients}
                showFarming={showFarming}
                setShowFarming={setShowFarming}
                showShop={showShop}
                setShowShop={setShowShop}
                showDis={showDis}
                setShowDis={setShowDis}
                showCustom={showCustom}
                setShowCustom={setShowCustom}
                showDelivery={showDelivery}
                setShowDelivery={setShowDelivery}
                showDelMode={showDelMode}
                setShowDelMode={setShowDelMode}
                handleCheckboxChange={handleCheckboxChange}
                selectedOptions={selectedOptions}
                setPriceFilterActive={setPriceFilterActive}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-sidebar d-none d-md-block ms-4">
        <SidebarContent
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          handleSubmit={handleSubmit}
          appliedFilters={appliedFilters}
          removeFilter={removeFilter}
          clearAllFilters={clearAllFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          onMinChange={handleMinChange}
          onMaxChange={handleMaxChange}
          showCropCare={showCropCare}
          setshowCropCare={setshowCropCare}
          showNano={showNano}
          setShowNano={setShowNano}
          showNutrients={showNutrients}
          setShowNutrients={setShowNutrients}
          showFarming={showFarming}
          setShowFarming={setShowFarming}
          showShop={showShop}
          setShowShop={setShowShop}
          showDis={showDis}
          setShowDis={setShowDis}
          showCustom={showCustom}
          setShowCustom={setShowCustom}
          showDelivery={showDelivery}
          setShowDelivery={setShowDelivery}
          showDelMode={showDelMode}
          setShowDelMode={setShowDelMode}
          handleCheckboxChange={handleCheckboxChange}
          selectedOptions={selectedOptions}
          setPriceFilterActive={setPriceFilterActive}
        />
      </div>
    </>
  );
};

export default Sidebar;
