import React, { useState, lazy, Suspense } from "react"
import { activePlayers } from "../../data/PlayerData"


export const PlayersIndex: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [playerList, setPlayerList] = useState(() => activePlayers)

	const LoadPlayer = lazy(() => import("./PlayerShow"))

	return (
		<div>
			<h2>Players</h2>
			<div className="players-list">
				<Suspense fallback={<div>Loading Players...</div>}>
					{playerList.map((player) => (
						<LoadPlayer key={player.PlayerID} player={player} />
					))}
				</Suspense>
			</div>
		</div>
	)
}
