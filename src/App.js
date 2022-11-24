import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './SudokuPieces/Board';

function App() {
  return (
    <div className="App">
      <header>Sudoku Solver</header>
      <Board/>
    </div>
  );
}


export default App;
