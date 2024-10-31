import React from 'react'

const Myproject = ({name, age, state, quote}) => {
  return (
    <div>
        <h1>{name}</h1>

        <h2>{age}</h2>

        <h3>{state}</h3>

        <p>{quote}</p>

        </div>
  )
}

export default Myproject