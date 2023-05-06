import React, { useState, useEffect } from "react";
import axios from "axios";

export function Estados() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="block text-sm font-medium text-gray-700">Estado</h1>
        <select
          name="uf"
          id="uf"
          onChange={handleSelectUf}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option className="text-sm font-medium text-gray-700" value="0">
            Selecione uma UF
          </option>
          {ufs.map((uf) => (
            <option value={uf.sigla}>{uf.nome}</option>
          ))}
        </select>
      </div>

      <div>
        <h1 className="block text-sm font-medium text-gray-700">Cidade</h1>
        <select
          name="City"
          id="City"
          value={selectedCity}
          onChange={handleSelectCity}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="0" className="text-sm font-medium text-gray-700">
            Selecione uma cidade
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
