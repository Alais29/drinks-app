import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

//Crear el context
export const CategoriasContext = createContext()

// Provider, donde se encuentras las funciones y state
const CategoriasProvider = ({children}) => {
  //State del context
  const [categorias, guardarCategorias] = useState([])

  //llamado a la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const categorias = await axios(url)
      guardarCategorias(categorias.data.drinks);
    }
    obtenerCategorias()
  }, [])

  return (
    <CategoriasContext.Provider
      value={{ categorias }}
    >
      {children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasProvider