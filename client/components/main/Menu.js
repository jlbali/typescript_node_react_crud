import React from 'react';
import {Nav, NavItem, Navbar, Badge, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

import history from '../../history'; 

export default class Menu extends React.Component{

  //static contextTypes = {
  //  router: React.PropTypes.object // Necesario para que este el this.context.router.
  //};

  	logout(){
		cookie.remove("token");
		cookie.remove("user");
		history.push("/login");
	}


	render(){
		//var username = cookie.load("user").username;
		//var admin = cookie.load("user").role.isAdmin;
		var navConfig = "";
        /*
        if (admin){
			navConfig = (
				<NavDropdown eventKey={2} title="Panel de Control" id="basic-nav-dropdown">
					<NavItem eventKey={2.1}><Link to="/main/users">Usuarios</Link></NavItem>
					<NavItem eventKey={2.2}><Link to="/main/sites">Sitios</Link></NavItem>
					<NavItem eventKey={2.3}><Link to="/main/mapviews">Vistas</Link></NavItem>
					<NavItem eventKey={2.4}><Link to="/main/profiles">Perfiles</Link></NavItem>
				</NavDropdown>		
			);
        }
        */
       var username = "Ficticio";
		return (
			<Navbar inverse fluid>
				<Navbar.Header>
					<Navbar.Brand>
						ToDo
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				<Nav>
					{navConfig}
					<NavDropdown eventKey={3} title="Extras" id="basic-nav-dropdown">
						<NavItem eventKey={3.1}><Link to="/main/home">Home</Link></NavItem>
						<NavItem eventKey={3.2}><Link to="/main/todos">ToDos</Link></NavItem>
					</NavDropdown>		
				</Nav>

				<Nav pullRight>
					<NavItem eventKey={5}>{username}</NavItem>     
					<NavItem eventKey={6}><button onClick={this.logout.bind(this)}>Salir</button></NavItem>
				</Nav>
			</Navbar>
		);
	}

}

