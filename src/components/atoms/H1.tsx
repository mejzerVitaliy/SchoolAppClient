import React, { ReactNode } from 'react'

const H1:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <h1 className='text-[44px] font-black'>
            {children}
        </h1>
    )
}

export default H1