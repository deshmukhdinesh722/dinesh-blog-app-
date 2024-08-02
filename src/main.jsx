import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'



import {Toaster} from 'react-hot-toast'
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from './pages/noPage/NoPage'
import BlogInfo from './pages/blogInfo/BlogInfo.jsx'
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from './pages/admin/dashboard/DashBoard'

import Home from "./pages/home/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout, { ProtectedRouteForAdmin } from './component/layout/Layout.jsx'
import CreateBlog from './pages/admin/createBlog/CreateBlog.jsx'
import UpdateBlog from './pages/updateBlog/UpdateBlog.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
   
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/bloginfo/:id" element={<BlogInfo />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
   
          <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/updateblog/:id" element={<UpdateBlog />} />

       
       
         
        
        <Route path="/*" element={<NoPage />} />
      </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' */}
    <ThemeProvider>
      <RouterProvider router={router}/>
    
    </ThemeProvider>
  </React.StrictMode>,
)
