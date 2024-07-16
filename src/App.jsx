import React from 'react'

function App() {
    return (
        <div className='flex-column bg-black w-[300px] h-full rounded-xl mx-auto my-12'>
            <div className='text-white text-5xl p-5 text-right'>0</div>
            <div className='grid grid-cols-4 gap-3 p-5'>
                <button className='bg-[#a3a3a3] w-[55px] h-[55px] rounded-full text-2xl'>AC</button>
                <button className='bg-[#a3a3a3] w-[55px] h-[55px] rounded-full text-2xl'>+/-</button>
                <button className='bg-[#a3a3a3] w-[55px] h-[55px] rounded-full text-2xl'>%</button>
                <button className='bg-[#f1a33b] w-[55px] h-[55px] rounded-full text-2xl text-white'>/</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>7</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>8</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>9</button>
                <button className='bg-[#f1a33b] w-[55px] h-[55px] rounded-full text-2xl text-white'>X</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>4</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>5</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>6</button>
                <button className='bg-[#f1a33b] w-[55px] h-[55px] rounded-full text-2xl text-white'>-</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>1</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>2</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>3</button>
                <button className='bg-[#f1a33b] w-[55px] h-[55px] rounded-full text-2xl text-white'>+</button>
                <button className='flex bg-[#303030] w-full h-[55px] rounded-full text-2xl col-span-2 text-left p-5 items-center text-white'>0</button>
                <button className='bg-[#303030] w-[55px] h-[55px] rounded-full text-2xl text-white'>.</button>
                <button className='bg-[#f1a33b] w-[55px] h-[55px] rounded-full text-2xl text-white'>=</button>
            </div>
        </div>
    )
}

export default App