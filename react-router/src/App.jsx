import { useState } from 'react'
import './App.css'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import RootLayout from './assets/Layout/RootLayout'
import HelpLayout from './assets/Layout/HelpLayout'
import FAQ from './assets/pages/FAQ'
import Contact, {ContactUser} from './assets/pages/Contact'
import PageNotFound from './assets/pages/PageNotFound'
import TestLayout from './assets/Layout/TestLayout'
import Test, {PeopleLoader} from './assets/pages/Test'
import PeopleDetails, { PeopleDeatailsLoader } from './assets/pages/PeopleDetails'
import PeopleError from './assets/pages/PeopleError'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout/>}>

      <Route index element={<Home />}></Route>
      <Route path='about' element={<About/>}></Route>

      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<FAQ/>}></Route>
        <Route path='contact' element={<Contact/>}  action={ContactUser}></Route>
      </Route>

      <Route path='people' element={<TestLayout/>}>
        <Route index='people' element={<Test/>} loader={PeopleLoader}></Route>
        <Route path=':id' element={<PeopleDetails/>} loader={PeopleDeatailsLoader} errorElement={<PeopleError/>}/>
      </Route>

      <Route path='*' element={<PageNotFound/>}></Route>

    </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
