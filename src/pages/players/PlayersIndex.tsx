import React, { useState, useEffect } from "react"
import Select from "react-select"

import { activePlayers } from "../../data/PlayerData"
import { sortPlayersByAverageDraftPosition } from "../../utilities/sortPlayersByAverageDraftPosition"
import ActivePlayer from "../../data/ActivePlayer"

import MyTeam from "../../pages/my_team/MyTeam"

const draftedPlayerList: ActivePlayer[] =
	sortPlayersByAverageDraftPosition(activePlayers)

export const PlayersIndex: React.FC = () => {
	const [draftedPlayers, setDraftedPlayers] = useState(draftedPlayerList)
	const [myTeamList, setMyTeamList] = useState(
		JSON.parse(window.localStorage.getItem("myFantasyTeam")) ?? []
	)

	const [selectedPlayer, setSelectedPlayer] = useState("")

	useEffect(() => {
		window.localStorage.setItem("myFantasyTeam", JSON.stringify(myTeamList))
	}, [myTeamList])

	const handlePlayerChange = (clickedPlayer) => {
		setSelectedPlayer({ name: clickedPlayer.label, id: clickedPlayer.value })
	}


	const handleAddPlayerToMyTeam = (e) => {
		e.preventDefault()
		const fullPlayerDetails = draftedPlayers.find((player) => {
			return player.PlayerID == selectedPlayer.id
		})
		myTeamList.find((player) => {
			return player.PlayerID == selectedPlayer.id
		})
			? alert(`${selectedPlayer.name} is already on your team`)
			: setMyTeamList([...myTeamList, fullPlayerDetails])
	}

		return (
			<div>
				<div>
					<h2>Select Players to Compare</h2>
					<div className="player-and-position-inputs">
						<div>
						</div>
						<div>
							<Select
								options={draftedPlayers.map((player) => ({
									value: player.PlayerID,
									label: player.FullName,
								}))}
								placeholder="Search for a player"
								onChange={handlePlayerChange}
								styles={{
									container: (styles) => ({
										...styles,
										width: "20rem",
									}),
								}}
							/>
						</div>
						{selectedPlayer && (
							<button onClick={handleAddPlayerToMyTeam}>
								Add {selectedPlayer.name} to my team
							</button>
						)}
					</div>
				</div>
				<div>
					<MyTeam myTeamList={myTeamList} setMyTeamList={setMyTeamList} />
				</div>
			</div>
		)
	}

