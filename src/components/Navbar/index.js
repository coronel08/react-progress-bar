import React from 'react'
import {
    Bars,
    Nav,
    NavBtn,
    NavBtnLink,
    NavLink,
    NavMenu,
} from './NavbarElements'

export default function Navbar() {
    return (
        <React.Fragment>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/blog'>
                        Blog
                    </NavLink>
                    <NavLink to="/signUp">
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </React.Fragment>
    )
}
