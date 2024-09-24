import React, { ReactNode } from 'react'

const P: React.FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return (
		<p
			className={` text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[22px] ${className}`}
		>
			{children}
		</p>
	)
}

export default P
