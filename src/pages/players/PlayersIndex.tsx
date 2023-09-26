import React, { useState } from "react"
import { activePlayers } from "../../data/PlayerData"

import PlayerSearchBar from "./PlayerSearchBar"
import PlayerShow from "./PlayerShow"

export const PlayersIndex: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [playerList, setPlayerList] = useState(() => [
		activePlayers[0],
		activePlayers[1],
		activePlayers[2],
	])

	return (
		<div>
			<h2>Players</h2>
			<PlayerSearchBar />
			<div className="players-list">
			{playerList.map((player) => (
				<PlayerShow key={player.PlayerID} player={player} />
			))}
			</div>
		</div>
	)
}
