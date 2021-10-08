import React from 'react'
import styled from 'styled-components'

const scaleNames = {
    c:'Celsius',
    f: 'Fahrenheit'
}

function TempInput({onTempChange,temperature, scale,}) {

    const handleChange = (e) => {
        onTempChange(e.target.value)
    }

    return (
        <FieldsetDiv>
            <fieldset>
                <legend>Enter Temp in {scaleNames[scale]}</legend>
                <input 
                    value={temperature}
                    onChange={handleChange}
                />
            </fieldset>
        </FieldsetDiv>
    )
}

export default TempInput


const FieldsetDiv = styled.div`
    padding: 1rem;
`