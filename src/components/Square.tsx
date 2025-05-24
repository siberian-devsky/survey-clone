'use client'

import { SquareData } from "@/types"
import Image from "next/image"
import { buildWeatherIconUrl } from "@/lib/url-builder"
import Link from "next/link"

export default function Square({ display }: SquareData) {
    console.log(display)
    return (
        <Link
            href={`https://www.timeanddate.com/weather/?query=${display.city}`}
            className={`
                w-[300px] aspect-square transition-transform duration-200 rounded-3xl
                border-teal-500 border-4 bg-teal-800/60 hover:border-white hover:bg-teal-500/60 p-5  
            `}
        >       
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl">{display.city}</p>
                <Image 
                    src={buildWeatherIconUrl(display.icon)}
                    alt='current weather icon'
                    width={200}
                    height={200}
                />
                <p className="text-xl">{display.temp}</p>
            </div>
        </Link>
    )
}