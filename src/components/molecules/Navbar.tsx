import React from 'react'
import ListOfLinks from '../atoms/ListOfLinks'

const Navbar:React.FC = () => {
    return (
        <nav className='w-full h-[60px] px-[20px] fixed top-[80px] bg-red-400'>
            <ListOfLinks />
        </nav>
    )
}

export default Navbar