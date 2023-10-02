import React from "react"
import MyTeamPlayerShow from "./MyTeamPlayerShow"

export const MyTeam: React.FC = ({
	myTeamList,
	setMyTeamList,
}) => {
	const onButtonClick = (e) => {
		e.preventDefault()
		setMyTeamList(myTeamList.filter((player) => player.PlayerID != e.target.id))
	}

	return (
		<>
			<h2>My Team</h2>
			<div className="teammates-list">
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
		</>
	)
}

export default MyTeam
