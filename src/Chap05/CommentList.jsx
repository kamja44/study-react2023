import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "캄자",
        comment : "안녕하세요, 캄자입니다.",
    },
    {
        name : "코쿠마",
        comment : "안녕하세요, 코쿠마입니다.",
    },
    {
        name : "쿠쿠타스",
        comment : "안녕하세요, 쿠쿠타스입니다.",
    },
];

function CommentList(props){
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name={comment.name} comment={comment.comment} />
                    )
                })
            }
        </div>
    );
}

export default CommentList;