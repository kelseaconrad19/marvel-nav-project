import React, { useState } from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { useNavigate } from "react-router-dom";

const BrowseCharacters = () => {
	const [selectedCharacterId, setSelectedCharacterId] = useState(null);

	const handleSelectCharacter = (characterId) => {
		setSelectedCharacterId(characterId);
		useNavigate(`/CharacterDetails/${selectedCharacterId}`);
	};

	const handleCloseDetail = () => {
		setSelectedCharacterId(null);
	};
	return (
		<div>
			<CharacterList onSelectCharacter={handleSelectCharacter} />
			{selectedCharacterId && (
				<CharacterDetail
					characterId={selectedCharacterId}
					onClose={handleCloseDetail}
				/>
			)}
		</div>
	);
};

export default BrowseCharacters;
