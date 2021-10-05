import React, { Component } from 'react'
import styled from 'styled-components';


export default class Progress extends Component {
    state = {
        scrollPosition: 0
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                // Calculate scroll distance
                this.calculateScrollDistance()
            })
        })
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset
        const windowHeight = window.innerHeight
        const docHeight = this.getDocHeight()

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

        this.setState({
            scrollPosition,
        })
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
    }

    componentDidMount() {
        this.listenToScrollEvent()
    }


    ProgressBar = styled.div`
        position: fixed;
        background: linear-gradient(
            to right, 
            rgba(250, 224, 66, .8) ${props => props.scroll},
            transparent 0);
        width: 100%;
        height:4px;
        z-index: 3;
    `

    render() {
        return (
            <div>
                <this.ProgressBar scroll={this.state.scrollPosition + '%'} />
            </div>
        )
    }
}