"use client"
import { useState } from "react";
import Square from "./Square";
import { SquareData } from "@/types";

const MAXSELECTIONS = 3

const Board = () => {
    // Initialize the squares data
     const [squares, setSquares] = useState<SquareData[]>(
        Array(9).fill(null).map((_, index) => ({
            id:index,
            selected: false,
            disabled: false
        }))
    )

    // handle square click
    const handleSquareClick = (id: number) => {
        console.log("aslkjdalkjdalkjda")
        const newSquares = squares.map((square) => {
            if (square.id === id && !square.disabled) {
                return { ...square, selected: !square.selected}
            }
            return square
        })

        
        // check if max have been selected
        const maxSelected = 
        true 
        && newSquares.filter((square => square.selected)).length === MAXSELECTIONS
        
        if (maxSelected) {
            newSquares.forEach((square) => {
                if (!square.selected) {
                    square.disabled = true
                } 
            })
        } else {
            newSquares.forEach((square) => {
                if (!square.selected) {
                    square.disabled = false
                } 
            })
        }
        
        setSquares(newSquares)
    }
    
    return (
        <div className="p-20 grid grid-cols-3 w-full bg-black gap-4">
            {squares.map((square) => (
                <Square key={square.id} data={square} onClick={() => handleSquareClick(square.id)} />
            ))}
        </div>
    )
};

export default Board;