import React from "react";
import  sms from "../images/sms.svg";
import down from "../images/arrow-down.svg";
import logo from "../images/Logo.svg";
import icon1 from "../images/Icon (1).svg";
import icon2 from "../images/Icon (2).svg";
import cartIcon from "../images/Icon (3).svg";
import { ReactComponent as Icon4} from "../images/crop doc 1.svg";
import { ReactComponent as Icon5} from "../images/Product Enquiry Icon.svg";
import icon6 from "../images/icon6.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";

function Header() {
  const { totalItems } = useCart();

  return (
    <div className="container-fluid p-0">
      <div className="Header-Top d-none d-lg-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <div className="d-flex align-items-center">
          <img src={sms} alt="sms" className="me-2" />
          <span>Email: support@farmsapp.in</span>
        </div>
        <div className="d-flex align-items-center">
          <span>Corporate Website |&nbsp;</span>
          <span>
            Language:
            <select className="border-0 ms-1 lag-bg">
              <option>English</option>
              <option>Kannada</option>
              <option>Tamil</option>
              <option>Telugu</option>
              <option>Hindi</option>
            </select>
          </span>
        </div>
      </div>
      <div className="Header-Middle container-fluid   ps-3 pe-4  border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid ms-1"
          />
          <div className="input-group d-none d-lg-flex input-group-sm  w-50">
          <input
            type="text"
            className="form-control rounded-2"
            placeholder="Search products..."
            aria-label="Search"
          />
          <button className="btn btn-success  rounded-2 ms-2" type="button">
            Search
          </button>
        </div>
        <div className="d-flex align-items-center flex-wrap justify-content-end  text-end">
          <Link to="/cart" className="d-flex align-items-center flex-wrap justify-content-end text-end">
            <img src={icon1} alt="icon1" className="me-1  d-none d-lg-block" />
            <div className="position-relative">
              <img src={cartIcon} alt="cart"/>
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.8rem" }}
                >
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
          <img src={icon2} alt="icon2" className="me-1" />
          <div className="d-flex flex-column align-items-start lh-sm text-truncate ms-1">
            <span className="small fw-semibold d-flex align-items-center flex-wrap">
              Rohith Kumar
              <img src={down} alt="down" width={12} className="ms-1" />
            </span>
            <span className="text-success small">Karnataka</span>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar  font-s navbar-expand-lg w-100 p-0   nav-bg-col">
      <div className="container-fluid ">
        <div className="row d-lg-none w-100 g-2 m-0 ">
          <div className="col-auto mt-0 ">
            <button
              className="navbar-toggler border-0  my-2 p-1  "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#mobileMenuModal"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col ">
            <div className="input-group  input-group-sm   w-100">
              <input
                type="text"
                className="form-control rounded-2"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn search-btn  rounded-1 ms-2" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="collapse font-s  navbar-collapse rounded-3 px-2" id="navbarContent">
            <ul className="navbar-nav gap-3  ">
              <li className="nav-item">
                <a className="nav-link text-col " href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-col"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products & Services
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item " href="#">Fertilizers</a></li>
                  <li><a className="dropdown-item " href="#">Pesticides</a></li>
                  <li><a className="dropdown-item " href="#">Nutrients</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link text-col fw-semibold" href="#">Our Stores</a></li>
              <li className="nav-item"><a className="nav-link text-col fw-semibold" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link text-col fw-semibold" href="#">FAQ</a></li>
              <li className="nav-item"><a className="nav-link text-col fw-semibold" href="#">Contact</a></li>
            </ul>
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 ms-lg-auto mt-3 mt-lg-0">
              <button className="btn-mobile-res text-col border-white btn d-flex align-items-center justify-content-center px-3 py-2">
              <Icon4 width={20} className="me-2 icon" />Crop Doctor Consultation  </button>
              <button className="btn-mobile-res  text-col btn border-white   d-flex align-items-center justify-content-center px-3 py-2 ">
                <Icon5   width={20} className="me-2 icon" />Product Enquiry  </button>
              <button className="btn-mobile-res play-btn d-none d-lg-flex text-black btn  d-flex align-items-center justify-content-center px-3 py-2 ">
                <img src={icon6} alt="Google Play" width={20} className="me-2 img-icon" />
                <div className="d-flex flex-column align-items-start lh-sm">
                  <small className="small">Get it on</small>
                  <span className="small fw-semibold ">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="mobileMenuModal"
        tabIndex="-1"
        aria-labelledby="mobileMenuModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-fullscreen modal-fullscreen-sm-down ">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="mobileMenuModalLabel">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column d-lg-none  pb-3 ">
                    <p className="text-black border-bottom text-start" >Home</p>
                    <p className="text-black  border-bottom text-start">Products & Services</p>
                    <p className="text-black  border-bottom text-start">Our Stores</p>
                    <p className="text-black  border-bottom text-start">Blog</p>
                    <p className="text-black  border-bottom text-start">FAQ</p>
                    <p className="text-black  border-bottom text-start">Contact</p>
                    <button className=" btn btn-outline-success text-black d-flex align-items-center px-3 py-1 shadow-sm  ">
                  
                      <Icon4 alt="icon" width={20} className="me-2  " />
                    Corp Doctor Consultation
                    </button>
                    <button className=" btn btn-outline-success text-black d-flex align-items-center px-3 py-1 shadow-sm mb-3 mt-3">
                      <Icon5 alt="icon" width={20} className="me-2 " />
                      Product Enquiry
                    </button>
                    <button className="btn btn-outline-success text-black d-flex align-items-center px-3 py-1 shadow-sm  ">
                      <img src={icon6} alt="icon" width={20} className="me-2" />
                      Get it on Google Play
                    </button>
                    <p className="text-black mt-2 mb-2 border-bottom text-start">Email: support@farmsapp.in</p>
                    <p className="text-black mt-2 mb-2 border-bottom text-start">Corporate Website</p>
                    <p className="text-black mt-2 mb-2 border-bottom text-start">Language: Kannada</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="head-bottom rounded py-3 py-md-4 px-3 px-md-4 border-top">
      <p className="text-start    fw-semibold  ">Specialty Plant Nutrients</p>
          <div className="d-flex flex-wrap  justify-content-md-start ">
            <span className="me-1 head-span1">Home</span>
            <span className="fw-bold head-span1">&gt; Specialty Plant Nutrients</span>
          </div>
    </div>

  </div>
  );
}

export default Header;




