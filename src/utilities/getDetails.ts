/* 
HUUUUUUUUUUGE ISSUE - WAY TOO MANY REQUESTS WILL COST $$$$
	INSTEAD OF A NEW FETCH FOR EACH PLAYER, LET'S FETCH ALL ACTIVE PLAYERS 
	AND FILTER OUT THE ONES WE NEED

	maybe arguements could include an array of ids instead of just one
*/ 

	// if (detailedPlayerData) {

	// 	fetchedPlayer = (
	// 		<>
	// 			{Object.entries(detailedPlayerData)
	// 				.filter(
	// 					(entry) =>
	// 						entry[0].startsWith("Upcoming") && entry[0].endsWith("Salary")
	// 				)
	// 				.map((entry) => (
	// 					<p key={entry[0]}>
	// 						{entry[0]}: {entry[1] || "N/A"}
	// 					</p>
	// 				))}
	// 		</>
	// 	)
	// }


const getTeamDetails = (id: number): void => {
	console.log(`Team ID: ${id}`)
}

const getPlayerDetails = async (id: number): void => {
	try {
		const response = await fetch(
			`https://api.sportsdata.io/v3/nfl/scores/json/Player/${id}?key=14e67e70e2d54374a54e3de3001efe14`
		)
		const playerData = await response.json()
		return playerData
	} catch (error) {
		console.log(error)
	}
}
export const getDetails = async (detailType: string, id: number) => {
	if (detailType != "team" && detailType != "player") {
		return console.log(
			`Error - Must use "team" or "player" as first arguement when calling this function`
		)
	}
	let data = {}

	detailType == "Team"
		? (data = getTeamDetails(id))
		: (data = await getPlayerDetails(id))
  
	return data
}
