import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <Navbar bsStyle="inverse" className="navbar">
            <Navbar.Header className="Logo">
              <Navbar.Brand >
                <a href='/'>Bloc Jams React</a>
              </Navbar.Brand>
            </Navbar.Header>
          <Nav>
            <NavItem className="Menu" eventKey={1}  href='/'>
              Home  
            </NavItem>
            <NavItem className="Menu" eventKey={2} href='/library'>
              Library
            </NavItem>
          </Nav>
          </Navbar>;

          {/* <nav> 
            <Link className="Logo" to='/'><h1>Bloc Jams</h1></Link>
            <Link className="Menu" to='/library'>Library</Link>
            <Link className="Menu" to='/'>Home</Link>
          </nav> */}

        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
