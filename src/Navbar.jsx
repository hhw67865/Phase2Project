import {NavLink} from 'react-router-dom'


function Navbar ({setSearchQuery}) {


    function handleClick () {
      setSearchQuery("")
    }

    return (
        
          <ul className='nav'>
            <li onClick={handleClick}><span><NavLink to="/"><img className='imglogo mainlogo' src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514" alt="logo" /></NavLink></span></li>
            <li onClick={handleClick}><span><NavLink to="/upperbody"><img className='imglogo' src="https://cdn2.iconfinder.com/data/icons/exercise-and-gym-solid-the-body-building/512/Biceps-512.png" alt="upperbody" /></NavLink></span></li>
            <li onClick={handleClick}><span><NavLink to="/lowerbody"><img className='imglogo' src="https://cdn2.iconfinder.com/data/icons/exercise-and-gym-solid-the-body-building/512/Quads-512.png" alt="lowerbody" /></NavLink></span></li>
            <li onClick={handleClick}><span> <NavLink to="/core"><img className='imglogo' src="https://cdn2.iconfinder.com/data/icons/exercise-and-gym-solid-the-body-building/512/Abs-512.png" alt="core" /></NavLink></span></li>
            <li onClick={handleClick}><span> <NavLink to="/back"><img className='imglogo' src="https://cdn2.iconfinder.com/data/icons/exercise-and-gym-solid-the-body-building/512/Back-512.png" alt="back" /></NavLink></span></li>
          </ul>
        
        
    )
}

export default Navbar


// <nav>
//   <ul>
//     <li><span>Home</span></li>
//     <li><span>Products</span></li>
//     <li><span>Services</span></li>
//     <li><span>Contact</span></li>
//   </ul>
// </nav> 
