import {NavLink} from 'react-router-dom'


function Navbar () {
    return (
        <div className='navbar'>
            <NavLink to="/">Logo</NavLink> <br />
            <NavLink to="/upperbody">Upper Body Workouts</NavLink><br />
            <NavLink to="/lowerbody">Lower Body Workouts</NavLink><br />
            <NavLink to="/core">Core Workouts</NavLink><br />
            <NavLink to="/back">Back Workouts</NavLink><br />
        </div>
        
        
    )
}

export default Navbar


// <NavLink
// to="/about"
// exact
// style={linkStyles}
// activeStyle={{
//   background: "darkblue",
// }}
// >
// About
// </NavLink>