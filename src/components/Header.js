import './Header.css';

function Header() {
  return (
    <div className="header">
     <a href="/" className="logo">./last-eartquake</a>
		<form className="search">
			<input type="text" placeholder="Search" id="search-input"/>
		</form>
		<div className="user-box">
			<a href="/" className="user-btn">Login</a>
		</div>
    </div>
    

  );
}

export default Header;
