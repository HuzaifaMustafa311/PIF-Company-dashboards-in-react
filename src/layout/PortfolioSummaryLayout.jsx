import React from "react";
import PortfolioSummaryHeader from "../components/PortfolioSummaryHeader";

const PortfolioSummaryLayout = (props) => {
    return (
        <>
            <PortfolioSummaryHeader />
            <div className="flex justify-center items-center header-bottom-gradient"></div>
            {props.children}
        </>
    );
};

export default PortfolioSummaryLayout;
