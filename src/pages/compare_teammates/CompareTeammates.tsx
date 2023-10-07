import React, { useState } from "react"
import Select from "react-select"
export const CompareTeammates: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [myTeam, setMyTeam] = useState(() =>
		JSON.parse(window.localStorage.getItem("myFantasyTeam"))
	)

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

	const placeholder = "Select a player"

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
						styles={styles}
					/>
				</div>
				<div>
					<Select
						options={myTeam.map((player) => ({
							value: player.PlayerID,
							label: player.FullName,
						}))}
						placeholder={placeholder}
						styles={styles}
					/>
				</div>
			</div>
		</>
	)
}
