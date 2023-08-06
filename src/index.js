import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Element from './components/Element';

const url = "https://jsonplaceholder.typicode.com/photos"

function R30App () {

    const [posts, setPosts] = useState([])

    useEffect(() =>  {
        axios.get(url)
        .then((response) => setPosts(response.data))
    },[posts])

    // console.log(posts) 

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            width:"80%",
            minHeight:"100vh",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#ddd",
        }}>

            <span style={{
                fontSize:"2rem"
            }}>
                Image Grid Scroll with Lazy Load    
            </span>

            {posts.map((post) => (
                <Element key={post.id} img={post.url} title={post.title} />
            ))}
            
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R30App />)