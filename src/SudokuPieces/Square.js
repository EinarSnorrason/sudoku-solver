import React , {useState, useEffect} from 'react';
import '../App.css';
import './Square.css';

function Square(props){
    const settings = "square"+ (props.selected ? " selected": "");
    return (
      <div className={settings} onClick = {() => props.onClickEvent(props.id)}>
        {props.value}
      </div> 
    )
  }

export default Square;