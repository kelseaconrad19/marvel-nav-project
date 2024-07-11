import React, { useState } from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import BrowseCharacters from "./BrowseCharacters";
import Home from "./Home";
import Comics from "./Comics";
import "./App.css";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

const App = () => {
	const [selectedCharacterId, setSelectedCharacterId] = useState(null);

	const handleSelectCharacter = (characterId) => {
		setSelectedCharacterId(characterId);
		useNavigate(`/CharacterDetails/${selectedCharacterId}`);
	};

	const handleCloseDetail = () => {
		setSelectedCharacterId(null);
	};

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/CharacterDetails/" element={<CharacterDetail />} />
				<Route path="*" element={<NotFound />} />

				<Route path="/Home/" element={<Home />} />
				<Route path="/Comics/" element={<Comics />} />
				<Route path="/BrowseCharacters/" element={<BrowseCharacters />} />
			</Routes>
		</div>
	);
};

export default App;
