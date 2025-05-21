'use client'

import { SquareProps } from "@/types"

export default function Square(props: SquareProps) {
    const { id, selected, disabled, vaultStatus, handleClick } = props
    
    const getColor = () => {
        if (vaultStatus !== 'error') {
            if (vaultStatus === 'unlocked') return 'correct-code-animation bg-green-500'

            return selected ? 'bg-yellow-500' : 'bg-blue-500'
        } else {
            return 'incorrect-code-animation bg-blue-500'
        }
    }

    return (
        <button 
            className={ `w-[300px] aspect-square text-xl transition-transform duration-200 rounded-3xl ${getColor()}` }
            onClick={ handleClick }
            disabled={ disabled }
        >       
            <div className="flex flex-col">
                <p>id: {id}</p>
                <p>selected: { selected ? 'yes' : 'no' }</p>
                <p>disabled: { disabled ? 'yes' : 'no'  }</p>
                <p>vaultStatus: { vaultStatus }</p>
            </div>
        </button>
    )
}