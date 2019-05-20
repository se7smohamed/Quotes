import React from 'react'
import Quote from './Quote';
import {Link} from 'react-router-dom'

class ShowQuote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: '',
            by: '',
            comp: false
        }
    }
    componentDidMount(){
        let apiUrl = '/api/quote/'
        let id = this.props.match.params.id
        apiUrl = id ? apiUrl + id : apiUrl
        fetch(apiUrl)
            .then( data => data.json() )
            .then( data => {
                if ( !data || !Object.keys(data).length ){
                    //no quotes found
                    this.setState({quote: -1})    
                    return 0;
                }
                this.setState(data)
            })
    }
    render(){
        return( <>
            <Quote quote={this.state.quote||false} by={this.state.by} />
        </>)
    }
}
export default ShowQuote