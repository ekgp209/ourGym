import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <GlobalStyle />
                <NavList>
                    <NavItem>
                        <Link to="/">π  Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/notice">π’ κ³΅μ§μ¬ν­</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/manBoard">π¨π» λ¨μ± κ²μν</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/womanBoard">π©π» μ¬μ± κ²μν</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tip">π‘ νΈλ μ΄λ κΏtip</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/infoShare">β¨ μ λ³΄κ³΅μ ν΄μ :)</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/motivation">π₯ λκΈ°λΆμ¬ μΌμ°</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/question">ππ» μ§λ¬Έμμ΄μ!</Link>
                    </NavItem>
                </NavList>
            </Nav>
        );
    }
}

export default Navigation;

const Nav = styled.div`
    width: 220px;
    margin: 40px 0 0 0;
`;

const NavList = styled.ul`
    width: 200px;
    height: 100%;
    padding-left: 10px;
`;

const NavItem = styled.li`
    display: block;
    width: 200px;
    height: 44px;
    font-size: 15px;
    // padding: 12px 3px;
    padding-left: 14px;
    line-height: 42px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    font-weight: 600;
`;
