import React, { useState } from "react"
import { getDetails } from "../../utilities/getDetails"

const PlayerShow = ({ player }) => {
	const [detailedPlayerData, setDetailedPlayerData] = useState(null)
	const [clickedButton, setClickedButton] = useState(false)

	const onButtonClick = async () => {
		setClickedButton(() => true)
		const playerData = await getDetails("player", player.PlayerID)
		setDetailedPlayerData(playerData)
	}

	const showDetails = (
		<>
			<img className="player-photo" src={`${player.PhotoUrl}`}></img>
			<h3>
				{player.FirstName} {player.LastName}
			</h3>
			<p>{player.Team}</p>
			<p>{player.Position}</p>
		</>
	)

	let fetchedPlayer = null
	if (clickedButton) {
		fetchedPlayer = (
			<>
				<p>Loading ... </p>
			</>
		)
	}
	if (detailedPlayerData) {
		() => setClickedButton(false)
		fetchedPlayer = (
			<>
				{Object.entries(detailedPlayerData)
					.filter(
						(entry) =>
							entry[0].startsWith("Upcoming") && entry[0].endsWith("Salary")
					)
					.map((entry) => (
						<p key={entry[0]}>
							{entry[0]}: {entry[1] || "N/A"}
						</p>
					))}
			</>
		)
	}

	return (
		<div className="player-show">
			{showDetails}
			<div>
				<button onClick={onButtonClick}>Get Player Details</button>
			</div>
			{fetchedPlayer}
		</div>
	)
}

export default PlayerShow
