import React, { useState, useEffect } from "react"
import { activePlayers } from "../../data/PlayerData"
import ActivePlayer from "../../data/ActivePlayer"
import { sortPlayersByAverageDraftPosition } from "../../utilities/sortPlayersByAverageDraftPosition"
import {removeElementsById} from "../../utilities/removeElementsById"

import MyTeam from "../../pages/myTeam/MyTeam"
import PlayerShow from "../../pages/players/PlayerShow"

const draftedPlayerList: ActivePlayer[] =
	sortPlayersByAverageDraftPosition(activePlayers)

export const PlayersIndex: React.FC = () => {
	const [draftedPlayers, setDraftedPlayers] = useState(draftedPlayerList)
	const [myTeamList, setMyTeamList] = useState(
		JSON.parse(window.localStorage.getItem("myFantasyTeam")) ?? []
	)

	useEffect(() => {
		window.localStorage.setItem("myFantasyTeam", JSON.stringify(myTeamList))
	}, [myTeamList])

	useEffect(() => {
		if (myTeamList.length > 0 && draftedPlayerList.length > 0) {
			const newDraftedPlayersList = removeElementsById(myTeamList, draftedPlayers)
			setDraftedPlayers(newDraftedPlayersList)
		}
	}, [])

	const filterDraftedPlayers = (id) => {
		const newPlayerList = draftedPlayers.filter(
			(player) => player.PlayerID != id
		)
		setDraftedPlayers(newPlayerList)
	}
	const addDeletedTeammatesBackToDraftedPlayers = (deletedTeammateId) => {
		if (draftedPlayers.find((player) => player.PlayerID == deletedTeammateId)) {
			return
		}
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
				<div className="players-list">
					{draftedPlayers.map((player) => (
						<PlayerShow
							key={player.PlayerID}
							player={player}
							myTeamList={myTeamList}
							setMyTeamList={setMyTeamList}
							filterDraftedPlayers={filterDraftedPlayers}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
