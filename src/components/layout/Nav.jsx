import { Link , Route, Routes} from 'react-router-dom'
import Status from './404';
import About from './About';
import Details from './Details';
import Home from './Home';
import Ffice from '../movies/Office';
import Walk from '../movies/Walk';
import Night from '../movies/Night';
import John from '../movies/John';
import Name from '../movies/Name';
import Friends from '../movies/Friends';
import War from '../movies/War';
import Infinite from '../movies/Infinite';
const Nav = () => {
    return (
<div className="">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/details' element={<Details />} />
    <Route path='/about' element={<About />} />
    <Route path="/office" element={<Ffice />} />
    <Route path='/Walking' element={<Walk />} />
    <Route path='/night' element={<Night />} />
    <Route path='/wick' element={<John />} />
    <Route path='/name' element={<Name />} />
    <Route path='/friends' element={<Friends />} />
    <Route path='/end' element={<War />} />
    <Route path='/war' element={<Infinite />} />
    <Route path='*' element={<Status />} />
    </Routes>
    
            <nav>
                <ul>

                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/details'>
                            Details
                        </Link>
                    </li>
                </ul>
            </nav>
</div>
    );
}

export default Nav;
