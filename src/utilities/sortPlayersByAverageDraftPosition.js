export function sortPlayersByAverageDraftPosition(players) {
	const draftedPlayerList = players
		.sort((a, b) => a.AverageDraftPosition - b.AverageDraftPosition)
	return draftedPlayerList
}
