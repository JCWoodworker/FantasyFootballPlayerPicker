import React, { useState } from "react"
import Select from "react-select"
export const CompareTeammates: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)

	const styles = {
		container: (styles) => ({
			...styles,
			width: "20rem",      
		}),
    control: (styles) => ({
      ...styles,
      backgroundColor: "black",
      color: "white",
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? "white" : "black",
      color: isFocused ? "black" : "white",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "black",
      color: "white",
    }),
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
            styles={styles}
					/>
				</div>
				<div>
					<Select
						options={myTeam.map((player) => ({
							value: player.PlayerID,
							label: player.FullName,
						}))}
						styles={styles}
					/>
				</div>
			</div>
		</>
	)
}
