

import React, {Component} from 'react';
import Menu from './Menu';
import Footer from './Footer';

class MainPage extends Component{

	render(){
		return(
			<div>
				<Menu />
				{this.props.children}
				<Footer />
			</div>
		);
	}


}

export default MainPage;

