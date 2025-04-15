import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CommentDetails = () => {
    const items=useLoaderData()
    const {id,name,email,body}=items
    console.log(items)
    const navigate=useNavigate()
    return (
        <div className='border py-6 px-20 bg-purple-500 text-white mt-9'>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
            <button onClick={()=>navigate(-1)} className='btn'>back</button>
        </div>
    );
};

export default CommentDetails;