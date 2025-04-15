import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

const ShowComment = ({data}) => {
    // console.log(data)
    const [info,setInfo]=useState(false)
    const {name,id,body}=data

const navigate=useNavigate()
const hendelNavigate=()=>{
    navigate(`/comment/${id}`)
}

const [back,setBack]=useState(false)
if(back){
    return <Navigate to="/"></Navigate>
}

    return (
        <div className='border p-5 bg-green-300'>
            <p>ID NO :{id}</p>
            <h1>{name}</h1>
            <button onClick={()=>setInfo(!info)} className='btn'>learn more</button>
            {
                info && <p>{body}</p>
            }
            <button onClick={hendelNavigate} className='btn bg-orange-400'>Show details</button>
            <button onClick={()=>setBack(true)} className='btn '>Back to home</button>
        </div>
    );
};

export default ShowComment;