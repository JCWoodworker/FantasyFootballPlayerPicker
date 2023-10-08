
const API_KEY = process.env.SPORTSDATAIO_API_KEY
export const fetchSalaries = async (playerID) => {
	try {
		const response = await fetch(
			`https://api.sportsdata.io/v3/nfl/scores/json/Player/${playerID}?key=14e67e70e2d54374a54e3de3001efe14`
		)
		let playerData = await response.json()
		playerData = {
			draftKings: playerData.UpcomingDraftKingsSalary,
			fanDuel: playerData.UpcomingFanDuelSalary,
			yahooSalary: playerData.UpcomingYahooSalary,
			basicSalary: playerData.UpcomingSalary,
		}
		return playerData
	} catch (error) {
		console.log(error)
	}
}
