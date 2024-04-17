import React, { useState } from 'react'

const Setting = ({ noOfTeeth, setnoOfTeeth }) => {
    
    return (
        <>
            <div className="relative flex items-center max-w-[8rem]">
                <button onClick={() => noOfTeeth > 1 && setnoOfTeeth(noOfTeeth - 1)} type="button" id="decrement-button" className="bg-green-100 hover:bg-green-200 border border-green-300 rounded-s-lg p-3 h-11">
                    <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                </button>
                <div className="bg-green-100 hover:bg-green-200 border border-green-300 pb-1 p-3 h-11">
                    {noOfTeeth}
                </div>
                <button onClick={() => noOfTeeth < 32 && setnoOfTeeth(noOfTeeth + 1)} type="button" id="increment-button" className="bg-green-100 hover:bg-green-200 border border-green-300 rounded-e-lg p-3 h-11">
                    <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a number from 1 to 32</p>
        </>
    )
}

export default Setting