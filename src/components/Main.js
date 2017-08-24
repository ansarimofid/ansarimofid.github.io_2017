/**
 * Created by ansarimofid on 24/08/17.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Resume from '../pages/Resume/Resume'
import Contacts from '../pages/Contacts/Contacts'
import Collections from '../pages/Collections/Collections'

const Main  = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/collections' component={Collections}/>
    </Switch>
  </main>
);

export default Main