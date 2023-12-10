import './App.css'
import Posts from './features/posts/posts'
import AddPosts from './features/posts/AddPosts'
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import SinglePost from './features/posts/SinglePost'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Posts />} />
      <Route path='posts'>
        <Route index element={<AddPosts />} />
        <Route path=":postId" element={<SinglePost />} />
        <Rout path="edit/:postId" element={<EditPost />}/>
      </Route>
    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
