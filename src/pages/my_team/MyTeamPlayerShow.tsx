/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

export const MyTeamPlayerShow: React.FC = ({
	player,
	myTeamList,
	setMyTeamList,
	onButtonClick,
}) => {
	const showDetails = (
		<>
			<img className="player-photo" src={`${player.PhotoUrl}`}></img>
			<p>{player.LastName}</p>
			<button onClick={onButtonClick} id={player.PlayerID}>
				-
			</button>
		</>
	)
	return (
		<div key={player.PlayerID} className="teammate-show">
			{showDetails}
		</div>
	)
}

export default MyTeamPlayerShow
