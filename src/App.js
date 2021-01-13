import React from 'react';
import './App.css';
import Header from "./components/partials/Header/Header";
import Footer from "./components/partials/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DataContainer from "./components/pages/Data/DataContainer";
import SettingsContainer from "./components/pages/Settings/SettingsContainer";
import ChangesContainer from "./components/pages/Changes/ChangesContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__wrapper">
                    <Header/>
                    <div className="app__main" id="main-content">
                        <div className="app__width">
                            <Switch>
                                <Route path="/data" render={() => <DataContainer/>} />
                                <Route path="/settings" render={() => <SettingsContainer/>} />
                                <Route path="/changes" render={() => <ChangesContainer/>} />
                                <Route exact path="/" render={() => <DataContainer/>} />
                            </Switch>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
