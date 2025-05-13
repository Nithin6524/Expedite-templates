import { Link } from 'react-router-dom';
import '../scss/components/Header.scss';

const Header = () => {


  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Expedite</h1>
              <span className="tagline">Fast. Modern. Scalable.</span>
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/" >Home</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;