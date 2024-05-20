import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyPrivateRoute from './components/OnlyPrivateRoute'
import CreatePost from './pages/CreatePost'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route element={<PrivateRoute />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route element={<OnlyPrivateRoute />} >
          <Route path='/create-post' element={<CreatePost />} />
        </Route>
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}
