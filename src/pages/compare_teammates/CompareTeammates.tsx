import React, { useState } from "react"

export const CompareTeammates: React.FC = () => {
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)
	return (
		<>
			<h2>Compare Teammates</h2>
			<div className="teammate-comparison-selection-container">
				<div>
					<p>Player 1</p>
				</div>
				<div>
					<p>Player 2</p>
				</div>
			</div>
		</>
	)
}
