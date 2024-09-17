import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import PortfolioSummaryLayout from "./layout/PortfolioSummaryLayout";
import routes from "./routes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {routes.map((route) => {
                        switch (route.layout) {
                            case "main":
                                return (
                                    <Route exact path={route.path}>
                                        <Main>
                                            <route.component />
                                        </Main>
                                    </Route>
                                );
                            case "portfolio-summary":
                                return (
                                    <Route exact path={route.path}>
                                        <PortfolioSummaryLayout>
                                            <route.component />
                                        </PortfolioSummaryLayout>
                                    </Route>
                                );
                        }
                    })}
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
