import React from 'react'
import {Link} from 'react-router-dom'
import Vote from './Vote'

const Empty = () => (
    <> Whoops, Couldn't find any usefeul quotes. why don't you submit yours <Link to='/new'>here</Link>. </>
)

const Quote = props => {
    console.log('Quote votes -->', props.votes)
    return(
    <div>
        <figure className="quote">
                <blockquote>
                    { (props.quote === -1) ? <Empty /> : props.quote }
                    <Vote id={props.id} votes={props.votes} updateVotes={props.updateVotes}/>
                </blockquote>
            <figcaption className="by">{props.by?'—':''} {props.by}</figcaption>
        </figure>
    </div>
)}
export default Quote