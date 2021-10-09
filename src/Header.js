import React from 'react';


const Header = (props) => {

  const AuthorName = props.AuthorName;

  return (
    <header>
      <nav className="header">
        <h1 className="headingLogo">{AuthorName.toUpperCase()}'S WEBLOG</h1>
      </nav>
    </header>
  );

}

export default Header;