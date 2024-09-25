import React from 'react'
import Header from '../molecules/Header'
import Navbar from '../molecules/Navbar'
import MainSection from '../organisms/MainSection'

const MainContent:React.FC = () => {
    return (
        <main className='w-full'>
            <Header />
            <Navbar currentPage='/' />
            
            <MainSection/>
        </main>
    )
}

export default MainContent