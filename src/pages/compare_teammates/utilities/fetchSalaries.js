
const API_KEY = import.meta.env.VITE_SPORTSDATAIO_API_KEY
export const fetchSalaries = async (playerID) => {
	try {
		const response = await fetch(
			`https://api.sportsdata.io/v3/nfl/scores/json/Player/${playerID}?key=${API_KEY}`
		)
		let playerData = await response.json()
		playerData = {
      playerID: playerData.PlayerID,
      name: playerData.Name,
      byeWeek: playerData.ByeWeek,
      photoUrl: playerData.PhotoUrl,
      positionL : playerData.Position,
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
