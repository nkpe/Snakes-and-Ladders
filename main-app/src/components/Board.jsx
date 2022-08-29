import React from "react";
import PlayerPiece from "./PlayerPiece";

function Board() {
    //creating an array of length 24. Function with an empty parameter & i param. (to rep. index value),
    // after arrow is what is going to be created means get value, 
    const numbers = Array.from({ length: 24 }, (_, i) => i).reverse();

    //empty array for numbers
    let boardNumbers = []
    //number of el's in row
    const size = 4;
    //total num of elements. 
    const boardSize = 24
    //loop from 0, in multiples of 4. 

    let iteration = 0;

    for (let row = 0; row < boardSize; row = row + size) {
        if ((iteration % 2 == 0)) {
            for (let i = row; i < row + size; i++) {
                boardNumbers.push(<Square id={numbers[i]} />);
            }
        } else {
            for (let i = (row + size) - 1; i >= row; i--) {
                boardNumbers.push(<Square id={numbers[i]} />);
            }
        }
        iteration++;
    }

    return <div id="GameBoard">{boardNumbers}</div>;
};






function Square(props) {
    return <div id={props.id} className="BoardSquare"><h2>{props.id + 1}</h2></div>
}




export default Board;