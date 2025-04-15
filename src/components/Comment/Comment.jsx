import React from 'react';
import { useLoaderData } from 'react-router';
import ShowComment from '../ShowComment/ShowComment';

const Comment = () => {
    const datas=useLoaderData()
    // console.log(datas)
    return (
        <div>
            <h1 className="text-4xl text-center font-semibold my-5">This Comment</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-14'>
            {
                datas.map(data=><ShowComment data={data}/>)
            }
            
            </div>
        </div>
    );
};

export default Comment;