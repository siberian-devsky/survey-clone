'use client'

import { SquareProps } from "@/types"

export default function Square({ data, onClick }: SquareProps) {
    return (
        <button 
            className={`w-[300px] aspect-square bg-blue-800 border-2 border-black
                ${data.disabled && "opacity-50 cursor-not-allowed"}
                ${data.selected && !data.disabled && "bg-blue-500 border-purple-500"}
            `}
            disabled={data.disabled}
            onClick={onClick}
        >       
            {data.id}
        </button>
    )
}