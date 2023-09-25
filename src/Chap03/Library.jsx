import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 파이썬" nameOfPage={300} />
            <Book name="처음 만난 AWS" nameOfPage={400} />
            <Book name="처음 만난 리액트" nameOfPage={500} />
        </div>
    )
}

export default Library;