import ShowPlayerSalaries from "../utilities/ShowPlayerSalaries"
export const getPlayerSalaries = async (id: number) => {
	try {
		const response = await fetch(
			`https://api.sportsdata.io/v3/nfl/scores/json/Player/${id}?key=14e67e70e2d54374a54e3de3001efe14`
		)
		const playerData = await response.json()
		return <ShowPlayerSalaries fullPlayerData={playerData} />
	} catch (error) {
		console.log(error)
	}
}
