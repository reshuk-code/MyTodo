import { Link } from 'react-router-dom';

export default function Nav() {
    return ( 
        <div className="nav nav-top">
            <div className="logo">
            <Link style={{ textDecoration: 'none' , color: '#000'}} to="/">MyTodo</Link>
            </div>
            <ul className="nav-i">
                <li><Link style={{ textDecoration: 'none' , color: '#000'}} to="/">Home &#9750;</Link></li>
                <li><Link style={{ textDecoration: 'none' , color: '#000' }} to="/create-todo">Create &#x2750;</Link></li>
                <li><Link style={{ textDecoration: 'none', color: '#000' }} to="/set-schedule">Set Schedule &#9778;</Link></li> {/* Corrected the typo */}
            </ul>
        </div>
    );
}
