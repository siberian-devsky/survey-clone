'use client'

import { SquareProps } from "@/types"

export default function Square({ data, onClick }: SquareProps) {
    return (
        <button 
            className={`w-[300px] aspect-square text-9xl transition-transform duration-200 rounded-3xl
                ${data.disabled && "opacity-50 cursor-not-allowed"}
                ${data.selected
                    ? "border-4 border-yellow-300 text-yellow-300 bg-gray-500 scale-90"
                    : "border-2 border-white text-white bg-slate-700 scale-100"
                }
            `}
            disabled={data.disabled}
            onClick={onClick}
        >       
            {data.id + 1}
        </button>
    )
}