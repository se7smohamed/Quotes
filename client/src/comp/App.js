import React from 'react'
import '../style/normalize.css'
import '../style/App.css'
import ShowQuote from './ShowQuote'
import SendQuote from './SendQuote'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { Switch, Route } from 'react-router'

class App extends React.Component {
    render(){
        return(
            <>
            <Router>
                <div className='navbar-expand'>
                <nav className="navbar navbar-light">
                    <div className='container'>                
                        <Link to='/' className='navbar-brand'>Quote</Link>
                        <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-sm-3">
                                <NavLink activeClassName='active' exact={true} className="nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item mr-sm-3">
                                <NavLink activeClassName='active' className="nav-link" to='/new'>New</NavLink>
                            </li>
                        </ul>
                        </div>                       
                    </div>
                </nav>
                </div>
                <Switch>
                    <Route exact path='/' component={ShowQuote}/>
                    <Route exact path='/quote/:id' component={ShowQuote}/>
                    <Route exact path='/new' component={SendQuote}/>
                </Switch>
            </Router>
            </>
        )
    }
}

export default App