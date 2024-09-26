import React from 'react'
import Header from '../molecules/Header'
import Navbar from '../molecules/Navbar'
import PostSection from '../organisms/PostSection'

const PostContent: React.FC = () => {
	return (
		<main className='w-full'>
			<Header />
			<Navbar currentPage='/posts' />
			<PostSection />
		</main>
	)
}

export default PostContent
