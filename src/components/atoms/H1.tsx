import React, { ReactNode } from 'react'

const H1: React.FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return <h1 className={`text-[44px] font-black ${className}`}>{children}</h1>
}

export default H1
