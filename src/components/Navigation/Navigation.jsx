import './Navigation.scss';
import { NavLink } from 'react-router-dom';


export default function Navigation() {

    return (

        <nav className='nav'>
            <NavLink to='/'>
                <p className='nav__title'>The Local Paint Company</p>
            </NavLink>
        </nav>

    );
}