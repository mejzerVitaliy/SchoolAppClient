import React, { ReactNode } from 'react'

const P:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}

export default P