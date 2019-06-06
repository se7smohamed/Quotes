import React from 'react'
import '../style/SendQuote.css'
import  { Redirect } from 'react-router-dom'

const Alert = props=>(
    <div className={`alert alert-${props.type}`} style={{margin: '1em', width: '100%'}} role="alert">
        {props.msg}
    </div> 
)
class SendQuote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: '',
            by: '',
            errorMsg: false,
            succMsg: false,
            sentQuote: {}
        }
        this.formInput = this.formInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
        
    }
    formInput(event){
        this.setState({[event.target.id]: event.target.value})
    }
    isValid(){
        if(this.state.quote.length <= 10){
            console.log( this.state.quote.length )
            this.setState({errorMsg: 'Quotes have to be at least 10 characters.'})
            return false
        }else if(this.state.quote.length >= 200){
            console.log( this.state.quote.length )
            this.setState({errorMsg: 'Quotes cann\'t be longer than 200 characters.'})
            return false
        }else{
            this.setState({errorMsg: false})
            return true
        }
    }
    
    formSubmit(event){
        event.preventDefault()
        const form = event.target
        if( this.isValid() ){
            const body = {
                quote: this.state.quote,
                by: this.state.by,
            }
            fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            .then( data=>data.json() )
            .then( data => {
                if (data.succ) {
                    form.reset()
                    this.setState({succMsg: 'Quote submitted successfully!', sentQuote: data._doc})
                    // this.setState({})
                    console.log(this.state.sentQuote)
                }else{}
            })
        }
    }
    
    render(){
        return( 
            <div className="jumbotron mt-sm-5">
                <form className='container send-form' onSubmit={e=>this.formSubmit(e)}>
                    { this.state.errorMsg ? <Alert type='danger' msg={this.state.errorMsg} />: null }
                    { this.state.succMsg ? <>
                        <Alert type='success' msg={this.state.succMsg}/>
                        <Redirect to={`quote/${this.state.sentQuote._id}`}/> 
                    </> : null }
                    <textarea type='text' id='quote' placeholder='Quote' className="form-control" onInput={ this.formInput }/>
                    <input type='text' id='by' placeholder='By' className="form-control" onInput={ this.formInput }/>
                    <input type='submit' className="form-control btn btn-primary"/>
                </form>
            </div>
        )
    }
}
export default SendQuote