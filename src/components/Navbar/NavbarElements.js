import {  NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: linear-gradient(to right, #302E24, #28313E);    
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 10000px) / 2);
    z-index:12;
`

export const Bars = styled(FaBars)`
    display:none;
    color: #808080;
    @media screen and (max-width:768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 3;
    }
`

export const NavLink = styled(Link)`
    color: #808080;
    display:flex;
    align-items:center;
    text-decorations: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color:#fff
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px){
        overflow:hidden;
        flex-direction: column;
        max-height: ${({isOpen}) => (isOpen ? "300px": "0")};
        transition: max-height 0.3s ease-in;
        width:100%;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right: 24px;
    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer:
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`