import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AllPosts from '../AllPosts/AllPosts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <AllPosts post={post} ></AllPosts>)
            }
        </div>
    );
};

export default Home;