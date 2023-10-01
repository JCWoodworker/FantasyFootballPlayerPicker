export function sortPlayersByAverageDraftPosition(players) {

  const undraftedPlayers = [];
  for (const player of players) {
    if (player.AverageDraftPosition === null) {
      undraftedPlayers.push(player);
    }
  }
  players = players.filter((player) => player.AverageDraftPosition !== null);
  players.sort((a, b) => a.AverageDraftPosition - b.AverageDraftPosition);
  players.push(...undraftedPlayers);

  return players;
}