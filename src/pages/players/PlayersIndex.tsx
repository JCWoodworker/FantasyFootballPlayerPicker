import React, { useState, useEffect } from "react"
import Select from "react-select"

import { activePlayers } from "../../data/playerData"
import { sortPlayersByAverageDraftPosition } from "../../utilities/sortPlayersByAverageDraftPosition"

import MyTeam from "../../pages/my_team/MyTeam"

const draftedPlayerList: ActivePlayer[] =
	sortPlayersByAverageDraftPosition(activePlayers)

export const PlayersIndex: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [draftedPlayers, setDraftedPlayers] = useState(draftedPlayerList)
	const [myTeamList, setMyTeamList] = useState(
		JSON.parse(window.localStorage.getItem("myFantasyTeam")) ?? []
	)
	const [selectedPlayer, setSelectedPlayer] = useState("")
	const [playerSelectionButtonText, setPlayerSelectionButtonText] = useState("")

	useEffect(() => {
		window.localStorage.setItem("myFantasyTeam", JSON.stringify(myTeamList))
	}, [myTeamList])

	const handlePlayerChange = (clickedPlayer) => {
		setPlayerSelectionButtonText(() => `Add ${clickedPlayer.label} to my team`)
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

	const backgroundColor = "rgb(75, 75, 75)"
	const textColor = "white"
	const styles = {
		container: (styles) => ({
			...styles,
			width: "20rem",
		}),
		control: (styles) => ({
			...styles,
			backgroundColor: backgroundColor,
			color: textColor,
		}),
		option: (styles, { isFocused }) => ({
			...styles,
			backgroundColor: isFocused ? textColor : backgroundColor,
			color: isFocused ? backgroundColor : textColor,
		}),
		menu: (styles) => ({
			...styles,
			backgroundColor: backgroundColor,
			color: textColor,
		}),
		placeholder: (styles) => ({
			...styles,
			color: textColor,
		}),
    singleValue: (styles) => ({
      ...styles,
      color: textColor,
  }),
	}




	return (
		<div>
			<div>
				<h2>Add Players to My Team</h2>
				<div className="player-and-position-inputs">
					<div></div>
					<div>
						<Select
							options={draftedPlayers.map((player) => ({
								value: player.PlayerID,
								label: player.FullName,
							}))}
							placeholder="Search for a player"
							onChange={handlePlayerChange}
							styles={styles}
						/>
					</div>
					{selectedPlayer && (
						<button onClick={handleAddPlayerToMyTeam}>
							{playerSelectionButtonText}
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
