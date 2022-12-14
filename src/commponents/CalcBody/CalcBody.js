import { useState } from "react";
import Button from "../Button/Button";

function CalcBody() {

    const [input, setInput] = useState("0");
    const [result, setResult] = useState(0);

    const addText = (val) =>{

        if (input === "0") {
            
            setInput("");
        }

        setInput((text) => [...text, val + ""]);

    }

    const commaHandler = () =>{
        if (input.includes(".")) {
            
            setInput(input);
        }
    }
    


    const deleteHandler = () =>{

        const value = input.slice(0,-1);
        setInput(value);

    }

    const plusHandler = () =>{
        let inputNumber = input.join('');
        
        let value = Number(result) + Number(inputNumber);

        setResult(value);

        setInput("")
    }

    const minusHandler = () =>{

        let inputNumber = input.join('');
         
         let value = Number(result) - Number(inputNumber);
 
         setResult(value);
 
         setInput("")
     }

     const multiplyHandler = () =>{

        let inputNumber = input.join('');
         
         let value = Number(result) * Number(inputNumber);
 
         setResult(value);
 
         setInput("")
     }

     const divisionHandler = () =>{
        let inputNumber = input.join('');
         
        let value = Number(result) / Number(inputNumber);

        setResult(value);

        setInput("")
    }

    const acHandler = () =>{
       setResult(0);

       setInput("0")
    }



   return(
   <>

       <div className="calculator-grid">

           <div className="output">
               <div className="previous-operand">{input}</div>
               <div className="currnet-operand">{result}</div>
           </div>

           <button className="span-two" onClick={acHandler}>AC</button>    
           <button onClick={deleteHandler}>DEL</button> 
           <button onClick={divisionHandler}>÷</button>
           <Button symbol="1" handleClick={addText}/>
           <Button symbol="2" handleClick={addText}/>
           <Button symbol="3" handleClick={addText}/>
           <button onClick={multiplyHandler}>*</button>
            <Button symbol="4" handleClick={addText}/>
            <Button symbol="5" handleClick={addText}/>
            <Button symbol="6" handleClick={addText}/>
            <button onClick={plusHandler}>+</button>
            <Button symbol="7" handleClick={addText}/>
            <Button symbol="8" handleClick={addText}/>
            <Button symbol="9" handleClick={addText}/>
            <button onClick={minusHandler}>-</button>
            <button onClick={() => {addText("."); commaHandler();}} >.</button>
            <Button symbol="0" handleClick={addText}/>
            <button className="span-two">=</button>

        </div>

    </>
    );
}

export default CalcBody;