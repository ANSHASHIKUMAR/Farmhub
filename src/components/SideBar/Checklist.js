import React from 'react'
const Checklist = ({ handleCheckboxChange, showCropCare, selectedOptions, showNano, showNutrients, showFarming, showShop, showDis }) => {
  const CommonCheckbox = ({ displayName, checked }) => {
    return (
      <li >
        <p>
          <label>
            <input type="checkbox" className="form-check-input me-2 custom-round" checked={checked}
              onChange={handleCheckboxChange} value={displayName} />{displayName}</label>
        </p>
        
      </li>
      
    )
  }

  return (
    <div>
      {showCropCare && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Fungicide"} key={"Fungicide"} checked={selectedOptions.includes("Fungicide")} />
          <CommonCheckbox displayName={"Herbicide"} key={"Herbicide"} checked={selectedOptions.includes("Herbicide")} />
          <CommonCheckbox displayName={"Insecticide"} key={"Insecticide"} checked={selectedOptions.includes("Insecticide")} />
          <CommonCheckbox displayName={"Plant Growth"} key={"Plant Growth"} checked={selectedOptions.includes("Plant Growth")} />
        </div>
      )}
      {showNano && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Nano DAP"} key={"Nano DAP"} checked={selectedOptions.includes("Nano DAP")} />
          <CommonCheckbox displayName={"Nano Urea"} key={"Nano Urea"} checked={selectedOptions.includes("Nano Urea")} />
        </div>
      )}

      {showNutrients && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Organics"} key={"Organics"} checked={selectedOptions.includes("Organics")} />
          <CommonCheckbox displayName={"WSF"} key={"WSF"} checked={selectedOptions.includes("WSF")} />
          <CommonCheckbox displayName={"Micronutrient"} key={"Micronutrient"} checked={selectedOptions.includes("Micronutrient")} />
          <CommonCheckbox displayName={"Soil Conditioners"} key={"Soil Conditioners"} checked={selectedOptions.includes("Soil Conditioners")} />
          <CommonCheckbox displayName={"Speciality Liquids"} key={"Speciality Liquids"} checked={selectedOptions.includes("Speciality Liquids")} />
        </div>
      )}
      {showFarming && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Drip"} key={"Drip"} checked={selectedOptions.includes("Drip")} />
          <CommonCheckbox displayName={"Mulching Sheet"} key={"Mulching Sheet"} checked={selectedOptions.includes("Mulching Sheet")} />
          <CommonCheckbox displayName={"SE"} key={"SE"} checked={selectedOptions.includes("SE")} />
          <CommonCheckbox displayName={"Small Equipment"} key={"Small Equipment"} checked={selectedOptions.includes("Small Equipment")} />
          <CommonCheckbox displayName={"Tools"} key={"Tools"} checked={selectedOptions.includes("Tools")} />
        </div>
      )}
      {showShop && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Ash Gourd"} key={"Ash Gourd"} checked={selectedOptions.includes("Ash Gourd")} />
          <CommonCheckbox displayName={"Peas"} key={"Peas"} checked={selectedOptions.includes("Peas")} />
        </div>
      )}
      {showDis && (
        <div className="ps-3  text-start">
          <CommonCheckbox displayName={"Discount 10%"} key={"Drip"} checked={selectedOptions.includes("Drip")} />
          <CommonCheckbox displayName={"Mulching Sheet"} key={"Mulching Sheet"} checked={selectedOptions.includes("Mulching Sheet")} />
          <CommonCheckbox displayName={"SE"} key={"SE"} checked={selectedOptions.includes("SE")} />
          <CommonCheckbox displayName={"Small Equipment"} key={"Small Equipment"} checked={selectedOptions.includes("Small Equipment")} />
          <CommonCheckbox displayName={"Tools"} key={"Tools"} checked={selectedOptions.includes("Tools")} />
        </div>
      )}
    </div>
  )
}
export default Checklist
