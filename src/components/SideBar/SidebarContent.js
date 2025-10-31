import React,  {useState, useEffect} from 'react'
import Filter from './Filter'
import Appliedfilter from './Appliedfilter'
import Filterbyprice from './Filterbyprice';
import ChecklistValue from './ChecklistValue';
import ListValues from './ListValues';
import Headings from './Headings';
import Checklist from './Checklist';

const SidebarContent = () => {
    const [showCropCare, setshowCropCare] = useState(false);
    const [showNano, setshowNano] = useState(false);
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
      if (checked) {
        setSelectedOptions((prev) => [...prev, value]);
      }
      else {
        setSelectedOptions((prev) => prev.filter((item) => item !== value))
      }
  };

  const removeFilter = (itemToRemove) => {
      if (itemToRemove.startsWith("Price: ₹")) {
        setMinPrice(999);
        setMaxPrice(8999);
        setPriceFilterActive(false);
      }
      setAppliedFilters((prev) => prev.filter((item) => item !== itemToRemove));
      setSelectedOptions((prev) => prev.filter((item) => item !== itemToRemove));
    }
     const clearAllFilters = () => {
      setAppliedFilters([]);
      setSelectedOptions([]);
      setMinPrice(999);
      setMaxPrice(8999);
      setPriceFilterActive(false);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const trimmedFilter = showFilter.trim();
      if (trimmedFilter !== "") {
        setAppliedFilters([...appliedFilters, trimmedFilter]);
        setShowFilter("");
      }}
      useEffect(() => {
      if (priceFilterActive) {
        const priceLabel = `Price: ₹${minPrice} - ₹${maxPrice}`;
        setAppliedFilters((prev) => {
          const others = prev.filter((f) => !f.startsWith("Price: ₹"));
          return [...others, priceLabel];
        });
      }
    }, [minPrice, maxPrice, priceFilterActive]);
  return (
    <div className="sidebar border rounded mt-4 p-3">
      <Filter handleSubmit={handleSubmit} showFilter={showFilter} setShowFilter={setShowFilter}/>
      <hr />
      <div className="mb-4">
        <Appliedfilter appliedFilters={appliedFilters} removeFilter={removeFilter} clearAllFilters={clearAllFilters} selectedOptions={selectedOptions}/>
      </div>
      <hr />
      <div className="mt-3">
        <Filterbyprice appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setPriceFilterActive={setPriceFilterActive}
/>
        <hr className="mt-3" />
      </div>
      <div>
        <ul className="list-unstyled mt-2 ">
          <Headings headingName="Crop Care" isOpen={showCropCare} setIsOpen={setshowCropCare} />
          <Checklist handleCheckboxChange={handleCheckboxChange} showCropCare={showCropCare} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Nano Products"  isOpen={showNano} setIsOpen={setshowNano}/>
          <Checklist handleCheckboxChange={handleCheckboxChange} showNano={showNano} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Specialty Plant Nutrients"  isOpen={showNutrients} setIsOpen={setShowNutrients}/>
          <Checklist handleCheckboxChange={handleCheckboxChange} showNutrients={showNutrients} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <ListValues listName={"Seeds"} key={"Seeds"} />
          <hr className="mt-0 mb-0"></hr>
          <ListValues listName={"Animal Nutrition"} key={"Animal Nutrition"}/> 
          <hr className="mt-0 mb-0"></hr>
          <ListValues listName={"Fertilizer"} key={"Fertilizer"}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Farming Equipment"  isOpen={showFarming} setIsOpen={setShowFarming}/>
          <Checklist handleCheckboxChange={handleCheckboxChange} showFarming={showFarming} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Shop by Crops"  isOpen={showShop} setIsOpen={setShowShop}/>
          <Checklist handleCheckboxChange={handleCheckboxChange} showShop={showShop} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Discounts"  isOpen={showDis} setIsOpen={setShowDis}/>
          <ChecklistValue handleCheckboxChange={handleCheckboxChange} showDis={showDis} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName="Customer Ratings"  isOpen={showCustom} setIsOpen={setShowCustom}/>
          <ChecklistValue handleCheckboxChange={handleCheckboxChange} showCustom={showCustom} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName={"Delivery Mode"} isOpen={showDelivery} setIsOpen={setShowDelivery}/>
          <ChecklistValue handleCheckboxChange={handleCheckboxChange} showDelivery={showDelivery} selectedOptions={selectedOptions}/>
          <hr className="mt-0 mb-0"></hr>
          <Headings headingName={"Availability"} isOpen={showDelMode} setIsOpen={setShowDelMode}/>
          <ChecklistValue handleCheckboxChange={handleCheckboxChange} showDelMode={showDelMode} selectedOptions={selectedOptions}/>
        </ul>
      </div>
    </div>
  );
};
export default SidebarContent
