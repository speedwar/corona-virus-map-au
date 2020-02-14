import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'rx/store'

import logo from 'svg/logo.svg'
import 'sass/main.scss'

const Content = () => (
  <header className="demo__header">
    <span className="demo__logo" dangerouslySetInnerHTML={ { __html: logo} } />
    <p>
      Edit <code>src/Pages/Demo/Demo.js</code> and save to reload.
    </p>
    <a
      className="demo__link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)

const Layout = () => {
  return (
    <div className="demo__container">
      <main>
        <Content />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App

