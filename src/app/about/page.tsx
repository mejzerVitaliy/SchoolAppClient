import Header from '@/components/molecules/Header'
import Navbar from '@/components/molecules/Navbar'
import React from 'react'

const page:React.FC = () => {
    return (
        <main>
            <Header />
            <Navbar currentPage='/about' />
            <div>about us</div>
        </main>
        
    )
}

export default page