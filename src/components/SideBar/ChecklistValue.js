import React from 'react'
const ChecklistValue = ({ handleCheckboxChange, discount, val, checked, selectedOptions, showDis, showCustom, showDelivery, showDelMode }) => {
    const BetCommonName = ({ discount, val, checked }) => {
        return (
            <>
            <li className="li-dis">
                <p className="d-flex justify-content-center align-item-center"><label><input type="checkbox" className="form-check-input  me-2 custom-round" checked={checked} onChange={handleCheckboxChange} value={discount} />{discount}</label></p>
                <p className="pe-2">{val}</p>
            </li>
            <hr className="mt-0 mb-0"></hr>
            </>
            
        )
    }
    return (
        <div>
            {showDis && (
                <div className="ps-3">
                    <BetCommonName discount={"Discounts 10%"} val={"6"} key={"Discounts 10%"} checked={selectedOptions.includes("Discounts 10%")} />
                    <BetCommonName discount={"Discounts 20%"} val={"12"} key={"Discounts 20%"} checked={selectedOptions.includes("Discounts 20%")} />
                    <BetCommonName discount={"Discounts 30%"} val={"91"} key={"Discounts 30%"} checked={selectedOptions.includes("Discounts 30%")} />
                    <BetCommonName discount={"Discounts 40%"} val={"102"} key={"Discounts 40%"} checked={selectedOptions.includes("Discounts 40%")} />
                </div>
            )}
            {showCustom && (
                <div className="ps-3">
                    <BetCommonName discount={"5 *"} val={"6"} key={"5 *"} checked={selectedOptions.includes("5 *")} />
                    <BetCommonName discount={"4 * & Above"} val={"12"} key={"4 * & Above"} checked={selectedOptions.includes("4 * & Above")} />
                    <BetCommonName discount={"3 * & Above"} val={"91"} key={"3 * & Above"} checked={selectedOptions.includes("3 * & Above")} />
                    <BetCommonName discount={"2 * & Above"} val={"102"} key={"2 * & Above"} checked={selectedOptions.includes("2 * & Above")} />
                    <BetCommonName discount={"1 * & Above"} val={"102"} key={"1 * & Above"} checked={selectedOptions.includes("1 * & Above")} />
                </div>
            )}
            {showDelivery && (
                <div className="ps-3">
                    <BetCommonName discount={"Home Delivery"} val={"4"} key={"Home Delivery"} checked={selectedOptions.includes("Home Delivery")} />
                    <BetCommonName discount={"Store Pickup"} val={"8"} key={"Store Pickup"} checked={selectedOptions.includes("Store Pickup")} />
                    <BetCommonName discount={"Both"} val={"12"} key={"Both"} checked={selectedOptions.includes("Both")} />
                </div>
            )}
            {showDelMode && (
                <div className="ps-3">
                    <BetCommonName discount={"Include out of stocks"} val={"12"} key={"Include out of stocks"} checked={selectedOptions.includes("Include out of stocks")} />
                </div>
            )}
        </div>
    )
}

export default ChecklistValue
