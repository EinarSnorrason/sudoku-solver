import React , {useState, useEffect} from 'react';
import '../App.css';
import Square from './Square';


function SquareGroup(props){
    var squares = []
  
    function calulateId(groupPos,squarePos){
      return (groupPos%3)*3 + Math.floor(groupPos/3) * 27 + (squarePos%3) + Math.floor(squarePos/3)*9
    } 

    function calculateValue(numbers, id){
        var num =  numbers[Math.floor(id/9)][id%9];
        return num !== 0 ? num : "";
    }
  
    for (var i=0; i < 9; i++){
      const squareId = calulateId(props.id,i);
      const squareValue = calculateValue(props.numbers, squareId);
      squares.push(<Square 
        numbers = {props.numbers} 
        id = {squareId} 
        key = {squareId} 
        onClickEvent = {props.onClickEvent} 
        value = {squareValue}
        selected = {props.actSquare === squareId}
        />)
    }
    return (
      <div className = "group">
        {squares}
      </div>
    )
  }
export default SquareGroup;