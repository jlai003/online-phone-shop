import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ContainerButton} from './Styled-button';
import styled from 'styled-components';


export default class Navbar extends Component {

    render() {
        return(
            <NavWrapper className="navbar navbar-dark navbar-expand-sm px-sm-5">
    {  /* 
    https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
    <Link to='/'>
        <img src={logo} alt="" className="navbar-brand"></img>
    </Link>
    <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
            <Link to="/" className="nav-link">product</Link>
        </li>
    </ul>
    <Link to="/cart" className="ml-auto">
    <ContainerButton>
        <span> <i className="fas fa-cart-plus"/>  </span> My Cart</ContainerButton>
    
    </Link>

    </NavWrapper>

);

    }

}
const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        }
    }
`;