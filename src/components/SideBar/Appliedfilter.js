import React from 'react'
import clear from "../../images/clear_icon.svg";
const Appliedfilter = ({ appliedFilters, removeFilter, clearAllFilters, selectedOptions }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <p className="fw-bold mb-0">Applied Filters</p>

        {(appliedFilters.length > 0 || selectedOptions.length > 0) && (
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
    </>
  )
}

export default Appliedfilter;
