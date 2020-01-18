import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {/* if we have a prev page we will go to previous page otw we will display an alert/smthng 
            Note that we need to add a check for a next page url or prev page url in App.js where we set
            goto prev/next page in our Pagination prop*/}
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
