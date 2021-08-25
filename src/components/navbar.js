import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div>
            <ul className="nav-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/testList">Test List</Link></li>
                <li><Link to="/EntryList">Entry List</Link></li>
                <li><Link to="/combinedList">combined List</Link></li>
                <li><Link to="/UseMemoComp">useMemoComp</Link></li>
                <li><Link to="/user">Users</Link></li>
                <li><Link to="/throttle">Throttle</Link></li>
                <li><Link to="/agGrid">AG-Grid</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;