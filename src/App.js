import React from 'react';
import './App.css';
import ButtonAppBar from '../src/components/nav/NavBar'
import ApplicationView from "./ApplicationView"

function App() {
	return (
    <>
      <ButtonAppBar />
      <ApplicationView />
    </>
	);
}

export default App;
