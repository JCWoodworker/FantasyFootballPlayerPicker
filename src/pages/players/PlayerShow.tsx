import React from "react"

const PlayerShow: React.FC = ({
	player,
	myTeamList,
	setMyTeamList,
}) => {
	const onButtonClick = (e) => {
		e.preventDefault()
		if (myTeamList.filter((player) => player.PlayerID == e.target.id).length == 0) {
			setMyTeamList([...myTeamList, { ...player }])
		}
		else {
			alert("Player already in your team")
		}
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
