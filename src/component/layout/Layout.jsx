
import Navbar from '../navbar/Navbar';
import {Outlet} from 'react-router-dom'
import Footer from '../footer/footer';
import MyState from '../../context/data/myState'; // contextr API
import {useNavigate} from 'react-router-dom'


function Layout() {
  return (
    <div>
 
      <MyState>       
      <Navbar/>
      <div className='content min-h-screen'>
        <Outlet />
        </div>
      <Footer/>
      </MyState>
     
      
    </div>
  )
}

export default Layout

export const ProtectedRouteForAdmin = ({ children }) => {
    const navigate=useNavigate()
    const admin = JSON.parse(localStorage.getItem('admin'))
    if (admin?.user?.email === "testuser@gmail.com") {
      return children
    }
    else {
      return navigate('/adminlogin')
    }
  }