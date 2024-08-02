

import Navbar from "./component/navbar/Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "./component/footer/footer";
import MyState from "./context/data/myState"; // contextr API


function App() {
  return (
    <div>
 
      <MyState>
          
           <Navbar/>
      <Outlet/>
      <Footer/>
     
  
      </MyState>
     
      
    </div>
  )
}

export default App