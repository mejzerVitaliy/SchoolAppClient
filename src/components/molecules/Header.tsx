import React from 'react'
import H1 from '../atoms/H1'

const Header:React.FC = () => {
    return (
        <header className='w-full h-[80px] grid place-items-center absolute top-0 bg-red-400'>
            <H1>
                Великодальницький ліцей №1
            </H1>
        </header>
    )
}

export default Header