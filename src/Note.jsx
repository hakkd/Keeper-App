import React from 'react';

const title = "This is the title";
const content = "This is the content";

function Note() {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note;