import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Switch from 'react-bootstrap/esm/Switch'
import Launches from './components/launches'
import Launch from './components/launch'
import PageNotFound from './components/page-not-found'

//const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#5f9ea0',
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// })

class App extends Component {

  render() {
    return (
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Launches/>} />
            <Route path="/launches/:id" element={<Launch/>} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
        </Fragment>
    )
  }
}

export default App;