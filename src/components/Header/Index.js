import React from 'react';
import './Index.sass';

// import AuthForm from './../AuthForm/Index';

function Header() {
	// const [modal, toggleModal] = useState(false);
	//
	// // function toggle() {
	// // 	toggleModal(modal ? false : true);
	// // }

	return (
		<div className="header">
			<h1>Sport timer</h1>
			{/*<button className="btn-login" onClick={toggle}>Login*/}
			{/*</button>*/}
			{/*{modal ? <AuthForm/> : null}*/}
		</div>
	);
}

export default Header;
