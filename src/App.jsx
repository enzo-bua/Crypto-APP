import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Data from './Components/Data'
import './index.css'
function App() {

  const [busqueda, setBusqueda] = useState({
    crypto: '',
    currency: ''
  })

  const [consultar,guardarConsulta] = useState(false)
  const [resultado, setResultado] = useState({})

  const {crypto, currency} = busqueda

  useEffect(( ) => {
    const api = (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`)
    const getClima = async() => {

    const clima =  await fetch(api)
    const data =  await clima.json()    
    setResultado(data)
    guardarConsulta(false)
      
  }
  getClima()
  }, [consultar])



  return (
     <>
    <Header
      titulo='CRIPTOMONEDAS'
    />
      <div className="container-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Formulario 
                      busqueda={busqueda}
                      setBusqueda={setBusqueda}
                      guardarConsulta={guardarConsulta}
                 
                    />
                </div>
                <div className="col m6 s12">
                  <Data
                    resultado={resultado}
                    busqueda={busqueda}
                  />
                </div>
            </div>
        </div>
      </div>  
  </>
  )
}

export default App

// import { useState, useEffect } from 'react'
// import Header from './Components/Header'
// import Formulario from './Components/Formulario'
// import Data from './Components/Data'
// function App() {

//   const [busqueda, setBusqueda] = useState({
//     crypto: '',
//     currency: ''
//   })

//   const [consultar,guardarConsulta] = useState(false)
//   const [resultado, setResultado] = useState({})

//   const {crypto, currency} = busqueda

//   useEffect(( ) => {
//     const api = (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`)
//     const getClima = async() => {

//     const clima =  await fetch(api)
//     const data =  await clima.json()    
//     console.log(data)
//     setResultado(data)
      
//   }
//   getClima()
//   }, [consultar])



//   return (
//     <>
//     <Header
//       titulo='Clima App'
//     />

//         <div className="container">
//             <div className="row">
//                 <div className="col  s12">
//                     <Formulario 
//                       busqueda={busqueda}
//                       setBusqueda={setBusqueda}
//                       guardarConsulta={guardarConsulta}
                 
//                     />
//                 </div>
//                 <div className="col m6 s12">
//                   <Data
//                     resultado={resultado}
//                     busqueda={busqueda}

//                   />
//                 </div>

          
//             </div>
//         </div>
//   </>
//   )
// }

// export default App
