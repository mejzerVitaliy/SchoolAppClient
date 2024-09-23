import React, { ReactNode } from 'react'

const H3:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <h3>
            {children}
        </h3>
    )
}

export default H3