import React, { useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const dataLoader=useLoaderData()
    const {id,body,title}=dataLoader
    // console.log(dataLoader)
    const navigate=useNavigate()

    const [backCmd,setBackCmd]=useState(false)
    if(backCmd){
        return <Navigate to="/comment"></Navigate>
    }

    return (
        <div className='border p-6 bg-amber-300 '>
            <p>{id}</p>
            <h3 className="text-3xl">{title}</h3>
            <p>{body}</p>
            <button onClick={()=>navigate(-1)} className='btn bg-green-400'>back</button>
            <button onClick={()=>setBackCmd(true)} className='btn'>Back comment</button>
        </div>
    );
};

export default PostDetails;