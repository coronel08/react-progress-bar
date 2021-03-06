import styled from 'styled-components';
import React, {useState, useEffect} from 'react'
import ScrollToTop from './ScrollToTop'


function Progress() {

    const [scroll, setScroll] = useState(0)

    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
    }

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() =>{
                calculateScrollDistance()
            })
        })
    }

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset
        const windowHeight = window.innerHeight
        const docHeight = getDocHeight()

        const totalDocScrollLength = docHeight - windowHeight
        const scrollPosition = Math.floor(scrollTop/ totalDocScrollLength * 100)

        setScroll(scrollPosition)
    }

    useEffect(() => {
        listenToScrollEvent()
    }, )

    return (
        <div>
            <ProgressBar scroll={scroll}/>
            <ScrollToTop />
        </div>
    )
}

export default Progress


let ProgressBar = styled.div`
position: fixed;
background: linear-gradient(
    to right, 
    rgba(250, 224, 66, .8) ${props => props.scroll + '%'},
    transparent 0);
width: 100%;
height:4px;
z-index: 3;
`