import {Link} from 'react-router-dom';
import LogoutButton from './LogoutButton'

export default function Navigations({user, setUser, setWebsite, setSavedWebsites}) {
    return (
        <nav>
            <Link to = '/'>Build A Website</Link>
            {!user.user_id? <Link to = '/register'>Register</Link> : null}
            {!user.user_id? <Link to = '/login'>Login</Link> : null}
            {user.user_id? <Link to = '/websites'>My Saved Websites</Link>: null}
        </nav>
    );
};