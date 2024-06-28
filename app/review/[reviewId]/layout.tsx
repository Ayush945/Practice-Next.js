import React from 'react'

function ReviewLayout({children}:{
    children:React.ReactNode
}) {
  return (
    <div>
        {children}
        <h2>Feature of review</h2>
    </div>
  )
}

export default ReviewLayout;