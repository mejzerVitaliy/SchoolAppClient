import React from 'react'
import H1 from '../atoms/H1'

const PostSection: React.FC = () => {
	return (
		<section className='w-full h-[300px] bg-amber-600'>
			<article className='px-5'>
				<H1 className='px-5 py-[126px]'>Новини школи</H1>
			</article>
			<article></article>
		</section>
	)
}

export default PostSection
