/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

export const MyTeamPlayerShow: React.FC = ({
	player,
	myTeamList,
	setMyTeamList,
	onButtonClick,
}) => {
	return (
		<div key={player.PlayerID} className="my-team-player">
			<div>{player.FullName}</div>
			<button onClick={onButtonClick} id={player.PlayerID}>
				Delete Player
			</button>
		</div>
	)
}

export default MyTeamPlayerShow
