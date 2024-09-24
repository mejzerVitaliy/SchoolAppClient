import React, { ReactNode } from 'react'

const H3: React.FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return <h3 className={`text-[25px] ${className}`}>{children}</h3>
}

export default H3
