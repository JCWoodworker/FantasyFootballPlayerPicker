/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, lazy, Suspense } from "react"
import { activePlayers } from "../../data/PlayerData"
import ActivePlayer from "../../data/ActivePlayer"
import { sortPlayersByAverageDraftPosition } from "../../utilities/sortPlayersByAverageDraftPosition"

import MyTeam from "../../pages/myTeam/MyTeam"

const draftedPlayerList: ActivePlayer[] =
	sortPlayersByAverageDraftPosition(activePlayers)

export const PlayersIndex: React.FC = () => {
	const [draftedPlayers, setDraftedPlayers] = useState(draftedPlayerList)
	const [myTeamList, setMyTeamList] = useState([])

	const LoadPlayer = lazy(() => import("./PlayerShow"))

	const filterDraftedPlayers = (id) => {
		const newPlayerList = draftedPlayers.filter(
			(player) => player.PlayerID != id
		)
		setDraftedPlayers(newPlayerList)
	}
	const addDeletedTeammatesBackToDraftedPlayers = (deletedTeammateId) => {
		const playerToAddBack = draftedPlayerList.find(
			(p) => p.PlayerID == deletedTeammateId
		)
		const newDraftedPlayers = sortPlayersByAverageDraftPosition([
			...draftedPlayers,
			playerToAddBack,
		])
		setDraftedPlayers(newDraftedPlayers)
	}

	const onSearchChange = (e) => {
		e.preventDefault()
		const filteredDraftedPlayers = draftedPlayerList.filter((player) =>
			player.FullName.toLowerCase().includes(e.target.value)
		)
		setDraftedPlayers(filteredDraftedPlayers)
	}


	return (
		<div>
			<div>
				<MyTeam
					myTeamList={myTeamList}
					setMyTeamList={setMyTeamList}
					addDeletedTeammatesBackToDraftedPlayers={
						addDeletedTeammatesBackToDraftedPlayers
					}
				/>
			</div>
			<div>
				<h2>Available Players</h2>
				<input type="text" placeholder="Search" onChange={onSearchChange} />
				<Suspense fallback={<div>Loading Players...</div>}>
					<div className="players-list">
						{draftedPlayers.map((player) => (
							<LoadPlayer
								key={player.PlayerID}
								player={player}
								myTeamList={myTeamList}
								setMyTeamList={setMyTeamList}
								filterDraftedPlayers={filterDraftedPlayers}
							/>
						))}
					</div>
				</Suspense>
			</div>
		</div>
	)
}
