import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import logo1 from "../assets/img/logo-1.png";
import logohead from "../assets/img/logo-head.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const PortfolioSummaryHeader = () => {
    return (
        <div className="flex justify-between items-center p-4 navbarss">
            <div className="">
                <img src={logo1} alt="" srcset="" />
            </div>
            <div className="flex">
                <img src={logohead} className="img-fluid pr-3" alt="" />
                <h4 className="text-white font-light text-3xl">
                    Portfolio Summary
                </h4>
            </div>
            <div className="flex gap-10">
                <div class="w-24 h-11 bg-[#1E2F28] rounded-full flex justify-around items-center">
                    <MdOutlineDarkMode className="text-white"/>
                    <MdOutlineLightMode  className="text-[#31483E]"/>
                </div>

                <button class="flex items-center bg-transparent  text-white font-semibold  py-2 px-4 border border-[#045A4B] rounded-pill">
                    <span className="pr-2">Portfolios</span>
                    <BsArrowReturnRight className="text-[#C4984F]" />
                </button>
            </div>
        </div>
    );
};

export default PortfolioSummaryHeader;
