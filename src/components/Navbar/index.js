import React, {useState} from 'react'
import {
    Bars,
    Nav,
    NavBtn,
    NavBtnLink,
    NavLink,
    NavMenu,
} from './NavbarElements'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <Nav>
                <Bars onClick={() => setIsOpen(!isOpen)} />
                <NavMenu isOpen={isOpen}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to="/signUp">Sign Up</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </React.Fragment>
    )
}
