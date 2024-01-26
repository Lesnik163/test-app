import React from 'react'

function Content(props: {children: React.ReactNode}) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Content
