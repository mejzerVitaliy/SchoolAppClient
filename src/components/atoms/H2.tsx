import React, { ReactNode } from 'react'

const H2:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <h2>
            {children}
        </h2>
    )
}

export default H2