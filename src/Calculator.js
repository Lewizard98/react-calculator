import React, {Component} from "react"

class Calculator extends Component{
    constructor(){
        super()
        this.state = {
            currentNum: "0",
            equation: "",
            lastSymbol:"+",
            prevResult: ""
        }
        this.handleNumber = this.handleNumber.bind(this)
        this.handleSymbol = this.handleSymbol.bind(this)
    }

    handleNumber(event){
        const number = event.target.name
        this.setState( prevState => {
            const newEquation = prevState.equation + number
            const newNum = prevState.currentNum + number
            return {
                equation: newEquation,
                currentNum: newNum
            }
        })
    }

    handleSymbol(event){

        const symbol = event.target.name
        if (symbol != "="){
            let newEquation = this.state.equation + " " + symbol + " "

            this.setState(prevState =>{
                return {
                    equation: newEquation
                }
            })
        } else {
            const result = eval(this.state.equation)

            this.setState(prevState=>{
                return {
                    prevResult: prevState.equation + " = " + result,
                    currentNum: "0",
                    equation: "",
                    lastSymbol:"+"
                }
            })
        }
    }

    render(){
        return(
            <div className="calculator">
                <h3>{this.state.equation == ""? "No Data": this.state.equation}</h3>
                <hr/>
                <h1>{this.state.prevResult}</h1>
                <div id="buttons">
                    <hr/>
                    <button name="1" onClick={this.handleNumber}>1</button>
                    <button name="2" onClick={this.handleNumber}>2</button>
                    <button name="3" onClick={this.handleNumber}>3</button>
                    <button name="4" onClick={this.handleNumber}>4</button>
                    <button name="5" onClick={this.handleNumber}>5</button>
                    <button name="6" onClick={this.handleNumber}>6</button>
                    <button name="7" onClick={this.handleNumber}>7</button>
                    <button name="8" onClick={this.handleNumber}>8</button>
                    <button name="9" onClick={this.handleNumber}>9</button>
                    <button name="0" onClick={this.handleNumber}>0</button>

                    <button name="+" onClick={this.handleSymbol}>+</button>
                    <button name="-" onClick={this.handleSymbol}>-</button>
                    <button name="*" onClick={this.handleSymbol}>*</button>
                    <button name="/" onClick={this.handleSymbol}>/</button>
                    <button name="(" onClick={this.handleSymbol}>(</button>
                    <button name=")" onClick={this.handleSymbol}>)</button>

                    <button name="=" onClick={this.handleSymbol}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator