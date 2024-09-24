import React, { ReactNode } from 'react'

const H2: React.FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return (
		<h2
			className={` text-[19px]  sm:text-[25px] md:text-[31px] lg:text-[37px]  ${className}`}
		>
			{children}
		</h2>
	)
}

export default H2
