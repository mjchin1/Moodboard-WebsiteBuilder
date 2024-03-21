import {Link} from 'react-router-dom';
import LogoutButton from './LogoutButton'

export default function Navigations({user, setUser}) {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/form'>Form</Link>
            <Link to = '/register'>Register</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/websites'>Saved</Link>
            <Link to = '/all'>All Websites</Link>
            <Link to = '/website'>Website</Link>
            <LogoutButton user={user} setUser={setUser}/>
        </nav>
    );
};