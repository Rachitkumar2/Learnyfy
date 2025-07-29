import React, { createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

  const currency =import.meta.env.VITE_CURRENCY

  const value = {
  currency  
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}