'use client'

import { SquareProps } from "@/types"

export default function Square({ data, password, onClick: clickCallback }: SquareProps) {
    return (
        <button 
            // generate a square component that displays behavior consistent
            // with its data type and parent function. remember, BOARD is
            // the single source of truth here
            className={`w-[300px] aspect-square text-9xl transition-transform duration-200 rounded-3xl
                
                `} // conditional rendering JSX goes inside the rest of that ^^^^^
        >       
            {/* square label renders here */}
        </button>
    )
}