import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home/Home";
import "./styles/global.scss";

const App = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </AppContainer>
    );
};

export default App;

const AppContainer = styled.div``;
