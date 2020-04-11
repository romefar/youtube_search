import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'react-thunk'
import reducers from '../reducers'

const store = createStore(
    reducers,
    compose(
        // applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

export default store;