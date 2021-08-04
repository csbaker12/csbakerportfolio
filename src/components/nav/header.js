import { Link, withRouter } from 'react-router-dom';
import SideDrawer from './sideDrawer';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
  return (
    <>
      <nav className='navbar fixed-top'>
        <Link to='/' className='navbar-brand d-flex align-items-center'>
          <HomeIcon style={{ fontSize: '40px', color: 'white' }} />
        </Link>
        <SideDrawer />
      </nav>
    </>
  );
};

export default withRouter(Header);
