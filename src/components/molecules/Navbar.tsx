import React from 'react'
import ListOfLinks from '../atoms/ListOfLinks'

const Navbar:React.FC = () => {
    return (
        <nav className='w-full h-[60px] px-[20px] sticky top-0 z-10 bg-red-400'>
            <ListOfLinks />
        </nav>
    )
}

export default Navbar