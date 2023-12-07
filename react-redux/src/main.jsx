import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit'
import {Provider } from 'react-redux'
import  userReducer  from './features/users'
import themeReducer from './features/theme.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
