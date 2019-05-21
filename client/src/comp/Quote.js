import React from 'react'
import {Link} from 'react-router-dom'


const Empty = () => (
    <> Whoops, Couldn't find any usefeul quotes. why don't you submit yours <Link to='/new'>here</Link>. </>
)

const Quote = props => {
    return(
    <div>
        <figure className="quote">
                <blockquote>
                    { (props.quote === -1) ? <Empty /> : props.quote }
                </blockquote>
            <figcaption className="by">{props.by?'—':''} {props.by}</figcaption>
        </figure>
    </div>
)}
export default Quote