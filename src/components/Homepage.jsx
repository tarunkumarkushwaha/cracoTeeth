import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import CracoTeeth from './CracoTeeth'
import Setting from './Setting'

const Homepage = () => {
    const [noOfTeeth, setnoOfTeeth] = useState(1)
    const [loserNumber, setloserNumber] = useState()
    const [game, setgame] = useState(false)
    const [lose, setlose] = useState(false)
    const [win, setwin] = useState(false)
    const [winNo, setwinNo] = useState([])
    let ref = useRef(null)

    let numArr = []

    for (let index = 1; index <= 32; index++) {
        numArr.push(index)
    }

    const startGame = () => {
        if (lose) { window.location.reload() }
        setgame(true)
        let num = Math.floor(Math.random() * 32) + 1;
        setloserNumber(num)
        console.log("win num", num)
    }
    const clickHandler = (e) => {
        if (loserNumber !== parseInt(e.target.innerText)) {
            setwinNo(prev=>[...new Set ([...prev,parseInt(e.target.innerText)])])
            e.target.classList.add("bg-green-500");
        }
        else {
            console.log("mar gaya")
            setlose(true)
            e.target.classList.add("bg-red-500")
        }
        
    }

    useEffect(() => {
        if (winNo.length == 31) {
            console.log("first won")
            setwin(true)
            setgame(false)
        }
    }, [winNo])


    return (
        <>
            <div className='flex flex-col justify-center items-center h-[100vh]'>
                <h1 className='text-green-800 text-4xl p-4 m-4'>CracoTeeth</h1>

                <h2>winning teeth - {loserNumber}</h2>
                <Setting noOfTeeth={noOfTeeth} setnoOfTeeth={setnoOfTeeth}/>
                {game && <CracoTeeth ref={ref} numArr={numArr} clickHandler={clickHandler} lose={lose}/>}
                <button className='p-3 bg-green-300 m-4 rounded-xl' onClick={startGame}>{game ? "reset" : "start"}</button>
                {lose && <h1 className='text-green-800 text-4xl p-4 m-4'>lost</h1>}
                {win && <h1 className='text-green-800 text-4xl p-4 m-4'>winning</h1>}
            </div>
        </>
    )
}

export default Homepage