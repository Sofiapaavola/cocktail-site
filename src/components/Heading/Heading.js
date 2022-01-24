import React from 'react';

export default function Heading({
    title
}) {
    return (
        <div className='text-start'>
           <h1 data-testid="title">{title}</h1> 
        </div>
    )
}
