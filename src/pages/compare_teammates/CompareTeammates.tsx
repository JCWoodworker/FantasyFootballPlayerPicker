import React, { useState } from "react"
import Select from "react-select"
import { dropdownStyles } from "./dropdownStyles"
import { fetchSalaries } from "./fetchSalaries"
export const CompareTeammates: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)
	const [selectionOne, setSelectionOne] = useState("")
	const [selectionTwo, setSelectionTwo] = useState("")
	const placeholder = "Select a player"

	const handleSelectionOneChange = (e) => {
		const value = e.value
    fetchSalaries(value)
		setSelectionOne(() => value)
	}
	const handleSelectionTwoChange = (e) => {
		const value = e.value
    fetchSalaries(value)
		setSelectionTwo(() => value)
	}

	return (
		<>
			<h2>Compare Teammates</h2>
			<div className="teammate-comparison-selection-container">
				<div>
					<Select
						options={myTeam.map((player) => ({
							value: player.PlayerID,
							label: player.FullName,
						}))}
						placeholder={placeholder}
						styles={dropdownStyles}
						onChange={handleSelectionOneChange}
					/>
				</div>
				<div>
					<Select
						options={myTeam.map((player) => ({
							value: player.PlayerID,
							label: player.FullName,
						}))}
						placeholder={placeholder}
						styles={dropdownStyles}
						onChange={handleSelectionTwoChange}
					/>
				</div>
			</div>
		</>
	)
}
