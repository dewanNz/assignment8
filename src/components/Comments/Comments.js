import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AllComments from '../AllComments/AllComments';

const Comments = () => {
    const {id} = useParams();
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <h1> </h1>
            {
            comment.map(allComment => <AllComments allComment={allComment}></AllComments>)
            }
        </div>
    );
};

export default Comments;