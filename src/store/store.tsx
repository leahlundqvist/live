import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import { StoreStateValues, initialStateValue } from './initialState'

const AppContext = createContext<{
  state: StoreStateValues
  dispatch: React.Dispatch<any>
}>({
  state: initialStateValue,
  dispatch: () => null
})

const AppProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialStateValue)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
