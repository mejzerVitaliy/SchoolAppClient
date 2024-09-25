// страница, где будут отображены посты
import PostContent from '@/components/templates/PostContent'
import React from 'react'

const page: React.FC = () => {
	return (
		<main className='w-full'>
			<PostContent />
		</main>
	)
}

export default page
