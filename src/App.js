import React from 'react';
import './App.css';
import Header from "./components/partials/Header/Header";
import Footer from "./components/partials/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DataContainer from "./components/pages/Data/DataContainer";
import SettingsContainer from "./components/pages/Settings/SettingsContainer";
import ChangesContainer from "./components/pages/Changes/ChangesContainer";

function App() {
    console.log("test1");
    console.log("test2");
    console.log("test3");
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__wrapper">
                    <Header/>234
                    <div className="app__main" id="main-content">
                        <div className="app__width">123
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
