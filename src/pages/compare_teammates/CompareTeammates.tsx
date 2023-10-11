import React, { useState } from "react"
import { dropdownStyles } from "./utilities/dropdownStyles"
import { fetchSalaries } from "./utilities/fetchSalaries"
import { Selection } from "./types/types"

import Select from "react-select"

export const CompareTeammates: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)
	const [selectionOne, setSelectionOne] = useState<Selection>({})
	const [selectionTwo, setSelectionTwo] = useState<Selection>({})
	const placeholder = "Select a player"

	const handleSelectionOneChange = async (e) => {
		const value = e.value
		const playerSalaryData = await fetchSalaries(value)
		setSelectionOne(() => playerSalaryData)
	}
	const handleSelectionTwoChange = async (e) => {
		const value = e.value
		const playerSalaryData = await fetchSalaries(value)
		setSelectionTwo(() => playerSalaryData)
	}

	let salaryColor = null
	if (selectionOne?.basicSalary > selectionTwo?.basicSalary) {
		salaryColor = "green"
	} else if (selectionOne?.basicSalary < selectionTwo?.basicSalary) {
		salaryColor = "red"
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
					<p style={{ color: { salaryColor } }}>
						{selectionOne?.draftKings || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionOne?.fanDuel || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionOne?.yahooSalary || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionOne?.basicSalary || "..."}
					</p>
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
					<p style={{ color: { salaryColor } }}>
						{selectionTwo?.draftKings || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionTwo?.fanDuel || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionTwo?.yahooSalary || "..."}
					</p>
					<p style={{ color: { salaryColor } }}>
						{selectionTwo?.basicSalary || "..."}
					</p>
				</div>
			</div>
		</>
	)
}
