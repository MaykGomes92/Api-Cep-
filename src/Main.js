import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import api from './modeAxios/MdAxio'
const Main = () => {

  const [input, setInput] = React.useState('');
  const [dadosCep, setDados] = React.useState({})

  async function handleClick(){
    if(input === ''){
      alert('Digite o cep...')
      return
    }

    try{
      const apiCep = await api.get(`${input}/json`)
      setDados(apiCep.data)
    }catch{
      
    }
  }

  return (
    <>
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
          type="text"
          placeholder="Digite seu cep..."
        ></input>

        <button onClick={handleClick}>
          <BiSearchAlt size={25} color="white" />
        </button>
      </div>

      {Object.keys(dadosCep).length > 0 && (
                <div className="teste">
                <h2>Cep: {dadosCep.cep}</h2>
                <div className="contCeps">
                  <span>{dadosCep.logradouro}</span>
                  <span>Cidade: {dadosCep.localidade}</span>
                  <span>Bairro: {dadosCep.bairro}</span>
                  <span>Estado: {dadosCep.uf}</span>
                </div>
              </div>
      )}
      
    </>
  );
};

export default Main;
