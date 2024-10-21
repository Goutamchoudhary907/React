import React from 'react'

export default  function Button( {
    Children ,
    type='button' ,
    bgcolor= 'bg-blue-600' ,
    textcolor='text-white' ,
    className= '',
    ... props
}) {
  return (
    <button className= {`px-4 py-2 rounded-lg ${bgcolor} ${textcolor}
     ${className}`} {...props}>
        {Children}
    </button>
  )
}
