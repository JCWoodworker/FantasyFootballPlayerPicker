import React, { useState } from "react"
import Select from "react-select"
export const CompareTeammates: React.FC = () => {
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)
	return (
		<>
			<h2>Compare Teammates</h2>
			<div className="teammate-comparison-selection-container">
				<div>
        <Select options={myTeam.map((player) => ({
        value: player.PlayerID,
        label: player.FullName
      }))} />
				</div>
				<div>
        <Select options={myTeam.map((player) => ({
        value: player.PlayerID,
        label: player.FullName
      }))} />
				</div>
			</div>
		</>
	)
}
