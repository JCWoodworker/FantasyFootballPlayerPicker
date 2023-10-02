import React, { useState, useEffect } from "react"
import { activePlayers } from "../../data/PlayerData"
import { sortPlayersByAverageDraftPosition } from "../../utilities/sortPlayersByAverageDraftPosition"

import ActivePlayer from "../../data/ActivePlayer"

import MyTeam from "../../pages/my_team/MyTeam"
import PlayerShow from "../../pages/players/PlayerShow"

const draftedPlayerList: ActivePlayer[] =
	sortPlayersByAverageDraftPosition(activePlayers)

export const PlayersIndex: React.FC = () => {
	const [draftedPlayers, setDraftedPlayers] = useState(draftedPlayerList)
	const [myTeamList, setMyTeamList] = useState(
		JSON.parse(window.localStorage.getItem("myFantasyTeam")) ?? []
	)
	const [searchText, setSearchText] = useState("")

	useEffect(() => {
		window.localStorage.setItem("myFantasyTeam", JSON.stringify(myTeamList))
	}, [myTeamList])

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
		setSearchText(() => e.target.value.toLowerCase())
		const filteredDraftedPlayers = draftedPlayerList.filter((player) =>
			player.FullName.toLowerCase().includes(searchText)
		)
		setDraftedPlayers(filteredDraftedPlayers)
	}

	const selectOptions = [
		"All",
		"QB",
		"RB",
		"WR",
		"TE"
	]

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
				<select>
					{selectOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<input type="text" placeholder="Search" onChange={onSearchChange} value={searchText}/>
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
