import {NavLink} from 'react-router-dom'


function Navbar () {
    return (
        
          <ul className='nav'>
            <li><span><NavLink to="/"><img className='imglogo' src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514" alt="logo" /></NavLink></span></li>
            <li><span><NavLink to="/upperbody">Upper Body Workouts</NavLink></span></li>
            <li><span><NavLink to="/lowerbody">Lower Body Workouts</NavLink></span></li>
            <li><span> <NavLink to="/core">Core Workouts</NavLink></span></li>
            <li><span> <NavLink to="/back">Back Workouts</NavLink></span></li>
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
