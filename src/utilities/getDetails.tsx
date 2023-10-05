const showPlayerSalaries = (fullPlayerData) => {
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

export const getPlayerSalaries = async (id: number, showSalariesComponent: React.FC): void => {
	try {
		const response = await fetch(
			`https://api.sportsdata.io/v3/nfl/scores/json/Player/${id}?key=14e67e70e2d54374a54e3de3001efe14`
		)
		const playerData = await response.json()
		return showSalariesComponent(playerData)
	} catch (error) {
		console.log(error)
	}
}
