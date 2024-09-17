import React from "react";
import Summary1 from "../../assets/img/summary1.png";
import Summary2 from "../../assets/img/summary2.png";
import Summary3 from "../../assets/img/summary3.png";
import Summary4 from "../../assets/img/summary4.png";
import Summary5 from "../../assets/img/summary5.png";
import Summary6 from "../../assets/img/summary6.png";
import Summary7 from "../../assets/img/summary7.png";
import Summary8 from "../../assets/img/summary8.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";

const PortfolioView = () => {
    return (
        <div className="my-5 md:my-12 px-2  grid grid-cols-12 gap-5 w-full">
            <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-9">
                <div className=" grid grid-cols-12 gap-5 w-full">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
                        <div className="flex flex-col gap-y-5">
                            <div className="summary1 rounded-2xl relative min-h-[250px] flex flex-col justify-around">
                                <div className="">
                                    <img
                                        src={Summary8}
                                        alt=""
                                        className="absolute right-0 bottom-0 rounded-br-2xl opacity-10"
                                    />
                                </div>
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary1} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        ID
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold  text-center text-7xl text-white">
                                    A-03
                                </p>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary3} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        No. Of Sub Programs
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    736
                                </p>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary6} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        Capital Deployed
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <div className="flex items-center justify-center">
                                    <p className="font-semibold  text-center text-4xl text-white">
                                        462.29
                                    </p>
                                    <div className="ml-2 flex flex-col justify-between items-center">
                                        <MdOutlineArrowOutward className="text-[#387C46]" />
                                        <span className="text-base text-white font-semibold">
                                            bn
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-slate-600 ">
                                    {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
                        <div className="flex flex-col gap-y-5">
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary2} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        Number Of Companies
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    06
                                </p>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary4} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        No. Of Projects
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    1549
                                </p>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className="relative h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary7} alt="folder icon" />
                                        <div className="absolute h-6 w-6 flex justify-center top-0 right-0 items-center rounded-full bg-[#387C46]">
                                            <MdOutlineDone className="text-white" />
                                        </div>
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        No. Of Milestones Completed
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    84
                                </p>
                                <div className=" bg-slate-600 ">
                                    {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
                        <div className="flex flex-col gap-y-5">
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className=" h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary3} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        No. Of Programs
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    30
                                </p>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className=" h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary5} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        Total Awarded Projects
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <div className="flex justify-center items-end">
                                    <p className="font-semibold text-center text-4xl text-white">
                                        46.22
                                    </p>
                                    <span className="ml-2 text-base text-white font-semibold">
                                        bn
                                    </span>
                                </div>

                                <div className=" bg-slate-600 ">
                                    {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                                </div>
                            </div>
                            <div className="summary-other rounded-2xl min-h-[250px] flex flex-col justify-around">
                                <div className=" flex gap-3 justify-center items-center">
                                    <div className=" h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                                        <img src={Summary7} alt="folder icon" />
                                    </div>
                                    <span className="font-normal text-base text-white">
                                        Total Milestones
                                    </span>
                                </div>
                                <div className="dased-border"></div>

                                <p className="font-semibold text-center text-4xl text-white">
                                    861
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-3 bg-amber-500">
                <img src={Summary8} alt="" />
            </div>
        </div>
    );
};

export default PortfolioView;
