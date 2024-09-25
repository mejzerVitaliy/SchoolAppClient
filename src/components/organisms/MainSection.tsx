import React from 'react'
import H3 from '../atoms/H3'
import P from '../atoms/P'

const MainSection:React.FC = () => {
    return (
        <section className=' pb-[400px]'>
            <article className='w-full h-[650px] bg-amber-600' >
                    {/* thats will be a slider of images */}
            </article>

            <article className='w-full h-[250px] grid grid-cols-4 gap-0'>
                <article className='w-full h-full bg-red-600'></article>
                <article className='w-full h-full bg-indigo-600'></article>
                <article className='w-full h-full bg-orange-600'></article>
                <article className='w-full h-full bg-green-600'></article>
            </article>

            <article className='w-full h-[200px] grid place-items-center px-[40px]'>
                <P>
                    <H3>Lorem ipsum dolor - </H3> sit amet consectetur adipisicing elit. Assumenda atque, vel ipsam excepturi itaque blanditiis exercitationem, dolore ex voluptate quisquam, veniam vitae esse natus minima debitis veritatis dolorem quam tenetur culpa incidunt modi ullam suscipit aperiam dolor. Quasi, veritatis cum?
                </P>
            </article>
        </section>
    )
}

export default MainSection