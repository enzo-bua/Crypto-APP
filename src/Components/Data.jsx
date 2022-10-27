import React from 'react'

const Data = ({ resultado, busqueda}) => {
  const {crypto, currency} = busqueda

  if (!resultado.DISPLAY) return undefined

  const precio = resultado?.DISPLAY[`${crypto}`]?.[`${currency}`]?.PRICE || null
  const precio_alto = resultado?.DISPLAY[`${crypto}`]?.[`${currency}`]?.HIGHDAY || null
  const precio_bajo = resultado?.DISPLAY[`${crypto}`]?.[`${currency}`]?.LOWDAY || null
  const variacion = resultado?.DISPLAY[`${crypto}`]?.[`${currency}`]?.CHANGEPCT24HOUR || null


  return (
    <div className='panel card-panel white'>
        <div className='black-text'>
          <h2><b>{crypto} / {currency} </b> </h2>
          <p> <b> Cotizacion el dia: </b>{precio}</p>
          <p> <b> Precio mas alto del dia:</b> {precio_alto}</p>
          <p> <b>Precio mas bajo del dia:</b>  {precio_bajo}</p>
         <p> <b>Variacion ultima 24hs:</b> {variacion}</p>

        </div>

    </div>
  )
}

export default Data;


// import React from 'react'

// const Data = ({ resultado, busqueda}) => {
//   const {DISPLAY, RAW} = resultado
//   const {crypto, currency} = busqueda


//   if (!DISPLAY) return null
//   if (!RAW) return null
//   return (
//     <div className='card-panel white'>
//         <div className='black-text'>
//           <h2 ><strong>{crypto} / {currency}</strong></h2>
//           <p> <strong> Cotizacion el dia: </strong>{DISPLAY[`${crypto}`][`${currency}`].PRICE}</p>
//           <p> <strong> Precio mas alto del dia:</strong> {DISPLAY[`${crypto}`][`${currency}`].LOWDAY}</p>
//           <p> <strong>Precio mas bajo del dia: </strong> {DISPLAY[`${crypto}`][`${currency}`].HIGHDAY}</p>
//           <p> <strong>Variacion ultima 24hs:</strong> {DISPLAY[`${crypto}`][`${currency}`].IMAGEURL}</p>

//         </div>


//     </div>
//   )
// }

