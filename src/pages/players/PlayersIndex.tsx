import React, { useState, lazy, Suspense, useEffect } from "react"
import { activePlayers } from "../../data/PlayerData"

import PlayerSearchBar from "./PlayerSearchBar"

export const PlayersIndex: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [playerList, setPlayerList] = useState(() => activePlayers)
	const [filterPosition, setFilterPosition] = useState<string>("")

	const LoadPlayer = lazy(() => import("./PlayerShow"))

	const showFilteredPlayers = () => {
		if (filterPosition === "") {
			return setPlayerList(() => activePlayers)
		}
		const filteredPlayers = activePlayers.filter(
			(player) => player.Position === filterPosition
		)
		setPlayerList(filteredPlayers)
	}

	useEffect(() => {
		showFilteredPlayers()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterPosition])

	return (
		<div>
			<h2>Players</h2>
			<PlayerSearchBar
				filterPosition={filterPosition}
				setFilterPosition={setFilterPosition}
			/>
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
