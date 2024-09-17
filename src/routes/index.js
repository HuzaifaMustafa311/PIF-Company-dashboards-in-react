import MainView from '../views/company-dashboard/DashboardView';
import SummaryView from '../views/company-summary/SummaryView'
import PortfolioView from '../views/portfolio-summary/PortfolioView'


let routes = [
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/company-summary',
		component: SummaryView,
		layout: 'main',
	},
	{
		path: '/portfolio-summary',
		component: PortfolioView,
		layout: 'portfolio-summary',
	},
];
export default routes;