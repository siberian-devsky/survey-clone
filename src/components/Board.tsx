"use client"
import { useState, useEffect, useRef } from "react";
import Square from "./Square";
import { SquareData } from "@/types";
import Menu from "@/components/Menu";

const MAXSELECTIONS = 3

const Board = () => {
    // init board data (menu lock, manu visible, password, menu lock ref)
    
    // init squares data

    // update menu locked ref
    useEffect(() => {
    }, [])


    useEffect(() => {
        // define function that calculates MouseEvent mouse position and opend menu

        // add the function to an event listener
        
        // remove the event listener
        
    }, []);



    // handle menu reset click
    const resetBoard = () => {
        // map squares and update attributes to default
        
        // set squares
    }

    // make sure the menu stays available for interaction
    const lockMenu = () => {
        
    };

    const unlockMenu = () => {
        
    };
    // ---- ---- ---- ----


    // handle square click
    const handleSquareClick = () => {
        // map new square array, toggle 'selected' state and return each
        
        // check if the requisite number of selections have
        // been made and update the board accordingly (red=wrong code; green=correct code)

        // validate unlock code

        // set squares
        
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-1/2 mx-auto">
                <div className="p-8 grid grid-cols-3 bg-black gap-6 rounded-lg">
                    {/* generate a square with the proper data */}
                </div>
            </div>
            {/* display the menu */}
        </div>
  )
};

export default Board;