import Link from 'next/link'
import React from 'react'
import H3 from './H3'

const ListOfLinks:React.FC<{currentPage: string}> = ({currentPage}) => {
    return (
        <section className='w-full h-full flex justify-between items-center'>
            <ul className='h-full flex justify-start items-center gap-[20px] text-center'>
                <Link href={'/'}><li className={`w-[200px] h-[40px] rounded-[20px] bg-gray-400 ${currentPage === '/' && 'bg-teal-400'}`}>Головна</li></Link>
                <Link href={'/about'}><li className={`w-[200px] h-[40px] rounded-[20px] bg-gray-400 ${currentPage === '/about' && 'bg-teal-400'}`}>Про нас</li></Link>
                <Link href={'/posts'}><li className={`w-[200px] h-[40px] rounded-[20px] bg-gray-400 ${currentPage === '/posts' && 'bg-teal-400'}`}>Новини</li></Link>
                <Link href={'/gallery'}><li className={`w-[200px] h-[40px] rounded-[20px] bg-gray-400 ${currentPage === '/gallery' && 'bg-teal-400'}`}>Галерея</li></Link>
                <Link href={'/contacts'}><li className={`w-[200px] h-[40px] rounded-[20px] bg-gray-400 ${currentPage === '/contacts' && 'bg-teal-400'}`}>Контакти</li></Link>
            </ul>
            
            <Link href={'/auth'}>
                <article className='w-[50px] h-[50px] rounded-full bg-slate-500 grid place-items-center'>
                    <H3>A</H3>
                </article>
            </Link>
        </section>
        
    )
}

export default ListOfLinks