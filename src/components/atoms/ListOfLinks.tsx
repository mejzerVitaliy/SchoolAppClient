import Link from 'next/link'
import React from 'react'
import H3 from './H3'

const ListOfLinks:React.FC = () => {
    return (
        <section className='w-full h-full flex justify-between items-center'>
            <ul className='h-full flex justify-start items-center gap-[20px] text-center'>
                <Link href={'/'}><li className='w-[200px] h-[40px] rounded-[20px] bg-gray-400 '>Головна</li></Link>
                <Link href={'/posts'}><li className='w-[200px] h-[40px] rounded-[20px] bg-gray-400 '>Новини</li></Link>
                <Link href={''}><li className='w-[200px] h-[40px] rounded-[20px] bg-gray-400 '>івпвава</li></Link>
                <Link href={''}><li className='w-[200px] h-[40px] rounded-[20px] bg-gray-400 '>впвапів</li></Link>
                <Link href={''}><li className='w-[200px] h-[40px] rounded-[20px] bg-gray-400 '>впвпіпрі</li></Link>
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