import {Link} from 'react-router-dom';
import LogoutButton from './LogoutButton'

export default function Navigations({user, setUser, setWebsite, setSavedWebsites}) {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/form'>Form</Link>
            <Link to = '/register'>Register</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/websites'>Saved</Link>
            <Link to = '/all'>All Websites</Link>
            <Link to = '/website/:id'>Website</Link>

           {user.user_id? <LogoutButton setWebsite={setWebsite} setSavedWebsite={setSavedWebsites} user={user} setUser={setUser}/> : null }
        </nav>
    );
};