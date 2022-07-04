/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

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
	}

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#b9c1c8';
			showAlert("Dark mode Enabled", "success");
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode Enabled", "success");
		}
	};
	return (
		<>
			<Navbar
				title="Spark"
				aboutText="About"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<Alert alert={alert}/>
			<div className="container">
				<TextForm showAlert={showAlert} heading="Enter Text To EDIT :" mode={mode} />
			</div>
			{/* <About/> */}
		</>
	);
}

export default App;
