import React, { useState } from "react";
import * as math from 'mathjs';
import style from './Calculator.module.css';

export default function Calculator () {

    const [expression, setExpression] = useState('')
    const [result, setResult] = useState('')

    const handleClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    }

    const handleResult = () => {
        const res = math.evaluate(expression);
        setResult(res);
    }

    const handleClearInput = () => {
        setExpression('');
        setResult('');
    }

    return (
        <div id={style.calculator}>
            <input id={style.display} type="text" value={expression} readOnly />
            
        <button id={style.seven} onClick={() => handleClick("7")}>7</button>
                <button id={style.eight} onClick={() => handleClick("8")}>8</button>
                <button id={style.nine} onClick={() => handleClick("9")}>9</button>
                <button id={style.four} onClick={() => handleClick("4")}>4</button>
                <button id={style.five} onClick={() => handleClick("5")}>5</button>
                <button id={style.six} onClick={() => handleClick("6")}>6</button>
                <button id={style.one} onClick={() => handleClick("1")}>1</button>
                <button id={style.two} onClick={() => handleClick("2")}>2</button>
                <button id={style.three} onClick={() => handleClick("3")}>3</button>
                <button id={style.zero} onClick={() => handleClick("0")}>0</button>
                <button id={style.decimal} onClick={() => handleClick(".")}>.</button>
                <button id={style.add} onClick={() => handleClick("+")}>+</button>
                <button id={style.subtract} onClick={() => handleClick("-")}>-</button>
                <button id={style.multiply} onClick={() => handleClick("*")}>*</button>
                <button id={style.divide} onClick={() => handleClick("/")}>/</button>
                <button id={style.clear} onClick={handleClearInput}>AC</button>
                <button id={style.equals} onClick={handleResult}>=</button>
                <input id={style.rdisplay} type="text" value={result} readOnly />
            
        </div>
        
    )
}