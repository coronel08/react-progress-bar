import React, { Component } from 'react'
import styled from 'styled-components'

const scaleNames = {
    c:'Celsius',
    f: 'Fahrenheit'
}

export class TempInput extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTempChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale

        return (
            <FieldsetDiv>
                <fieldset >
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input  
                        value={temperature} 
                        onChange={this.handleChange}
                    />
                </fieldset>
            </FieldsetDiv>
        )
    }
}

export default TempInput


const FieldsetDiv = styled.div`
    padding: 1rem;
`