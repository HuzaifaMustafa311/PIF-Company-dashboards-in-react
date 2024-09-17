import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import logo1 from "../assets/img/logo-1.png";
import logohead from "../assets/img/logo-head.png";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className="flex justify-between items-center p-4 navbarss">
            <div className="">
                <img src={logo1} alt="" srcset="" />
            </div>
            <div className="flex">
                <img src={logohead} className="img-fluid pr-3" alt="" />
                {location.pathname === "/" ? (
                    <h4 className="text-white font-light text-3xl">
                        Company Dashboard
                    </h4>
                ) : location.pathname === "/company-summary" ? (
                    <h4 className="text-white font-light text-3xl">
                        Company Summary
                    </h4>
                ) : (
                    <h4 className="text-white font-light text-3xl">
                        Other Page
                    </h4>
                )}
            </div>
            <div>
                {location.pathname === "/" ? (
                    <button class="flex items-center bg-transparent  text-white font-semibold  py-2 px-4 border border-[#045A4B] rounded-pill">
                        <span className="pr-2">Company</span>
                        <BsArrowReturnRight className="text-[#C4984F]" />
                    </button>
                ) : location.pathname === "/company-summary" ? (
                    <button class="flex items-center bg-transparent  text-white font-semibold  py-2 px-4 border border-[#045A4B] rounded-pill">
                        <BsArrowReturnRight className="text-[#C4984F]" />
                    </button>
                ) : (
                    <h4 className="text-white font-light text-3xl">
                        Other Page
                    </h4>
                )}
            </div>
        </div>
    );
};

export default Header;
