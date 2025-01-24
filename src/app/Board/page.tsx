"use client"

import React, { useState } from 'react'
import "./Board.css"
import Image from "next/image";
import circle from '../images/Group (5).png'
import xx from '../images/Group (6).png'

function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [lock ,setLock] =useState(false);
  const [history , setHistory] = useState([]);
  const [status ,setStatus] = useState('Next player is : O')



  const handleToggle = (v : any,i : any) => {

    // console.log(i)

  if (handleWinner(board) || checkGameEnd() || board[i]) return null ;
  let newBoard = [...board];
  newBoard[i] = lock ?"x" : "o"
  setBoard(newBoard)
  setLock(!lock)
  setHistory([...history,board])
  updateStatus(newBoard)
  // console.log(board)
  }



  const checkDraw = (squares : any) => {
    return squares.every(square  => square !== null);
  };

  const updateStatus = (newBoard : any) => {
    const winner = handleWinner(newBoard);
    const draw = checkDraw(newBoard);

    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (draw) {
      setStatus('Draw!');
    } else {
      setStatus(`Next player is : ${lock ? 'O' : 'X'}`);
    }
  };


  const handleUndo = () => {
    if (history.length === 0) return null ; 
    const lastBoard = history[history.length-1];
    setBoard(lastBoard);
    setHistory(history.slice(0,-1));
    setLock(!lock)
  }
 
  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setLock(false)
    setHistory([])
    setStatus('Next player is : O');
  }

  const checkGameEnd = () => {
    const winner = handleWinner(board);
    return winner || checkDraw(board);
  };

  const handleWinner = (squares : any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }



  return (
    <>
    <h1 className='font-mono status'>{status}</h1>
    <div className='board'>
        {board.map((v,index)=> (
          <div className='boxes' key={index}  onClick={(_e)=> handleToggle(v,index)  }> {board[index] === "x" ? <Image src={xx} alt='x'/> : (board[index] === "o" ? <Image src={circle} alt='o'/> : "")} </div>
        ))}
    </div>
    <button onClick={handleReset} className='resetBtn font-mono'>reset</button>
    <button onClick={handleUndo} className='undoBtn font-mono'>undo</button>
    </>
  )
}

export default Board
