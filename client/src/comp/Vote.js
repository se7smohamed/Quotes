import React from 'react'
import '../style/Vote.css'

class Vote extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.vote = this.vote.bind(this)
     }
    vote(e){
        let type = e.target.id
        type = type === 'upvote' ? 1 : -1
        const apiUrl = '/api/quote/vote'
        let id = this.props.id
        let body = { type, id }
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        })
            .then( data => data.json() )
            .then( data => {
                console.log(data)
                // if ( !data || !Object.keys(data).length ){
                    this.props.updateVotes( data.votes )
                // }
            })
    }
    render(){
        console.log('vote state--', this.state)
        return( <>
            <div className='vote-div'>
            <i onClick={this.vote} title='How much did you like this quote? You can vote as many times as you want' id='upvote' className='vote-el vote-btn fas fa-chevron-up'></i>
            <span className='vote-el vote-count'>{this.props.votes}</span>
            <i onClick={this.vote} title='How much did you like this quote? You can vote as many times as you want' id='downvote' className='vote-el vote-btn fas fa-chevron-down'></i>
            </div>
        </>)
    }
}
export default Vote