/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#b9c1c8';
			showAlert('Dark mode Enabled', 'success');
			document.title = 'TextUtils - Dark Mode';
			// setInterval(() => {
			// 	document.title = "TextUtils - Install Now";
			// }, 2000);
			// setInterval(() => {
			// 	document.title = "TextUtils - Alert";
			// }, 1500);
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode Enabled', 'success');
			document.title = 'TextUtils - Light Mode';
		}
	};
	return (
		<>
			<Router>
				<Navbar
					title="Spark"
					aboutText="About"
					mode={mode}
					toggleMode={toggleMode}
				/>
				<Alert alert={alert} />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<TextForm
									showAlert={showAlert}
									heading="Enter Text To EDIT :"
									mode={mode}
								/>
							}
						/>
						<Route exact path="/about" element={<About />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
