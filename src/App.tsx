import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'

import Home from './routes/Home'
import Mac from './routes/Mac'
import NotFound from './routes/NotFound'

function App () {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/mac" component={Mac} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
