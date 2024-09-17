import Header from "../components/Header";

const Main = props => {
	return (
		<>
			<Header/>
            <div className="flex justify-center items-center header-bottom-gradient"></div>
			{props.children}
		</>
	);
};

export default Main;
