import { StoreStateValues } from './initialState'

function reducer(state: StoreStateValues, action: any): StoreStateValues {
  console.log(state, action)
  switch (action.type.split('.')[0]) {
    default:
      return { ...state }
  }
}

export default reducer
