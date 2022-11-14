import {NavLink} from 'react-router-dom'


function Navbar () {
    return (
        <div className='navbar'>
            <NavLink to="/">Logo</NavLink> <br />
            <NavLink to="/upperbody">Upper Body</NavLink><br />
            <NavLink to="/lowerbody">Lower Body</NavLink><br />
            <NavLink to="/core">Core</NavLink><br />
            <NavLink to="/back">Back</NavLink><br />
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