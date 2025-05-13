"use client"
import { useState, useEffect } from "react";
import Square from "./Square";
import { SquareData } from "@/types";
import Menu from "@/components/Menu";

const MAXSELECTIONS = 4

const Board = () => {
    // Initialize the squares data
     const [squares, setSquares] = useState<SquareData[]>(
        Array(9).fill(null).map((_, index) => ({
            id:index,
            selected: false,
            disabled: false
        }))
    )

    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const bottomThreshold = 50 // px from bottom
            const windowHeight = window.innerHeight

            if (windowHeight - e.clientY <= bottomThreshold) {
                setMenuVisible(true)
            } else {
                setMenuVisible(false)
            }
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {window.removeEventListener('mousemove', handleMouseMove)}
    }, [])

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
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-1/2 mx-auto">
                <div className="p-8 grid grid-cols-3 bg-black gap-6 rounded-lg">
                    {squares.map((square) => (
                        <Square key={square.id} data={square} onClick={() => handleSquareClick(square.id)} />
                    ))}
                </div>
            </div>
            <Menu visible={menuVisible} />
        </div>
  )
};

export default Board;