'use client'
import { useState, useEffect, useRef } from 'react';
import Square from './Square';
import Menu from '@/components/Menu';
import { SquareProps, VaultStatus } from '@/types';

const KEY = [3, 7, 6, 9];
const KEYLENGTH = KEY.length;

const Board = () => {
    // the menu
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuFrozen, setMenuFrozen] = useState(false);
    const menuFrozenRef = useRef(menuFrozen);

    // input sequence
    const [currentInputSequence, setCurrentInputSequence] = useState<number[]>([]);

    // square state (vaultStatus is stored per square)
    const [squareData, setSquareData] = useState<SquareProps[]>(
        Array(9)
            .fill(null)
            .map((_, index) => ({
                id: index + 1,
                selected: false,
                disabled: false,
                vaultStatus: 'locked' as VaultStatus,
                handleClick: () => {}
            })
        )
    );

    const resetBoard = () => {
        setTimeout(() => {
            const updatedSquareData = squareData.map(square => ({
                ...square,
                selected: false,
                disabled: false,
                vaultStatus: 'locked' as VaultStatus
            }));

            setSquareData(updatedSquareData);
            setCurrentInputSequence([]);
        }, 1500);
    };

    const areArraysEqual = (attempt: number[], secret: number[]): boolean => {
        if (attempt.length !== secret.length) return false;
        return attempt.every((value, index) => value === secret[index]);
    };

    const handleSquareClick = (id: number) => {
        const nextSequence = [...currentInputSequence, id];
        setCurrentInputSequence(nextSequence);

        const updatedSquareData = squareData.map(square => ({
            ...square,
            selected: square.id === id ? !square.selected : square.selected,
            disabled: square.id === id ? !square.disabled : square.disabled
        }));

        setSquareData(updatedSquareData);

        const selectedCount = updatedSquareData.filter(square => square.selected).length;

        if (selectedCount === KEYLENGTH) {
            const status: VaultStatus = areArraysEqual(KEY, nextSequence) ? 'unlocked' : 'error';

            const animatedSquareData = updatedSquareData.map(square => ({
                ...square,
                vaultStatus: status
            }));

            setSquareData(animatedSquareData);
            resetBoard();
        }
    };

    return (
        <section id='keypad' className='flex items-center justify-center min-h-screen'>
            <div className='h-1/2 mx-auto'>
                <div className='p-8 grid grid-cols-3 bg-black gap-6 rounded-lg'>
                    {squareData.map(square => (
                        <Square
                            key={square.id}
                            id={square.id}
                            selected={square.selected}
                            disabled={square.disabled}
                            vaultStatus={square.vaultStatus}
                            handleClick={() => handleSquareClick(square.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Board;
