import React from 'react';
import { useNavigate } from 'react-router';

const Post = ({data}) => {
    // console.log(data)
    const {id,title,body}=data
    const navigate=useNavigate()
const hendelNavigete=()=>{
    navigate(`/posts/${id}`)
}

    return (
        <div className='border p-7 bg-cyan-400'>
            <p>{id}</p>
            <h1 className='text-orange-500'>Title: {title}</h1>
            <p>Detials :{body}</p>
            <button onClick={hendelNavigete} className='btn bg-pink-700 text-white font-semibold'>FUll details</button>
        </div>
    );
};

export default Post;