import React from "react"

const PlayerShow: React.FC = ({ player, myTeamList, setMyTeamList }) => {
	const onPlusButtonClick = (e) => {
		e.preventDefault()
		if (
			myTeamList.filter((player) => player.PlayerID == e.target.id).length == 0
		) {
			setMyTeamList([...myTeamList, { ...player }])
		} else {
			alert(`${player.FullName} is already on your team`)
		}
	}

	const onMinusButtonClick = (e) => {
		e.preventDefault()
		setMyTeamList(myTeamList.filter((player) => player.PlayerID != e.target.id))
	}

	let button = null
	if (!player.selectedForMyTeam) {
		button = (
			<button onClick={onPlusButtonClick} id={player.PlayerID} value={player}>
				+
			</button>
		)
	} else if (player.selectedForMyTeam) {
		button = (
			<button onClick={onMinusButtonClick} id={player.PlayerID} value={player}>
				-
			</button>
		)
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
			{button}
		</>
	)

	return <div className="player-show">{showDetails}</div>
}

export default PlayerShow
