import React from "react"

const PlayerShow: React.FC = ({ player, myTeamList, setMyTeamList, filterDraftedPlayers }) => {

	const onButtonClick = (e) => {
		e.preventDefault()
		filterDraftedPlayers(e.target.id)
		setMyTeamList([...myTeamList, { ...player }])
	}

	const showDetails = (
		<>
			<img className="player-photo" src={`${player.PhotoUrl}`}></img>
			<div className="player-details">
				<h3>{player.ShortName}</h3>
				<p>
					<span id="team">{player.Team}</span> - {player.FantasyPosition}
				</p>
			</div>
			<button onClick={onButtonClick} id={player.PlayerID} value={player}>
				+
			</button>
		</>
	)

	return <div className="player-show">{showDetails}</div>
}

export default PlayerShow
