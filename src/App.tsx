import React, { useState } from "react"
import "./App.css"

import { PlayersIndex } from "./pages/players/PlayersIndex"
import { CompareTeammates } from "./pages/compare_teammates/CompareTeammates"

function App() {
	const [showAddPlayer, setShowAddPlayer] = useState<boolean>(true)
	const [showCompareTeammates, setShowCompareTeammates] = useState<boolean>(false)

	const onOptionClick = (e) => {
		e.preventDefault()
		setShowAddPlayer(!showAddPlayer)
		setShowCompareTeammates(!showCompareTeammates)
	}

	let showPlayerSelectionOrTeammates = null

	showAddPlayer
		? (showPlayerSelectionOrTeammates = <PlayersIndex />)
		: (showPlayerSelectionOrTeammates = <CompareTeammates />)

	return (
		<>
			<h1>Fantasy Picker</h1>
			<button onClick={onOptionClick} disabled={!showCompareTeammates}>Add or Remove My Teammates</button>
			<button onClick={onOptionClick} disabled={!showAddPlayer}>Compare Teammates</button>
			{showPlayerSelectionOrTeammates}
		</>
	)
}

export default App
