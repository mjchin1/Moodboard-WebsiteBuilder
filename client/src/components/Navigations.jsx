import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/form'>Form</Link>
            <Link to = '/register'>Register</Link>
            <Link to = '/websites'>Saved</Link>
            <Link to = '/all'>All Websites</Link>
            <Link to = '/website'>Website</Link>
        </nav>
    );
};