"use client"
import { useState, useEffect, useRef } from "react";
import Square from "./Square";
import { SquareData } from "@/types";
import Menu from "@/components/Menu";

const MAXSELECTIONS = 3

const Board = () => {
    // init board data
    const [isMenuLocked, setIsMenuLocked] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [password, setPassword] = useState("")
    const isMenuLockedRef = useRef(isMenuLocked)
    
    // init squares data
    const [squares, setSquares] = useState<SquareData[]>(
        Array(9).fill(null).map((_, index) => ({
            id:index,
            selected: false,
            disabled: false,
        }))
    )

    useEffect(() => {
        isMenuLockedRef.current = isMenuLocked
    }, [isMenuLocked])


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const bottomThreshold = 20;
            const windowHeight = window.innerHeight;
            const isNearBottom = windowHeight - e.clientY <= bottomThreshold;

            if (isNearBottom || isMenuLockedRef.current) {
                setMenuVisible(true);
            } else {
                setMenuVisible(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);



    // handle menu reset click
    const resetBoard = () => {
        const resetSquares = squares.map(square => ({
            ...square,
            selected: false,
            disabled: false
        }))

        setSquares(resetSquares)
    }

    // make sure the menu stays available for interaction
    const lockMenu = () => {
        if (!isMenuLocked) {
            console.log("Locking menu");
            setIsMenuLocked(true);
        }
    };

    const unlockMenu = () => {
        if (isMenuLocked) {
            console.log("Unlocking menu");
            setIsMenuLocked(false);
        }
    };


    // handle square click
    const handleSquareClick = (id: number) => {
        const newSquares = squares.map((square) => {
            if (square.id === id && !square.disabled) {
                console.log(password)
                return {
                    ...square,
                    selected: !square.selected,
                }
            }
            return square
        })

        
        // check if max have been selected
        const maxSelected = newSquares.filter((square => square.selected)).length === MAXSELECTIONS
        newSquares.forEach((square) => square.disabled = maxSelected ? true : false)

        // check for unlock code
        // const codeAccepted = password === "123"
        // const isUnlocked = newSquares.forEach(square => square.disabled = true)
        
        setSquares(newSquares)
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-1/2 mx-auto">
                <div className="p-8 grid grid-cols-3 bg-black gap-6 rounded-lg">
                    {squares.map((square) => (
                        <Square key={square.id} data={square} password={password} onClick={() => handleSquareClick(square.id)} />
                    ))}
                </div>
            </div>
            <Menu 
                visible={ menuVisible }
                resetCallback={ resetBoard }
                menuLockCallback={ lockMenu }
                menuUnlockCallback={ unlockMenu }
            />
        </div>
  )
};

export default Board;