import React from 'react'

const Formulario = ({ busqueda, setBusqueda, guardarConsulta}) => {

  const {crypto, currency} = busqueda
  const handleChange = (e) => {
    // actualizar el state
    setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    guardarConsulta(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-field col s12'>
        <select 
          className='browser-default'
          name="crypto"
          id="crypto"
          value={crypto}
          onChange={handleChange}
        >
          <option value="disabled selected">--Seleccione una moneda--</option>
          <option value="BTC">Bitcoin</option>
          <option value="LNR">Lunar</option>
          <option value="ETH">Ethereum</option>
          <option value="USDT">Tether USDT</option>
          <option value="XRP">XRP</option>
          <option value="BNB">Binance Coin</option>
          <option value="USDC">USD Coin</option>
          <option value="BUSD">BUSD</option>
          <option value="SOL">Solana</option>
          <option value="ADA">Cardano</option>
          <option value="DOGE">Dogecoin</option>
          <option value="DOT">Polkadot</option>
          <option value="LINK">Chainlink</option>
          <option value="AVAX">Avalanche</option>
          <option value="UNI">Uniswap Protocol Token</option>
          <option value="QNT">Quant</option>
          <option value="STETH">Staked Ether</option>
          <option value="APT">Aptos</option>
          <option value="MATIC">Matic</option>
          <option value="FTT">FTT Token</option>
        </select>

        <div className="input-field col s12">
          <select
            className="browser-default"
            name="currency"
            id="currency"
            value={currency}
            onChange={handleChange}

            
          >
            <option value="disabled selected">--Seleccione una Divisa--</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
          </select>
          <label htmlFor="currency"></label>
        </div>

        <input  
          type="submit"
          value="Buscar Valor"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />

      </div>
    </form>
  )
}

export default Formulario