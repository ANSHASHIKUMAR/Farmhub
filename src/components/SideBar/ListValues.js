import React from 'react'
import arrow from "../../images/arrow.svg";
const ListValues = ({listName}) => {
    return(
      <div className="d-flex justify-content-between align-items-center mt-2">
        <li className="fw-bold mb-2">{listName}</li>
        <img src={arrow} alt="arrow" />
      </div>
    )
  }

export default ListValues
