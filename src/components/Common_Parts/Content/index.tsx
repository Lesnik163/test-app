import React from 'react'

const Content = (props: {children: React.ReactNode}) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Content
