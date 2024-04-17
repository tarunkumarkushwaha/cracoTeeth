import React, { forwardRef } from 'react'

const CracoTeeth = forwardRef((prop, ref) => {
    const { numArr, clickHandler, lose } = prop
    return (
        <>
            <div className='flex justify-center items-center gap-3 flex-wrap' ref={ref} >
                {numArr.map((item, i) =>
                    (<h1 hidden={lose} key={i} onClick={clickHandler} className='text-green-800 p-4 cursor-pointer border border-black'>{item}</h1>))}
            </div>
        </>
    )
})

export default CracoTeeth