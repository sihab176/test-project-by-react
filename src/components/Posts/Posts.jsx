import React, { use } from 'react';
import Post from '../Post/Post';


const Posts = ({postFetech}) => {
    const postData=use(postFetech)
    // console.log(postData)


    return (
        <div>
            <h1 className="text-5xl text-center mb-10"> POST </h1>
            <div className='grid grid-cols-4 gap-16'>
            {
                postData.map(data=><Post key={data.id} data={data}/>)
            }
            </div>
        </div>
    );
};

export default Posts;