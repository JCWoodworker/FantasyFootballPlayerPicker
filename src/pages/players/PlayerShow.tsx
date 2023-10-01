import React from "react"

const PlayerShow = ({ player }) => {
	// const onButtonClick = async () => {
	// 	setClickedButton(() => true)
	// 	const playerData = await getDetails("player", player.PlayerID)
	// 	setDetailedPlayerData(playerData)
	// }

	const showDetails = (
		<>
			<img className="player-photo" src={`${player.PhotoUrl}`}></img>
			<div className="player-details">
				<h3>{player.ShortName}</h3>
				<p>
					<span id="team">{player.Team}</span> - {player.FantasyPosition}
				</p>
			</div>
			{/* <button>
				+
			</button> */}
		</>
	)

	return <div className="player-show">{showDetails}</div>
}

export default PlayerShow
