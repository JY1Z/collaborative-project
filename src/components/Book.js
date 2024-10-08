import React from 'react'

function Book(props) {
    const { title, author, year } = props.book
    return (
        <div>
            <span className="titlelabel">{title} </span>by {author} ({year})
        </div>
    )
}

export default Book
