import React from "react"

export const MyTeamPlayerShow = ({ player, myTeamList, setMyTeamList }) => {
	const onButtonClick = (e) => {
		e.preventDefault()
    alert('Deleting a player does not work yet')
	}

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
