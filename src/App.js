import { Switch, Route } from 'react-router-dom'
import Daily from './Components/Daily'
import Weekly from './Components/Weekly'
import Monthly from './Components/Montly'
import './style/All.css'
import All from './Components/All'
const App = () => {
  return (
    <div className='App'>
      <div className='app app1'>
        <div>
          <All />
        </div>
        <div>
          <Switch>
            {/* <Route exact path='/' component={All} /> */}
            <Route exact path='/Daily' component={Daily} />
            <Route exact path='/Weekly' component={Weekly} />
            <Route exact path='/Montly' component={Monthly} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
