import React from 'react'

const Data = ({ resultado }) => {

        const {raw} = resultado

  return (
    <div className='card-panel white col s12'>
        <div className='black-text'>
        <h2>Crypto: {raw} </h2>

        </div>

    </div>
  )
}

export default Data