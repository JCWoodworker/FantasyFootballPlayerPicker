export function sortPlayersByAverageDraftPosition(players) {
	const draftedPlayerList = players
		.filter((player) => player.AverageDraftPosition !== null)
		.sort((a, b) => a.AverageDraftPosition - b.AverageDraftPosition)
	const undraftedPlayerList = players.filter(
		(player) => player.AverageDraftPosition === null
	)
	return [draftedPlayerList, undraftedPlayerList]
}
