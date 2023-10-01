import React from "react"
import MyTeamPlayerShow from "./MyTeamPlayerShow"

export const MyTeam: React.FC = ({ myTeamList, setMyTeamList, addDeletedTeammatesBackToDraftedPlayers }) => {
	const onButtonClick = (e) => {
		e.preventDefault()
		addDeletedTeammatesBackToDraftedPlayers(e.target.id)
		setMyTeamList(myTeamList.filter((player) => player.PlayerID != e.target.id))
	}

	return (
		<div>
			<h2>My Team</h2>
			{myTeamList.map((player) => (
				<MyTeamPlayerShow
					key={player.YahooPlayerID}
					player={player}
					myTeamList={myTeamList}
					setMyTeamList={setMyTeamList}
					onButtonClick={onButtonClick}
				/>
			))}
		</div>
	)
}

export default MyTeam
