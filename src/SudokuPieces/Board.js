import React , {useState, useEffect} from 'react';
import SquareGroup from './SquareGroup';
import '../App.css';
import { useKeyPress } from './hooks';
import { solveSudoku } from './Solver';
import {premade} from './premade';


  
  

  
  function Board(){
    const [activeSquare, setActiveSquare] = useState(-1);
    const handleClick = id => {setActiveSquare(id)}
    const [numbers, setNumbers] = useState([Array.from(Array(9), () => new Array(9).fill(0))]);
    const [response, setResponse] = useState("");
    const keyPressed = useKeyPress();
    const handleSolve = () => {
        const solved = solveSudoku(JSON.parse(JSON.stringify(numbers[numbers.length-1])));
        if (solved !== null){
            setResponse("Solved!");
            setNumbers(numbers.concat([solved]));
        }
        else{
            setResponse("No Solution");
        }

    };
    const undo = () => {
        if (numbers.length>1){
            setNumbers(numbers.slice(0,-1));
            setResponse("");
        }
    };
    useEffect(()=> {
        if (activeSquare !== -1 && keyPressed !== -1){
            const newNumbers = JSON.parse(JSON.stringify(numbers[numbers.length-1]));
            newNumbers[Math.floor(activeSquare/9)][activeSquare%9] = keyPressed;
            setNumbers(numbers.concat([newNumbers]));
            setActiveSquare(-1);
            setResponse("");
        }
    },[keyPressed, activeSquare,numbers]);  
    var groups = [];
    for (var i=0;i<9;i++){
      groups.push(<SquareGroup 
        numbers = {numbers[numbers.length-1]} 
        key = {i} 
        id = {i} 
        actSquare = {activeSquare} 
        onClickEvent = {handleClick}
        />)
    }
    return (
    <div className = "game"><div className = "board">
      {groups}
    </div>
    <div className = "sudokuButton" onClick = {handleSolve}>Solve!</div>
    <div className = "sudokuButton" onClick = {undo}>Undo</div>
    <div className = "sudokuButton" onClick = {() => console.log(numbers)}>Print</div>
    <div className = "sudokuButton" onClick = {() => setNumbers(numbers.concat([Array.from(premade)]))}>Premade</div>
    <div className = "sudokuButton" onClick = {() => setNumbers(numbers.concat([Array.from(Array(9), () => new Array(9).fill(0))]))}>Reset</div>
    <div>{response}</div></div>
    )
  }
export default Board;  
