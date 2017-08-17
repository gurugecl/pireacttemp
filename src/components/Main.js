import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Basics from './Basics'
import Forms from './Forms'
import Tables from './Tables'
import Properties from './Properties'
import Stater from './Stater'

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/basics' component={Basics}/>
        <Route path='/properties' component={Properties}/>
        <Route path='/stater' component={Stater}/>
        <Route path='/forms' component={Forms}/>
        <Route path='/tables' component={Tables}/>
    </Switch>
  </main>
)

export default Main
