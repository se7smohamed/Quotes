import React from 'react'

const Quote = props => (
    <div>
        <figure className="quote">
                <blockquote>
                    {props.quote}
                </blockquote>
            <figcaption className="by">{props.by?'—':''} {props.by}</figcaption>
        </figure>
    </div>
)
export default Quote