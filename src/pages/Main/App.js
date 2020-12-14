import React, { useEffect, useState } from "react";

import { Container, Form, Options, Checks, BodyForm, Buttons  } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { MdMotorcycle } from "react-icons/md";
import { FaCar } from "react-icons/fa";

import logo from "../../assets/logo.svg";
import api from "../../services/api";

function App() {
  const [make, setMake] = useState([]);
  const [tabSelected, setTabSelected] = useState('car');
  const [models, setModels] = useState([]);
  const [versions, setVersion] = useState([]);

  useEffect(() => {
    api.get("/api/OnlineChallenge/Make").then((res) => {
      setMake(res.data);
    });
  }, []);

  async function handleMake(e) {
    const idMake = e.target.value;

    await api.get(`/api/OnlineChallenge/Model?MakeID=${idMake}`).then((res) => {
      setModels(res.data);
    });

    setVersion([]);
  }

  async function handleModels(e) {
    const idModel = e.target.value;

    await api.get(`/api/OnlineChallenge/Version?ModelID=${idModel}`).then((res) => {
      setVersion(res.data);
    });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="logo WebMotors" />
      <Options>
        <div>
          <button 
            className={tabSelected === "car" && "actived"}
            onClick={() => setTabSelected("car")}
          >
            <FaCar size={34} />
            <div className='buy'>
              <span>COMPRAR</span>
              <span className="btnType">CARROS</span>
            </div>
          </button>

          <button
            className={tabSelected === "motorcycle" && "actived"}
            onClick={() => setTabSelected("motorcycle")}        
          >
            <MdMotorcycle size={40} />
            <div className='buy'>
              <span> COMPRAR</span>
              <span className="btnType">MOTOS</span>
            </div>
          </button>
        </div>
        
        <button className='sellMyCar'>Vender meu carro</button>
      </Options>

      <Form>
        <Checks>
          <label>
            <input name="usados" type="checkbox" />
            Novos
          </label>
          <label>
            <input name="novos" type="checkbox" />
            Usados
          </label>
        </Checks>

        <BodyForm>
          <div className="region">
            <select  name="onde" >
              <option>São Paulo - SP</option>
            </select>
            <select  name="onde" >
              <option>Raio</option>
            </select>
          </div>

          <select name="marca" onChange={handleMake}>
            <option selected={make.length === 0 ? true : false} >
              Marca: Todas
            </option>
            {make.map((make) => (
              <option key={make.ID} value={make.ID}>
                {make.Name}
              </option>
            ))}
          </select>

          <select
            name="modelo"
            onChange={handleModels}
            disabled={models.length === 0 ? true : false}
          >
            <option selected={models.length === 0 ? true : false} disabled>
              Modelo: Todos
            </option>
            {models.map((model) => (
              <option key={model.ID} value={model.ID}>
                {model.Name}
              </option>
            ))}
          </select>

          <div className='yearPrice'>
            <select name="ano" disabled>
              <option>Ano Desejado</option>
            </select>

            <select name="faixa" disabled>
              <option>Faixa de Preço</option>
            </select>
          </div>          
          
          <select
            className="version"
            name="versões"
            disabled={versions.length === 0 ? true : false}
          >
            <option selected={versions.length === 0 ? true : false} disabled>
              Versão: Todas
            </option>
            {versions.map((version) => (
              <option key={version.ID} value={version.ID}>
                {version.Name}
              </option>
            ))}
          </select>
        </BodyForm>

        <Buttons>
          <button type="button" className="btnSearch">
            <FiChevronRight />
            Busca Avançada
          </button>
          <button type="button" className="btnFilters">
            Limpar Filtros
          </button>
          <button type="button" className="btnOffers">
            VER OFERTAS
          </button>
        </Buttons>
      </Form>

    </Container>
  );
}

export default App;
