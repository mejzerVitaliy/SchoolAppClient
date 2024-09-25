import H2 from '@/components/atoms/H2'
import P from '@/components/atoms/P'
import Link from 'next/link'
import React from 'react'

const Page: React.FC = () => {
	return (
		<main className='flex justify-center items-center h-screen bg-gray-100'>
			<article className='bg-white shadow-lg rounded-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
				<H2 className='font-bold mb-1 md:mb-2'>Добро пожаловать</H2>
				<P>
					Вы можете
					<Link
						href='/auth/authAdmin'
						className='text-blue-500 hover:text-blue-700'
					>
						{' '}
						войти как администратор
					</Link>
					, или{' '}
					<Link href='/' className='text-blue-500 hover:text-blue-700'>
						продолжить как гость
					</Link>
					.
				</P>
			</article>
		</main>
	)
}

export default Page
