import React from 'react'
import '../style/normalize.css'
import '../style/App.css'
import ShowQuote from './ShowQuote'
import SendQuote from './SendQuote'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: '',
            by: '',
        }
    }
    componentDidMount(){
        let apiUrl = '/api/quote'
        fetch(apiUrl)
            .then( data => data.json() )
            .then( data => this.setState(data) )
    }
    render(){
        return(<>
            <ShowQuote/>
            <SendQuote />
            </>
        )
    }
}
export default App