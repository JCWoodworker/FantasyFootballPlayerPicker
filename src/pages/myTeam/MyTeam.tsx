import React from "react"
import MyTeamPlayerShow from "./MyTeamPlayerShow"

export const MyTeam = ({ myTeamList, setMyTeamList }) => {

	return (
		<div>
      <h2>My Team</h2>
			{myTeamList.map((player) => (
				<MyTeamPlayerShow
					key={player.YahooPlayerID}
					player={player}
					myTeamList={myTeamList}
					setMyTeamList={setMyTeamList}
				/>
			))}
		</div>
	)
}

export default MyTeam
