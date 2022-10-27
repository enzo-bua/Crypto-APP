import React from 'react'

const Data = ({ resultado, busqueda}) => {
  const {DISPLAY, RAW} = resultado
  const {crypto, currency} = busqueda


  if (!DISPLAY) return null
  if (!RAW) return null
  return (
    <div className='card-panel white'>
        <div className='black-text'>
          <h2>Crypto: <strong>{DISPLAY.[`${crypto}`].[`${currency}`]}</strong> </h2>
          <p>Cotizacion el dia: {}</p>
          <p>Precio mas alto del dia</p>
          <p>Precio mas bajo del dia</p>
          <p>Variacion ultima 24hs</p>

        </div>

    </div>
  )
}

export default Data