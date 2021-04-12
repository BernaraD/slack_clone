import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider/StateProvider";

function App() {

    const [{ user }, dispatch] = useStateValue();



    return (
        //BEM naming convention
        <div className="app">
            <Router>

                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header/>
                        <div className="app__body">
                            <Sidebar/>

                            <Switch>

                                <Route path="/room/:roomId">
                                    <Chat/>
                                </Route>

                                <Route path="/">
                                    <h1>Welcome</h1>

                                </Route>

                            </Switch>
                        </div>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;
