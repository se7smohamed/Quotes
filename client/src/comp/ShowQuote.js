import React from 'react'
import Quote from './Quote';
import {Link} from 'react-router-dom'

const BottomLink = props => {
    return(<div className='share-div'>
        <i className='fas fa-link'></i> <span className='share-link'>Share!</span>
        <br />
        {props.link ?
            <Link to={'/quote/'+props.link} className='share-link'> {'/quote/'+props.link} </Link>
        : null }
    </div>)
}
class ShowQuote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: '',
            by: '',
            _id: '',
            votes: '',
            comp: false
        }
        this.updateVotes = this.updateVotes.bind(this)
    }
    
    updateVotes(votes){
        this.setState({votes})
    }
    componentDidMount(){
        let apiUrl = '/api/quote/'
        let id = this.props.match.params.id
        apiUrl = id ? apiUrl + id : apiUrl
        this.setState({id})
        fetch(apiUrl)
            .then( data => data.json() )
            .then( data => {
                if ( !data || !Object.keys(data).length ){
                    //no quotes found
                    this.setState({quote: -1})
                    return 0;
                }
                console.log(data)
                this.setState(data)
                // console.log('showquote state--',this.state)
            })
    }
    render(){
        return( <>
            <Quote quote={this.state.quote||false}  id={this.state._id}
                by={this.state.by} votes={this.state.votes} updateVotes={this.updateVotes}
            />
            <BottomLink link={this.state._id} />
        </>)
    }
}
export default ShowQuote