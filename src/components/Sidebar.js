import React from "react";
import filter from "../images/filter.svg";
import SidebarContent from "./SideBar/SidebarContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <p className="d-md-none  mb-2 mt-2 d-flex justify-content-between align-items-center mx-3 ">
        <button
          className="btn  text-black  d-flex align-items-center fil-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#mobileMenuModal2"
        >
          <img src={filter} alt="filter" width="15" height="17" className="me-2" />
          Filters
        </button>
        <div className="d-flex align-items-center">
          <span className="me-2">Sort by:</span>
          <select className="rounded border-light bg-light p-1">
            <option>Most Relevant</option>
            <option>Low-High</option>
            <option>High-Low</option>
            <option>Popular</option>
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
              <SidebarContent/>
            </div>
          </div>
        </div>
      </div>
      <div className="main-sidebar d-none d-md-block ms-4">
        <SidebarContent/>
      </div>
    </>
  );
};

export default Sidebar;
