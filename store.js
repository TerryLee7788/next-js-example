import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  payload: {
    name: ''
  }
}

const loadingInitState = {
  haveLoading: false,
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  TERRY: 'TERRY',
  LOADING: 'LOADING',
}

// REDUCERS (action 就是下面 'ACTIONS' 指定的資料~)
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count,
        payload: exampleInitialState.payload
      })
    case actionTypes.TERRY:
      return Object.assign({}, state, {
        payload: {
          name: action.payload.name
        },
      });
    default:
      return state
  }
}

export const loading = (state = loadingInitState, action) => {

  switch (action.type) {
    case actionTypes.LOADING:
        return Object.assign({}, state, {
          haveLoading: action.payload.loading
        });

    default:
        return state;
  }
};

// ACTIONS dispatch + 塞資料給 reducer
export const showName = (name) => {
  // 待會上面 REDUCERS 的 action 參數就是這些~
  return {
    type: actionTypes.TERRY,
    payload: {
      name
    }
  };
};

export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export const controlLoading = (loading) => ({
  type: actionTypes.LOADING,
  payload: {
    loading
  }
});

// combineReducers
const rootReducer = combineReducers({
  clock: reducer,
  loading
});

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    // reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}