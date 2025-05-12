'use client'

import { useState } from "react"

interface Props {
    sqId: string
    sqContent?: string
}

const Square = ({sqId, sqContent}: Props) => {
    const [active, setActive] = useState(false)

    function handleClick() {
        console.log(sqContent)
        setActive(!active)
    }

    return (
        <div id={sqId}
             className={`
                flex flex-col items-center justify-center text-5xl 
                w-[300px] aspect-square border-4 p-0 m-0
                ${active 
                    ? 'bg-purple-500 border-pink-400'
                    : 'bg-purple-500/30 border-slate-600'
                }
            `}
             onClick={() => handleClick()}
             >
            {sqContent}
        </div>
    )
};

export default Square;