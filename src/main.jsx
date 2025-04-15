import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Comment from './components/Comment/Comment.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {index:true, Component:Home},
    {path:"/comment",
      loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
      Component:Comment},
    {path:"/comment/:userId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.userId}`),
      Component:CommentDetails}
   ]
  },
  {
    path:"*",
    element:<h1 className='text-5xl text-red-600 font-bold text-center '> NOT FOUND</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
