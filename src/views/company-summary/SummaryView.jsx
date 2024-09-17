import React from "react";
import image1 from "../../assets/img/1.png";
import image2 from "../../assets/img/2.png";
import image3 from "../../assets/img/3.png";
import image4 from "../../assets/img/4.png";
import image5 from "../../assets/img/5.png";
import image6 from "../../assets/img/6.png";
import folderOpen from "../../assets/img/folder_open.png";
import topic from "../../assets/img/topic.png";
import db from "../../assets/img/db.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const SummaryView = () => {
    return (
        <div className="mt-4 grid grid-cols-12 gap-5 m-2">
            <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-2 w-full">
                <div className="p-2 min-h-[300px] card-gradient-background relative rounded-xl flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#398148]"></div>
                    <img src={image1} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
                <div className="p-2 mt-4 min-h-[300px] card-gradient-background rounded-xl relative flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#398148]"></div>
                    <img src={image4} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-2 w-full">
                <div className="p-2 min-h-[300px] card-gradient-background relative rounded-xl flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#398148]"></div>
                    <img src={image2} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
                <div className="p-2 mt-4 min-h-[300px] card-gradient-background rounded-xl relative flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#D03030]"></div>
                    <img src={image5} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-2 w-full">
                <div className="p-2 min-h-[300px] card-gradient-background relative rounded-xl flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#C4984F]"></div>
                    <img src={image3} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
                <div className="p-2 mt-4 min-h-[300px] card-gradient-background rounded-xl relative flex flex-col justify-between">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#398148]"></div>
                    <img src={image6} alt="neom" className="m-auto" />
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <span className="text-white text-xl font-semibold">
                                49.22bn
                            </span>
                            <span className="text-[#7AFF95] text-xl font-semibold">
                                57.22bn
                            </span>
                        </div>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2 w-full flex flex-col gap-y-3">
                <div className="min-h-[200px] bg-[#025D4D] rounded-xl flex flex-col justify-center items-center">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                        <img src={folderOpen} alt="folder icon" />
                    </div>
                    <p className="mt-2 font-normal text-base text-white">
                        Total Portfolios
                    </p>
                    <p className="font-normal text-[20px] md:text-[30px] lg:text-[30px] xl:text-[40px] text-white">22</p>
                </div>
                <div className="min-h-[200px] bg-[#398148] rounded-xl flex flex-col justify-center items-center">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                        <img src={topic} alt="folder icon" />
                    </div>
                    <p className="mt-2 font-normal text-base text-white">
                        Total Programs
                    </p>
                    <p className="font-normal text-[20px] md:text-[30px] lg:text-[30px] xl:text-[40px] text-white">18</p>
                </div>
                <div className="min-h-[200px] bg-[#C4984F] rounded-xl flex flex-col justify-center items-center">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#0000001A]">
                        <img src={db} alt="folder icon" />
                    </div>
                    <p className="mt-2 font-normal text-center text-base text-white">
                        Total Awarded Budget
                    </p>
                    <div>
                        <p className="font-normal text-[20px] md:text-[30px] lg:text-[30px] xl:text-[40px] text-white">4.62 bn</p>
                        {/* <ProgressBar now={80} className="custom-progress-bar bg-[#00000024] text-[#398148]" /> */}
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-4 bg-amber-500 w-full">
              <img src={image3} alt="" />
            </div>
        </div>
    );
};

export default SummaryView;
