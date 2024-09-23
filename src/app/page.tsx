import Header from '@/components/molecules/Header'
import Navbar from '@/components/molecules/Navbar'
import React from 'react'

const page:React.FC = () => {
    return (
        <main className='w-full'>
            <Header />
            <Navbar/>
        </main>
    )
}

export default page
