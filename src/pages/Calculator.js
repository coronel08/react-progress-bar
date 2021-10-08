import React, { Component } from 'react'
import TempInput from '../components/Calc/TempInput'

export class Calculator extends Component {
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature: '', scale:'c'}
    }

    handleCelsiusChange(temperature){
        this.setState({scale:'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale:'f', temperature})
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toClesius) : temperature
        const fahrenheit = scale ==='c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TempInput 
                    scale={'c'}
                    temperature={celsius}
                    onTempChange={this.handleCelsiusChange}
                />
                <TempInput
                    scale={'f'}
                    temperature={fahrenheit}
                    onTempChange={this.handleFahrenheitChange}
                />
                < BoiliningVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator




function BoiliningVerdict({celsius}){
    if (celsius >= 100){
        return <p>The water would boil</p>
    }
    return <p>the water will not boil</p>

}

function toClesius(fahrenheit){
    return (fahrenheit -32) * 5 / 9
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) +32
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if (Number.isNaN(input)){
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) /1000
    return rounded.toString()
}