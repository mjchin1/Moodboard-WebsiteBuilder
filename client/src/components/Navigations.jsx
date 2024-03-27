import {Link} from 'react-router-dom';
import LogoutButton from './LogoutButton'

export default function Navigations({user, setUser, setWebsite, setSavedWebsites}) {
    return (
        <nav>
            {/* <Link to = '/'>Home</Link> */}
            <Link to = '/form'>Build A Website</Link>
            {!user.user_id? <Link to = '/register'>Register</Link> : null}
            {!user.user_id? <Link to = '/login'>Login</Link> : null}
            <Link to = '/websites'>My Websites</Link>
            {/* <Link to = '/all'>All Websites</Link> */}
            {/* <Link to = '/website/:id'>Website</Link> */}
            {/* <Link to = '/websiteCreated'>Website Created</Link> */}
            {/* <Link to = '/websiteSaved'>Website Saved</Link> */}

          
        </nav>
    );
};