import React from 'react'
import add from "../../images/plus.svg";
import minus from "../../images/minus.svg";

const Headings = ({ headingName, isOpen, setIsOpen }) => {
  return (
    <div>
      <ul className="list-unstyled mt-2 ">
        <div
          className="d-flex justify-content-between align-items-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          <li className="fw-bold mb-2 ">{headingName}</li>
          <img src={isOpen ? minus : add} alt="add" />
        </div>
      </ul>
    </div>
  )
}

export default Headings
