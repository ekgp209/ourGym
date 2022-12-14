//주소를 바꿔주는 기능

import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "../component/Board";
import { Main, InfoShare, Motivation, Notice, Question, Tip, WomanBoard, Login } from ".";

function RouteLink() {
    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/notice" exact element={<Notice />} />
            <Route path="/manBoard" exact element={<Board />} />
            <Route path="/womanBoard" exact element={<WomanBoard />} />
            <Route path="/tip" exact element={<Tip />} />
            <Route path="/infoShare" exact element={<InfoShare />} />
            <Route path="/motivation" exact element={<Motivation />} />
            <Route path="/question" exact element={<Question />} />
            <Route path="*" component={<Main />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/write" exact element={<Board />} />
        </Routes>
    );
}

export default RouteLink;
