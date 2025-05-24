"use client"
import { useState, useEffect, useRef } from "react"
import Square from "./Square"
import { SquareData } from "@/types"
import Menu from "@/components/Menu"

const Board = () => {
    // init board data
    const [isMenuLocked, setIsMenuLocked] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const isMenuLockedRef = useRef(isMenuLocked)
    //... end board init
    
    // init square data
    const [squares, setSquares] = useState<SquareData[]>(
        Array(9).fill(null).map((_, index) => ({
            id: index,
            selected: false,
            display: { city: '', temp: 0, icon: '' }
        }))
    )
    //...end square init

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/weather')
                if (!response.ok) throw new Error(`API response: ${response.statusText}`)
                const weatherData = await response.json()

                // update square data
                const updateData = squares.map( square => {
                    return {
                        ...square,
                        display: weatherData.weather[square.id].display
                    }
                })

                setSquares(updateData)

            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        isMenuLockedRef.current = isMenuLocked
    }, [isMenuLocked])


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const bottomThreshold = 20
            const windowHeight = window.innerHeight
            const isNearBottom = windowHeight - e.clientY <= bottomThreshold

            if (isNearBottom || isMenuLockedRef.current) {
                setMenuVisible(true)
            } else {
                setMenuVisible(false)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // handle menu reset click
    const resetBoard = () => {
        const resetSquares = squares.map(square => ({
            ...square,
            selected: false,
        }))

        setSquares(resetSquares)
    }

    // make sure the menu stays available for interaction
    const lockMenu = () => {
        if (!isMenuLocked) {
            // console.log("Locking menu")
            setIsMenuLocked(true)
        }
    }

    const unlockMenu = () => {
        if (isMenuLocked) {
            // console.log("Unlocking menu")
            setIsMenuLocked(false)
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-1/2 mx-auto">
                <div className="p-8 grid grid-cols-3 bg-black gap-6 rounded-lg">
                    {squares.map((square) => (
                        <Square 
                            key={square.id}
                            display={square.display}
                        />
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
}

export default Board