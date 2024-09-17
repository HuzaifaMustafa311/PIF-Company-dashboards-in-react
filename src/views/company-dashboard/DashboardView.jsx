import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import chartinsert from '../../assets/img/insert_chart.png';
import phasesummaryimg from '../../assets/img/phasesummaryimg.png';
import programimg from '../../assets/img/programimg.png';
import programcostimg from '../../assets/img/programcostimg.png';
import plannedvalueimg from '../../assets/img/plannedvalueimg.png';
import earnedvalueimg from '../../assets/img/earnedvalueimg.png';
import schedulevarieceimg from '../../assets/img/schedulevarieceimg.png';
import invoiceimg from '../../assets/img/invoiceimg.png';
import kpisimg from '../../assets/img/kpisimg.png';
import orginalbudget from '../../assets/img/original-budget.png';
import approvechange from '../../assets/img/approvechanges.png';
import revisebudget from '../../assets/img/revise-budget.png';
import comercialimg from '../../assets/img/commercial-img.png';
import performanceimg from '../../assets/img/performance-img.png';
import paymentimg from '../../assets/img/payment-img.png';
import ReactApexChart from 'react-apexcharts';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactECharts from 'echarts-for-react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';





const DashboardView = props => {

	const now = 10 + 'K';
	const now1 = 1.5 + 'K';
	const now2 = 9 + 'K';
	const now3 = 4 + 'K';
	const now4 = 6 + 'K';
	const now5 = 3 + 'K';

	const option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			show: false,
			data: ['Expenses', 'Income']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
			height: '95%'
		},
		xAxis: [{
			type: 'value',
			colors: ['#ffffff'],
			labels: {
				style: {
					colors: '#ffffff',
				}
			},
		}],
		yAxis: [{
			type: 'category',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'red' // Change label color here
				}
			},
			axisLabel: {
				color: 'white' // Change label color here
			},
			data: ['Company H', 'Company G', 'Company F', 'Company E', 'Company D', 'Company C', 'Company B', 'Company A', 'QIDIYA', 'ROSHN']
		}],
		series: [{
			name: 'Income',
			type: 'bar',
			stack: 'Total',
			label: {
				show: true
			},
			emphasis: {
				focus: 'series'
			},
			data: [{
				value: 50,
				itemStyle: {
					color: '#045a4b', // Change bar color here
					borderRadius: [0, 32, 32, 0] // Apply border radius here
				}
			},
			{
				value: 20,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 10,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 70,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 50,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 70,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 80,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 150,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 30,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},
			{
				value: 250,
				itemStyle: {
					color: '#045a4b',
					borderRadius: [0, 32, 32, 0]
				}
			},

				// Add more data with itemStyle as needed
			]
		},
		{
			name: 'Expenses',
			type: 'bar',
			stack: 'Total',
			label: {
				show: false,
				position: 'left'
			},
			emphasis: {
				focus: 'series'
			},
			data: [{
				value: -30,
				itemStyle: {
					color: '#c4984f', // Change bar color here
					borderRadius: [32, 0, 0, 32] // Apply border radius here
				}
			},
			{
				value: -20,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -20,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -15,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -30,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -50,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -70,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -80,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -130,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
			{
				value: -230,
				itemStyle: {
					color: '#c4984f',
					borderRadius: [32, 0, 0, 32]
				}
			},
				// Add more data with itemStyle as needed
			]
		}
		]
	};


	const [earnedValueChart, setearnedValueChart] = useState({
		series: [
			{
				name: 'Cumulative Planned',
				type: 'column',
				data: [14, 12, 25, 15, 25, 28, 38, 40, 10, 24, 30, 10],
				fill: '#d90ab0',
			},
			{
				name: 'Cumulative Actual',
				type: 'column',
				data: [38, 18, 25, 35, 15, 18, 28, 35, 10, 34, 20, 35],
				fill: '#d90ab0',
			},
			{
				name: 'Actual',
				type: 'line',
				data: [20, 29, 37, 36, 44, 45, 50, 58, 25, 35, 15, 18],
				fill: '#d90ab0',
			},
			{
				name: 'Planned',
				type: 'line',
				data: [10, 15, 20, 25, 30, 35, 40, 45, 20, 29, 37, 36],
				fill: '#d90ab0',

			}

		],

		options: {
			colors: ['#045a4b', '#397c47', '#c4984f'],
			chart: {
				height: 250,
				type: 'line',
				stacked: false,
				toolbar: {
					show: false
				},
			},
			plotOptions: {
				column: {
					borderRadius: 5, // Adjust if you want rounded corners
					backgroundColor: '#FFB6C1' // Change the background color of the bars to light pink
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: [1, 1, 4, 4], // Width for all four lines
				colors: ['#00000000', '#00000000', '#C4984F', '#398148']
			},
			xaxis: {
				categories: ["Jan", "feb", "Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				labels: {
					style: {
						colors: '#ffffff' // Change the color of x-axis labels to white
					}
				},
				colors: ['#ffffff'],
			},

			yaxis: [
				{
					min: 0,
					max: 40,
					seriesName: 'Cumulative Planned',
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: false,
					},
					labels: {
						style: {
							colors: '#ffffff',
						}
					},
					tooltip: {
						enabled: true
					},
				},
				{
					min: 0,
					max: 100,
					seriesName: 'Cumulative Actual',
					opposite: true,
					axisTicks: {
						show: false
					},
					axisBorder: {
						show: false
					},
					labels: {
						style: {
							colors: '#ffffff'
						}
					},
				},
				{
					seriesName: 'Actual',
					opposite: true,
					axisTicks: {
						show: false
					},

					labels: {
						show: false,
						style: {
							colors: '#ff0000'
						}
					},
				},
				{
					seriesName: 'Planned',
					opposite: false, // Changed to false to move labels to the top
					axisTicks: {
						show: true,
						color: '#398148' // Adjust color for Expenses
					},
					axisBorder: {
						show: false,
						color: '#398148' // Adjust color for Expenses
					},
					labels: {
						show: false,
						style: {
							colors: '#398148' // Adjust color for Expenses
						}
					},
				}
			],
			legend: {
				horizontalAlign: 'left',
				verticalAlign: 'top',
				offsetX: 40,
				colors: '#ffffff', // Adjust color for Expenses
				style: {
					colors: '#ffffff' // Adjust color for Expenses
				},
				textStyle: {
					color: '#ffffff' // Adjust color for Expenses
				},
				labels: {
					style: {
						colors: '#ffffff' // Adjust color for Expenses
					}
				},

			},

		}

	});

	const [programChartOptions, setprogramChartOptions] = useState({
		series: [{
			name: 'Program',
			data: [7, 6, 4, 4, 7, 6, 5, 6, 5, 5, 6]
		}],
		options: {
			chart: {
				height: 230,
				type: 'bar',
				toolbar: {
					show: false // Set toolbar to false to remove the toggle button
				},
			},
			plotOptions: {
				bar: {
					borderRadius: 3,
					dataLabels: {
						position: 'top', // top, center, bottom
					},
					backgroundBarColors: ['#045a4b'],
				}
			},
			colors: ['#045a4b'],
			dataLabels: {
				enabled: true,
				formatter: function (val) {
					return val + "M";
				},
				offsetY: -20,
				style: {
					fontSize: '12px',
					colors: ["#ffffff"]
				}
			},

			xaxis: {
				categories: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6", "Pro7", "Pro8", "Pro9", "Pro10", "Pro11"],
				position: 'bottom',
				colors: ['#ffffff'],
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				tooltip: {
					enabled: true,
				},
				labels: {
					style: {
						colors: '#ffffff' // Change the color of x-axis labels to white
					}
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val + "M";
					}
				},

			},
		},

	});


	const [phaseSummaryChartOptions, setphaseSummaryChartOptions] = useState({
		series: [44, 95, 41, 17],
		options: {
			chart: {
				type: 'donut',
			},
			labels: ['A', 'B', 'C', 'D'],
			legend: {
				show: false, // Hide legend
			},
			stroke: {
				show: false, // Hide border
			},
			dataLabels: {
				enabled: false, // Disable data labels
			},
			plotOptions: {
				pie: {
					donut: {
						size: '75%',
						background: '#00000000', // Set background color
					},
				},
			},
			colors: ['#00ffd2', '#18aa90', '#398148', '#c4984f'],
		},
	});


	return (
		<>
			<section className="filter-section py-4 px-3">
				<div className="row flex items-center">
					<div className="col-md-2">
						<a className="">
							<FaChevronLeft className="text-white fa-3x p-3 border-solid border-2 border-white rounded-full" />
						</a>
					</div>
					<div className="col-md-10">
						<div className="row flex justify-start">
							<div className="col-md-4">
								<label class="form-label text-muted">Company</label>
								<select class="form-select rounded-pill" aria-label="Default select example">
									{/* <option selected>Select one</option> */}
									<option value="1">New Murabba Development Company</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col-md-2">
								<label class="form-label text-muted">Phase</label>
								<select class="form-select rounded-pill" aria-label="Default select example">
									{/* <option selected>Select one</option> */}
									<option value="1">Phase 1 (2030)</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col-md-2">
								<label class="form-label text-muted">Program</label>
								<select class="form-select rounded-pill" aria-label="Default select example">
									{/* <option selected>Select one</option> */}
									<option value="1">Core Downtown</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col-md-2">
								<label class="form-label text-muted">Year</label>
								<select class="form-select rounded-pill" aria-label="Default select example">
									{/* <option selected>Select one</option> */}
									<option value="1">2024</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
						</div>
					</div>
				</div>

			</section>

			<section className="cards-sections px-3 py-4">
				<div className="row">
					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={comercialimg} className="pe-2" alt="" />
								Comercial
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-3">
										<div className="card original-budget-card py-3">
											<div className="bg-imgdiv1 p-3 rounded-full mx-auto text-center">
												<img src={orginalbudget} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Original Budget</h6>
												<h4 className="text-white font-semibold mt-2">10.22 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card original-budget-card py-3">
											<div className="bg-imgdiv1 p-3 rounded-full mx-auto text-center">
												<img src={orginalbudget} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Awared Contracts</h6>
												<h4 className="text-white font-semibold mt-2">21.22 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card approved-changes-card py-3">
											<div className="bg-imgdiv2 p-3 rounded-full mx-auto text-center">
												<img src={approvechange} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Approved Changes</h6>
												<h4 className="text-white font-semibold mt-2">21.22 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card revise-budget-card py-3">
											<div className="bg-imgdiv3 p-3 rounded-full mx-auto text-center">
												<img src={revisebudget} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Revised Budget</h6>
												<h4 className="text-white font-semibold mt-2">31.22 bn</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={performanceimg} alt="" className="me-2" />
								Performance
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-4">
										<div className="card planned-value-card py-3">
											<div className="bg-imgdiv1 p-3 rounded-full mx-auto text-center">
												<img src={plannedvalueimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Planned <br />Value</h6>
												<h4 className="text-white font-semibold mt-2">2.12 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card earned-value-card py-3">
											<div className="bg-imgdiv2 p-3 rounded-full mx-auto text-center">
												<img src={earnedvalueimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Earned <br />Value</h6>
												<h4 className="text-white font-semibold mt-2">4.13 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card schedule-variance-card py-3">
											<div className="bg-imgdiv3 p-3 rounded-full mx-auto text-center">
												<img src={schedulevarieceimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Schedule Variance</h6>
												<h4 className="text-danger1 font-semibold mt-2">5.10 bn</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">

						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={paymentimg} alt="" className="me-2" />
								Payments
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-4">
										<div className="card earned-value-card py-3">
											<div className="bg-imgdiv2 p-3 rounded-full mx-auto text-center">
												<img src={invoiceimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text flex items-center justify-center">Invoiced</h6>
												<h4 className="text-white font-semibold mt-2">4.13 bn</h4>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card earned-value-card py-3">
											<div className="bg-imgdiv2 p-3 rounded-full mx-auto text-center">
												<img src={plannedvalueimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text flex items-center justify-center">Paid</h6>
												<h4 className="text-white font-semibold mt-2">4.13 bn</h4>
											</div>
										</div>
									</div>

									<div className="col-md-4">
										<div className="card schedule-variance-card py-3">
											<div className="bg-imgdiv3 p-3 rounded-full mx-auto text-center">
												<img src={schedulevarieceimg} className="img-fluid" alt="" />
											</div>
											<div className="card-body p-1 text-center mt-3">
												<h6 className="text-white font-semibold mb-2 title-text">Payment Variance</h6>
												<h4 className="text-danger1 font-semibold mt-2">4.15 bn</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cards-sections px-3 py-4">
				<div className="row">
					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={phasesummaryimg} className="pe-2" alt="" />
								Phase Summary
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-6">
										<div className="flex justify-between items-center py-2">
											<badge className="phase-text rounded-pill text-white font-thin py-2 px-3"><span className="rounded-pill bg-green-1 me-2"></span>Planning</badge>
											<badge className="phase-text rounded-pill text-white font-thin py-2 px-3"><span className="rounded-pill me-2 bg-green-2"></span>Design</badge>
										</div>
										<div className="flex justify-between items-center py-2">
											<h4 className="color-green-1 font-bold phase-percent">23 %</h4>
											<h4 className="color-green-2 font-bold phase-percent">19 %</h4>
										</div>
										<div className="flex justify-between items-center py-2">
											<badge className="phase-text rounded-pill text-white font-thin py-2 px-3"><span className="rounded-pill bg-green-3 me-2"></span>Construction</badge>
											<badge className="phase-text rounded-pill text-white font-thin py-2 px-3"><span className="rounded-pill me-2 bg-green-4"></span>Testing</badge>
										</div>
										<div className="flex justify-between items-center py-2">
											<h4 className="color-green-3 font-bold phase-percent">50 %</h4>
											<h4 className="color-green-4 font-bold phase-percent">11 %</h4>
										</div>
									</div>
									<div className="col-md-6">
										<div className="donut-chart">
											<ReactApexChart options={phaseSummaryChartOptions.options} series={phaseSummaryChartOptions.series} type="donut" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={programimg} className="pe-2" alt="" />
								Programs
							</h5>
							<div class="card-body p-1">
								<div className="row">
									<div className="col-md-12">
										<div id="column-chart">
											<ReactApexChart options={programChartOptions.options} series={programChartOptions.series} type="bar" height={215} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={kpisimg} className="pe-2" alt="" />
								KPIs
							</h5>
							<div class="card-body kpi-body">
								<div className="row">
									<div className="col-md-12 mb-5">
										<h2 className='text-white font-thin mb-2'>SPI</h2>
										<ProgressBar now={80} className='custom-progress-bar' />
										<div className='flex justify-between'>
											<h2 className='kpi-heading color-green-4 font-semibold'>Planned <strong className='kpi-strong'>70%</strong></h2>
											<h2 className='kpi-heading color-green-2 font-semibold'>Actual <strong className='kpi-strong'>50%</strong></h2>
											<h2 className='kpi-heading text-danger1 font-semibold'>Varience <strong className='kpi-strong'>20%</strong></h2>
										</div>
									</div>

									<div className="col-md-12">
										<h2 className='text-white font-thin mb-2'>CPI</h2>
										<ProgressBar now={80} className='custom-progress-bar' />
										<div className='flex justify-between'>
											<h2 className='kpi-heading color-green-4 font-semibold'>Planned <strong className='kpi-strong'>70%</strong></h2>
											<h2 className='kpi-heading color-green-2 font-semibold'>Actual <strong className='kpi-strong'>87%</strong></h2>
											<h2 className='kpi-heading color-green-1 font-semibold'>Varience <strong className='kpi-strong'>17%</strong></h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cards-sections px-3 py-4">
				<div className="row">
					<div className="col-md-8">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={phasesummaryimg} className="pe-2" alt="" />
								Earned Value Analysis
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-12">
										<div id="chart">
											<ReactApexChart options={earnedValueChart.options} series={earnedValueChart.series} type="line" height={285} />
										</div>
										<div id="html-dist"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={programcostimg} className="pe-2" alt="" />
								Program Cost Analysis
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-12">
										<ReactECharts option={option} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cards-sections px-3 py-4">
				<div className="row">
					<div className="col-md-12">
						<div class="card performance-cards border-0">
							<h5 class="card-header text-white font-light flex items-center justify-center">
								<img src={phasesummaryimg} className="pe-2" alt="" />
								Contractor Analysis
							</h5>
							<div class="card-body">
								<div className="row">
									<div className="col-md-4">
										<div className="card total-contracts-card bg-green-5 mb-3">
											<div className='flex items-center justify-between'>
												<div className='flex items-center'>
													<div className="bg-imgdiv1 p-3 rounded-full mx-auto text-center">
														<img src={orginalbudget} className="img-fluid" alt="" />
													</div>
													<h6 className="text-white ps-4 font-light">Total Contracts</h6>
												</div>

												<div className="">
													<h4 className="text-white font-semibold fs-3">10</h4>
												</div>
											</div>
										</div>

										<div className="card total-contracts-card bg-green-1 mb-3">
											<div className='flex items-center justify-between'>
												<div className='flex items-center'>
													<div className="bg-imgdiv2 p-3 rounded-full mx-auto text-center">
														<img src={orginalbudget} className="img-fluid" alt="" />
													</div>
													<h6 className="text-white ps-4 font-light">Total Contractors</h6>
												</div>

												<div className="">
													<h4 className="text-white font-semibold fs-3">7</h4>
												</div>
											</div>
										</div>

										<div className="card total-contracts-card bg-green-4">
											<div className='flex items-center justify-between'>
												<div className='flex items-center'>
													<div className="bg-imgdiv3 p-3 rounded-full mx-auto text-center">
														<img src={orginalbudget} className="img-fluid" alt="" />
													</div>
													<h6 className="text-white ps-4 font-light">Total Contracted Value</h6>
												</div>

												<div className="">
													<h4 className="text-white font-semibold fs-3">21.22 bn</h4>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-4">
										<div class="card performance-cards border-0">
											<h5 class="card-header text-muted font-light flex items-center justify-center">
												<img src={programcostimg} className="pe-2" alt="" />
												Top Performing Contractors
											</h5>
											<div class="card-body p-0">
												<div className="row">
													<div className="col-md-12">
														<div className="table-responsive before-contract-div overflow-x-auto">
															<table className='contractors-table table mb-0'>
																<thead>
																	<tr>
																		<th className='w-25'>Name</th>
																		<th>Budget</th>
																		<th className='w-20'>SPI</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Contractor 1</td>
																		<td>
																			<ProgressBar now={100} label={now} className='custom-progress-bar' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#ec6c6c]"></div>
																				<span className='ms-2'>0.5</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 1</td>
																		<td>
																			<ProgressBar now={100} label={now1} className='custom-progress-bar w-20' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#00ff66]"></div>
																				<span className='ms-2'>0.9</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 3</td>
																		<td>
																			<ProgressBar now={100} label={now2} className='custom-progress-bar w-75' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#e9ec6c]"></div>
																				<span className='ms-2'>0.8</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 4</td>
																		<td>
																			<ProgressBar now={100} label={now3} className='custom-progress-bar w-50' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#ec6c6c]"></div>
																				<span className='ms-2'>0.5</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 5</td>
																		<td>
																			<ProgressBar now={100} label={now4} className='custom-progress-bar w-20' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#e9ec6c]"></div>
																				<span className='ms-2'>0.8</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 6</td>
																		<td>
																			<ProgressBar now={100} label={now5} className='custom-progress-bar w-50' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#00ff66]"></div>
																				<span className='ms-2'>0.9</span>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-4">
										<div class="card performance-cards border-0">
											<h5 class="card-header text-muted font-light flex items-center justify-center">
												<img src={programcostimg} className="pe-2" alt="" />
												Lowest Performing Contractors
											</h5>
											<div class="card-body p-0">
												<div className="row">
													<div className="col-md-12">
														<div className="table-responsive before-contract-div overflow-x-auto">
															<table className='contractors-table table mb-0'>
																<thead>
																	<tr>
																		<th className='w-25'>Name</th>
																		<th>Budget</th>
																		<th className='w-20'>SPI</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Contractor 1</td>
																		<td>
																			<ProgressBar now={100} label={now} className='custom-progress-bar' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#ec6c6c]"></div>
																				<span className='ms-2'>0.5</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 1</td>
																		<td>
																			<ProgressBar now={100} label={now1} className='custom-progress-bar w-20' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#00ff66]"></div>
																				<span className='ms-2'>0.9</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 3</td>
																		<td>
																			<ProgressBar now={100} label={now2} className='custom-progress-bar w-75' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#e9ec6c]"></div>
																				<span className='ms-2'>0.8</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 4</td>
																		<td>
																			<ProgressBar now={100} label={now3} className='custom-progress-bar w-50' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#ec6c6c]"></div>
																				<span className='ms-2'>0.5</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 5</td>
																		<td>
																			<ProgressBar now={100} label={now4} className='custom-progress-bar w-20' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#e9ec6c]"></div>
																				<span className='ms-2'>0.8</span>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>Contractor 6</td>
																		<td>
																			<ProgressBar now={100} label={now5} className='custom-progress-bar w-50' />
																		</td>
																		<td>
																			<div className='flex items-center'>
																				<div class="h-4 w-4 rounded-full bg-[#00ff66]"></div>
																				<span className='ms-2'>0.9</span>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>



								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="cards-sections px-3 py-4">
				<div className="row">
					<div className="col-md-12">
						<div class="card performance-cards border-0">
							<div class="card-body">
								<div className="row py-5 flex items-center">
									<div className="col-md-4">
										<div className='flex justify-between'>
											<span class="text-white text-md font-medium px-4 py-2 rounded-full bg-[#387c46] shadow-custom">On Schedule</span>
											<span class="text-white text-md font-medium px-4 py-2 rounded-full bg-[#b57537]">Late</span>
											<span class="text-white text-md font-medium px-4 py-2 rounded-full bg-[#d03030]">Very Late</span>
										</div>
									</div>

									<div className="col-md-4">
										<div className='flex items-center justify-between'>
											<p className='text-[#9EB1AA] text-center'><span>Actual Date Filter</span></p>
											<div className="relative w-[65%]">
												<div className="absolute bottom-100 left-0 text-white text-md font-medium px-3 py-1 rounded-full bg-[#c4984f]">05-08-2016</div>
												<div className="absolute bottom-100 right-0 text-white text-md font-medium px-3 py-1 rounded-full bg-[#c4984f]">06-30-2024</div>
												<RangeSlider min={25} max={80} className='h-[4px] mt-4 bg-[#c4984f] slider-custom-color' />
											</div>
										</div>
									</div>

									<div className="col-md-4">
										<div className='flex items-center justify-between'>
											<p className='text-[#9EB1AA] text-center'><span>Baseline Date Filter</span></p>
											<div className="relative w-[65%]">
												<div className="absolute bottom-100 left-0 text-white text-md font-medium px-3 py-1 rounded-full bg-[#c4984f]">05-08-2016</div>
												<div className="absolute bottom-100 right-0 text-white text-md font-medium px-3 py-1 rounded-full bg-[#c4984f]">06-30-2024</div>
												<RangeSlider min={25} max={80} className='h-[4px] mt-4 bg-[#c4984f] slider-custom-color' />
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="table-responsive before-contract-div overflow-x-auto">
											<table className='contractors-table table mb-0'>
												<thead>
													<tr>
														<th className=''>Program Name</th>
														<th>Contracted</th>
														<th className=''>Change Orders</th>
														<th>Earned Value</th>
														<th>Planned Value</th>
														<th>Invoiced Amount</th>
														<th>Paid Amount</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><span className='text-white'>Program A</span></td>
														<td><span className='text-white'>Phase 1 (2030)</span></td>
														<td><span className='text-white'>Core Downtown</span></td>
														<td className='align-middle'>
															<ProgressBar now={70} className='custom-progress-bar1' style={{ height: '12px' }} />
														</td>
														<td className='align-middle'>
															<ProgressBar now={65} className='custom-progress-bar2' style={{ height: '12px' }} />
														</td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td>
															<div className='flex items-center'>
																<div class="h-4 w-4 rounded-full bg-[#d03030]"></div>
																{/* <span className='ms-2'>0.5</span> */}
															</div>
														</td>
													</tr>
													<tr>
														<td><span className='text-white'>Program B</span></td>
														<td><span className='text-white'>Phase 1 (2030)</span></td>
														<td><span className='text-white'>Core Downtown</span></td>
														<td className='align-middle'>
															<ProgressBar now={70} className='custom-progress-bar1' style={{ height: '12px' }} />
														</td>
														<td className='align-middle'>
															<ProgressBar now={65} className='custom-progress-bar2' style={{ height: '12px' }} />
														</td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td>
															<div className='flex items-center'>
																<div class="h-4 w-4 rounded-full bg-[#387c46]"></div>
																{/* <span className='ms-2'>0.9</span> */}
															</div>
														</td>
													</tr>
													<tr>
														<td><span className='text-white'>Program A</span></td>
														<td><span className='text-white'>Phase 1 (2030)</span></td>
														<td><span className='text-white'>Core Downtown</span></td>
														<td className='align-middle'>
															<ProgressBar now={70} className='custom-progress-bar1' style={{ height: '12px' }} />
														</td>
														<td className='align-middle'>
															<ProgressBar now={65} className='custom-progress-bar2' style={{ height: '12px' }} />
														</td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td>
															<div className='flex items-center'>
																<div class="h-4 w-4 rounded-full bg-[#d03030]"></div>
																{/* <span className='ms-2'>0.5</span> */}
															</div>
														</td>
													</tr>
													<tr>
														<td><span className='text-white'>Program B</span></td>
														<td><span className='text-white'>Phase 1 (2030)</span></td>
														<td><span className='text-white'>Core Downtown</span></td>
														<td className='align-middle	'>
															<ProgressBar now={70} className='custom-progress-bar1' style={{ height: '12px' }} />
														</td>
														<td className='align-middle	'>
															<ProgressBar now={65} className='custom-progress-bar2' style={{ height: '12px' }} />
														</td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td>
															<div className='flex items-center'>
																<div class="h-4 w-4 rounded-full bg-[#d03030]"></div>
																{/* <span className='ms-2'>0.9</span> */}
															</div>
														</td>
													</tr>
													<tr>
														<td><span className='text-white'>Program A</span></td>
														<td><span className='text-white'>Phase 1 (2030)</span></td>
														<td><span className='text-white'>Core Downtown</span></td>
														<td className='align-middle	'>
															<ProgressBar now={70} className='custom-progress-bar1' style={{ height: '12px' }} />
														</td>
														<td className='align-middle	'>
															<ProgressBar now={65} className='custom-progress-bar2' style={{ height: '12px' }} />
														</td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td><span className='text-white'>4,610,327,822.00</span></td>
														<td>
															<div className='flex items-center'>
																<div class="h-4 w-4 rounded-full bg-[#b57b37]"></div>
																{/* <span className='ms-2'>0.5</span> */}
															</div>
														</td>
													</tr>

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>











		</>
	);
};

export default DashboardView;