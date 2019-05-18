import React from 'react'

class SendQuote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: '',
            by: '',
        }
        this.formInput = this.formInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formInput(event){
        this.setState({[event.target.id]: event.target.value})
    }
    
    formSubmit(event){
        event.preventDefault()
        const body = {
            quote: this.state.quote,
            by: this.state.by,
        }
        console.log(body)
        fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        // .then(data=>data.json())
        // .then()
    }
    
    render(){
        return( 
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type='text' id='quote' placeholder='Quote' onInput={ this.formInput }/>
                    <input type='text' id='by' placeholder='By' onInput={ this.formInput }/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default SendQuote