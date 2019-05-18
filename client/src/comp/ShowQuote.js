import React from 'react'
import Quote from './Quote';


class ShowQuote extends React.Component {
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
        return( <Quote quote={this.state.quote} by={this.state.by} /> )
    }
}
export default ShowQuote