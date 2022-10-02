import React from 'react'
import './App.css'
import Test from './test/OrderPage'
import {Provider} from 'react-redux'
import store from './store/index';


function App() {

  return (
  <Provider store={store}>
    <div className="App">
      <Test />
    </div>
  </Provider>
  )
}

export default App