import React, {useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'


function ScrollToTop() {

    const [scrollPosition, setScrollPosition] = useState(null)
    const [showTopButton, setShowTopButton] = useState('hidden')
    const scrollRefTop = useRef()

    useEffect(() => {
        handleScrollButton()
    })

    const handleScrollButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)

        if (scrollPosition > 30){
            return setShowTopButton('visible')
        } else {
            return setShowTopButton('hidden')
        }
    }

    const resetScrollPosition = () => {
        scrollRefTop.current.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div ref={scrollRefTop}>
            <TopButton showTopButton={showTopButton} onClick={resetScrollPosition}>
                <FaIcons.FaAngleDoubleUp />
            </TopButton>
        </div>
    )
}

export default ScrollToTop

const TopButton = styled.button`
    dispaly:block;
    position:fixed;
    background: rgba(252,248,241, 0.8);
    box-shadow: 2px 2px 5px yellow;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    bottom: 10%;
    left: 90%;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    };
    visibility:${props => props.showTopButton};
`