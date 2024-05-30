import './App.css';
import React, { Component } from "react";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./member/Login";
// import FindId from "./member/FindId";
// import MyInfo from "./member/MyInfo";
// import ResultId from "./member/ResultId";
// import ViewMenu from "./member/ViewMenu";
// import Main from "./member/Main";
// import RestaurantInfo from "./member/RestaurantInfo";
import UpdateInfo from "./member/UpdateInfo";
import NewPassword from "./member/NewPassword";
import Register from "./member/Register";
import MainNoLogin from "./member/MainNoLogin";
import MainNoPin from "./member/MainNoPin";
import MainPin from "./member/MainPin";
class App extends Component {
  render() {
    return (
        <Router>
          <Routes>


            <Route exact path="/login" element={<Login />} />
            {/*<Route exact path="/findId" element={<FindId />} />*/}
            {/*<Route exact path="/restaurantInfo" element={<RestaurantInfo />} />*/}
            {/*<Route exact path="/main" element={<Main />} />*/}
            {/*<Route exact path="/myInfo" element={<MyInfo />} />*/}
            {/*<Route exact path="/resultId" element={<ResultId />} />*/}
            {/*<Route exact path="/viewMenu" element={<ViewMenu />} />*/}
            <Route exact path="/updateInfo" element={<UpdateInfo />} />
            <Route exact path="/newPassword" element={<NewPassword />} />
            <Route exact path="/register" element={<Register />} />
              <Route exact path="/mainNoLogin" element={<MainNoLogin />} />
              <Route exact path="/mainNoPin" element={<MainNoPin />} />
              <Route exact path="/mainPin" element={<MainPin />} />

            {/*<Route path="/" element={<Login />} /> /!* 기본적으로 /login으로 이동 *!/*/}
          </Routes>
        </Router>
    );
  }
}


export default App;
