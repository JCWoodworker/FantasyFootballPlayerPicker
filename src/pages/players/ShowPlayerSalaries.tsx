import React from "react"

export const ShowPlayerSalaries = ({ fullPlayerData }) => {
	return (
		<>
			{Object.entries(fullPlayerData)
				.filter(
					(entry) =>
						entry[0].startsWith("Upcoming") && entry[0].endsWith("Salary")
				)
				.map((entry) => (
					<p key={entry[0]}>
						{entry[0]}: {entry[1] || "N/A"}
					</p>
				))}
		</>
	)
}

export default ShowPlayerSalaries
