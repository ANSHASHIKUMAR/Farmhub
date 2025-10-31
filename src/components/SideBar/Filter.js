import React from 'react'
const Filter = ({ handleSubmit, showFilter, setShowFilter }) => {
  return (
    <>
      <div className="pb-3">
        <p className="fw-bold fs-6 d-none d-md-block text-start">Filters</p>
        <p className="fw-bold fs-6 d-block d-md-none  text-start">Search</p>
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

    </>
  )
}

export default Filter
