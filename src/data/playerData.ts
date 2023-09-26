export interface PlayerInterface {
	PlayerID: number
	FirstName: string
	LastName: string
  Team: string
  Position: string
  PhotoUrl: stri
  TeamID: number
}

export const activePlayers: Player[] = [
	{
		PlayerID: 549,
		FirstName: "Matt",
		LastName: "Prater",
		Team: "ARI",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/549.png",
		TeamID: 1,
	},
	{
		PlayerID: 2593,
		FirstName: "Aaron",
		LastName: "Rodgers",
		Team: "NYJ",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/2593.png",
		TeamID: 24,
	},
	{
		PlayerID: 3061,
		FirstName: "Marcedes",
		LastName: "Lewis",
		Team: "CHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/3061.png",
		TeamID: 6,
	},
	{
		PlayerID: 3341,
		FirstName: "Calais",
		LastName: "Campbell",
		Team: "ATL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/3341.png",
		TeamID: 2,
	},
	{
		PlayerID: 3617,
		FirstName: "Duane",
		LastName: "Brown",
		Team: "NYJ",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/3617.png",
		TeamID: 24,
	},
	{
		PlayerID: 7651,
		FirstName: "Matthew",
		LastName: "Slater",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/7651.png",
		TeamID: 21,
	},
	{
		PlayerID: 8358,
		FirstName: "Brian",
		LastName: "Hoyer",
		Team: "LV",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/8358.png",
		TeamID: 25,
	},
	{
		PlayerID: 8920,
		FirstName: "Jason",
		LastName: "Peters",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/8920.png",
		TeamID: 30,
	},
	{
		PlayerID: 9038,
		FirstName: "Matthew",
		LastName: "Stafford",
		Team: "LAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9038.png",
		TeamID: 32,
	},
	{
		PlayerID: 9162,
		FirstName: "JJ",
		LastName: "Jansen",
		Team: "CAR",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9162.png",
		TeamID: 5,
	},
	{
		PlayerID: 9201,
		FirstName: "Thomas",
		LastName: "Morstead",
		Team: "NYJ",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9201.png",
		TeamID: 24,
	},
	{
		PlayerID: 10333,
		FirstName: "Graham",
		LastName: "Gano",
		Team: "NYG",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/10333.png",
		TeamID: 23,
	},
	{
		PlayerID: 11008,
		FirstName: "Morgan",
		LastName: "Cox",
		Team: "TEN",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11008.png",
		TeamID: 34,
	},
	{
		PlayerID: 11105,
		FirstName: "Kareem",
		LastName: "Jackson",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11105.png",
		TeamID: 10,
	},
	{
		PlayerID: 11120,
		FirstName: "Jon",
		LastName: "Weeks",
		Team: "HOU",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11120.png",
		TeamID: 13,
	},
	{
		PlayerID: 11132,
		FirstName: "Jerry",
		LastName: "Hughes",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11132.png",
		TeamID: 13,
	},
	{
		PlayerID: 11315,
		FirstName: "Brandon",
		LastName: "Graham",
		Team: "PHI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11315.png",
		TeamID: 26,
	},
	{
		PlayerID: 11488,
		FirstName: "Jimmy",
		LastName: "Graham",
		Team: "NO",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11488.png",
		TeamID: 22,
	},
	{
		PlayerID: 11694,
		FirstName: "Nick",
		LastName: "Folk",
		Team: "TEN",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11694.png",
		TeamID: 34,
	},
	{
		PlayerID: 12308,
		FirstName: "Trent",
		LastName: "Williams",
		Team: "SF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12308.png",
		TeamID: 31,
	},
	{
		PlayerID: 12450,
		FirstName: "Al",
		LastName: "Woods",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12450.png",
		TeamID: 24,
	},
	{
		PlayerID: 12707,
		FirstName: "Jason",
		LastName: "Kelce",
		Team: "PHI",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12707.png",
		TeamID: 26,
	},
	{
		PlayerID: 12787,
		FirstName: "Nick",
		LastName: "Bellore",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12787.png",
		TeamID: 30,
	},
	{
		PlayerID: 12831,
		FirstName: "Tyrod",
		LastName: "Taylor",
		Team: "NYG",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12831.png",
		TeamID: 23,
	},
	{
		PlayerID: 12841,
		FirstName: "Andy",
		LastName: "Dalton",
		Team: "CAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12841.png",
		TeamID: 5,
	},
	{
		PlayerID: 12902,
		FirstName: "Cameron",
		LastName: "Heyward",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12902.png",
		TeamID: 28,
	},
	{
		PlayerID: 12982,
		FirstName: "Blaine",
		LastName: "Gabbert",
		Team: "KC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12982.png",
		TeamID: 16,
	},
	{
		PlayerID: 13022,
		FirstName: "Von",
		LastName: "Miller",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13022.png",
		TeamID: 4,
	},
	{
		PlayerID: 13036,
		FirstName: "Justin",
		LastName: "Houston",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13036.png",
		TeamID: 5,
	},
	{
		PlayerID: 13063,
		FirstName: "Taiwan",
		LastName: "Jones",
		Team: "NYG",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13063.png",
		TeamID: 23,
	},
	{
		PlayerID: 13129,
		FirstName: "Tyron",
		LastName: "Smith",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13129.png",
		TeamID: 9,
	},
	{
		PlayerID: 13227,
		FirstName: "Randall",
		LastName: "Cobb",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13227.png",
		TeamID: 24,
	},
	{
		PlayerID: 13338,
		FirstName: "Cameron",
		LastName: "Jordan",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13338.png",
		TeamID: 22,
	},
	{
		PlayerID: 13415,
		FirstName: "Patrick",
		LastName: "Peterson",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13415.png",
		TeamID: 28,
	},
	{
		PlayerID: 13721,
		FirstName: "Fletcher",
		LastName: "Cox",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13721.png",
		TeamID: 26,
	},
	{
		PlayerID: 13741,
		FirstName: "Brandon",
		LastName: "Bolden",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13741.png",
		TeamID: 25,
	},
	{
		PlayerID: 13749,
		FirstName: "Chandler",
		LastName: "Jones",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13749.png",
		TeamID: 25,
	},
	{
		PlayerID: 13761,
		FirstName: "Stephon",
		LastName: "Gilmore",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13761.png",
		TeamID: 9,
	},
	{
		PlayerID: 13799,
		FirstName: "Ryan",
		LastName: "Tannehill",
		Team: "TEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13799.png",
		TeamID: 34,
	},
	{
		PlayerID: 13810,
		FirstName: "Demario",
		LastName: "Davis",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13810.png",
		TeamID: 22,
	},
	{
		PlayerID: 13870,
		FirstName: "Marvin",
		LastName: "Jones Jr.",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13870.png",
		TeamID: 11,
	},
	{
		PlayerID: 13882,
		FirstName: "Kevin",
		LastName: "Zeitler",
		Team: "BAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13882.png",
		TeamID: 3,
	},
	{
		PlayerID: 13894,
		FirstName: "Tashaun",
		LastName: "Gipson Sr.",
		Team: "SF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13894.png",
		TeamID: 31,
	},
	{
		PlayerID: 13913,
		FirstName: "Kelvin",
		LastName: "Beachum",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13913.png",
		TeamID: 1,
	},
	{
		PlayerID: 14017,
		FirstName: "Bryan",
		LastName: "Anger",
		Team: "DAL",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14017.png",
		TeamID: 9,
	},
	{
		PlayerID: 14042,
		FirstName: "Aaron",
		LastName: "Brewer",
		Team: "ARI",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14042.png",
		TeamID: 1,
	},
	{
		PlayerID: 14141,
		FirstName: "Cole",
		LastName: "Beasley",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14141.png",
		TeamID: 23,
	},
	{
		PlayerID: 14222,
		FirstName: "Riley",
		LastName: "Reiff",
		Team: "NE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14222.png",
		TeamID: 21,
	},
	{
		PlayerID: 14252,
		FirstName: "Kirk",
		LastName: "Cousins",
		Team: "MIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14252.png",
		TeamID: 20,
	},
	{
		PlayerID: 14375,
		FirstName: "Lavonte",
		LastName: "David",
		Team: "TB",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14375.png",
		TeamID: 33,
	},
	{
		PlayerID: 14409,
		FirstName: "Johnny",
		LastName: "Hekker",
		Team: "CAR",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14409.png",
		TeamID: 5,
	},
	{
		PlayerID: 14419,
		FirstName: "Rodney",
		LastName: "McLeod Jr.",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14419.png",
		TeamID: 8,
	},
	{
		PlayerID: 14461,
		FirstName: "Harrison",
		LastName: "Smith",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14461.png",
		TeamID: 20,
	},
	{
		PlayerID: 14469,
		FirstName: "Justin",
		LastName: "Bethel",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14469.png",
		TeamID: 19,
	},
	{
		PlayerID: 14534,
		FirstName: "Bobby",
		LastName: "Wagner",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14534.png",
		TeamID: 30,
	},
	{
		PlayerID: 14536,
		FirstName: "Russell",
		LastName: "Wilson",
		Team: "DEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14536.png",
		TeamID: 10,
	},
	{
		PlayerID: 14567,
		FirstName: "Josh",
		LastName: "Harris",
		Team: "LAC",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14567.png",
		TeamID: 29,
	},
	{
		PlayerID: 14688,
		FirstName: "Justin",
		LastName: "Tucker",
		Team: "BAL",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14688.png",
		TeamID: 3,
	},
	{
		PlayerID: 14697,
		FirstName: "Greg",
		LastName: "Zuerlein",
		Team: "NYJ",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14697.png",
		TeamID: 24,
	},
	{
		PlayerID: 14705,
		FirstName: "Ty",
		LastName: "Nsekhe",
		Team: "CLE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14705.png",
		TeamID: 8,
	},
	{
		PlayerID: 14743,
		FirstName: "Lawrence",
		LastName: "Guy Sr.",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14743.png",
		TeamID: 21,
	},
	{
		PlayerID: 14856,
		FirstName: "Zach",
		LastName: "Ertz",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14856.png",
		TeamID: 1,
	},
	{
		PlayerID: 14857,
		FirstName: "Lane",
		LastName: "Johnson",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14857.png",
		TeamID: 26,
	},
	{
		PlayerID: 14860,
		FirstName: "Jordan",
		LastName: "Poyer",
		Team: "BUF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14860.png",
		TeamID: 4,
	},
	{
		PlayerID: 14865,
		FirstName: "Marquise",
		LastName: "Goodwin",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14865.png",
		TeamID: 8,
	},
	{
		PlayerID: 14867,
		FirstName: "Dustin",
		LastName: "Hopkins",
		Team: "CLE",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14867.png",
		TeamID: 8,
	},
	{
		PlayerID: 14871,
		FirstName: "Robert",
		LastName: "Woods",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14871.png",
		TeamID: 13,
	},
	{
		PlayerID: 14887,
		FirstName: "Duron",
		LastName: "Harmon",
		Team: "BAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14887.png",
		TeamID: 3,
	},
	{
		PlayerID: 14895,
		FirstName: "Geno",
		LastName: "Smith",
		Team: "SEA",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14895.png",
		TeamID: 30,
	},
	{
		PlayerID: 14900,
		FirstName: "Ryan",
		LastName: "Jensen",
		Team: "TB",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14900.png",
		TeamID: 33,
	},
	{
		PlayerID: 14901,
		FirstName: "Kyle",
		LastName: "Juszczyk",
		Team: "SF",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14901.png",
		TeamID: 31,
	},
	{
		PlayerID: 14959,
		FirstName: "Chris",
		LastName: "Hubbard",
		Team: "TEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14959.png",
		TeamID: 34,
	},
	{
		PlayerID: 14974,
		FirstName: "Nick",
		LastName: "Williams",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14974.png",
		TeamID: 29,
	},
	{
		PlayerID: 14986,
		FirstName: "DeAndre",
		LastName: "Hopkins",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14986.png",
		TeamID: 34,
	},
	{
		PlayerID: 14988,
		FirstName: "David",
		LastName: "Quessenberry",
		Team: "MIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14988.png",
		TeamID: 20,
	},
	{
		PlayerID: 14996,
		FirstName: "Brandon",
		LastName: "McManus",
		Team: "JAX",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14996.png",
		TeamID: 15,
	},
	{
		PlayerID: 15048,
		FirstName: "Travis",
		LastName: "Kelce",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15048.png",
		TeamID: 16,
	},
	{
		PlayerID: 15071,
		FirstName: "Latavius",
		LastName: "Murray",
		Team: "BUF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15071.png",
		TeamID: 4,
	},
	{
		PlayerID: 15076,
		FirstName: "Keenan",
		LastName: "Allen",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15076.png",
		TeamID: 29,
	},
	{
		PlayerID: 15090,
		FirstName: "Johnathan",
		LastName: "Hankins",
		Team: "DAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15090.png",
		TeamID: 9,
	},
	{
		PlayerID: 15112,
		FirstName: "Tress",
		LastName: "Way",
		Team: "WAS",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15112.png",
		TeamID: 35,
	},
	{
		PlayerID: 15125,
		FirstName: "Sam",
		LastName: "Martin",
		Team: "BUF",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15125.png",
		TeamID: 4,
	},
	{
		PlayerID: 15127,
		FirstName: "Darius",
		LastName: "Slay",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15127.png",
		TeamID: 26,
	},
	{
		PlayerID: 15131,
		FirstName: "David",
		LastName: "Bakhtiari",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15131.png",
		TeamID: 12,
	},
	{
		PlayerID: 15136,
		FirstName: "Micah",
		LastName: "Hyde",
		Team: "BUF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15136.png",
		TeamID: 4,
	},
	{
		PlayerID: 15150,
		FirstName: "Cordarrelle",
		LastName: "Patterson",
		Team: "ATL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15150.png",
		TeamID: 2,
	},
	{
		PlayerID: 15186,
		FirstName: "A.J.",
		LastName: "Klein",
		Team: "BUF",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15186.png",
		TeamID: 4,
	},
	{
		PlayerID: 15193,
		FirstName: "Terron",
		LastName: "Armstead",
		Team: "MIA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15193.png",
		TeamID: 19,
	},
	{
		PlayerID: 15194,
		FirstName: "John",
		LastName: "Jenkins",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15194.png",
		TeamID: 25,
	},
	{
		PlayerID: 15200,
		FirstName: "William",
		LastName: "Gholston",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15200.png",
		TeamID: 33,
	},
	{
		PlayerID: 15208,
		FirstName: "Cody",
		LastName: "Davis",
		Team: "NE",
		Position: "SS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15208.png",
		TeamID: 21,
	},
	{
		PlayerID: 15226,
		FirstName: "Tyrann",
		LastName: "Mathieu",
		Team: "NO",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15226.png",
		TeamID: 22,
	},
	{
		PlayerID: 15375,
		FirstName: "Mike",
		LastName: "Purcell",
		Team: "DEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15375.png",
		TeamID: 10,
	},
	{
		PlayerID: 15534,
		FirstName: "Adam",
		LastName: "Thielen",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15534.png",
		TeamID: 5,
	},
	{
		PlayerID: 15589,
		FirstName: "Michael",
		LastName: "Thomas",
		Team: "CIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15589.png",
		TeamID: 7,
	},
	{
		PlayerID: 15646,
		FirstName: "Andrew",
		LastName: "DePaola",
		Team: "MIN",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15646.png",
		TeamID: 20,
	},
	{
		PlayerID: 15694,
		FirstName: "Case",
		LastName: "Keenum",
		Team: "HOU",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15694.png",
		TeamID: 13,
	},
	{
		PlayerID: 15734,
		FirstName: "Patrick",
		LastName: "Scales",
		Team: "CHI",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15734.png",
		TeamID: 6,
	},
	{
		PlayerID: 15854,
		FirstName: "Brett",
		LastName: "Maher",
		Team: "LAR",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15854.png",
		TeamID: 32,
	},
	{
		PlayerID: 15917,
		FirstName: "James",
		LastName: "Winchester",
		Team: "KC",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15917.png",
		TeamID: 16,
	},
	{
		PlayerID: 16021,
		FirstName: "Tyler",
		LastName: "Larsen",
		Team: "WAS",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16021.png",
		TeamID: 35,
	},
	{
		PlayerID: 16029,
		FirstName: "Billy",
		LastName: "Turner",
		Team: "NYJ",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16029.png",
		TeamID: 24,
	},
	{
		PlayerID: 16039,
		FirstName: "Cam",
		LastName: "Fleming",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16039.png",
		TeamID: 10,
	},
	{
		PlayerID: 16041,
		FirstName: "Jimmy",
		LastName: "Garoppolo",
		Team: "LV",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16041.png",
		TeamID: 25,
	},
	{
		PlayerID: 16051,
		FirstName: "Tyler",
		LastName: "Ott",
		Team: "BAL",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16051.png",
		TeamID: 3,
	},
	{
		PlayerID: 16067,
		FirstName: "Kerry",
		LastName: "Hyder Jr.",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16067.png",
		TeamID: 31,
	},
	{
		PlayerID: 16086,
		FirstName: "James",
		LastName: "Hurst",
		Team: "NO",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16086.png",
		TeamID: 22,
	},
	{
		PlayerID: 16093,
		FirstName: "C.J.",
		LastName: "Mosley",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16093.png",
		TeamID: 24,
	},
	{
		PlayerID: 16100,
		FirstName: "Brent",
		LastName: "Urban",
		Team: "BAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16100.png",
		TeamID: 3,
	},
	{
		PlayerID: 16116,
		FirstName: "AJ",
		LastName: "McCarron",
		Team: "CIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16116.png",
		TeamID: 7,
	},
	{
		PlayerID: 16125,
		FirstName: "Joel",
		LastName: "Bitonio",
		Team: "CLE",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16125.png",
		TeamID: 8,
	},
	{
		PlayerID: 16141,
		FirstName: "Willie",
		LastName: "Snead IV",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16141.png",
		TeamID: 31,
	},
	{
		PlayerID: 16143,
		FirstName: "K'Waun",
		LastName: "Williams",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16143.png",
		TeamID: 10,
	},
	{
		PlayerID: 16171,
		FirstName: "DaQuan",
		LastName: "Jones",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16171.png",
		TeamID: 4,
	},
	{
		PlayerID: 16173,
		FirstName: "Justin",
		LastName: "McCray",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16173.png",
		TeamID: 5,
	},
	{
		PlayerID: 16191,
		FirstName: "Chris",
		LastName: "Boswell",
		Team: "PIT",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16191.png",
		TeamID: 28,
	},
	{
		PlayerID: 16194,
		FirstName: "Jadeveon",
		LastName: "Clowney",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16194.png",
		TeamID: 3,
	},
	{
		PlayerID: 16198,
		FirstName: "Matt",
		LastName: "Feiler",
		Team: "TB",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16198.png",
		TeamID: 33,
	},
	{
		PlayerID: 16199,
		FirstName: "James",
		LastName: "Ferentz",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16199.png",
		TeamID: 21,
	},
	{
		PlayerID: 16263,
		FirstName: "Allen",
		LastName: "Robinson II",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16263.png",
		TeamID: 28,
	},
	{
		PlayerID: 16264,
		FirstName: "Tyler",
		LastName: "Shatley",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16264.png",
		TeamID: 15,
	},
	{
		PlayerID: 16271,
		FirstName: "Shaquil",
		LastName: "Barrett",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16271.png",
		TeamID: 33,
	},
	{
		PlayerID: 16301,
		FirstName: "Cairo",
		LastName: "Santos",
		Team: "CHI",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16301.png",
		TeamID: 6,
	},
	{
		PlayerID: 16310,
		FirstName: "Denico",
		LastName: "Autry",
		Team: "TEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16310.png",
		TeamID: 34,
	},
	{
		PlayerID: 16311,
		FirstName: "Derek",
		LastName: "Carr",
		Team: "NO",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16311.png",
		TeamID: 22,
	},
	{
		PlayerID: 16319,
		FirstName: "Shelby",
		LastName: "Harris",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16319.png",
		TeamID: 8,
	},
	{
		PlayerID: 16323,
		FirstName: "Khalil",
		LastName: "Mack",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16323.png",
		TeamID: 29,
	},
	{
		PlayerID: 16365,
		FirstName: "Casey",
		LastName: "Kreiter",
		Team: "NYG",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16365.png",
		TeamID: 23,
	},
	{
		PlayerID: 16366,
		FirstName: "DeMarcus",
		LastName: "Lawrence",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16366.png",
		TeamID: 9,
	},
	{
		PlayerID: 16369,
		FirstName: "Zack",
		LastName: "Martin",
		Team: "DAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16369.png",
		TeamID: 9,
	},
	{
		PlayerID: 16378,
		FirstName: "Keith",
		LastName: "Smith",
		Team: "ATL",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16378.png",
		TeamID: 2,
	},
	{
		PlayerID: 16389,
		FirstName: "Odell",
		LastName: "Beckham Jr.",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16389.png",
		TeamID: 3,
	},
	{
		PlayerID: 16419,
		FirstName: "Morgan",
		LastName: "Moses",
		Team: "BAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16419.png",
		TeamID: 3,
	},
	{
		PlayerID: 16436,
		FirstName: "Charles",
		LastName: "Leno Jr.",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16436.png",
		TeamID: 35,
	},
	{
		PlayerID: 16458,
		FirstName: "Cornelius",
		LastName: "Lucas",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16458.png",
		TeamID: 35,
	},
	{
		PlayerID: 16470,
		FirstName: "Davante",
		LastName: "Adams",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16470.png",
		TeamID: 25,
	},
	{
		PlayerID: 16481,
		FirstName: "Corey",
		LastName: "Linsley",
		Team: "LAC",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16481.png",
		TeamID: 29,
	},
	{
		PlayerID: 16497,
		FirstName: "Teddy",
		LastName: "Bridgewater",
		Team: "DET",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16497.png",
		TeamID: 11,
	},
	{
		PlayerID: 16510,
		FirstName: "Jerick",
		LastName: "McKinnon",
		Team: "KC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16510.png",
		TeamID: 16,
	},
	{
		PlayerID: 16531,
		FirstName: "Jake",
		LastName: "Matthews",
		Team: "ATL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16531.png",
		TeamID: 2,
	},
	{
		PlayerID: 16563,
		FirstName: "Trai",
		LastName: "Turner",
		Team: "NO",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16563.png",
		TeamID: 22,
	},
	{
		PlayerID: 16568,
		FirstName: "Brandin",
		LastName: "Cooks",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16568.png",
		TeamID: 9,
	},
	{
		PlayerID: 16597,
		FirstName: "Mike",
		LastName: "Evans",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16597.png",
		TeamID: 33,
	},
	{
		PlayerID: 16618,
		FirstName: "Aaron",
		LastName: "Donald",
		Team: "LAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16618.png",
		TeamID: 32,
	},
	{
		PlayerID: 16656,
		FirstName: "Logan",
		LastName: "Thomas",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16656.png",
		TeamID: 35,
	},
	{
		PlayerID: 16678,
		FirstName: "Jimmie",
		LastName: "Ward",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16678.png",
		TeamID: 13,
	},
	{
		PlayerID: 16724,
		FirstName: "Adrian",
		LastName: "Phillips",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16724.png",
		TeamID: 21,
	},
	{
		PlayerID: 16760,
		FirstName: "Charley",
		LastName: "Hughlett",
		Team: "CLE",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16760.png",
		TeamID: 8,
	},
	{
		PlayerID: 16762,
		FirstName: "Jameis",
		LastName: "Winston",
		Team: "NO",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16762.png",
		TeamID: 22,
	},
	{
		PlayerID: 16763,
		FirstName: "Marcus",
		LastName: "Mariota",
		Team: "PHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16763.png",
		TeamID: 26,
	},
	{
		PlayerID: 16764,
		FirstName: "Dante",
		LastName: "Fowler Jr.",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16764.png",
		TeamID: 9,
	},
	{
		PlayerID: 16765,
		FirstName: "Amari",
		LastName: "Cooper",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16765.png",
		TeamID: 8,
	},
	{
		PlayerID: 16766,
		FirstName: "Brandon",
		LastName: "Scherff",
		Team: "JAX",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16766.png",
		TeamID: 15,
	},
	{
		PlayerID: 16767,
		FirstName: "Leonard",
		LastName: "Williams",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16767.png",
		TeamID: 23,
	},
	{
		PlayerID: 16774,
		FirstName: "Andrus",
		LastName: "Peat",
		Team: "NO",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16774.png",
		TeamID: 22,
	},
	{
		PlayerID: 16775,
		FirstName: "DeVante",
		LastName: "Parker",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16775.png",
		TeamID: 21,
	},
	{
		PlayerID: 16776,
		FirstName: "Melvin",
		LastName: "Gordon III",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16776.png",
		TeamID: 3,
	},
	{
		PlayerID: 16778,
		FirstName: "Arik",
		LastName: "Armstead",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16778.png",
		TeamID: 31,
	},
	{
		PlayerID: 16779,
		FirstName: "Marcus",
		LastName: "Peters",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16779.png",
		TeamID: 25,
	},
	{
		PlayerID: 16781,
		FirstName: "Nelson",
		LastName: "Agholor",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16781.png",
		TeamID: 3,
	},
	{
		PlayerID: 16782,
		FirstName: "Cedric",
		LastName: "Ogbuehi",
		Team: "NYJ",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16782.png",
		TeamID: 24,
	},
	{
		PlayerID: 16783,
		FirstName: "Bud",
		LastName: "Dupree",
		Team: "ATL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16783.png",
		TeamID: 2,
	},
	{
		PlayerID: 16785,
		FirstName: "D.J.",
		LastName: "Humphries",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16785.png",
		TeamID: 1,
	},
	{
		PlayerID: 16786,
		FirstName: "Shaq",
		LastName: "Thompson",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16786.png",
		TeamID: 5,
	},
	{
		PlayerID: 16789,
		FirstName: "Laken",
		LastName: "Tomlinson",
		Team: "NYJ",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16789.png",
		TeamID: 24,
	},
	{
		PlayerID: 16790,
		FirstName: "Phillip",
		LastName: "Dorsett",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16790.png",
		TeamID: 10,
	},
	{
		PlayerID: 16795,
		FirstName: "Donovan",
		LastName: "Smith",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16795.png",
		TeamID: 16,
	},
	{
		PlayerID: 16796,
		FirstName: "Mario",
		LastName: "Edwards Jr.",
		Team: "SEA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16796.png",
		TeamID: 30,
	},
	{
		PlayerID: 16799,
		FirstName: "Preston",
		LastName: "Smith",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16799.png",
		TeamID: 12,
	},
	{
		PlayerID: 16806,
		FirstName: "Eric",
		LastName: "Kendricks",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16806.png",
		TeamID: 29,
	},
	{
		PlayerID: 16809,
		FirstName: "Denzel",
		LastName: "Perryman",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16809.png",
		TeamID: 13,
	},
	{
		PlayerID: 16810,
		FirstName: "Mitch",
		LastName: "Morse",
		Team: "BUF",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16810.png",
		TeamID: 4,
	},
	{
		PlayerID: 16811,
		FirstName: "Ronald",
		LastName: "Darby",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16811.png",
		TeamID: 3,
	},
	{
		PlayerID: 16813,
		FirstName: "Jordan",
		LastName: "Phillips",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16813.png",
		TeamID: 4,
	},
	{
		PlayerID: 16815,
		FirstName: "Ameer",
		LastName: "Abdullah",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16815.png",
		TeamID: 25,
	},
	{
		PlayerID: 16818,
		FirstName: "Rob",
		LastName: "Havenstein",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16818.png",
		TeamID: 32,
	},
	{
		PlayerID: 16819,
		FirstName: "Markus",
		LastName: "Golden",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16819.png",
		TeamID: 28,
	},
	{
		PlayerID: 16821,
		FirstName: "Randy",
		LastName: "Gregory",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16821.png",
		TeamID: 10,
	},
	{
		PlayerID: 16824,
		FirstName: "Frank",
		LastName: "Clark",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16824.png",
		TeamID: 10,
	},
	{
		PlayerID: 16830,
		FirstName: "Tyler",
		LastName: "Lockett",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16830.png",
		TeamID: 30,
	},
	{
		PlayerID: 16832,
		FirstName: "Hroniss",
		LastName: "Grasu",
		Team: "LV",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16832.png",
		TeamID: 25,
	},
	{
		PlayerID: 16837,
		FirstName: "Chris",
		LastName: "Conley",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16837.png",
		TeamID: 31,
	},
	{
		PlayerID: 16845,
		FirstName: "Jordan",
		LastName: "Hicks",
		Team: "MIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16845.png",
		TeamID: 20,
	},
	{
		PlayerID: 16846,
		FirstName: "Tyler",
		LastName: "Kroft",
		Team: "MIA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16846.png",
		TeamID: 19,
	},
	{
		PlayerID: 16849,
		FirstName: "Danielle",
		LastName: "Hunter",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16849.png",
		TeamID: 20,
	},
	{
		PlayerID: 16851,
		FirstName: "Carl",
		LastName: "Davis Jr.",
		Team: "SEA",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16851.png",
		TeamID: 30,
	},
	{
		PlayerID: 16854,
		FirstName: "Henry",
		LastName: "Anderson",
		Team: "CAR",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16854.png",
		TeamID: 5,
	},
	{
		PlayerID: 16855,
		FirstName: "Ty",
		LastName: "Montgomery II",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16855.png",
		TeamID: 21,
	},
	{
		PlayerID: 16859,
		FirstName: "Steven",
		LastName: "Nelson",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16859.png",
		TeamID: 13,
	},
	{
		PlayerID: 16861,
		FirstName: "Angelo",
		LastName: "Blackson",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16861.png",
		TeamID: 15,
	},
	{
		PlayerID: 16862,
		FirstName: "Trey",
		LastName: "Flowers",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16862.png",
		TeamID: 21,
	},
	{
		PlayerID: 16866,
		FirstName: "Jamison",
		LastName: "Crowder",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16866.png",
		TeamID: 35,
	},
	{
		PlayerID: 16878,
		FirstName: "Blake",
		LastName: "Bell",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16878.png",
		TeamID: 16,
	},
	{
		PlayerID: 16883,
		FirstName: "Za'Darius",
		LastName: "Smith",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16883.png",
		TeamID: 8,
	},
	{
		PlayerID: 16885,
		FirstName: "Kwon",
		LastName: "Alexander",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16885.png",
		TeamID: 28,
	},
	{
		PlayerID: 16889,
		FirstName: "Jon",
		LastName: "Feliciano",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16889.png",
		TeamID: 31,
	},
	{
		PlayerID: 16892,
		FirstName: "Shaq",
		LastName: "Mason",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16892.png",
		TeamID: 13,
	},
	{
		PlayerID: 16894,
		FirstName: "Max",
		LastName: "Garcia",
		Team: "NO",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16894.png",
		TeamID: 22,
	},
	{
		PlayerID: 16895,
		FirstName: "Mark",
		LastName: "Glowinski",
		Team: "NYG",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16895.png",
		TeamID: 23,
	},
	{
		PlayerID: 16902,
		FirstName: "Adrian",
		LastName: "Amos",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16902.png",
		TeamID: 24,
	},
	{
		PlayerID: 16903,
		FirstName: "MyCole",
		LastName: "Pruitt",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16903.png",
		TeamID: 2,
	},
	{
		PlayerID: 16905,
		FirstName: "Bobby",
		LastName: "McCain",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16905.png",
		TeamID: 23,
	},
	{
		PlayerID: 16906,
		FirstName: "Stefon",
		LastName: "Diggs",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16906.png",
		TeamID: 4,
	},
	{
		PlayerID: 16917,
		FirstName: "C.J.",
		LastName: "Uzomah",
		Team: "NYJ",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16917.png",
		TeamID: 24,
	},
	{
		PlayerID: 16925,
		FirstName: "Bradley",
		LastName: "Pinion",
		Team: "ATL",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16925.png",
		TeamID: 2,
	},
	{
		PlayerID: 16926,
		FirstName: "Joe",
		LastName: "Cardona",
		Team: "NE",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16926.png",
		TeamID: 21,
	},
	{
		PlayerID: 16928,
		FirstName: "Michael",
		LastName: "Burton",
		Team: "DEN",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16928.png",
		TeamID: 10,
	},
	{
		PlayerID: 16929,
		FirstName: "David",
		LastName: "Mayo",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16929.png",
		TeamID: 35,
	},
	{
		PlayerID: 16960,
		FirstName: "Quandre",
		LastName: "Diggs",
		Team: "SEA",
		Position: "FS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16960.png",
		TeamID: 30,
	},
	{
		PlayerID: 16964,
		FirstName: "Darren",
		LastName: "Waller",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16964.png",
		TeamID: 23,
	},
	{
		PlayerID: 16976,
		FirstName: "Christian",
		LastName: "Covington",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16976.png",
		TeamID: 29,
	},
	{
		PlayerID: 16981,
		FirstName: "Austin",
		LastName: "Reiter",
		Team: "KC",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16981.png",
		TeamID: 16,
	},
	{
		PlayerID: 17003,
		FirstName: "Trent",
		LastName: "Brown",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17003.png",
		TeamID: 21,
	},
	{
		PlayerID: 17005,
		FirstName: "Geoff",
		LastName: "Swaim",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17005.png",
		TeamID: 1,
	},
	{
		PlayerID: 17059,
		FirstName: "Grady",
		LastName: "Jarrett",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17059.png",
		TeamID: 2,
	},
	{
		PlayerID: 17082,
		FirstName: "T.Y.",
		LastName: "McGill",
		Team: "SF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17082.png",
		TeamID: 31,
	},
	{
		PlayerID: 17085,
		FirstName: "Alex",
		LastName: "Singleton",
		Team: "DEN",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17085.png",
		TeamID: 10,
	},
	{
		PlayerID: 17145,
		FirstName: "Neville",
		LastName: "Hewitt",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17145.png",
		TeamID: 13,
	},
	{
		PlayerID: 17147,
		FirstName: "Dean",
		LastName: "Marlowe",
		Team: "LAC",
		Position: "FS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17147.png",
		TeamID: 29,
	},
	{
		PlayerID: 17179,
		FirstName: "Taylor",
		LastName: "Heinicke",
		Team: "ATL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17179.png",
		TeamID: 2,
	},
	{
		PlayerID: 17215,
		FirstName: "Jason",
		LastName: "Myers",
		Team: "SEA",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17215.png",
		TeamID: 30,
	},
	{
		PlayerID: 17217,
		FirstName: "Raheem",
		LastName: "Mostert",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17217.png",
		TeamID: 19,
	},
	{
		PlayerID: 17218,
		FirstName: "DeAndre",
		LastName: "Carter",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17218.png",
		TeamID: 25,
	},
	{
		PlayerID: 17264,
		FirstName: "Efe",
		LastName: "Obada",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17264.png",
		TeamID: 35,
	},
	{
		PlayerID: 17294,
		FirstName: "Troy",
		LastName: "Hill",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17294.png",
		TeamID: 5,
	},
	{
		PlayerID: 17295,
		FirstName: "DeShawn",
		LastName: "Williams",
		Team: "CAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17295.png",
		TeamID: 5,
	},
	{
		PlayerID: 17337,
		FirstName: "C.J.",
		LastName: "Goodwin",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17337.png",
		TeamID: 9,
	},
	{
		PlayerID: 17443,
		FirstName: "David",
		LastName: "Andrews",
		Team: "NE",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17443.png",
		TeamID: 21,
	},
	{
		PlayerID: 17490,
		FirstName: "Kendall",
		LastName: "Lamm",
		Team: "MIA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17490.png",
		TeamID: 19,
	},
	{
		PlayerID: 17491,
		FirstName: "Greg",
		LastName: "Mancz",
		Team: "BUF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17491.png",
		TeamID: 4,
	},
	{
		PlayerID: 17512,
		FirstName: "Rakeem",
		LastName: "Nu\u00f1ez-Roches",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17512.png",
		TeamID: 23,
	},
	{
		PlayerID: 17527,
		FirstName: "Rick",
		LastName: "Lovato",
		Team: "PHI",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17527.png",
		TeamID: 26,
	},
	{
		PlayerID: 17691,
		FirstName: "Brandon",
		LastName: "Stephens",
		Team: "BAL",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17691.png",
		TeamID: 3,
	},
	{
		PlayerID: 17743,
		FirstName: "Chris",
		LastName: "Reed",
		Team: "MIN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17743.png",
		TeamID: 20,
	},
	{
		PlayerID: 17762,
		FirstName: "Chris",
		LastName: "Manhertz",
		Team: "DEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17762.png",
		TeamID: 10,
	},
	{
		PlayerID: 17914,
		FirstName: "Laquon",
		LastName: "Treadwell",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17914.png",
		TeamID: 3,
	},
	{
		PlayerID: 17915,
		FirstName: "Joey",
		LastName: "Bosa",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17915.png",
		TeamID: 29,
	},
	{
		PlayerID: 17918,
		FirstName: "Laremy",
		LastName: "Tunsil",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17918.png",
		TeamID: 13,
	},
	{
		PlayerID: 17919,
		FirstName: "Jalen",
		LastName: "Ramsey",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17919.png",
		TeamID: 19,
	},
	{
		PlayerID: 17921,
		FirstName: "Ronnie",
		LastName: "Stanley",
		Team: "BAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17921.png",
		TeamID: 3,
	},
	{
		PlayerID: 17922,
		FirstName: "Jared",
		LastName: "Goff",
		Team: "DET",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17922.png",
		TeamID: 11,
	},
	{
		PlayerID: 17923,
		FirstName: "Ezekiel",
		LastName: "Elliott",
		Team: "NE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17923.png",
		TeamID: 21,
	},
	{
		PlayerID: 17926,
		FirstName: "Jaylon",
		LastName: "Smith",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17926.png",
		TeamID: 22,
	},
	{
		PlayerID: 17933,
		FirstName: "DeForest",
		LastName: "Buckner",
		Team: "IND",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17933.png",
		TeamID: 14,
	},
	{
		PlayerID: 17935,
		FirstName: "Leonard",
		LastName: "Floyd",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17935.png",
		TeamID: 4,
	},
	{
		PlayerID: 17936,
		FirstName: "Jack",
		LastName: "Conklin",
		Team: "CLE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17936.png",
		TeamID: 8,
	},
	{
		PlayerID: 17942,
		FirstName: "Keanu",
		LastName: "Neal",
		Team: "PIT",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17942.png",
		TeamID: 28,
	},
	{
		PlayerID: 17943,
		FirstName: "Shaq",
		LastName: "Lawson",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17943.png",
		TeamID: 4,
	},
	{
		PlayerID: 17946,
		FirstName: "Taylor",
		LastName: "Decker",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17946.png",
		TeamID: 11,
	},
	{
		PlayerID: 17947,
		FirstName: "Kenny",
		LastName: "Clark",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17947.png",
		TeamID: 12,
	},
	{
		PlayerID: 17948,
		FirstName: "Ryan",
		LastName: "Kelly",
		Team: "IND",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17948.png",
		TeamID: 14,
	},
	{
		PlayerID: 17949,
		FirstName: "Sheldon",
		LastName: "Rankins",
		Team: "HOU",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17949.png",
		TeamID: 13,
	},
	{
		PlayerID: 17950,
		FirstName: "Eli",
		LastName: "Apple",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17950.png",
		TeamID: 19,
	},
	{
		PlayerID: 17953,
		FirstName: "Artie",
		LastName: "Burns",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17953.png",
		TeamID: 30,
	},
	{
		PlayerID: 17954,
		FirstName: "Germain",
		LastName: "Ifedi",
		Team: "BUF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17954.png",
		TeamID: 4,
	},
	{
		PlayerID: 17958,
		FirstName: "Emmanuel",
		LastName: "Ogbah",
		Team: "MIA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17958.png",
		TeamID: 19,
	},
	{
		PlayerID: 17959,
		FirstName: "Derrick",
		LastName: "Henry",
		Team: "TEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17959.png",
		TeamID: 34,
	},
	{
		PlayerID: 17960,
		FirstName: "Michael",
		LastName: "Thomas",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17960.png",
		TeamID: 22,
	},
	{
		PlayerID: 17961,
		FirstName: "Sterling",
		LastName: "Shepard",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17961.png",
		TeamID: 23,
	},
	{
		PlayerID: 17963,
		FirstName: "Austin",
		LastName: "Hooper",
		Team: "LV",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17963.png",
		TeamID: 25,
	},
	{
		PlayerID: 17968,
		FirstName: "Andrew",
		LastName: "Billings",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17968.png",
		TeamID: 6,
	},
	{
		PlayerID: 17975,
		FirstName: "Hunter",
		LastName: "Henry",
		Team: "NE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17975.png",
		TeamID: 21,
	},
	{
		PlayerID: 17976,
		FirstName: "Xavien",
		LastName: "Howard",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17976.png",
		TeamID: 19,
	},
	{
		PlayerID: 17978,
		FirstName: "Jihad",
		LastName: "Ward",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17978.png",
		TeamID: 23,
	},
	{
		PlayerID: 17979,
		FirstName: "A'Shawn",
		LastName: "Robinson",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17979.png",
		TeamID: 23,
	},
	{
		PlayerID: 17981,
		FirstName: "Jarran",
		LastName: "Reed",
		Team: "SEA",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17981.png",
		TeamID: 30,
	},
	{
		PlayerID: 17983,
		FirstName: "Deion",
		LastName: "Jones",
		Team: "CAR",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17983.png",
		TeamID: 5,
	},
	{
		PlayerID: 17986,
		FirstName: "Tyler",
		LastName: "Boyd",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17986.png",
		TeamID: 7,
	},
	{
		PlayerID: 17987,
		FirstName: "Cody",
		LastName: "Whitehair",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17987.png",
		TeamID: 6,
	},
	{
		PlayerID: 17991,
		FirstName: "Vonn",
		LastName: "Bell",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17991.png",
		TeamID: 5,
	},
	{
		PlayerID: 17992,
		FirstName: "James",
		LastName: "Bradberry",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17992.png",
		TeamID: 26,
	},
	{
		PlayerID: 17993,
		FirstName: "Adam",
		LastName: "Gotsis",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17993.png",
		TeamID: 15,
	},
	{
		PlayerID: 17994,
		FirstName: "Kevin",
		LastName: "Byard",
		Team: "TEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17994.png",
		TeamID: 34,
	},
	{
		PlayerID: 17997,
		FirstName: "Maliek",
		LastName: "Collins",
		Team: "HOU",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17997.png",
		TeamID: 13,
	},
	{
		PlayerID: 17999,
		FirstName: "Yannick",
		LastName: "Ngakoue",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17999.png",
		TeamID: 6,
	},
	{
		PlayerID: 18002,
		FirstName: "Jonathan",
		LastName: "Bullard",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18002.png",
		TeamID: 20,
	},
	{
		PlayerID: 18003,
		FirstName: "Kenyan",
		LastName: "Drake",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18003.png",
		TeamID: 3,
	},
	{
		PlayerID: 18007,
		FirstName: "Daryl",
		LastName: "Worley",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18007.png",
		TeamID: 3,
	},
	{
		PlayerID: 18008,
		FirstName: "Joe",
		LastName: "Thuney",
		Team: "KC",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18008.png",
		TeamID: 16,
	},
	{
		PlayerID: 18009,
		FirstName: "Isaac",
		LastName: "Seumalo",
		Team: "PIT",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18009.png",
		TeamID: 28,
	},
	{
		PlayerID: 18011,
		FirstName: "Le'Raven",
		LastName: "Clark",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18011.png",
		TeamID: 26,
	},
	{
		PlayerID: 18013,
		FirstName: "Kendall",
		LastName: "Fuller",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18013.png",
		TeamID: 35,
	},
	{
		PlayerID: 18015,
		FirstName: "Nick",
		LastName: "Vigil",
		Team: "MIN",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18015.png",
		TeamID: 20,
	},
	{
		PlayerID: 18017,
		FirstName: "Javon",
		LastName: "Hargrave",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18017.png",
		TeamID: 31,
	},
	{
		PlayerID: 18018,
		FirstName: "Jacoby",
		LastName: "Brissett",
		Team: "WAS",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18018.png",
		TeamID: 35,
	},
	{
		PlayerID: 18019,
		FirstName: "Nick",
		LastName: "Vannett",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18019.png",
		TeamID: 29,
	},
	{
		PlayerID: 18020,
		FirstName: "Graham",
		LastName: "Glasgow",
		Team: "DET",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18020.png",
		TeamID: 11,
	},
	{
		PlayerID: 18023,
		FirstName: "Justin",
		LastName: "Simmons",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18023.png",
		TeamID: 10,
	},
	{
		PlayerID: 18026,
		FirstName: "Sheldon",
		LastName: "Day",
		Team: "MIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18026.png",
		TeamID: 20,
	},
	{
		PlayerID: 18029,
		FirstName: "Eric",
		LastName: "Murray",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18029.png",
		TeamID: 13,
	},
	{
		PlayerID: 18030,
		FirstName: "Chris",
		LastName: "Moore",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18030.png",
		TeamID: 34,
	},
	{
		PlayerID: 18032,
		FirstName: "Tyler",
		LastName: "Higbee",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18032.png",
		TeamID: 32,
	},
	{
		PlayerID: 18033,
		FirstName: "Miles",
		LastName: "Killebrew",
		Team: "PIT",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18033.png",
		TeamID: 28,
	},
	{
		PlayerID: 18037,
		FirstName: "De'Vondre",
		LastName: "Campbell",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18037.png",
		TeamID: 12,
	},
	{
		PlayerID: 18038,
		FirstName: "Hassan",
		LastName: "Ridgeway",
		Team: "HOU",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18038.png",
		TeamID: 13,
	},
	{
		PlayerID: 18042,
		FirstName: "David",
		LastName: "Onyemata",
		Team: "ATL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18042.png",
		TeamID: 2,
	},
	{
		PlayerID: 18045,
		FirstName: "Deon",
		LastName: "Bush",
		Team: "KC",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18045.png",
		TeamID: 16,
	},
	{
		PlayerID: 18047,
		FirstName: "Demarcus",
		LastName: "Robinson",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18047.png",
		TeamID: 32,
	},
	{
		PlayerID: 18055,
		FirstName: "Dak",
		LastName: "Prescott",
		Team: "DAL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18055.png",
		TeamID: 9,
	},
	{
		PlayerID: 18056,
		FirstName: "Dean",
		LastName: "Lowry",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18056.png",
		TeamID: 20,
	},
	{
		PlayerID: 18062,
		FirstName: "Connor",
		LastName: "McGovern",
		Team: "NYJ",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18062.png",
		TeamID: 24,
	},
	{
		PlayerID: 18064,
		FirstName: "Matthew",
		LastName: "Judon",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18064.png",
		TeamID: 21,
	},
	{
		PlayerID: 18065,
		FirstName: "Quinton",
		LastName: "Jefferson",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18065.png",
		TeamID: 24,
	},
	{
		PlayerID: 18081,
		FirstName: "Halapoulivaati",
		LastName: "Vaitai",
		Team: "DET",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18081.png",
		TeamID: 11,
	},
	{
		PlayerID: 18082,
		FirstName: "Tyreek",
		LastName: "Hill",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18082.png",
		TeamID: 19,
	},
	{
		PlayerID: 18083,
		FirstName: "DJ",
		LastName: "Reader",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18083.png",
		TeamID: 7,
	},
	{
		PlayerID: 18102,
		FirstName: "DeAndre",
		LastName: "Houston-Carson",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18102.png",
		TeamID: 13,
	},
	{
		PlayerID: 18103,
		FirstName: "Jakeem",
		LastName: "Grant Sr.",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18103.png",
		TeamID: 8,
	},
	{
		PlayerID: 18104,
		FirstName: "Nate",
		LastName: "Sudfeld",
		Team: "DET",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18104.png",
		TeamID: 11,
	},
	{
		PlayerID: 18106,
		FirstName: "Anthony",
		LastName: "Brown",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18106.png",
		TeamID: 31,
	},
	{
		PlayerID: 18112,
		FirstName: "Wes",
		LastName: "Schweitzer",
		Team: "NYJ",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18112.png",
		TeamID: 24,
	},
	{
		PlayerID: 18118,
		FirstName: "Brandon",
		LastName: "Allen",
		Team: "SF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18118.png",
		TeamID: 31,
	},
	{
		PlayerID: 18123,
		FirstName: "Jeff",
		LastName: "Driskel",
		Team: "ARI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18123.png",
		TeamID: 1,
	},
	{
		PlayerID: 18124,
		FirstName: "Kamu",
		LastName: "Grugier-Hill",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18124.png",
		TeamID: 5,
	},
	{
		PlayerID: 18130,
		FirstName: "Elandon",
		LastName: "Roberts",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18130.png",
		TeamID: 28,
	},
	{
		PlayerID: 18131,
		FirstName: "Joey",
		LastName: "Hunt",
		Team: "SEA",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18131.png",
		TeamID: 30,
	},
	{
		PlayerID: 18135,
		FirstName: "Kevon",
		LastName: "Seymour",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18135.png",
		TeamID: 3,
	},
	{
		PlayerID: 18137,
		FirstName: "Ted",
		LastName: "Karras",
		Team: "CIN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18137.png",
		TeamID: 7,
	},
	{
		PlayerID: 18144,
		FirstName: "Riley",
		LastName: "Dixon",
		Team: "DEN",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18144.png",
		TeamID: 10,
	},
	{
		PlayerID: 18149,
		FirstName: "Jalen",
		LastName: "Mills",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18149.png",
		TeamID: 21,
	},
	{
		PlayerID: 18152,
		FirstName: "Dwayne",
		LastName: "Washington",
		Team: "DEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18152.png",
		TeamID: 10,
	},
	{
		PlayerID: 18160,
		FirstName: "Jayron",
		LastName: "Kearse",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18160.png",
		TeamID: 9,
	},
	{
		PlayerID: 18162,
		FirstName: "Tyler",
		LastName: "Matakevich",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18162.png",
		TeamID: 4,
	},
	{
		PlayerID: 18177,
		FirstName: "Jonathan",
		LastName: "Jones",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18177.png",
		TeamID: 21,
	},
	{
		PlayerID: 18187,
		FirstName: "Robbie",
		LastName: "Chosen",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18187.png",
		TeamID: 19,
	},
	{
		PlayerID: 18197,
		FirstName: "Alex",
		LastName: "Erickson",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18197.png",
		TeamID: 29,
	},
	{
		PlayerID: 18203,
		FirstName: "Jake",
		LastName: "Brendel",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18203.png",
		TeamID: 31,
	},
	{
		PlayerID: 18215,
		FirstName: "Ka'imi",
		LastName: "Fairbairn",
		Team: "HOU",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18215.png",
		TeamID: 13,
	},
	{
		PlayerID: 18268,
		FirstName: "Romeo",
		LastName: "Okwara",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18268.png",
		TeamID: 11,
	},
	{
		PlayerID: 18292,
		FirstName: "Roy",
		LastName: "Robertson-Harris",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18292.png",
		TeamID: 15,
	},
	{
		PlayerID: 18316,
		FirstName: "Mike",
		LastName: "Hilton",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18316.png",
		TeamID: 7,
	},
	{
		PlayerID: 18331,
		FirstName: "Chris",
		LastName: "Jones",
		Team: "KC",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18331.png",
		TeamID: 16,
	},
	{
		PlayerID: 18333,
		FirstName: "Austin",
		LastName: "Johnson",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18333.png",
		TeamID: 29,
	},
	{
		PlayerID: 18355,
		FirstName: "Reid",
		LastName: "Ferguson",
		Team: "BUF",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18355.png",
		TeamID: 4,
	},
	{
		PlayerID: 18381,
		FirstName: "Luke",
		LastName: "Rhodes",
		Team: "IND",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18381.png",
		TeamID: 14,
	},
	{
		PlayerID: 18392,
		FirstName: "Matthias",
		LastName: "Farley",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18392.png",
		TeamID: 5,
	},
	{
		PlayerID: 18416,
		FirstName: "Justin",
		LastName: "Murray",
		Team: "TEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18416.png",
		TeamID: 34,
	},
	{
		PlayerID: 18421,
		FirstName: "Kyle",
		LastName: "Peko",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18421.png",
		TeamID: 34,
	},
	{
		PlayerID: 18422,
		FirstName: "Kalif",
		LastName: "Raymond",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18422.png",
		TeamID: 11,
	},
	{
		PlayerID: 18478,
		FirstName: "Wil",
		LastName: "Lutz",
		Team: "DEN",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18478.png",
		TeamID: 10,
	},
	{
		PlayerID: 18481,
		FirstName: "Michael",
		LastName: "Pierce",
		Team: "BAL",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18481.png",
		TeamID: 3,
	},
	{
		PlayerID: 18555,
		FirstName: "Morgan",
		LastName: "Fox",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18555.png",
		TeamID: 29,
	},
	{
		PlayerID: 18559,
		FirstName: "Cory",
		LastName: "Littleton",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18559.png",
		TeamID: 13,
	},
	{
		PlayerID: 18599,
		FirstName: "George",
		LastName: "Fant",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18599.png",
		TeamID: 13,
	},
	{
		PlayerID: 18652,
		FirstName: "C.J.",
		LastName: "Ham",
		Team: "MIN",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18652.png",
		TeamID: 20,
	},
	{
		PlayerID: 18658,
		FirstName: "Antonio",
		LastName: "Hamilton Sr.",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18658.png",
		TeamID: 1,
	},
	{
		PlayerID: 18704,
		FirstName: "Zach",
		LastName: "Wood",
		Team: "NO",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18704.png",
		TeamID: 22,
	},
	{
		PlayerID: 18710,
		FirstName: "Lucas",
		LastName: "Patrick",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18710.png",
		TeamID: 6,
	},
	{
		PlayerID: 18807,
		FirstName: "Myles",
		LastName: "Garrett",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18807.png",
		TeamID: 8,
	},
	{
		PlayerID: 18811,
		FirstName: "Mitch",
		LastName: "Trubisky",
		Team: "PIT",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18811.png",
		TeamID: 28,
	},
	{
		PlayerID: 18825,
		FirstName: "Zach",
		LastName: "Triner",
		Team: "TB",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18825.png",
		TeamID: 33,
	},
	{
		PlayerID: 18851,
		FirstName: "Taybor",
		LastName: "Pepper",
		Team: "SF",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18851.png",
		TeamID: 31,
	},
	{
		PlayerID: 18857,
		FirstName: "Deshaun",
		LastName: "Watson",
		Team: "CLE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18857.png",
		TeamID: 8,
	},
	{
		PlayerID: 18858,
		FirstName: "Joe",
		LastName: "Mixon",
		Team: "CIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18858.png",
		TeamID: 7,
	},
	{
		PlayerID: 18872,
		FirstName: "Dalvin",
		LastName: "Cook",
		Team: "NYJ",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18872.png",
		TeamID: 24,
	},
	{
		PlayerID: 18875,
		FirstName: "Jonathan",
		LastName: "Allen",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18875.png",
		TeamID: 35,
	},
	{
		PlayerID: 18876,
		FirstName: "David",
		LastName: "Njoku",
		Team: "CLE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18876.png",
		TeamID: 8,
	},
	{
		PlayerID: 18877,
		FirstName: "Christian",
		LastName: "McCaffrey",
		Team: "SF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18877.png",
		TeamID: 31,
	},
	{
		PlayerID: 18878,
		FirstName: "Alvin",
		LastName: "Kamara",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18878.png",
		TeamID: 22,
	},
	{
		PlayerID: 18880,
		FirstName: "Chris",
		LastName: "Godwin",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18880.png",
		TeamID: 33,
	},
	{
		PlayerID: 18882,
		FirstName: "Cooper",
		LastName: "Kupp",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18882.png",
		TeamID: 32,
	},
	{
		PlayerID: 18883,
		FirstName: "JuJu",
		LastName: "Smith-Schuster",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18883.png",
		TeamID: 21,
	},
	{
		PlayerID: 18890,
		FirstName: "Patrick",
		LastName: "Mahomes",
		Team: "KC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18890.png",
		TeamID: 16,
	},
	{
		PlayerID: 18899,
		FirstName: "Garett",
		LastName: "Bolles",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18899.png",
		TeamID: 10,
	},
	{
		PlayerID: 18900,
		FirstName: "Mo",
		LastName: "Alie-Cox",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18900.png",
		TeamID: 14,
	},
	{
		PlayerID: 18902,
		FirstName: "Jabrill",
		LastName: "Peppers",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18902.png",
		TeamID: 21,
	},
	{
		PlayerID: 18904,
		FirstName: "Solomon",
		LastName: "Thomas",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18904.png",
		TeamID: 24,
	},
	{
		PlayerID: 18905,
		FirstName: "Marshon",
		LastName: "Lattimore",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18905.png",
		TeamID: 22,
	},
	{
		PlayerID: 18909,
		FirstName: "Haason",
		LastName: "Reddick",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18909.png",
		TeamID: 26,
	},
	{
		PlayerID: 18910,
		FirstName: "Cam",
		LastName: "Robinson",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18910.png",
		TeamID: 15,
	},
	{
		PlayerID: 18911,
		FirstName: "Derek",
		LastName: "Barnett",
		Team: "PHI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18911.png",
		TeamID: 26,
	},
	{
		PlayerID: 18912,
		FirstName: "Evan",
		LastName: "Engram",
		Team: "JAX",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18912.png",
		TeamID: 15,
	},
	{
		PlayerID: 18913,
		FirstName: "Jarrad",
		LastName: "Davis",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18913.png",
		TeamID: 23,
	},
	{
		PlayerID: 18914,
		FirstName: "Mike",
		LastName: "Williams",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18914.png",
		TeamID: 29,
	},
	{
		PlayerID: 18916,
		FirstName: "T.J.",
		LastName: "Watt",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18916.png",
		TeamID: 28,
	},
	{
		PlayerID: 18917,
		FirstName: "Marlon",
		LastName: "Humphrey",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18917.png",
		TeamID: 3,
	},
	{
		PlayerID: 18918,
		FirstName: "Tre'Davious",
		LastName: "White",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18918.png",
		TeamID: 4,
	},
	{
		PlayerID: 18920,
		FirstName: "Malik",
		LastName: "Hooker",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18920.png",
		TeamID: 9,
	},
	{
		PlayerID: 18921,
		FirstName: "Charles",
		LastName: "Harris",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18921.png",
		TeamID: 11,
	},
	{
		PlayerID: 18922,
		FirstName: "Ryan",
		LastName: "Ramczyk",
		Team: "NO",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18922.png",
		TeamID: 22,
	},
	{
		PlayerID: 18923,
		FirstName: "Jamal",
		LastName: "Adams",
		Team: "SEA",
		Position: "SS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18923.png",
		TeamID: 30,
	},
	{
		PlayerID: 18924,
		FirstName: "Adoree'",
		LastName: "Jackson",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18924.png",
		TeamID: 23,
	},
	{
		PlayerID: 18926,
		FirstName: "Zay",
		LastName: "Jones",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18926.png",
		TeamID: 15,
	},
	{
		PlayerID: 18927,
		FirstName: "Budda",
		LastName: "Baker",
		Team: "ARI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18927.png",
		TeamID: 1,
	},
	{
		PlayerID: 18928,
		FirstName: "Curtis",
		LastName: "Samuel",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18928.png",
		TeamID: 35,
	},
	{
		PlayerID: 18929,
		FirstName: "Sidney",
		LastName: "Jones IV",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18929.png",
		TeamID: 7,
	},
	{
		PlayerID: 18930,
		FirstName: "Tyus",
		LastName: "Bowser",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18930.png",
		TeamID: 3,
	},
	{
		PlayerID: 18932,
		FirstName: "DeMarcus",
		LastName: "Walker",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18932.png",
		TeamID: 6,
	},
	{
		PlayerID: 18933,
		FirstName: "Teez",
		LastName: "Tabor",
		Team: "SEA",
		Position: "SS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18933.png",
		TeamID: 30,
	},
	{
		PlayerID: 18935,
		FirstName: "Gerald",
		LastName: "Everett",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18935.png",
		TeamID: 29,
	},
	{
		PlayerID: 18936,
		FirstName: "Raekwon",
		LastName: "McMillan",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18936.png",
		TeamID: 21,
	},
	{
		PlayerID: 18937,
		FirstName: "Marcus",
		LastName: "Williams",
		Team: "BAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18937.png",
		TeamID: 3,
	},
	{
		PlayerID: 18938,
		FirstName: "Dalvin",
		LastName: "Tomlinson",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18938.png",
		TeamID: 8,
	},
	{
		PlayerID: 18939,
		FirstName: "Marcus",
		LastName: "Maye",
		Team: "NO",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18939.png",
		TeamID: 22,
	},
	{
		PlayerID: 18942,
		FirstName: "Justin",
		LastName: "Evans",
		Team: "PHI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18942.png",
		TeamID: 26,
	},
	{
		PlayerID: 18944,
		FirstName: "Kareem",
		LastName: "Hunt",
		Team: "CLE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18944.png",
		TeamID: 8,
	},
	{
		PlayerID: 18945,
		FirstName: "Duke",
		LastName: "Riley",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18945.png",
		TeamID: 19,
	},
	{
		PlayerID: 18947,
		FirstName: "Chris",
		LastName: "Wormley",
		Team: "CAR",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18947.png",
		TeamID: 5,
	},
	{
		PlayerID: 18948,
		FirstName: "Dion",
		LastName: "Dawkins",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18948.png",
		TeamID: 4,
	},
	{
		PlayerID: 18950,
		FirstName: "Taylor",
		LastName: "Moton",
		Team: "CAR",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18950.png",
		TeamID: 5,
	},
	{
		PlayerID: 18952,
		FirstName: "Larry",
		LastName: "Ogunjobi",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18952.png",
		TeamID: 28,
	},
	{
		PlayerID: 18953,
		FirstName: "Chidobe",
		LastName: "Awuzie",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18953.png",
		TeamID: 7,
	},
	{
		PlayerID: 18956,
		FirstName: "Zach",
		LastName: "Cunningham",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18956.png",
		TeamID: 26,
	},
	{
		PlayerID: 18957,
		FirstName: "D'Onta",
		LastName: "Foreman",
		Team: "CHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18957.png",
		TeamID: 6,
	},
	{
		PlayerID: 18959,
		FirstName: "Dawuane",
		LastName: "Smoot",
		Team: "JAX",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18959.png",
		TeamID: 15,
	},
	{
		PlayerID: 18960,
		FirstName: "Tanoh",
		LastName: "Kpassagnon",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18960.png",
		TeamID: 22,
	},
	{
		PlayerID: 18961,
		FirstName: "Pat",
		LastName: "Elflein",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18961.png",
		TeamID: 1,
	},
	{
		PlayerID: 18963,
		FirstName: "Derek",
		LastName: "Rivers",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18963.png",
		TeamID: 13,
	},
	{
		PlayerID: 18964,
		FirstName: "Alex",
		LastName: "Anzalone",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18964.png",
		TeamID: 11,
	},
	{
		PlayerID: 18968,
		FirstName: "Dan",
		LastName: "Feeney",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18968.png",
		TeamID: 6,
	},
	{
		PlayerID: 18969,
		FirstName: "Ethan",
		LastName: "Pocic",
		Team: "CLE",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18969.png",
		TeamID: 8,
	},
	{
		PlayerID: 18970,
		FirstName: "Ahkello",
		LastName: "Witherspoon",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18970.png",
		TeamID: 32,
	},
	{
		PlayerID: 18972,
		FirstName: "Fabian",
		LastName: "Moreau",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18972.png",
		TeamID: 10,
	},
	{
		PlayerID: 18973,
		FirstName: "C.J.",
		LastName: "Beathard",
		Team: "JAX",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18973.png",
		TeamID: 15,
	},
	{
		PlayerID: 18975,
		FirstName: "Jourdan",
		LastName: "Lewis",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18975.png",
		TeamID: 9,
	},
	{
		PlayerID: 18978,
		FirstName: "Montravius",
		LastName: "Adams",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18978.png",
		TeamID: 28,
	},
	{
		PlayerID: 18979,
		FirstName: "John",
		LastName: "Johnson III",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18979.png",
		TeamID: 32,
	},
	{
		PlayerID: 18981,
		FirstName: "Trey",
		LastName: "Hendrickson",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18981.png",
		TeamID: 7,
	},
	{
		PlayerID: 18982,
		FirstName: "Rasul",
		LastName: "Douglas",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18982.png",
		TeamID: 12,
	},
	{
		PlayerID: 18983,
		FirstName: "James",
		LastName: "Conner",
		Team: "ARI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18983.png",
		TeamID: 1,
	},
	{
		PlayerID: 18984,
		FirstName: "Cameron",
		LastName: "Sutton",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18984.png",
		TeamID: 11,
	},
	{
		PlayerID: 18986,
		FirstName: "Shaquill",
		LastName: "Griffin",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18986.png",
		TeamID: 13,
	},
	{
		PlayerID: 18990,
		FirstName: "Jonnu",
		LastName: "Smith",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18990.png",
		TeamID: 2,
	},
	{
		PlayerID: 18993,
		FirstName: "Samaje",
		LastName: "Perine",
		Team: "DEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18993.png",
		TeamID: 10,
	},
	{
		PlayerID: 18994,
		FirstName: "Carl",
		LastName: "Lawson",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18994.png",
		TeamID: 24,
	},
	{
		PlayerID: 18995,
		FirstName: "Jamaal",
		LastName: "Williams",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18995.png",
		TeamID: 22,
	},
	{
		PlayerID: 18998,
		FirstName: "Marlon",
		LastName: "Mack",
		Team: "ARI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18998.png",
		TeamID: 1,
	},
	{
		PlayerID: 19001,
		FirstName: "Sean",
		LastName: "Harlow",
		Team: "DAL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19001.png",
		TeamID: 9,
	},
	{
		PlayerID: 19003,
		FirstName: "Tarik",
		LastName: "Cohen",
		Team: "CAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19003.png",
		TeamID: 5,
	},
	{
		PlayerID: 19004,
		FirstName: "Eddie",
		LastName: "Jackson",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19004.png",
		TeamID: 6,
	},
	{
		PlayerID: 19009,
		FirstName: "Jalen",
		LastName: "Reeves-Maybin",
		Team: "DET",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19009.png",
		TeamID: 11,
	},
	{
		PlayerID: 19012,
		FirstName: "Carlos",
		LastName: "Watkins",
		Team: "ARI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19012.png",
		TeamID: 1,
	},
	{
		PlayerID: 19014,
		FirstName: "Grover",
		LastName: "Stewart",
		Team: "IND",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19014.png",
		TeamID: 14,
	},
	{
		PlayerID: 19016,
		FirstName: "Samson",
		LastName: "Ebukam",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19016.png",
		TeamID: 14,
	},
	{
		PlayerID: 19017,
		FirstName: "Josh",
		LastName: "Reynolds",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19017.png",
		TeamID: 11,
	},
	{
		PlayerID: 19019,
		FirstName: "Jaleel",
		LastName: "Johnson",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19019.png",
		TeamID: 34,
	},
	{
		PlayerID: 19020,
		FirstName: "Deatrich",
		LastName: "Wise Jr.",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19020.png",
		TeamID: 21,
	},
	{
		PlayerID: 19022,
		FirstName: "David",
		LastName: "Sharpe",
		Team: "CAR",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19022.png",
		TeamID: 5,
	},
	{
		PlayerID: 19023,
		FirstName: "Mack",
		LastName: "Hollins",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19023.png",
		TeamID: 2,
	},
	{
		PlayerID: 19025,
		FirstName: "Joshua",
		LastName: "Dobbs",
		Team: "ARI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19025.png",
		TeamID: 1,
	},
	{
		PlayerID: 19026,
		FirstName: "Rayshawn",
		LastName: "Jenkins",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19026.png",
		TeamID: 15,
	},
	{
		PlayerID: 19029,
		FirstName: "Nathan",
		LastName: "Peterman",
		Team: "CHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19029.png",
		TeamID: 6,
	},
	{
		PlayerID: 19034,
		FirstName: "Damontae",
		LastName: "Kazee",
		Team: "PIT",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19034.png",
		TeamID: 28,
	},
	{
		PlayerID: 19036,
		FirstName: "Jermaine",
		LastName: "Eluemunor",
		Team: "LV",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19036.png",
		TeamID: 25,
	},
	{
		PlayerID: 19037,
		FirstName: "Matt",
		LastName: "Milano",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19037.png",
		TeamID: 4,
	},
	{
		PlayerID: 19041,
		FirstName: "Jake",
		LastName: "Elliott",
		Team: "PHI",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19041.png",
		TeamID: 26,
	},
	{
		PlayerID: 19042,
		FirstName: "Roderick",
		LastName: "Johnson",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19042.png",
		TeamID: 26,
	},
	{
		PlayerID: 19043,
		FirstName: "Isaiah",
		LastName: "McKenzie",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19043.png",
		TeamID: 14,
	},
	{
		PlayerID: 19044,
		FirstName: "Jamal",
		LastName: "Agnew",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19044.png",
		TeamID: 15,
	},
	{
		PlayerID: 19045,
		FirstName: "Aaron",
		LastName: "Jones",
		Team: "GB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19045.png",
		TeamID: 12,
	},
	{
		PlayerID: 19049,
		FirstName: "Anthony",
		LastName: "Walker Jr.",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19049.png",
		TeamID: 8,
	},
	{
		PlayerID: 19053,
		FirstName: "Davon",
		LastName: "Godchaux",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19053.png",
		TeamID: 21,
	},
	{
		PlayerID: 19062,
		FirstName: "Desmond",
		LastName: "King",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19062.png",
		TeamID: 28,
	},
	{
		PlayerID: 19063,
		FirstName: "George",
		LastName: "Kittle",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19063.png",
		TeamID: 31,
	},
	{
		PlayerID: 19064,
		FirstName: "Trent",
		LastName: "Taylor",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19064.png",
		TeamID: 6,
	},
	{
		PlayerID: 19069,
		FirstName: "Rudy",
		LastName: "Ford",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19069.png",
		TeamID: 12,
	},
	{
		PlayerID: 19070,
		FirstName: "Chuck",
		LastName: "Clark",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19070.png",
		TeamID: 24,
	},
	{
		PlayerID: 19072,
		FirstName: "Alex",
		LastName: "Armah",
		Team: "WAS",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19072.png",
		TeamID: 35,
	},
	{
		PlayerID: 19073,
		FirstName: "Harrison",
		LastName: "Butker",
		Team: "KC",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19073.png",
		TeamID: 16,
	},
	{
		PlayerID: 19080,
		FirstName: "Noah",
		LastName: "Brown",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19080.png",
		TeamID: 13,
	},
	{
		PlayerID: 19084,
		FirstName: "Xavier",
		LastName: "Woods",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19084.png",
		TeamID: 5,
	},
	{
		PlayerID: 19086,
		FirstName: "Jeremiah",
		LastName: "Ledbetter",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19086.png",
		TeamID: 15,
	},
	{
		PlayerID: 19087,
		FirstName: "Patrick",
		LastName: "O'Connor",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19087.png",
		TeamID: 33,
	},
	{
		PlayerID: 19091,
		FirstName: "Kyle",
		LastName: "Fuller",
		Team: "BAL",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19091.png",
		TeamID: 3,
	},
	{
		PlayerID: 19102,
		FirstName: "Ifeadi",
		LastName: "Odenigbo",
		Team: "NYJ",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19102.png",
		TeamID: 24,
	},
	{
		PlayerID: 19105,
		FirstName: "Al-Quadin",
		LastName: "Muhammad",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19105.png",
		TeamID: 14,
	},
	{
		PlayerID: 19117,
		FirstName: "Isaac",
		LastName: "Rochell",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19117.png",
		TeamID: 25,
	},
	{
		PlayerID: 19120,
		FirstName: "David",
		LastName: "Moore",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19120.png",
		TeamID: 33,
	},
	{
		PlayerID: 19124,
		FirstName: "D.J.",
		LastName: "Jones",
		Team: "DEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19124.png",
		TeamID: 10,
	},
	{
		PlayerID: 19128,
		FirstName: "Corey",
		LastName: "Levin",
		Team: "TEN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19128.png",
		TeamID: 34,
	},
	{
		PlayerID: 19139,
		FirstName: "Daniel",
		LastName: "Brunskill",
		Team: "TEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19139.png",
		TeamID: 34,
	},
	{
		PlayerID: 19165,
		FirstName: "Johnny",
		LastName: "Mundt",
		Team: "MIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19165.png",
		TeamID: 20,
	},
	{
		PlayerID: 19172,
		FirstName: "Zach",
		LastName: "Pascal",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19172.png",
		TeamID: 1,
	},
	{
		PlayerID: 19176,
		FirstName: "Darrell",
		LastName: "Daniels",
		Team: "DET",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19176.png",
		TeamID: 11,
	},
	{
		PlayerID: 19178,
		FirstName: "Thomas",
		LastName: "Hennessy",
		Team: "NYJ",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19178.png",
		TeamID: 24,
	},
	{
		PlayerID: 19187,
		FirstName: "Rigoberto",
		LastName: "Sanchez",
		Team: "IND",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19187.png",
		TeamID: 14,
	},
	{
		PlayerID: 19191,
		FirstName: "P.J.",
		LastName: "Walker",
		Team: "CLE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19191.png",
		TeamID: 8,
	},
	{
		PlayerID: 19207,
		FirstName: "Tim",
		LastName: "Patrick",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19207.png",
		TeamID: 10,
	},
	{
		PlayerID: 19209,
		FirstName: "Patrick",
		LastName: "Ricard",
		Team: "BAL",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19209.png",
		TeamID: 3,
	},
	{
		PlayerID: 19228,
		FirstName: "Josh",
		LastName: "Tupou",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19228.png",
		TeamID: 7,
	},
	{
		PlayerID: 19238,
		FirstName: "Taysom",
		LastName: "Hill",
		Team: "NO",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19238.png",
		TeamID: 22,
	},
	{
		PlayerID: 19240,
		FirstName: "Adam",
		LastName: "Pankey",
		Team: "NYJ",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19240.png",
		TeamID: 24,
	},
	{
		PlayerID: 19263,
		FirstName: "Aviante",
		LastName: "Collins",
		Team: "CHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19263.png",
		TeamID: 6,
	},
	{
		PlayerID: 19273,
		FirstName: "Eric",
		LastName: "Wilson",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19273.png",
		TeamID: 12,
	},
	{
		PlayerID: 19275,
		FirstName: "Adam",
		LastName: "Butler",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19275.png",
		TeamID: 25,
	},
	{
		PlayerID: 19287,
		FirstName: "Kenny",
		LastName: "Moore II",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19287.png",
		TeamID: 14,
	},
	{
		PlayerID: 19300,
		FirstName: "Breon",
		LastName: "Borders",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19300.png",
		TeamID: 21,
	},
	{
		PlayerID: 19304,
		FirstName: "Pharaoh",
		LastName: "Brown",
		Team: "NE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19304.png",
		TeamID: 21,
	},
	{
		PlayerID: 19310,
		FirstName: "Nicholas",
		LastName: "Morrow",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19310.png",
		TeamID: 26,
	},
	{
		PlayerID: 19318,
		FirstName: "Kendrick",
		LastName: "Bourne",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19318.png",
		TeamID: 21,
	},
	{
		PlayerID: 19319,
		FirstName: "Matt",
		LastName: "Breida",
		Team: "NYG",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19319.png",
		TeamID: 23,
	},
	{
		PlayerID: 19330,
		FirstName: "Nick",
		LastName: "Mullens",
		Team: "MIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19330.png",
		TeamID: 20,
	},
	{
		PlayerID: 19375,
		FirstName: "Arthur",
		LastName: "Maulet",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19375.png",
		TeamID: 3,
	},
	{
		PlayerID: 19461,
		FirstName: "Cooper",
		LastName: "Rush",
		Team: "DAL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19461.png",
		TeamID: 9,
	},
	{
		PlayerID: 19479,
		FirstName: "Elijah",
		LastName: "Wilkinson",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19479.png",
		TeamID: 1,
	},
	{
		PlayerID: 19481,
		FirstName: "Alex",
		LastName: "Barrett",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19481.png",
		TeamID: 31,
	},
	{
		PlayerID: 19486,
		FirstName: "Storm",
		LastName: "Norton",
		Team: "NO",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19486.png",
		TeamID: 22,
	},
	{
		PlayerID: 19491,
		FirstName: "Robert",
		LastName: "Tonyan",
		Team: "CHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19491.png",
		TeamID: 6,
	},
	{
		PlayerID: 19493,
		FirstName: "Eli",
		LastName: "Ankou",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19493.png",
		TeamID: 4,
	},
	{
		PlayerID: 19496,
		FirstName: "Dylan",
		LastName: "Cole",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19496.png",
		TeamID: 6,
	},
	{
		PlayerID: 19501,
		FirstName: "Justin",
		LastName: "Hardee",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19501.png",
		TeamID: 24,
	},
	{
		PlayerID: 19514,
		FirstName: "Keelan",
		LastName: "Cole Sr.",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19514.png",
		TeamID: 25,
	},
	{
		PlayerID: 19538,
		FirstName: "Calvin",
		LastName: "Munson",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19538.png",
		TeamID: 21,
	},
	{
		PlayerID: 19548,
		FirstName: "Corey",
		LastName: "Clement",
		Team: "ARI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19548.png",
		TeamID: 1,
	},
	{
		PlayerID: 19552,
		FirstName: "Cameron",
		LastName: "Johnston",
		Team: "HOU",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19552.png",
		TeamID: 13,
	},
	{
		PlayerID: 19560,
		FirstName: "Michael",
		LastName: "Davis",
		Team: "LAC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19560.png",
		TeamID: 29,
	},
	{
		PlayerID: 19562,
		FirstName: "Austin",
		LastName: "Ekeler",
		Team: "LAC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19562.png",
		TeamID: 29,
	},
	{
		PlayerID: 19565,
		FirstName: "Younghoe",
		LastName: "Koo",
		Team: "ATL",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19565.png",
		TeamID: 2,
	},
	{
		PlayerID: 19596,
		FirstName: "Andrew",
		LastName: "Wylie",
		Team: "WAS",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19596.png",
		TeamID: 35,
	},
	{
		PlayerID: 19624,
		FirstName: "Dan",
		LastName: "Skipper",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19624.png",
		TeamID: 11,
	},
	{
		PlayerID: 19626,
		FirstName: "Dare",
		LastName: "Ogunbowale",
		Team: "HOU",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19626.png",
		TeamID: 13,
	},
	{
		PlayerID: 19672,
		FirstName: "Michael",
		LastName: "Dunn",
		Team: "CLE",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19672.png",
		TeamID: 8,
	},
	{
		PlayerID: 19690,
		FirstName: "Greg",
		LastName: "Van Roten",
		Team: "LV",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19690.png",
		TeamID: 25,
	},
	{
		PlayerID: 19705,
		FirstName: "Greg",
		LastName: "Ward",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19705.png",
		TeamID: 26,
	},
	{
		PlayerID: 19749,
		FirstName: "Christian",
		LastName: "Kuntz",
		Team: "PIT",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19749.png",
		TeamID: 28,
	},
	{
		PlayerID: 19755,
		FirstName: "River",
		LastName: "Cracraft",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19755.png",
		TeamID: 19,
	},
	{
		PlayerID: 19766,
		FirstName: "Saquon",
		LastName: "Barkley",
		Team: "NYG",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19766.png",
		TeamID: 23,
	},
	{
		PlayerID: 19781,
		FirstName: "Lamar",
		LastName: "Jackson",
		Team: "BAL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19781.png",
		TeamID: 3,
	},
	{
		PlayerID: 19790,
		FirstName: "Baker",
		LastName: "Mayfield",
		Team: "TB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19790.png",
		TeamID: 33,
	},
	{
		PlayerID: 19798,
		FirstName: "Nick",
		LastName: "Chubb",
		Team: "CLE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19798.png",
		TeamID: 8,
	},
	{
		PlayerID: 19799,
		FirstName: "Rashaad",
		LastName: "Penny",
		Team: "PHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19799.png",
		TeamID: 26,
	},
	{
		PlayerID: 19800,
		FirstName: "Courtland",
		LastName: "Sutton",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19800.png",
		TeamID: 10,
	},
	{
		PlayerID: 19801,
		FirstName: "Josh",
		LastName: "Allen",
		Team: "BUF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19801.png",
		TeamID: 4,
	},
	{
		PlayerID: 19802,
		FirstName: "Calvin",
		LastName: "Ridley",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19802.png",
		TeamID: 15,
	},
	{
		PlayerID: 19803,
		FirstName: "Mark",
		LastName: "Andrews",
		Team: "BAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19803.png",
		TeamID: 3,
	},
	{
		PlayerID: 19811,
		FirstName: "Marcell",
		LastName: "Ateman",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19811.png",
		TeamID: 4,
	},
	{
		PlayerID: 19812,
		FirstName: "Sam",
		LastName: "Darnold",
		Team: "SF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19812.png",
		TeamID: 31,
	},
	{
		PlayerID: 19814,
		FirstName: "Orlando",
		LastName: "Brown Jr.",
		Team: "CIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19814.png",
		TeamID: 7,
	},
	{
		PlayerID: 19815,
		FirstName: "Christian",
		LastName: "Kirk",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19815.png",
		TeamID: 15,
	},
	{
		PlayerID: 19816,
		FirstName: "DJ",
		LastName: "Chark Jr.",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19816.png",
		TeamID: 5,
	},
	{
		PlayerID: 19823,
		FirstName: "Royce",
		LastName: "Freeman",
		Team: "LAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19823.png",
		TeamID: 32,
	},
	{
		PlayerID: 19826,
		FirstName: "Scott",
		LastName: "Daly",
		Team: "DET",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19826.png",
		TeamID: 11,
	},
	{
		PlayerID: 19827,
		FirstName: "Roquan",
		LastName: "Smith",
		Team: "BAL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19827.png",
		TeamID: 3,
	},
	{
		PlayerID: 19829,
		FirstName: "Minkah",
		LastName: "Fitzpatrick",
		Team: "PIT",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19829.png",
		TeamID: 28,
	},
	{
		PlayerID: 19830,
		FirstName: "Denzel",
		LastName: "Ward",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19830.png",
		TeamID: 8,
	},
	{
		PlayerID: 19831,
		FirstName: "Quenton",
		LastName: "Nelson",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19831.png",
		TeamID: 14,
	},
	{
		PlayerID: 19832,
		FirstName: "Bradley",
		LastName: "Chubb",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19832.png",
		TeamID: 19,
	},
	{
		PlayerID: 19833,
		FirstName: "Mike",
		LastName: "McGlinchey",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19833.png",
		TeamID: 10,
	},
	{
		PlayerID: 19834,
		FirstName: "Vita",
		LastName: "Vea",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19834.png",
		TeamID: 33,
	},
	{
		PlayerID: 19835,
		FirstName: "Marcus",
		LastName: "Davenport",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19835.png",
		TeamID: 20,
	},
	{
		PlayerID: 19836,
		FirstName: "Tremaine",
		LastName: "Edmunds",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19836.png",
		TeamID: 6,
	},
	{
		PlayerID: 19837,
		FirstName: "Derwin",
		LastName: "James Jr.",
		Team: "LAC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19837.png",
		TeamID: 29,
	},
	{
		PlayerID: 19838,
		FirstName: "Leighton",
		LastName: "Vander Esch",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19838.png",
		TeamID: 9,
	},
	{
		PlayerID: 19839,
		FirstName: "Jaire",
		LastName: "Alexander",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19839.png",
		TeamID: 12,
	},
	{
		PlayerID: 19840,
		FirstName: "Kolton",
		LastName: "Miller",
		Team: "LV",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19840.png",
		TeamID: 25,
	},
	{
		PlayerID: 19841,
		FirstName: "Daron",
		LastName: "Payne",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19841.png",
		TeamID: 35,
	},
	{
		PlayerID: 19843,
		FirstName: "Hayden",
		LastName: "Hurst",
		Team: "CAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19843.png",
		TeamID: 5,
	},
	{
		PlayerID: 19844,
		FirstName: "DJ",
		LastName: "Moore",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19844.png",
		TeamID: 6,
	},
	{
		PlayerID: 19845,
		FirstName: "Frank",
		LastName: "Ragnow",
		Team: "DET",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19845.png",
		TeamID: 11,
	},
	{
		PlayerID: 19846,
		FirstName: "Taven",
		LastName: "Bryan",
		Team: "IND",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19846.png",
		TeamID: 14,
	},
	{
		PlayerID: 19847,
		FirstName: "Mike",
		LastName: "Hughes",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19847.png",
		TeamID: 2,
	},
	{
		PlayerID: 19848,
		FirstName: "Isaiah",
		LastName: "Wynn",
		Team: "MIA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19848.png",
		TeamID: 19,
	},
	{
		PlayerID: 19849,
		FirstName: "Terrell",
		LastName: "Edmunds",
		Team: "PHI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19849.png",
		TeamID: 26,
	},
	{
		PlayerID: 19850,
		FirstName: "Mason",
		LastName: "Rudolph",
		Team: "PIT",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19850.png",
		TeamID: 28,
	},
	{
		PlayerID: 19851,
		FirstName: "Austin",
		LastName: "Corbett",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19851.png",
		TeamID: 5,
	},
	{
		PlayerID: 19852,
		FirstName: "Shaquille",
		LastName: "Leonard",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19852.png",
		TeamID: 14,
	},
	{
		PlayerID: 19853,
		FirstName: "Mike",
		LastName: "Gesicki",
		Team: "NE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19853.png",
		TeamID: 21,
	},
	{
		PlayerID: 19855,
		FirstName: "James",
		LastName: "Daniels",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19855.png",
		TeamID: 28,
	},
	{
		PlayerID: 19857,
		FirstName: "Braden",
		LastName: "Smith",
		Team: "IND",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19857.png",
		TeamID: 14,
	},
	{
		PlayerID: 19859,
		FirstName: "Uchenna",
		LastName: "Nwosu",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19859.png",
		TeamID: 30,
	},
	{
		PlayerID: 19860,
		FirstName: "Will",
		LastName: "Hernandez",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19860.png",
		TeamID: 1,
	},
	{
		PlayerID: 19862,
		FirstName: "Harold",
		LastName: "Landry III",
		Team: "TEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19862.png",
		TeamID: 34,
	},
	{
		PlayerID: 19863,
		FirstName: "Dallas",
		LastName: "Goedert",
		Team: "PHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19863.png",
		TeamID: 26,
	},
	{
		PlayerID: 19866,
		FirstName: "Justin",
		LastName: "Reid",
		Team: "KC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19866.png",
		TeamID: 16,
	},
	{
		PlayerID: 19867,
		FirstName: "Michael",
		LastName: "Gallup",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19867.png",
		TeamID: 9,
	},
	{
		PlayerID: 19868,
		FirstName: "Isaiah",
		LastName: "Oliver",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19868.png",
		TeamID: 31,
	},
	{
		PlayerID: 19870,
		FirstName: "Donte",
		LastName: "Jackson",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19870.png",
		TeamID: 5,
	},
	{
		PlayerID: 19871,
		FirstName: "Sam",
		LastName: "Hubbard",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19871.png",
		TeamID: 7,
	},
	{
		PlayerID: 19872,
		FirstName: "Malik",
		LastName: "Jefferson",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19872.png",
		TeamID: 9,
	},
	{
		PlayerID: 19873,
		FirstName: "Jessie",
		LastName: "Bates III",
		Team: "ATL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19873.png",
		TeamID: 2,
	},
	{
		PlayerID: 19875,
		FirstName: "Connor",
		LastName: "Williams",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19875.png",
		TeamID: 19,
	},
	{
		PlayerID: 19876,
		FirstName: "Tracy",
		LastName: "Walker III",
		Team: "DET",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19876.png",
		TeamID: 11,
	},
	{
		PlayerID: 19878,
		FirstName: "Tyquan",
		LastName: "Lewis",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19878.png",
		TeamID: 14,
	},
	{
		PlayerID: 19880,
		FirstName: "Derrick",
		LastName: "Nnadi",
		Team: "KC",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19880.png",
		TeamID: 16,
	},
	{
		PlayerID: 19881,
		FirstName: "Justin",
		LastName: "Jones",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19881.png",
		TeamID: 6,
	},
	{
		PlayerID: 19882,
		FirstName: "Jerome",
		LastName: "Baker",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19882.png",
		TeamID: 19,
	},
	{
		PlayerID: 19883,
		FirstName: "Brian",
		LastName: "O'Neill",
		Team: "MIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19883.png",
		TeamID: 20,
	},
	{
		PlayerID: 19885,
		FirstName: "B.J.",
		LastName: "Hill",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19885.png",
		TeamID: 7,
	},
	{
		PlayerID: 19886,
		FirstName: "Lorenzo",
		LastName: "Carter",
		Team: "ATL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19886.png",
		TeamID: 2,
	},
	{
		PlayerID: 19887,
		FirstName: "Nathan",
		LastName: "Shepherd",
		Team: "NO",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19887.png",
		TeamID: 22,
	},
	{
		PlayerID: 19890,
		FirstName: "Rasheem",
		LastName: "Green",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19890.png",
		TeamID: 6,
	},
	{
		PlayerID: 19891,
		FirstName: "Fred",
		LastName: "Warner",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19891.png",
		TeamID: 31,
	},
	{
		PlayerID: 19892,
		FirstName: "Carlton",
		LastName: "Davis III",
		Team: "TB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19892.png",
		TeamID: 33,
	},
	{
		PlayerID: 19893,
		FirstName: "M.J.",
		LastName: "Stewart",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19893.png",
		TeamID: 13,
	},
	{
		PlayerID: 19895,
		FirstName: "Joe",
		LastName: "Noteboom",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19895.png",
		TeamID: 32,
	},
	{
		PlayerID: 19896,
		FirstName: "Arden",
		LastName: "Key",
		Team: "TEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19896.png",
		TeamID: 34,
	},
	{
		PlayerID: 19897,
		FirstName: "Tre'Quan",
		LastName: "Smith",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19897.png",
		TeamID: 22,
	},
	{
		PlayerID: 19898,
		FirstName: "Mason",
		LastName: "Cole",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19898.png",
		TeamID: 28,
	},
	{
		PlayerID: 19899,
		FirstName: "Deadrin",
		LastName: "Senat",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19899.png",
		TeamID: 33,
	},
	{
		PlayerID: 19900,
		FirstName: "Harrison",
		LastName: "Phillips",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19900.png",
		TeamID: 20,
	},
	{
		PlayerID: 19901,
		FirstName: "Isaac",
		LastName: "Yiadom",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19901.png",
		TeamID: 22,
	},
	{
		PlayerID: 19902,
		FirstName: "Oren",
		LastName: "Burks",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19902.png",
		TeamID: 31,
	},
	{
		PlayerID: 19903,
		FirstName: "Jordan",
		LastName: "Akins",
		Team: "CLE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19903.png",
		TeamID: 8,
	},
	{
		PlayerID: 19904,
		FirstName: "Ronnie",
		LastName: "Harrison Jr.",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19904.png",
		TeamID: 14,
	},
	{
		PlayerID: 19906,
		FirstName: "Chukwuma",
		LastName: "Okorafor",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19906.png",
		TeamID: 28,
	},
	{
		PlayerID: 19908,
		FirstName: "Alex",
		LastName: "Cappa",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19908.png",
		TeamID: 7,
	},
	{
		PlayerID: 19910,
		FirstName: "Ian",
		LastName: "Thomas",
		Team: "CAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19910.png",
		TeamID: 5,
	},
	{
		PlayerID: 19911,
		FirstName: "Jalyn",
		LastName: "Holmes",
		Team: "NYJ",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19911.png",
		TeamID: 24,
	},
	{
		PlayerID: 19912,
		FirstName: "Nyheim",
		LastName: "Hines",
		Team: "BUF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19912.png",
		TeamID: 4,
	},
	{
		PlayerID: 19918,
		FirstName: "Josh",
		LastName: "Sweat",
		Team: "PHI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19918.png",
		TeamID: 26,
	},
	{
		PlayerID: 19919,
		FirstName: "Chase",
		LastName: "Edmonds",
		Team: "TB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19919.png",
		TeamID: 33,
	},
	{
		PlayerID: 19920,
		FirstName: "Dalton",
		LastName: "Schultz",
		Team: "HOU",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19920.png",
		TeamID: 13,
	},
	{
		PlayerID: 19921,
		FirstName: "Maurice",
		LastName: "Hurst II",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19921.png",
		TeamID: 8,
	},
	{
		PlayerID: 19922,
		FirstName: "Justin",
		LastName: "Watson",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19922.png",
		TeamID: 16,
	},
	{
		PlayerID: 19928,
		FirstName: "Taron",
		LastName: "Johnson",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19928.png",
		TeamID: 4,
	},
	{
		PlayerID: 19929,
		FirstName: "Marquis",
		LastName: "Haynes Sr.",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19929.png",
		TeamID: 5,
	},
	{
		PlayerID: 19930,
		FirstName: "Bilal",
		LastName: "Nichols",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19930.png",
		TeamID: 25,
	},
	{
		PlayerID: 19932,
		FirstName: "Dorance",
		LastName: "Armstrong",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19932.png",
		TeamID: 9,
	},
	{
		PlayerID: 19933,
		FirstName: "Josey",
		LastName: "Jewell",
		Team: "DEN",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19933.png",
		TeamID: 10,
	},
	{
		PlayerID: 19934,
		FirstName: "Da'Shawn",
		LastName: "Hand",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19934.png",
		TeamID: 19,
	},
	{
		PlayerID: 19940,
		FirstName: "Kyzir",
		LastName: "White",
		Team: "ARI",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19940.png",
		TeamID: 1,
	},
	{
		PlayerID: 19941,
		FirstName: "Brian",
		LastName: "Allen",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19941.png",
		TeamID: 32,
	},
	{
		PlayerID: 19942,
		FirstName: "John",
		LastName: "Franklin-Myers",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19942.png",
		TeamID: 24,
	},
	{
		PlayerID: 19943,
		FirstName: "Durham",
		LastName: "Smythe",
		Team: "MIA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19943.png",
		TeamID: 19,
	},
	{
		PlayerID: 19944,
		FirstName: "Ja'Whaun",
		LastName: "Bentley",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19944.png",
		TeamID: 21,
	},
	{
		PlayerID: 19949,
		FirstName: "Avonte",
		LastName: "Maddox",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19949.png",
		TeamID: 26,
	},
	{
		PlayerID: 19950,
		FirstName: "Will",
		LastName: "Dissly",
		Team: "SEA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19950.png",
		TeamID: 30,
	},
	{
		PlayerID: 19951,
		FirstName: "Tre",
		LastName: "Flowers",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19951.png",
		TeamID: 2,
	},
	{
		PlayerID: 19952,
		FirstName: "Kentavius",
		LastName: "Street",
		Team: "PHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19952.png",
		TeamID: 26,
	},
	{
		PlayerID: 19953,
		FirstName: "D.J.",
		LastName: "Reed",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19953.png",
		TeamID: 24,
	},
	{
		PlayerID: 19954,
		FirstName: "Jordan",
		LastName: "Whitehead",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19954.png",
		TeamID: 24,
	},
	{
		PlayerID: 19955,
		FirstName: "Troy",
		LastName: "Apke",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19955.png",
		TeamID: 35,
	},
	{
		PlayerID: 19956,
		FirstName: "Michael",
		LastName: "Dickson",
		Team: "SEA",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19956.png",
		TeamID: 30,
	},
	{
		PlayerID: 19960,
		FirstName: "DeShon",
		LastName: "Elliott",
		Team: "MIA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19960.png",
		TeamID: 19,
	},
	{
		PlayerID: 19961,
		FirstName: "Ray-Ray",
		LastName: "McCloud III",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19961.png",
		TeamID: 31,
	},
	{
		PlayerID: 19962,
		FirstName: "Wyatt",
		LastName: "Teller",
		Team: "CLE",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19962.png",
		TeamID: 8,
	},
	{
		PlayerID: 19963,
		FirstName: "Siran",
		LastName: "Neal",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19963.png",
		TeamID: 4,
	},
	{
		PlayerID: 19968,
		FirstName: "Darius",
		LastName: "Phillips",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19968.png",
		TeamID: 11,
	},
	{
		PlayerID: 19970,
		FirstName: "Genard",
		LastName: "Avery",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19970.png",
		TeamID: 14,
	},
	{
		PlayerID: 19972,
		FirstName: "Mike",
		LastName: "White",
		Team: "MIA",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19972.png",
		TeamID: 19,
	},
	{
		PlayerID: 19973,
		FirstName: "Troy",
		LastName: "Fumagalli",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19973.png",
		TeamID: 31,
	},
	{
		PlayerID: 19976,
		FirstName: "Marquez",
		LastName: "Valdes-Scantling",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19976.png",
		TeamID: 16,
	},
	{
		PlayerID: 19977,
		FirstName: "JK",
		LastName: "Scott",
		Team: "LAC",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19977.png",
		TeamID: 29,
	},
	{
		PlayerID: 19981,
		FirstName: "Daurice",
		LastName: "Fountain",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19981.png",
		TeamID: 11,
	},
	{
		PlayerID: 19983,
		FirstName: "Scott",
		LastName: "Quessenberry",
		Team: "HOU",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19983.png",
		TeamID: 13,
	},
	{
		PlayerID: 19985,
		FirstName: "Sebastian",
		LastName: "Joseph-Day",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19985.png",
		TeamID: 29,
	},
	{
		PlayerID: 19987,
		FirstName: "Ogbo",
		LastName: "Okoronkwo",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19987.png",
		TeamID: 8,
	},
	{
		PlayerID: 19988,
		FirstName: "Tyler",
		LastName: "Conklin",
		Team: "NYJ",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19988.png",
		TeamID: 24,
	},
	{
		PlayerID: 19989,
		FirstName: "Daniel",
		LastName: "Carlson",
		Team: "LV",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19989.png",
		TeamID: 25,
	},
	{
		PlayerID: 19993,
		FirstName: "Folorunso",
		LastName: "Fatukasi",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19993.png",
		TeamID: 15,
	},
	{
		PlayerID: 19994,
		FirstName: "Parry",
		LastName: "Nickerson",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19994.png",
		TeamID: 19,
	},
	{
		PlayerID: 19999,
		FirstName: "Jake",
		LastName: "Martin",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19999.png",
		TeamID: 14,
	},
	{
		PlayerID: 20002,
		FirstName: "Tim",
		LastName: "Settle",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20002.png",
		TeamID: 4,
	},
	{
		PlayerID: 20006,
		FirstName: "Russell",
		LastName: "Gage",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20006.png",
		TeamID: 33,
	},
	{
		PlayerID: 20007,
		FirstName: "Foyesade",
		LastName: "Oluokun",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20007.png",
		TeamID: 15,
	},
	{
		PlayerID: 20008,
		FirstName: "Bradley",
		LastName: "Bozeman",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20008.png",
		TeamID: 5,
	},
	{
		PlayerID: 20010,
		FirstName: "Andre",
		LastName: "Smith",
		Team: "ATL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20010.png",
		TeamID: 2,
	},
	{
		PlayerID: 20013,
		FirstName: "Cedrick",
		LastName: "Wilson Jr.",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20013.png",
		TeamID: 19,
	},
	{
		PlayerID: 20018,
		FirstName: "Nick",
		LastName: "Bawden",
		Team: "NYJ",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20018.png",
		TeamID: 24,
	},
	{
		PlayerID: 20020,
		FirstName: "Jordan",
		LastName: "Thomas",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20020.png",
		TeamID: 5,
	},
	{
		PlayerID: 20023,
		FirstName: "Matthew",
		LastName: "Adams",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20023.png",
		TeamID: 8,
	},
	{
		PlayerID: 20024,
		FirstName: "Zaire",
		LastName: "Franklin",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20024.png",
		TeamID: 14,
	},
	{
		PlayerID: 20028,
		FirstName: "Tremon",
		LastName: "Smith",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20028.png",
		TeamID: 10,
	},
	{
		PlayerID: 20033,
		FirstName: "Jason",
		LastName: "Sanders",
		Team: "MIA",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20033.png",
		TeamID: 19,
	},
	{
		PlayerID: 20038,
		FirstName: "Braxton",
		LastName: "Berrios",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20038.png",
		TeamID: 19,
	},
	{
		PlayerID: 20039,
		FirstName: "Boston",
		LastName: "Scott",
		Team: "PHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20039.png",
		TeamID: 26,
	},
	{
		PlayerID: 20042,
		FirstName: "Jordan",
		LastName: "Mailata",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20042.png",
		TeamID: 26,
	},
	{
		PlayerID: 20043,
		FirstName: "Matt",
		LastName: "Pryor",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20043.png",
		TeamID: 31,
	},
	{
		PlayerID: 20044,
		FirstName: "Alex",
		LastName: "McGough",
		Team: "GB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20044.png",
		TeamID: 12,
	},
	{
		PlayerID: 20050,
		FirstName: "Chris",
		LastName: "Lammons",
		Team: "IND",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20050.png",
		TeamID: 14,
	},
	{
		PlayerID: 20051,
		FirstName: "Zach",
		LastName: "Sieler",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20051.png",
		TeamID: 19,
	},
	{
		PlayerID: 20053,
		FirstName: "Kyle",
		LastName: "Allen",
		Team: "BUF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20053.png",
		TeamID: 4,
	},
	{
		PlayerID: 20055,
		FirstName: "Logan",
		LastName: "Woodside",
		Team: "ATL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20055.png",
		TeamID: 2,
	},
	{
		PlayerID: 20063,
		FirstName: "Logan",
		LastName: "Cooke",
		Team: "JAX",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20063.png",
		TeamID: 15,
	},
	{
		PlayerID: 20065,
		FirstName: "Trent",
		LastName: "Scott",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20065.png",
		TeamID: 35,
	},
	{
		PlayerID: 20066,
		FirstName: "Tony",
		LastName: "Brown",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20066.png",
		TeamID: 14,
	},
	{
		PlayerID: 20070,
		FirstName: "Keion",
		LastName: "Crossen",
		Team: "MIA",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20070.png",
		TeamID: 19,
	},
	{
		PlayerID: 20071,
		FirstName: "Keith",
		LastName: "Kirkwood",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20071.png",
		TeamID: 22,
	},
	{
		PlayerID: 20072,
		FirstName: "Will",
		LastName: "Clapp",
		Team: "LAC",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20072.png",
		TeamID: 29,
	},
	{
		PlayerID: 20074,
		FirstName: "Jason",
		LastName: "Cabinda",
		Team: "DET",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20074.png",
		TeamID: 11,
	},
	{
		PlayerID: 20077,
		FirstName: "Richie",
		LastName: "James",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20077.png",
		TeamID: 16,
	},
	{
		PlayerID: 20080,
		FirstName: "Greg",
		LastName: "Stroman Jr.",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20080.png",
		TeamID: 6,
	},
	{
		PlayerID: 20081,
		FirstName: "Trent",
		LastName: "Sherfield",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20081.png",
		TeamID: 4,
	},
	{
		PlayerID: 20085,
		FirstName: "Dennis",
		LastName: "Gardeck",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20085.png",
		TeamID: 1,
	},
	{
		PlayerID: 20088,
		FirstName: "Ezekiel",
		LastName: "Turner",
		Team: "ARI",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20088.png",
		TeamID: 1,
	},
	{
		PlayerID: 20102,
		FirstName: "Levi",
		LastName: "Wallace",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20102.png",
		TeamID: 28,
	},
	{
		PlayerID: 20134,
		FirstName: "Kevin",
		LastName: "Rader",
		Team: "TEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20134.png",
		TeamID: 34,
	},
	{
		PlayerID: 20137,
		FirstName: "Jaryd",
		LastName: "Jones-Smith",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20137.png",
		TeamID: 35,
	},
	{
		PlayerID: 20144,
		FirstName: "Michael",
		LastName: "Badgley",
		Team: "DET",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20144.png",
		TeamID: 11,
	},
	{
		PlayerID: 20145,
		FirstName: "Allen",
		LastName: "Lazard",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20145.png",
		TeamID: 24,
	},
	{
		PlayerID: 20149,
		FirstName: "Eddy",
		LastName: "Pi\u00f1eiro",
		Team: "CAR",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20149.png",
		TeamID: 5,
	},
	{
		PlayerID: 20150,
		FirstName: "Byron",
		LastName: "Pringle",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20150.png",
		TeamID: 35,
	},
	{
		PlayerID: 20157,
		FirstName: "Jalen",
		LastName: "Davis",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20157.png",
		TeamID: 7,
	},
	{
		PlayerID: 20159,
		FirstName: "Mike",
		LastName: "Boone",
		Team: "HOU",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20159.png",
		TeamID: 13,
	},
	{
		PlayerID: 20167,
		FirstName: "J.C.",
		LastName: "Jackson",
		Team: "LAC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20167.png",
		TeamID: 29,
	},
	{
		PlayerID: 20178,
		FirstName: "Chandon",
		LastName: "Sullivan",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20178.png",
		TeamID: 28,
	},
	{
		PlayerID: 20185,
		FirstName: "Poona",
		LastName: "Ford",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20185.png",
		TeamID: 4,
	},
	{
		PlayerID: 20189,
		FirstName: "Demone",
		LastName: "Harris",
		Team: "ATL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20189.png",
		TeamID: 2,
	},
	{
		PlayerID: 20191,
		FirstName: "Godwin",
		LastName: "Igwebuike",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20191.png",
		TeamID: 28,
	},
	{
		PlayerID: 20199,
		FirstName: "David",
		LastName: "Wells",
		Team: "TB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20199.png",
		TeamID: 33,
	},
	{
		PlayerID: 20204,
		FirstName: "Charvarius",
		LastName: "Ward",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20204.png",
		TeamID: 31,
	},
	{
		PlayerID: 20217,
		FirstName: "Tavierre",
		LastName: "Thomas",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20217.png",
		TeamID: 13,
	},
	{
		PlayerID: 20219,
		FirstName: "Jonathan",
		LastName: "Owens",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20219.png",
		TeamID: 12,
	},
	{
		PlayerID: 20231,
		FirstName: "J.C.",
		LastName: "Hassenauer",
		Team: "NYG",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20231.png",
		TeamID: 23,
	},
	{
		PlayerID: 20239,
		FirstName: "Gus",
		LastName: "Edwards",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20239.png",
		TeamID: 3,
	},
	{
		PlayerID: 20245,
		FirstName: "Chris",
		LastName: "Board",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20245.png",
		TeamID: 21,
	},
	{
		PlayerID: 20249,
		FirstName: "Trent",
		LastName: "Sieg",
		Team: "DAL",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20249.png",
		TeamID: 9,
	},
	{
		PlayerID: 20252,
		FirstName: "Ike",
		LastName: "Boettger",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20252.png",
		TeamID: 14,
	},
	{
		PlayerID: 20269,
		FirstName: "Daniel",
		LastName: "Ekuale",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20269.png",
		TeamID: 21,
	},
	{
		PlayerID: 20271,
		FirstName: "Elijah",
		LastName: "Campbell",
		Team: "MIA",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20271.png",
		TeamID: 19,
	},
	{
		PlayerID: 20281,
		FirstName: "Mike",
		LastName: "Ford",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20281.png",
		TeamID: 8,
	},
	{
		PlayerID: 20283,
		FirstName: "Tim",
		LastName: "Boyle",
		Team: "NYJ",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20283.png",
		TeamID: 24,
	},
	{
		PlayerID: 20288,
		FirstName: "Tyler",
		LastName: "Lancaster",
		Team: "DEN",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20288.png",
		TeamID: 10,
	},
	{
		PlayerID: 20325,
		FirstName: "Greg",
		LastName: "Joseph",
		Team: "MIN",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20325.png",
		TeamID: 20,
	},
	{
		PlayerID: 20337,
		FirstName: "Nick",
		LastName: "Gates",
		Team: "WAS",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20337.png",
		TeamID: 35,
	},
	{
		PlayerID: 20338,
		FirstName: "Tae",
		LastName: "Davis",
		Team: "ATL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20338.png",
		TeamID: 2,
	},
	{
		PlayerID: 20346,
		FirstName: "Kendal",
		LastName: "Vickers",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20346.png",
		TeamID: 4,
	},
	{
		PlayerID: 20360,
		FirstName: "Jeff",
		LastName: "Wilson Jr.",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20360.png",
		TeamID: 19,
	},
	{
		PlayerID: 20361,
		FirstName: "Ross",
		LastName: "Dwelley",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20361.png",
		TeamID: 31,
	},
	{
		PlayerID: 20366,
		FirstName: "Emmanuel",
		LastName: "Moseley",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20366.png",
		TeamID: 11,
	},
	{
		PlayerID: 20379,
		FirstName: "Aaron",
		LastName: "Stinnie",
		Team: "TB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20379.png",
		TeamID: 33,
	},
	{
		PlayerID: 20380,
		FirstName: "Matt",
		LastName: "Dickerson",
		Team: "KC",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20380.png",
		TeamID: 16,
	},
	{
		PlayerID: 20395,
		FirstName: "Danny",
		LastName: "Johnson",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20395.png",
		TeamID: 35,
	},
	{
		PlayerID: 20398,
		FirstName: "Equanimeous",
		LastName: "St. Brown",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20398.png",
		TeamID: 6,
	},
	{
		PlayerID: 20411,
		FirstName: "Frankie",
		LastName: "Luvu",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20411.png",
		TeamID: 5,
	},
	{
		PlayerID: 20429,
		FirstName: "Dee",
		LastName: "Delaney",
		Team: "TB",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20429.png",
		TeamID: 33,
	},
	{
		PlayerID: 20434,
		FirstName: "Brandon",
		LastName: "Facyson",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20434.png",
		TeamID: 25,
	},
	{
		PlayerID: 20450,
		FirstName: "Abdullah",
		LastName: "Anderson",
		Team: "WAS",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20450.png",
		TeamID: 35,
	},
	{
		PlayerID: 20460,
		FirstName: "Tre",
		LastName: "Herndon",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20460.png",
		TeamID: 15,
	},
	{
		PlayerID: 20482,
		FirstName: "Austin",
		LastName: "Schlottmann",
		Team: "MIN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20482.png",
		TeamID: 20,
	},
	{
		PlayerID: 20487,
		FirstName: "Brandon",
		LastName: "Powell",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20487.png",
		TeamID: 20,
	},
	{
		PlayerID: 20492,
		FirstName: "George",
		LastName: "Odum",
		Team: "SF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20492.png",
		TeamID: 31,
	},
	{
		PlayerID: 20498,
		FirstName: "Ben",
		LastName: "Niemann",
		Team: "DEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20498.png",
		TeamID: 10,
	},
	{
		PlayerID: 20506,
		FirstName: "Tanner",
		LastName: "Hudson",
		Team: "CIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20506.png",
		TeamID: 7,
	},
	{
		PlayerID: 20512,
		FirstName: "Corey",
		LastName: "Bojorquez",
		Team: "CLE",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20512.png",
		TeamID: 8,
	},
	{
		PlayerID: 20529,
		FirstName: "Cam",
		LastName: "Sims",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20529.png",
		TeamID: 23,
	},
	{
		PlayerID: 20533,
		FirstName: "Coleman",
		LastName: "Shelton",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20533.png",
		TeamID: 32,
	},
	{
		PlayerID: 20538,
		FirstName: "Ryan",
		LastName: "Neal",
		Team: "TB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20538.png",
		TeamID: 33,
	},
	{
		PlayerID: 20541,
		FirstName: "Bruce",
		LastName: "Hector",
		Team: "HOU",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20541.png",
		TeamID: 13,
	},
	{
		PlayerID: 20554,
		FirstName: "Evan",
		LastName: "Brown",
		Team: "SEA",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20554.png",
		TeamID: 30,
	},
	{
		PlayerID: 20556,
		FirstName: "Dakoda",
		LastName: "Shepley",
		Team: "IND",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20556.png",
		TeamID: 14,
	},
	{
		PlayerID: 20559,
		FirstName: "J.T.",
		LastName: "Gray",
		Team: "NO",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20559.png",
		TeamID: 22,
	},
	{
		PlayerID: 20570,
		FirstName: "Darious",
		LastName: "Williams",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20570.png",
		TeamID: 15,
	},
	{
		PlayerID: 20584,
		FirstName: "Craig",
		LastName: "James",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20584.png",
		TeamID: 24,
	},
	{
		PlayerID: 20604,
		FirstName: "Andre",
		LastName: "Chachere",
		Team: "ARI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20604.png",
		TeamID: 1,
	},
	{
		PlayerID: 20611,
		FirstName: "Jeremy",
		LastName: "Reaves",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20611.png",
		TeamID: 35,
	},
	{
		PlayerID: 20637,
		FirstName: "Nick",
		LastName: "Thurman",
		Team: "CAR",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20637.png",
		TeamID: 5,
	},
	{
		PlayerID: 20642,
		FirstName: "Dallin",
		LastName: "Leavitt",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20642.png",
		TeamID: 12,
	},
	{
		PlayerID: 20646,
		FirstName: "Robert",
		LastName: "Spillane",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20646.png",
		TeamID: 25,
	},
	{
		PlayerID: 20657,
		FirstName: "DeMarquis",
		LastName: "Gates",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20657.png",
		TeamID: 6,
	},
	{
		PlayerID: 20664,
		FirstName: "Josh",
		LastName: "Woods",
		Team: "ARI",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20664.png",
		TeamID: 1,
	},
	{
		PlayerID: 20679,
		FirstName: "KhaDarel",
		LastName: "Hodge",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20679.png",
		TeamID: 2,
	},
	{
		PlayerID: 20703,
		FirstName: "John",
		LastName: "Wolford",
		Team: "TB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20703.png",
		TeamID: 33,
	},
	{
		PlayerID: 20713,
		FirstName: "Nick",
		LastName: "Bosa",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20713.png",
		TeamID: 31,
	},
	{
		PlayerID: 20715,
		FirstName: "Alexander",
		LastName: "Johnson",
		Team: "MIA",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20715.png",
		TeamID: 19,
	},
	{
		PlayerID: 20721,
		FirstName: "Tevaughn",
		LastName: "Campbell",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20721.png",
		TeamID: 15,
	},
	{
		PlayerID: 20724,
		FirstName: "Sam",
		LastName: "Eguavoen",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20724.png",
		TeamID: 24,
	},
	{
		PlayerID: 20731,
		FirstName: "Johnathan",
		LastName: "Abram",
		Team: "NO",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20731.png",
		TeamID: 22,
	},
	{
		PlayerID: 20737,
		FirstName: "Josh",
		LastName: "Allen",
		Team: "JAX",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20737.png",
		TeamID: 15,
	},
	{
		PlayerID: 20738,
		FirstName: "Zach",
		LastName: "Allen",
		Team: "DEN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20738.png",
		TeamID: 10,
	},
	{
		PlayerID: 20746,
		FirstName: "Chuma",
		LastName: "Edoga",
		Team: "DAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20746.png",
		TeamID: 9,
	},
	{
		PlayerID: 20747,
		FirstName: "David",
		LastName: "Edwards",
		Team: "BUF",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20747.png",
		TeamID: 4,
	},
	{
		PlayerID: 20748,
		FirstName: "Mike",
		LastName: "Edwards",
		Team: "KC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20748.png",
		TeamID: 16,
	},
	{
		PlayerID: 20749,
		FirstName: "T.J.",
		LastName: "Edwards",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20749.png",
		TeamID: 6,
	},
	{
		PlayerID: 20753,
		FirstName: "Noah",
		LastName: "Fant",
		Team: "SEA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20753.png",
		TeamID: 30,
	},
	{
		PlayerID: 20754,
		FirstName: "Rashad",
		LastName: "Fenton",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20754.png",
		TeamID: 1,
	},
	{
		PlayerID: 20757,
		FirstName: "Clelin",
		LastName: "Ferrell",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20757.png",
		TeamID: 31,
	},
	{
		PlayerID: 20760,
		FirstName: "Cody",
		LastName: "Ford",
		Team: "CIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20760.png",
		TeamID: 7,
	},
	{
		PlayerID: 20761,
		FirstName: "Hjalte",
		LastName: "Froholdt",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20761.png",
		TeamID: 1,
	},
	{
		PlayerID: 20764,
		FirstName: "Greg",
		LastName: "Gaines",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20764.png",
		TeamID: 33,
	},
	{
		PlayerID: 20766,
		FirstName: "C.J.",
		LastName: "Gardner-Johnson",
		Team: "DET",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20766.png",
		TeamID: 11,
	},
	{
		PlayerID: 20767,
		FirstName: "Rashan",
		LastName: "Gary",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20767.png",
		TeamID: 12,
	},
	{
		PlayerID: 20768,
		FirstName: "Myles",
		LastName: "Gaskin",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20768.png",
		TeamID: 20,
	},
	{
		PlayerID: 20769,
		FirstName: "Matt",
		LastName: "Gay",
		Team: "IND",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20769.png",
		TeamID: 14,
	},
	{
		PlayerID: 20770,
		FirstName: "Zach",
		LastName: "Gentry",
		Team: "CIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20770.png",
		TeamID: 7,
	},
	{
		PlayerID: 20772,
		FirstName: "Joe",
		LastName: "Giles-Harris",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20772.png",
		TeamID: 21,
	},
	{
		PlayerID: 20773,
		FirstName: "Kevin",
		LastName: "Givens",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20773.png",
		TeamID: 31,
	},
	{
		PlayerID: 20776,
		FirstName: "Carl",
		LastName: "Granderson",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20776.png",
		TeamID: 22,
	},
	{
		PlayerID: 20778,
		FirstName: "Dre",
		LastName: "Greenlaw",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20778.png",
		TeamID: 31,
	},
	{
		PlayerID: 20779,
		FirstName: "Will",
		LastName: "Grier",
		Team: "NE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20779.png",
		TeamID: 21,
	},
	{
		PlayerID: 20788,
		FirstName: "Mecole",
		LastName: "Hardman Jr.",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20788.png",
		TeamID: 24,
	},
	{
		PlayerID: 20790,
		FirstName: "Damien",
		LastName: "Harris",
		Team: "BUF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20790.png",
		TeamID: 4,
	},
	{
		PlayerID: 20791,
		FirstName: "Will",
		LastName: "Harris",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20791.png",
		TeamID: 11,
	},
	{
		PlayerID: 20792,
		FirstName: "N'Keal",
		LastName: "Harry",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20792.png",
		TeamID: 20,
	},
	{
		PlayerID: 20793,
		FirstName: "Penny",
		LastName: "Hart",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20793.png",
		TeamID: 2,
	},
	{
		PlayerID: 20796,
		FirstName: "Phil",
		LastName: "Haynes",
		Team: "SEA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20796.png",
		TeamID: 30,
	},
	{
		PlayerID: 20799,
		FirstName: "Nate",
		LastName: "Herbig",
		Team: "PIT",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20799.png",
		TeamID: 28,
	},
	{
		PlayerID: 20802,
		FirstName: "Justice",
		LastName: "Hill",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20802.png",
		TeamID: 3,
	},
	{
		PlayerID: 20803,
		FirstName: "Trysten",
		LastName: "Hill",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20803.png",
		TeamID: 8,
	},
	{
		PlayerID: 20805,
		FirstName: "T.J.",
		LastName: "Hockenson",
		Team: "MIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20805.png",
		TeamID: 20,
	},
	{
		PlayerID: 20808,
		FirstName: "Justin",
		LastName: "Hollins",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20808.png",
		TeamID: 12,
	},
	{
		PlayerID: 20810,
		FirstName: "Travis",
		LastName: "Homer",
		Team: "CHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20810.png",
		TeamID: 6,
	},
	{
		PlayerID: 20811,
		FirstName: "Amani",
		LastName: "Hooker",
		Team: "TEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20811.png",
		TeamID: 34,
	},
	{
		PlayerID: 20812,
		FirstName: "Jesper",
		LastName: "Horsted",
		Team: "LV",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20812.png",
		TeamID: 25,
	},
	{
		PlayerID: 20813,
		FirstName: "Tytus",
		LastName: "Howard",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20813.png",
		TeamID: 13,
	},
	{
		PlayerID: 20815,
		FirstName: "Albert",
		LastName: "Huggins",
		Team: "ATL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20815.png",
		TeamID: 2,
	},
	{
		PlayerID: 20816,
		FirstName: "Lil'Jordan",
		LastName: "Humphrey",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20816.png",
		TeamID: 10,
	},
	{
		PlayerID: 20819,
		FirstName: "Alec",
		LastName: "Ingold",
		Team: "MIA",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20819.png",
		TeamID: 19,
	},
	{
		PlayerID: 20820,
		FirstName: "Andy",
		LastName: "Isabella",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20820.png",
		TeamID: 4,
	},
	{
		PlayerID: 20822,
		FirstName: "Michael",
		LastName: "Jackson",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20822.png",
		TeamID: 30,
	},
	{
		PlayerID: 20823,
		FirstName: "Tyree",
		LastName: "Jackson",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20823.png",
		TeamID: 23,
	},
	{
		PlayerID: 20824,
		FirstName: "Josh",
		LastName: "Jacobs",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20824.png",
		TeamID: 25,
	},
	{
		PlayerID: 20825,
		FirstName: "Andre",
		LastName: "James",
		Team: "LV",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20825.png",
		TeamID: 25,
	},
	{
		PlayerID: 20828,
		FirstName: "Elgton",
		LastName: "Jenkins",
		Team: "GB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20828.png",
		TeamID: 12,
	},
	{
		PlayerID: 20831,
		FirstName: "Fred",
		LastName: "Johnson",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20831.png",
		TeamID: 26,
	},
	{
		PlayerID: 20837,
		FirstName: "Ty",
		LastName: "Johnson",
		Team: "BUF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20837.png",
		TeamID: 4,
	},
	{
		PlayerID: 20838,
		FirstName: "Tyron",
		LastName: "Johnson",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20838.png",
		TeamID: 9,
	},
	{
		PlayerID: 20840,
		FirstName: "Lonnie",
		LastName: "Johnson Jr.",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20840.png",
		TeamID: 22,
	},
	{
		PlayerID: 20841,
		FirstName: "Daniel",
		LastName: "Jones",
		Team: "NYG",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20841.png",
		TeamID: 23,
	},
	{
		PlayerID: 20842,
		FirstName: "Dre'Mont",
		LastName: "Jones",
		Team: "SEA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20842.png",
		TeamID: 30,
	},
	{
		PlayerID: 20844,
		FirstName: "Michael",
		LastName: "Jordan",
		Team: "GB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20844.png",
		TeamID: 12,
	},
	{
		PlayerID: 20850,
		FirstName: "Dawson",
		LastName: "Knox",
		Team: "BUF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20850.png",
		TeamID: 4,
	},
	{
		PlayerID: 20852,
		FirstName: "Dexter",
		LastName: "Lawrence II",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20852.png",
		TeamID: 23,
	},
	{
		PlayerID: 20854,
		FirstName: "Jonathan",
		LastName: "Ledbetter",
		Team: "ARI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20854.png",
		TeamID: 1,
	},
	{
		PlayerID: 20857,
		FirstName: "Chris",
		LastName: "Lindstrom",
		Team: "ATL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20857.png",
		TeamID: 2,
	},
	{
		PlayerID: 20859,
		FirstName: "Drew",
		LastName: "Lock",
		Team: "SEA",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20859.png",
		TeamID: 30,
	},
	{
		PlayerID: 20861,
		FirstName: "David",
		LastName: "Long Jr.",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20861.png",
		TeamID: 25,
	},
	{
		PlayerID: 20862,
		FirstName: "David",
		LastName: "Long Jr.",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20862.png",
		TeamID: 19,
	},
	{
		PlayerID: 20864,
		FirstName: "Julian",
		LastName: "Love",
		Team: "SEA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20864.png",
		TeamID: 30,
	},
	{
		PlayerID: 20868,
		FirstName: "Alexander",
		LastName: "Mattison",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20868.png",
		TeamID: 20,
	},
	{
		PlayerID: 20869,
		FirstName: "Erik",
		LastName: "McCoy",
		Team: "NO",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20869.png",
		TeamID: 22,
	},
	{
		PlayerID: 20870,
		FirstName: "Kaleb",
		LastName: "McGary",
		Team: "ATL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20870.png",
		TeamID: 2,
	},
	{
		PlayerID: 20871,
		FirstName: "Connor",
		LastName: "McGovern",
		Team: "BUF",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20871.png",
		TeamID: 4,
	},
	{
		PlayerID: 20873,
		FirstName: "Terry",
		LastName: "McLaurin",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20873.png",
		TeamID: 35,
	},
	{
		PlayerID: 20875,
		FirstName: "DK",
		LastName: "Metcalf",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20875.png",
		TeamID: 30,
	},
	{
		PlayerID: 20876,
		FirstName: "Jakobi",
		LastName: "Meyers",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20876.png",
		TeamID: 25,
	},
	{
		PlayerID: 20880,
		FirstName: "Gardner",
		LastName: "Minshew",
		Team: "IND",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20880.png",
		TeamID: 14,
	},
	{
		PlayerID: 20882,
		FirstName: "David",
		LastName: "Montgomery",
		Team: "DET",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20882.png",
		TeamID: 11,
	},
	{
		PlayerID: 20884,
		FirstName: "Foster",
		LastName: "Moreau",
		Team: "NO",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20884.png",
		TeamID: 22,
	},
	{
		PlayerID: 20886,
		FirstName: "Stanley",
		LastName: "Morgan",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20886.png",
		TeamID: 7,
	},
	{
		PlayerID: 20887,
		FirstName: "Trayvon",
		LastName: "Mullen",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20887.png",
		TeamID: 3,
	},
	{
		PlayerID: 20888,
		FirstName: "Byron",
		LastName: "Murphy Jr.",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20888.png",
		TeamID: 20,
	},
	{
		PlayerID: 20889,
		FirstName: "Kyler",
		LastName: "Murray",
		Team: "ARI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20889.png",
		TeamID: 1,
	},
	{
		PlayerID: 20891,
		FirstName: "Sam",
		LastName: "Mustipher",
		Team: "BAL",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20891.png",
		TeamID: 3,
	},
	{
		PlayerID: 20894,
		FirstName: "Anthony",
		LastName: "Nelson",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20894.png",
		TeamID: 33,
	},
	{
		PlayerID: 20895,
		FirstName: "Yosh",
		LastName: "Nijman",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20895.png",
		TeamID: 12,
	},
	{
		PlayerID: 20897,
		FirstName: "Bobby",
		LastName: "Okereke",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20897.png",
		TeamID: 23,
	},
	{
		PlayerID: 20898,
		FirstName: "Ed",
		LastName: "Oliver",
		Team: "BUF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20898.png",
		TeamID: 4,
	},
	{
		PlayerID: 20899,
		FirstName: "Josh",
		LastName: "Oliver",
		Team: "MIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20899.png",
		TeamID: 20,
	},
	{
		PlayerID: 20900,
		FirstName: "Qadree",
		LastName: "Ollison",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20900.png",
		TeamID: 28,
	},
	{
		PlayerID: 20901,
		FirstName: "Charles",
		LastName: "Omenihu",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20901.png",
		TeamID: 16,
	},
	{
		PlayerID: 20902,
		FirstName: "Sua",
		LastName: "Opeta",
		Team: "PHI",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20902.png",
		TeamID: 26,
	},
	{
		PlayerID: 20903,
		FirstName: "Amani",
		LastName: "Oruwariye",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20903.png",
		TeamID: 23,
	},
	{
		PlayerID: 20904,
		FirstName: "Devine",
		LastName: "Ozigbo",
		Team: "DET",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20904.png",
		TeamID: 11,
	},
	{
		PlayerID: 20905,
		FirstName: "Donald",
		LastName: "Parham Jr.",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20905.png",
		TeamID: 29,
	},
	{
		PlayerID: 20906,
		FirstName: "Jacques",
		LastName: "Patrick",
		Team: "TEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20906.png",
		TeamID: 34,
	},
	{
		PlayerID: 20912,
		FirstName: "Tony",
		LastName: "Pollard",
		Team: "DAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20912.png",
		TeamID: 9,
	},
	{
		PlayerID: 20914,
		FirstName: "Ben",
		LastName: "Powers",
		Team: "DEN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20914.png",
		TeamID: 10,
	},
	{
		PlayerID: 20915,
		FirstName: "Germaine",
		LastName: "Pratt",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20915.png",
		TeamID: 7,
	},
	{
		PlayerID: 20917,
		FirstName: "Isaiah",
		LastName: "Prince",
		Team: "ATL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20917.png",
		TeamID: 2,
	},
	{
		PlayerID: 20919,
		FirstName: "Taylor",
		LastName: "Rapp",
		Team: "BUF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20919.png",
		TeamID: 4,
	},
	{
		PlayerID: 20923,
		FirstName: "Sheldrick",
		LastName: "Redwine",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20923.png",
		TeamID: 9,
	},
	{
		PlayerID: 20924,
		FirstName: "Hunter",
		LastName: "Renfrow",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20924.png",
		TeamID: 25,
	},
	{
		PlayerID: 20926,
		FirstName: "Dalton",
		LastName: "Risner",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20926.png",
		TeamID: 20,
	},
	{
		PlayerID: 20929,
		FirstName: "Brett",
		LastName: "Rypien",
		Team: "LAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20929.png",
		TeamID: 32,
	},
	{
		PlayerID: 20931,
		FirstName: "Drew",
		LastName: "Sample",
		Team: "CIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20931.png",
		TeamID: 7,
	},
	{
		PlayerID: 20932,
		FirstName: "Deebo",
		LastName: "Samuel",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20932.png",
		TeamID: 31,
	},
	{
		PlayerID: 20933,
		FirstName: "Miles",
		LastName: "Sanders",
		Team: "CAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20933.png",
		TeamID: 5,
	},
	{
		PlayerID: 20934,
		FirstName: "Khalen",
		LastName: "Saunders",
		Team: "NO",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20934.png",
		TeamID: 22,
	},
	{
		PlayerID: 20936,
		FirstName: "Max",
		LastName: "Scharping",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20936.png",
		TeamID: 7,
	},
	{
		PlayerID: 20939,
		FirstName: "David",
		LastName: "Sills V",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20939.png",
		TeamID: 10,
	},
	{
		PlayerID: 20940,
		FirstName: "Jeffery",
		LastName: "Simmons",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20940.png",
		TeamID: 34,
	},
	{
		PlayerID: 20941,
		FirstName: "Devin",
		LastName: "Singletary",
		Team: "HOU",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20941.png",
		TeamID: 13,
	},
	{
		PlayerID: 20942,
		FirstName: "Chris",
		LastName: "Slayton",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20942.png",
		TeamID: 12,
	},
	{
		PlayerID: 20943,
		FirstName: "Darius",
		LastName: "Slayton",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20943.png",
		TeamID: 23,
	},
	{
		PlayerID: 20946,
		FirstName: "Kaden",
		LastName: "Smith",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20946.png",
		TeamID: 35,
	},
	{
		PlayerID: 20949,
		FirstName: "Irv",
		LastName: "Smith Jr.",
		Team: "CIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20949.png",
		TeamID: 7,
	},
	{
		PlayerID: 20953,
		FirstName: "Easton",
		LastName: "Stick",
		Team: "LAC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20953.png",
		TeamID: 29,
	},
	{
		PlayerID: 20954,
		FirstName: "Jarrett",
		LastName: "Stidham",
		Team: "DEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20954.png",
		TeamID: 10,
	},
	{
		PlayerID: 20956,
		FirstName: "Montez",
		LastName: "Sweat",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20956.png",
		TeamID: 35,
	},
	{
		PlayerID: 20957,
		FirstName: "Tommy",
		LastName: "Sweeney",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20957.png",
		TeamID: 23,
	},
	{
		PlayerID: 20959,
		FirstName: "Jahlani",
		LastName: "Tavai",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20959.png",
		TeamID: 21,
	},
	{
		PlayerID: 20960,
		FirstName: "Jawaan",
		LastName: "Taylor",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20960.png",
		TeamID: 16,
	},
	{
		PlayerID: 20963,
		FirstName: "Cody",
		LastName: "Thompson",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20963.png",
		TeamID: 30,
	},
	{
		PlayerID: 20965,
		FirstName: "Juan",
		LastName: "Thornhill",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20965.png",
		TeamID: 8,
	},
	{
		PlayerID: 20967,
		FirstName: "Jerry",
		LastName: "Tillery",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20967.png",
		TeamID: 25,
	},
	{
		PlayerID: 20968,
		FirstName: "Drue",
		LastName: "Tranquill",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20968.png",
		TeamID: 16,
	},
	{
		PlayerID: 20969,
		FirstName: "Olisaemeka",
		LastName: "Udoh",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20969.png",
		TeamID: 20,
	},
	{
		PlayerID: 20971,
		FirstName: "Andrew",
		LastName: "Van Ginkel",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20971.png",
		TeamID: 19,
	},
	{
		PlayerID: 20975,
		FirstName: "Armon",
		LastName: "Watts",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20975.png",
		TeamID: 28,
	},
	{
		PlayerID: 20977,
		FirstName: "Trevon",
		LastName: "Wesco",
		Team: "TEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20977.png",
		TeamID: 34,
	},
	{
		PlayerID: 20981,
		FirstName: "Devin",
		LastName: "White",
		Team: "TB",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20981.png",
		TeamID: 33,
	},
	{
		PlayerID: 20983,
		FirstName: "Christian",
		LastName: "Wilkins",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20983.png",
		TeamID: 19,
	},
	{
		PlayerID: 20986,
		FirstName: "Joejuan",
		LastName: "Williams",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20986.png",
		TeamID: 20,
	},
	{
		PlayerID: 20987,
		FirstName: "Jonah",
		LastName: "Williams",
		Team: "CIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20987.png",
		TeamID: 7,
	},
	{
		PlayerID: 20989,
		FirstName: "Quinnen",
		LastName: "Williams",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20989.png",
		TeamID: 24,
	},
	{
		PlayerID: 20990,
		FirstName: "Trayveon",
		LastName: "Williams",
		Team: "CIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20990.png",
		TeamID: 7,
	},
	{
		PlayerID: 20994,
		FirstName: "Mack",
		LastName: "Wilson Sr.",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20994.png",
		TeamID: 21,
	},
	{
		PlayerID: 20995,
		FirstName: "Chase",
		LastName: "Winovich",
		Team: "MIA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20995.png",
		TeamID: 19,
	},
	{
		PlayerID: 20996,
		FirstName: "Mitch",
		LastName: "Wishnowsky",
		Team: "SF",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20996.png",
		TeamID: 31,
	},
	{
		PlayerID: 20998,
		FirstName: "Renell",
		LastName: "Wren",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20998.png",
		TeamID: 28,
	},
	{
		PlayerID: 21000,
		FirstName: "Oshane",
		LastName: "Ximines",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21000.png",
		TeamID: 23,
	},
	{
		PlayerID: 21001,
		FirstName: "Rock",
		LastName: "Ya-Sin",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21001.png",
		TeamID: 3,
	},
	{
		PlayerID: 21005,
		FirstName: "Parris",
		LastName: "Campbell",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21005.png",
		TeamID: 23,
	},
	{
		PlayerID: 21008,
		FirstName: "L.J.",
		LastName: "Collier",
		Team: "ARI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21008.png",
		TeamID: 1,
	},
	{
		PlayerID: 21009,
		FirstName: "John",
		LastName: "Cominsky",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21009.png",
		TeamID: 11,
	},
	{
		PlayerID: 21011,
		FirstName: "Ryan",
		LastName: "Connelly",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21011.png",
		TeamID: 22,
	},
	{
		PlayerID: 21012,
		FirstName: "Lester",
		LastName: "Cotton",
		Team: "MIA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21012.png",
		TeamID: 19,
	},
	{
		PlayerID: 21013,
		FirstName: "Byron",
		LastName: "Cowart",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21013.png",
		TeamID: 19,
	},
	{
		PlayerID: 21015,
		FirstName: "Maxx",
		LastName: "Crosby",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21015.png",
		TeamID: 25,
	},
	{
		PlayerID: 21017,
		FirstName: "Jake",
		LastName: "Bailey",
		Team: "MIA",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21017.png",
		TeamID: 19,
	},
	{
		PlayerID: 21018,
		FirstName: "Zack",
		LastName: "Bailey",
		Team: "LAC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21018.png",
		TeamID: 29,
	},
	{
		PlayerID: 21021,
		FirstName: "Corey",
		LastName: "Ballentine",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21021.png",
		TeamID: 12,
	},
	{
		PlayerID: 21025,
		FirstName: "Cody",
		LastName: "Barton",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21025.png",
		TeamID: 35,
	},
	{
		PlayerID: 21026,
		FirstName: "Jackson",
		LastName: "Barton",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21026.png",
		TeamID: 1,
	},
	{
		PlayerID: 21027,
		FirstName: "Ryan",
		LastName: "Bates",
		Team: "BUF",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21027.png",
		TeamID: 4,
	},
	{
		PlayerID: 21036,
		FirstName: "Kris",
		LastName: "Boyd",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21036.png",
		TeamID: 1,
	},
	{
		PlayerID: 21037,
		FirstName: "Miles",
		LastName: "Boykin",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21037.png",
		TeamID: 28,
	},
	{
		PlayerID: 21038,
		FirstName: "Garrett",
		LastName: "Bradbury",
		Team: "MIN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21038.png",
		TeamID: 20,
	},
	{
		PlayerID: 21042,
		FirstName: "A.J.",
		LastName: "Brown",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21042.png",
		TeamID: 26,
	},
	{
		PlayerID: 21045,
		FirstName: "Marquise",
		LastName: "Brown",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21045.png",
		TeamID: 1,
	},
	{
		PlayerID: 21046,
		FirstName: "Jake",
		LastName: "Browning",
		Team: "CIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21046.png",
		TeamID: 7,
	},
	{
		PlayerID: 21048,
		FirstName: "Austin",
		LastName: "Bryant",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21048.png",
		TeamID: 31,
	},
	{
		PlayerID: 21049,
		FirstName: "Isaiah",
		LastName: "Buggs",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21049.png",
		TeamID: 11,
	},
	{
		PlayerID: 21050,
		FirstName: "Sean",
		LastName: "Murphy-Bunting",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21050.png",
		TeamID: 34,
	},
	{
		PlayerID: 21052,
		FirstName: "Brian",
		LastName: "Burns",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21052.png",
		TeamID: 5,
	},
	{
		PlayerID: 21054,
		FirstName: "Devin",
		LastName: "Bush",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21054.png",
		TeamID: 30,
	},
	{
		PlayerID: 21057,
		FirstName: "Dennis",
		LastName: "Daley",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21057.png",
		TeamID: 1,
	},
	{
		PlayerID: 21060,
		FirstName: "Nate",
		LastName: "Davis",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21060.png",
		TeamID: 6,
	},
	{
		PlayerID: 21064,
		FirstName: "Jamel",
		LastName: "Dean",
		Team: "TB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21064.png",
		TeamID: 33,
	},
	{
		PlayerID: 21065,
		FirstName: "Michael",
		LastName: "Deiter",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21065.png",
		TeamID: 13,
	},
	{
		PlayerID: 21066,
		FirstName: "Lukas",
		LastName: "Denis",
		Team: "ATL",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21066.png",
		TeamID: 2,
	},
	{
		PlayerID: 21067,
		FirstName: "Andre",
		LastName: "Dillard",
		Team: "TEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21067.png",
		TeamID: 34,
	},
	{
		PlayerID: 21071,
		FirstName: "Greg",
		LastName: "Dortch",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21071.png",
		TeamID: 1,
	},
	{
		PlayerID: 21072,
		FirstName: "Keelan",
		LastName: "Doss",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21072.png",
		TeamID: 29,
	},
	{
		PlayerID: 21077,
		FirstName: "Diontae",
		LastName: "Johnson",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21077.png",
		TeamID: 28,
	},
	{
		PlayerID: 21078,
		FirstName: "Jeff",
		LastName: "Smith",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21078.png",
		TeamID: 1,
	},
	{
		PlayerID: 21100,
		FirstName: "Jakob",
		LastName: "Johnson",
		Team: "LV",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21100.png",
		TeamID: 25,
	},
	{
		PlayerID: 21107,
		FirstName: "Darnell",
		LastName: "Savage",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21107.png",
		TeamID: 12,
	},
	{
		PlayerID: 21108,
		FirstName: "Sione",
		LastName: "Takitaki",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21108.png",
		TeamID: 8,
	},
	{
		PlayerID: 21109,
		FirstName: "Quincy",
		LastName: "Williams",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21109.png",
		TeamID: 24,
	},
	{
		PlayerID: 21110,
		FirstName: "Trey",
		LastName: "Pipkins III",
		Team: "LAC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21110.png",
		TeamID: 29,
	},
	{
		PlayerID: 21111,
		FirstName: "Ugo",
		LastName: "Amadi",
		Team: "NO",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21111.png",
		TeamID: 22,
	},
	{
		PlayerID: 21113,
		FirstName: "Drew",
		LastName: "Forbes",
		Team: "CLE",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21113.png",
		TeamID: 8,
	},
	{
		PlayerID: 21114,
		FirstName: "Austin",
		LastName: "Seibert",
		Team: "NYJ",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21114.png",
		TeamID: 24,
	},
	{
		PlayerID: 21115,
		FirstName: "Juwann",
		LastName: "Winfree",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21115.png",
		TeamID: 14,
	},
	{
		PlayerID: 21116,
		FirstName: "Ka'dar",
		LastName: "Hollman",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21116.png",
		TeamID: 13,
	},
	{
		PlayerID: 21117,
		FirstName: "E.J.",
		LastName: "Speed",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21117.png",
		TeamID: 14,
	},
	{
		PlayerID: 21118,
		FirstName: "Blake",
		LastName: "Cashman",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21118.png",
		TeamID: 13,
	},
	{
		PlayerID: 21119,
		FirstName: "Justin",
		LastName: "Skule",
		Team: "TB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21119.png",
		TeamID: 33,
	},
	{
		PlayerID: 21120,
		FirstName: "Cole",
		LastName: "Holcomb",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21120.png",
		TeamID: 28,
	},
	{
		PlayerID: 21122,
		FirstName: "Duke",
		LastName: "Shelley",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21122.png",
		TeamID: 32,
	},
	{
		PlayerID: 21123,
		FirstName: "Donovan",
		LastName: "Wilson",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21123.png",
		TeamID: 9,
	},
	{
		PlayerID: 21125,
		FirstName: "Ty",
		LastName: "Summers",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21125.png",
		TeamID: 22,
	},
	{
		PlayerID: 21129,
		FirstName: "Nick",
		LastName: "Allegretti",
		Team: "KC",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21129.png",
		TeamID: 16,
	},
	{
		PlayerID: 21131,
		FirstName: "Nick",
		LastName: "Scott",
		Team: "CIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21131.png",
		TeamID: 7,
	},
	{
		PlayerID: 21133,
		FirstName: "Marcus",
		LastName: "Epps",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21133.png",
		TeamID: 25,
	},
	{
		PlayerID: 21134,
		FirstName: "Kaden",
		LastName: "Elliss",
		Team: "ATL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21134.png",
		TeamID: 2,
	},
	{
		PlayerID: 21138,
		FirstName: "Scotty",
		LastName: "Miller",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21138.png",
		TeamID: 2,
	},
	{
		PlayerID: 21140,
		FirstName: "Joshua",
		LastName: "Miles",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21140.png",
		TeamID: 2,
	},
	{
		PlayerID: 21142,
		FirstName: "Olamide",
		LastName: "Zaccheaus",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21142.png",
		TeamID: 26,
	},
	{
		PlayerID: 21158,
		FirstName: "Matt",
		LastName: "Sokol",
		Team: "NE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21158.png",
		TeamID: 21,
	},
	{
		PlayerID: 21163,
		FirstName: "Deonte",
		LastName: "Harty",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21163.png",
		TeamID: 4,
	},
	{
		PlayerID: 21164,
		FirstName: "Ethan",
		LastName: "Greenidge",
		Team: "ATL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21164.png",
		TeamID: 2,
	},
	{
		PlayerID: 21165,
		FirstName: "Kyle",
		LastName: "Phillips",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21165.png",
		TeamID: 22,
	},
	{
		PlayerID: 21169,
		FirstName: "Malik",
		LastName: "Taylor",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21169.png",
		TeamID: 24,
	},
	{
		PlayerID: 21190,
		FirstName: "Roderic",
		LastName: "Teamer",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21190.png",
		TeamID: 25,
	},
	{
		PlayerID: 21192,
		FirstName: "Nik",
		LastName: "Needham",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21192.png",
		TeamID: 19,
	},
	{
		PlayerID: 21206,
		FirstName: "Patrick",
		LastName: "Mekari",
		Team: "BAL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21206.png",
		TeamID: 3,
	},
	{
		PlayerID: 21207,
		FirstName: "Jordan",
		LastName: "Kunaszyk",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21207.png",
		TeamID: 8,
	},
	{
		PlayerID: 21211,
		FirstName: "Patrick",
		LastName: "Laird",
		Team: "TB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21211.png",
		TeamID: 33,
	},
	{
		PlayerID: 21216,
		FirstName: "Cam",
		LastName: "Lewis",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21216.png",
		TeamID: 4,
	},
	{
		PlayerID: 21217,
		FirstName: "Blake",
		LastName: "Hance",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21217.png",
		TeamID: 15,
	},
	{
		PlayerID: 21218,
		FirstName: "Tyrel",
		LastName: "Dodson",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21218.png",
		TeamID: 4,
	},
	{
		PlayerID: 21227,
		FirstName: "Andrew",
		LastName: "Beck",
		Team: "HOU",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21227.png",
		TeamID: 13,
	},
	{
		PlayerID: 21228,
		FirstName: "Calvin",
		LastName: "Anderson",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21228.png",
		TeamID: 21,
	},
	{
		PlayerID: 21234,
		FirstName: "Kyron",
		LastName: "Brown",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21234.png",
		TeamID: 4,
	},
	{
		PlayerID: 21239,
		FirstName: "Keisean",
		LastName: "Nixon",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21239.png",
		TeamID: 12,
	},
	{
		PlayerID: 21263,
		FirstName: "Trenton",
		LastName: "Irwin",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21263.png",
		TeamID: 7,
	},
	{
		PlayerID: 21277,
		FirstName: "David",
		LastName: "Blough",
		Team: "DET",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21277.png",
		TeamID: 11,
	},
	{
		PlayerID: 21278,
		FirstName: "Stephen",
		LastName: "Carlson",
		Team: "CHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21278.png",
		TeamID: 6,
	},
	{
		PlayerID: 21279,
		FirstName: "Jamie",
		LastName: "Gillan",
		Team: "NYG",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21279.png",
		TeamID: 23,
	},
	{
		PlayerID: 21281,
		FirstName: "Andrew",
		LastName: "Wingard",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21281.png",
		TeamID: 15,
	},
	{
		PlayerID: 21295,
		FirstName: "Nsimba",
		LastName: "Webster",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21295.png",
		TeamID: 6,
	},
	{
		PlayerID: 21298,
		FirstName: "Marquise",
		LastName: "Copeland",
		Team: "LAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21298.png",
		TeamID: 32,
	},
	{
		PlayerID: 21306,
		FirstName: "Del'Shawn",
		LastName: "Phillips",
		Team: "BAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21306.png",
		TeamID: 3,
	},
	{
		PlayerID: 21310,
		FirstName: "Khari",
		LastName: "Blasingame",
		Team: "CHI",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21310.png",
		TeamID: 6,
	},
	{
		PlayerID: 21330,
		FirstName: "Chandler",
		LastName: "Brewer",
		Team: "JAX",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21330.png",
		TeamID: 15,
	},
	{
		PlayerID: 21332,
		FirstName: "Troy",
		LastName: "Reeder",
		Team: "LAR",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21332.png",
		TeamID: 32,
	},
	{
		PlayerID: 21334,
		FirstName: "Micah",
		LastName: "Abernathy",
		Team: "ATL",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21334.png",
		TeamID: 2,
	},
	{
		PlayerID: 21349,
		FirstName: "Ashton",
		LastName: "Dulin",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21349.png",
		TeamID: 14,
	},
	{
		PlayerID: 21354,
		FirstName: "Demetrius",
		LastName: "Flannigan-Fowles",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21354.png",
		TeamID: 31,
	},
	{
		PlayerID: 21364,
		FirstName: "Jacob",
		LastName: "Bobenmoyer",
		Team: "LV",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21364.png",
		TeamID: 25,
	},
	{
		PlayerID: 21373,
		FirstName: "P.J.",
		LastName: "Locke",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21373.png",
		TeamID: 10,
	},
	{
		PlayerID: 21376,
		FirstName: "Jack",
		LastName: "Fox",
		Team: "DET",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21376.png",
		TeamID: 11,
	},
	{
		PlayerID: 21383,
		FirstName: "Jody",
		LastName: "Fortson",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21383.png",
		TeamID: 16,
	},
	{
		PlayerID: 21386,
		FirstName: "Mitchell",
		LastName: "Fraboni",
		Team: "DEN",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21386.png",
		TeamID: 10,
	},
	{
		PlayerID: 21400,
		FirstName: "Steven",
		LastName: "Sims",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21400.png",
		TeamID: 13,
	},
	{
		PlayerID: 21406,
		FirstName: "Quinn",
		LastName: "Bailey",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21406.png",
		TeamID: 10,
	},
	{
		PlayerID: 21411,
		FirstName: "Matt",
		LastName: "Nelson",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21411.png",
		TeamID: 11,
	},
	{
		PlayerID: 21421,
		FirstName: "Nick",
		LastName: "Moore",
		Team: "BAL",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21421.png",
		TeamID: 3,
	},
	{
		PlayerID: 21422,
		FirstName: "Shy",
		LastName: "Tuttle",
		Team: "CAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21422.png",
		TeamID: 5,
	},
	{
		PlayerID: 21445,
		FirstName: "Andrew",
		LastName: "Dowell",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21445.png",
		TeamID: 22,
	},
	{
		PlayerID: 21448,
		FirstName: "Jalen",
		LastName: "Guyton",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21448.png",
		TeamID: 29,
	},
	{
		PlayerID: 21449,
		FirstName: "Luke",
		LastName: "Gifford",
		Team: "TEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21449.png",
		TeamID: 34,
	},
	{
		PlayerID: 21463,
		FirstName: "D'Angelo",
		LastName: "Ross",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21463.png",
		TeamID: 13,
	},
	{
		PlayerID: 21466,
		FirstName: "Jonathan",
		LastName: "Harris",
		Team: "DEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21466.png",
		TeamID: 10,
	},
	{
		PlayerID: 21473,
		FirstName: "D.J.",
		LastName: "Montgomery",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21473.png",
		TeamID: 14,
	},
	{
		PlayerID: 21478,
		FirstName: "Curtis",
		LastName: "Bolton",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21478.png",
		TeamID: 25,
	},
	{
		PlayerID: 21484,
		FirstName: "Matt",
		LastName: "Orzech",
		Team: "GB",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21484.png",
		TeamID: 12,
	},
	{
		PlayerID: 21490,
		FirstName: "Azeez",
		LastName: "Al-Shaair",
		Team: "TEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21490.png",
		TeamID: 34,
	},
	{
		PlayerID: 21494,
		FirstName: "Bryan",
		LastName: "Mone",
		Team: "SEA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21494.png",
		TeamID: 30,
	},
	{
		PlayerID: 21514,
		FirstName: "Austin",
		LastName: "Walter",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21514.png",
		TeamID: 25,
	},
	{
		PlayerID: 21516,
		FirstName: "AJ",
		LastName: "Cole",
		Team: "LV",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21516.png",
		TeamID: 25,
	},
	{
		PlayerID: 21519,
		FirstName: "Joey",
		LastName: "Slye",
		Team: "WAS",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21519.png",
		TeamID: 35,
	},
	{
		PlayerID: 21531,
		FirstName: "Chris",
		LastName: "Myarick",
		Team: "NYG",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21531.png",
		TeamID: 23,
	},
	{
		PlayerID: 21536,
		FirstName: "Kevin",
		LastName: "Strong",
		Team: "ARI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21536.png",
		TeamID: 1,
	},
	{
		PlayerID: 21542,
		FirstName: "Chase",
		LastName: "McLaughlin",
		Team: "TB",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21542.png",
		TeamID: 33,
	},
	{
		PlayerID: 21543,
		FirstName: "Anthony",
		LastName: "Pittman",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21543.png",
		TeamID: 11,
	},
	{
		PlayerID: 21564,
		FirstName: "Craig",
		LastName: "Reynolds",
		Team: "DET",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21564.png",
		TeamID: 11,
	},
	{
		PlayerID: 21593,
		FirstName: "D'Ernest",
		LastName: "Johnson",
		Team: "JAX",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21593.png",
		TeamID: 15,
	},
	{
		PlayerID: 21601,
		FirstName: "Gunner",
		LastName: "Olszewski",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21601.png",
		TeamID: 28,
	},
	{
		PlayerID: 21634,
		FirstName: "Derrick",
		LastName: "Gore",
		Team: "WAS",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21634.png",
		TeamID: 35,
	},
	{
		PlayerID: 21635,
		FirstName: "Jalen",
		LastName: "Thompson",
		Team: "ARI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21635.png",
		TeamID: 1,
	},
	{
		PlayerID: 21661,
		FirstName: "Brett",
		LastName: "Toth",
		Team: "PHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21661.png",
		TeamID: 26,
	},
	{
		PlayerID: 21674,
		FirstName: "J.K.",
		LastName: "Dobbins",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21674.png",
		TeamID: 3,
	},
	{
		PlayerID: 21675,
		FirstName: "Tyler",
		LastName: "Johnson",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21675.png",
		TeamID: 32,
	},
	{
		PlayerID: 21677,
		FirstName: "Tua",
		LastName: "Tagovailoa",
		Team: "MIA",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21677.png",
		TeamID: 19,
	},
	{
		PlayerID: 21678,
		FirstName: "Brycen",
		LastName: "Hopkins",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21678.png",
		TeamID: 32,
	},
	{
		PlayerID: 21679,
		FirstName: "CeeDee",
		LastName: "Lamb",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21679.png",
		TeamID: 9,
	},
	{
		PlayerID: 21681,
		FirstName: "Justin",
		LastName: "Herbert",
		Team: "LAC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21681.png",
		TeamID: 29,
	},
	{
		PlayerID: 21682,
		FirstName: "Jonathan",
		LastName: "Taylor",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21682.png",
		TeamID: 14,
	},
	{
		PlayerID: 21684,
		FirstName: "D'Andre",
		LastName: "Swift",
		Team: "PHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21684.png",
		TeamID: 26,
	},
	{
		PlayerID: 21685,
		FirstName: "Justin",
		LastName: "Jefferson",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21685.png",
		TeamID: 20,
	},
	{
		PlayerID: 21686,
		FirstName: "Jalen",
		LastName: "Reagor",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21686.png",
		TeamID: 21,
	},
	{
		PlayerID: 21687,
		FirstName: "DeVonta",
		LastName: "Smith",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21687.png",
		TeamID: 26,
	},
	{
		PlayerID: 21688,
		FirstName: "Cam",
		LastName: "Akers",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21688.png",
		TeamID: 20,
	},
	{
		PlayerID: 21690,
		FirstName: "Tee",
		LastName: "Higgins",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21690.png",
		TeamID: 7,
	},
	{
		PlayerID: 21691,
		FirstName: "Chuba",
		LastName: "Hubbard",
		Team: "CAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21691.png",
		TeamID: 5,
	},
	{
		PlayerID: 21692,
		FirstName: "Jerry",
		LastName: "Jeudy",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21692.png",
		TeamID: 10,
	},
	{
		PlayerID: 21693,
		FirstName: "Joe",
		LastName: "Burrow",
		Team: "CIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21693.png",
		TeamID: 7,
	},
	{
		PlayerID: 21696,
		FirstName: "Travis",
		LastName: "Etienne Jr.",
		Team: "JAX",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21696.png",
		TeamID: 15,
	},
	{
		PlayerID: 21697,
		FirstName: "Laviska",
		LastName: "Shenault Jr.",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21697.png",
		TeamID: 5,
	},
	{
		PlayerID: 21714,
		FirstName: "K.J.",
		LastName: "Osborn",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21714.png",
		TeamID: 20,
	},
	{
		PlayerID: 21717,
		FirstName: "Jauan",
		LastName: "Jennings",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21717.png",
		TeamID: 31,
	},
	{
		PlayerID: 21719,
		FirstName: "Nick",
		LastName: "Bowers",
		Team: "MIA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21719.png",
		TeamID: 19,
	},
	{
		PlayerID: 21721,
		FirstName: "Devin",
		LastName: "Duvernay",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21721.png",
		TeamID: 3,
	},
	{
		PlayerID: 21724,
		FirstName: "Easop",
		LastName: "Winston Jr.",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21724.png",
		TeamID: 30,
	},
	{
		PlayerID: 21725,
		FirstName: "Trishton",
		LastName: "Jackson",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21725.png",
		TeamID: 20,
	},
	{
		PlayerID: 21728,
		FirstName: "Lawrence",
		LastName: "Cager",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21728.png",
		TeamID: 23,
	},
	{
		PlayerID: 21732,
		FirstName: "Giovanni",
		LastName: "Ricci",
		Team: "CAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21732.png",
		TeamID: 5,
	},
	{
		PlayerID: 21734,
		FirstName: "Nick",
		LastName: "Westbrook-Ikhine",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21734.png",
		TeamID: 34,
	},
	{
		PlayerID: 21735,
		FirstName: "Gabe",
		LastName: "Davis",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21735.png",
		TeamID: 4,
	},
	{
		PlayerID: 21738,
		FirstName: "Juwan",
		LastName: "Johnson",
		Team: "NO",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21738.png",
		TeamID: 22,
	},
	{
		PlayerID: 21739,
		FirstName: "Van",
		LastName: "Jefferson",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21739.png",
		TeamID: 32,
	},
	{
		PlayerID: 21743,
		FirstName: "Lynn",
		LastName: "Bowden",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21743.png",
		TeamID: 22,
	},
	{
		PlayerID: 21744,
		FirstName: "Michael",
		LastName: "Pittman Jr.",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21744.png",
		TeamID: 14,
	},
	{
		PlayerID: 21747,
		FirstName: "Brandon",
		LastName: "Aiyuk",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21747.png",
		TeamID: 31,
	},
	{
		PlayerID: 21750,
		FirstName: "Marquez",
		LastName: "Callaway",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21750.png",
		TeamID: 25,
	},
	{
		PlayerID: 21752,
		FirstName: "Chase",
		LastName: "Claypool",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21752.png",
		TeamID: 6,
	},
	{
		PlayerID: 21754,
		FirstName: "Donovan",
		LastName: "Peoples-Jones",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21754.png",
		TeamID: 8,
	},
	{
		PlayerID: 21756,
		FirstName: "Nico",
		LastName: "Collins",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21756.png",
		TeamID: 13,
	},
	{
		PlayerID: 21760,
		FirstName: "Isaiah",
		LastName: "Hodgins",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21760.png",
		TeamID: 23,
	},
	{
		PlayerID: 21765,
		FirstName: "JaMycal",
		LastName: "Hasty",
		Team: "JAX",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21765.png",
		TeamID: 15,
	},
	{
		PlayerID: 21768,
		FirstName: "Najee",
		LastName: "Harris",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21768.png",
		TeamID: 28,
	},
	{
		PlayerID: 21769,
		FirstName: "Clyde",
		LastName: "Edwards-Helaire",
		Team: "KC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21769.png",
		TeamID: 16,
	},
	{
		PlayerID: 21772,
		FirstName: "Cole",
		LastName: "Kmet",
		Team: "CHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21772.png",
		TeamID: 6,
	},
	{
		PlayerID: 21773,
		FirstName: "Eno",
		LastName: "Benjamin",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21773.png",
		TeamID: 22,
	},
	{
		PlayerID: 21774,
		FirstName: "Tony",
		LastName: "Jones Jr.",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21774.png",
		TeamID: 22,
	},
	{
		PlayerID: 21776,
		FirstName: "Joshua",
		LastName: "Kelley",
		Team: "LAC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21776.png",
		TeamID: 29,
	},
	{
		PlayerID: 21781,
		FirstName: "Sean",
		LastName: "McKeon",
		Team: "DAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21781.png",
		TeamID: 9,
	},
	{
		PlayerID: 21783,
		FirstName: "Harrison",
		LastName: "Bryant",
		Team: "CLE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21783.png",
		TeamID: 8,
	},
	{
		PlayerID: 21784,
		FirstName: "Zack",
		LastName: "Moss",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21784.png",
		TeamID: 14,
	},
	{
		PlayerID: 21785,
		FirstName: "Noah",
		LastName: "Gray",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21785.png",
		TeamID: 16,
	},
	{
		PlayerID: 21786,
		FirstName: "Adam",
		LastName: "Trautman",
		Team: "DEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21786.png",
		TeamID: 10,
	},
	{
		PlayerID: 21788,
		FirstName: "Ke'Shawn",
		LastName: "Vaughn",
		Team: "TB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21788.png",
		TeamID: 33,
	},
	{
		PlayerID: 21794,
		FirstName: "Albert",
		LastName: "Okwuegbunam",
		Team: "PHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21794.png",
		TeamID: 26,
	},
	{
		PlayerID: 21795,
		FirstName: "Luke",
		LastName: "Farrell",
		Team: "JAX",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21795.png",
		TeamID: 15,
	},
	{
		PlayerID: 21797,
		FirstName: "La'Mical",
		LastName: "Perine",
		Team: "KC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21797.png",
		TeamID: 16,
	},
	{
		PlayerID: 21798,
		FirstName: "Josiah",
		LastName: "Deguara",
		Team: "GB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21798.png",
		TeamID: 12,
	},
	{
		PlayerID: 21800,
		FirstName: "Mitchell",
		LastName: "Wilcox",
		Team: "CIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21800.png",
		TeamID: 7,
	},
	{
		PlayerID: 21801,
		FirstName: "Trey",
		LastName: "Sermon",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21801.png",
		TeamID: 14,
	},
	{
		PlayerID: 21802,
		FirstName: "AJ",
		LastName: "Dillon",
		Team: "GB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21802.png",
		TeamID: 12,
	},
	{
		PlayerID: 21804,
		FirstName: "DeeJay",
		LastName: "Dallas",
		Team: "SEA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21804.png",
		TeamID: 30,
	},
	{
		PlayerID: 21807,
		FirstName: "Colby",
		LastName: "Parkinson",
		Team: "SEA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21807.png",
		TeamID: 30,
	},
	{
		PlayerID: 21808,
		FirstName: "Dalton",
		LastName: "Keene",
		Team: "HOU",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21808.png",
		TeamID: 13,
	},
	{
		PlayerID: 21810,
		FirstName: "Tyler",
		LastName: "Huntley",
		Team: "BAL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21810.png",
		TeamID: 3,
	},
	{
		PlayerID: 21814,
		FirstName: "Jake",
		LastName: "Luton",
		Team: "CAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21814.png",
		TeamID: 5,
	},
	{
		PlayerID: 21815,
		FirstName: "Sam",
		LastName: "Ehlinger",
		Team: "IND",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21815.png",
		TeamID: 14,
	},
	{
		PlayerID: 21818,
		FirstName: "Shane",
		LastName: "Buechele",
		Team: "BUF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21818.png",
		TeamID: 4,
	},
	{
		PlayerID: 21823,
		FirstName: "Patrick",
		LastName: "Taylor",
		Team: "GB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21823.png",
		TeamID: 12,
	},
	{
		PlayerID: 21828,
		FirstName: "Jake",
		LastName: "Fromm",
		Team: "WAS",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21828.png",
		TeamID: 35,
	},
	{
		PlayerID: 21831,
		FirstName: "Jalen",
		LastName: "Hurts",
		Team: "PHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21831.png",
		TeamID: 26,
	},
	{
		PlayerID: 21841,
		FirstName: "Jordan",
		LastName: "Love",
		Team: "GB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21841.png",
		TeamID: 12,
	},
	{
		PlayerID: 21843,
		FirstName: "Salvon",
		LastName: "Ahmed",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21843.png",
		TeamID: 19,
	},
	{
		PlayerID: 21845,
		FirstName: "Darrynton",
		LastName: "Evans",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21845.png",
		TeamID: 19,
	},
	{
		PlayerID: 21852,
		FirstName: "Ty",
		LastName: "Chandler",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21852.png",
		TeamID: 20,
	},
	{
		PlayerID: 21854,
		FirstName: "Anthony",
		LastName: "McFarland Jr.",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21854.png",
		TeamID: 28,
	},
	{
		PlayerID: 21861,
		FirstName: "Antonio",
		LastName: "Gibson",
		Team: "WAS",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21861.png",
		TeamID: 35,
	},
	{
		PlayerID: 21865,
		FirstName: "Stephen",
		LastName: "Sullivan",
		Team: "CAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21865.png",
		TeamID: 5,
	},
	{
		PlayerID: 21867,
		FirstName: "Javon",
		LastName: "Kinlaw",
		Team: "SF",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21867.png",
		TeamID: 31,
	},
	{
		PlayerID: 21868,
		FirstName: "Benito",
		LastName: "Jones",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21868.png",
		TeamID: 11,
	},
	{
		PlayerID: 21869,
		FirstName: "DaVon",
		LastName: "Hamilton",
		Team: "JAX",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21869.png",
		TeamID: 15,
	},
	{
		PlayerID: 21870,
		FirstName: "Bradlee",
		LastName: "Anae",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21870.png",
		TeamID: 24,
	},
	{
		PlayerID: 21875,
		FirstName: "James",
		LastName: "Smith-Williams",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21875.png",
		TeamID: 35,
	},
	{
		PlayerID: 21876,
		FirstName: "Khalid",
		LastName: "Kareem",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21876.png",
		TeamID: 6,
	},
	{
		PlayerID: 21879,
		FirstName: "Jonathan",
		LastName: "Greenard",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21879.png",
		TeamID: 13,
	},
	{
		PlayerID: 21880,
		FirstName: "Larrell",
		LastName: "Murchison",
		Team: "LAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21880.png",
		TeamID: 32,
	},
	{
		PlayerID: 21881,
		FirstName: "A.J.",
		LastName: "Epenesa",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21881.png",
		TeamID: 4,
	},
	{
		PlayerID: 21882,
		FirstName: "Darrell",
		LastName: "Taylor",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21882.png",
		TeamID: 30,
	},
	{
		PlayerID: 21884,
		FirstName: "Marlon",
		LastName: "Davidson",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21884.png",
		TeamID: 31,
	},
	{
		PlayerID: 21885,
		FirstName: "Rashard",
		LastName: "Lawrence",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21885.png",
		TeamID: 19,
	},
	{
		PlayerID: 21886,
		FirstName: "Broderick",
		LastName: "Washington",
		Team: "BAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21886.png",
		TeamID: 3,
	},
	{
		PlayerID: 21887,
		FirstName: "Julian",
		LastName: "Okwara",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21887.png",
		TeamID: 11,
	},
	{
		PlayerID: 21888,
		FirstName: "K'Lavon",
		LastName: "Chaisson",
		Team: "JAX",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21888.png",
		TeamID: 15,
	},
	{
		PlayerID: 21889,
		FirstName: "Josh",
		LastName: "Uche",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21889.png",
		TeamID: 21,
	},
	{
		PlayerID: 21890,
		FirstName: "Trevis",
		LastName: "Gipson",
		Team: "TEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21890.png",
		TeamID: 34,
	},
	{
		PlayerID: 21894,
		FirstName: "James",
		LastName: "Lynch",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21894.png",
		TeamID: 20,
	},
	{
		PlayerID: 21895,
		FirstName: "Raequan",
		LastName: "Williams",
		Team: "CAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21895.png",
		TeamID: 5,
	},
	{
		PlayerID: 21896,
		FirstName: "Yetur",
		LastName: "Gross-Matos",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21896.png",
		TeamID: 5,
	},
	{
		PlayerID: 21897,
		FirstName: "Alex",
		LastName: "Highsmith",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21897.png",
		TeamID: 28,
	},
	{
		PlayerID: 21898,
		FirstName: "Anfernee",
		LastName: "Jennings",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21898.png",
		TeamID: 21,
	},
	{
		PlayerID: 21899,
		FirstName: "Malcolm",
		LastName: "Roach",
		Team: "NO",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21899.png",
		TeamID: 22,
	},
	{
		PlayerID: 21900,
		FirstName: "Justin",
		LastName: "Madubuike",
		Team: "BAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21900.png",
		TeamID: 3,
	},
	{
		PlayerID: 21902,
		FirstName: "Carter",
		LastName: "Coughlin",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21902.png",
		TeamID: 23,
	},
	{
		PlayerID: 21903,
		FirstName: "Terrell",
		LastName: "Lewis",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21903.png",
		TeamID: 22,
	},
	{
		PlayerID: 21907,
		FirstName: "Zack",
		LastName: "Baun",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21907.png",
		TeamID: 22,
	},
	{
		PlayerID: 21909,
		FirstName: "D.J.",
		LastName: "Wonnum",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21909.png",
		TeamID: 20,
	},
	{
		PlayerID: 21911,
		FirstName: "Markus",
		LastName: "Bailey",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21911.png",
		TeamID: 7,
	},
	{
		PlayerID: 21913,
		FirstName: "Joe",
		LastName: "Bachie",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21913.png",
		TeamID: 7,
	},
	{
		PlayerID: 21914,
		FirstName: "Shaun",
		LastName: "Bradley",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21914.png",
		TeamID: 26,
	},
	{
		PlayerID: 21918,
		FirstName: "Grant",
		LastName: "Delpit",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21918.png",
		TeamID: 8,
	},
	{
		PlayerID: 21920,
		FirstName: "Shyheim",
		LastName: "Carter",
		Team: "TEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21920.png",
		TeamID: 34,
	},
	{
		PlayerID: 21921,
		FirstName: "Jeremy",
		LastName: "Chinn",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21921.png",
		TeamID: 5,
	},
	{
		PlayerID: 21922,
		FirstName: "Terrell",
		LastName: "Burgess",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21922.png",
		TeamID: 35,
	},
	{
		PlayerID: 21923,
		FirstName: "Kamren",
		LastName: "Curl",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21923.png",
		TeamID: 35,
	},
	{
		PlayerID: 21925,
		FirstName: "Ashtyn",
		LastName: "Davis",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21925.png",
		TeamID: 24,
	},
	{
		PlayerID: 21926,
		FirstName: "Kyle",
		LastName: "Dugger",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21926.png",
		TeamID: 21,
	},
	{
		PlayerID: 21927,
		FirstName: "Brandon",
		LastName: "Jones",
		Team: "MIA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21927.png",
		TeamID: 19,
	},
	{
		PlayerID: 21928,
		FirstName: "Daniel",
		LastName: "Thomas",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21928.png",
		TeamID: 15,
	},
	{
		PlayerID: 21929,
		FirstName: "Josh",
		LastName: "Metellus",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21929.png",
		TeamID: 20,
	},
	{
		PlayerID: 21931,
		FirstName: "Geno",
		LastName: "Stone",
		Team: "BAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21931.png",
		TeamID: 3,
	},
	{
		PlayerID: 21932,
		FirstName: "Tanner",
		LastName: "Muse",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21932.png",
		TeamID: 29,
	},
	{
		PlayerID: 21933,
		FirstName: "Jaylinn",
		LastName: "Hawkins",
		Team: "ATL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21933.png",
		TeamID: 2,
	},
	{
		PlayerID: 21934,
		FirstName: "L'Jarius",
		LastName: "Sneed",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21934.png",
		TeamID: 16,
	},
	{
		PlayerID: 21936,
		FirstName: "Xavier",
		LastName: "McKinney",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21936.png",
		TeamID: 23,
	},
	{
		PlayerID: 21937,
		FirstName: "Jordan",
		LastName: "Fuller",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21937.png",
		TeamID: 32,
	},
	{
		PlayerID: 21938,
		FirstName: "K'Von",
		LastName: "Wallace",
		Team: "ARI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21938.png",
		TeamID: 1,
	},
	{
		PlayerID: 21939,
		FirstName: "Alohi",
		LastName: "Gilman",
		Team: "LAC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21939.png",
		TeamID: 29,
	},
	{
		PlayerID: 21940,
		FirstName: "Antoine",
		LastName: "Winfield Jr.",
		Team: "TB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21940.png",
		TeamID: 33,
	},
	{
		PlayerID: 21943,
		FirstName: "Robert",
		LastName: "Hunt",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21943.png",
		TeamID: 19,
	},
	{
		PlayerID: 21944,
		FirstName: "Jonah",
		LastName: "Jackson",
		Team: "DET",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21944.png",
		TeamID: 11,
	},
	{
		PlayerID: 21945,
		FirstName: "Keith",
		LastName: "Ismael",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21945.png",
		TeamID: 1,
	},
	{
		PlayerID: 21947,
		FirstName: "Charlie",
		LastName: "Heck",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21947.png",
		TeamID: 13,
	},
	{
		PlayerID: 21948,
		FirstName: "Nick",
		LastName: "Harris",
		Team: "CLE",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21948.png",
		TeamID: 8,
	},
	{
		PlayerID: 21949,
		FirstName: "Austin",
		LastName: "Jackson",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21949.png",
		TeamID: 19,
	},
	{
		PlayerID: 21950,
		FirstName: "Justin",
		LastName: "Herron",
		Team: "LV",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21950.png",
		TeamID: 25,
	},
	{
		PlayerID: 21951,
		FirstName: "Matt",
		LastName: "Hennessy",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21951.png",
		TeamID: 2,
	},
	{
		PlayerID: 21952,
		FirstName: "Rico",
		LastName: "Dowdle",
		Team: "DAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21952.png",
		TeamID: 9,
	},
	{
		PlayerID: 21957,
		FirstName: "Quez",
		LastName: "Watkins",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21957.png",
		TeamID: 26,
	},
	{
		PlayerID: 21961,
		FirstName: "Darnell",
		LastName: "Mooney",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21961.png",
		TeamID: 6,
	},
	{
		PlayerID: 21974,
		FirstName: "Shaquille",
		LastName: "Quarterman",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21974.png",
		TeamID: 15,
	},
	{
		PlayerID: 21978,
		FirstName: "Cam",
		LastName: "Brown",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21978.png",
		TeamID: 23,
	},
	{
		PlayerID: 21979,
		FirstName: "Jacob",
		LastName: "Phillips",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21979.png",
		TeamID: 8,
	},
	{
		PlayerID: 21981,
		FirstName: "Jack",
		LastName: "Driscoll",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21981.png",
		TeamID: 26,
	},
	{
		PlayerID: 21982,
		FirstName: "Patrick",
		LastName: "Queen",
		Team: "BAL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21982.png",
		TeamID: 3,
	},
	{
		PlayerID: 21983,
		FirstName: "Tremayne",
		LastName: "Anchrum Jr.",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21983.png",
		TeamID: 32,
	},
	{
		PlayerID: 21984,
		FirstName: "Willie",
		LastName: "Gay",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21984.png",
		TeamID: 16,
	},
	{
		PlayerID: 21985,
		FirstName: "Kenneth",
		LastName: "Murray Jr.",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21985.png",
		TeamID: 29,
	},
	{
		PlayerID: 21988,
		FirstName: "Blake",
		LastName: "Ferguson",
		Team: "MIA",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21988.png",
		TeamID: 19,
	},
	{
		PlayerID: 21989,
		FirstName: "Mykal",
		LastName: "Walker",
		Team: "LV",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21989.png",
		TeamID: 25,
	},
	{
		PlayerID: 21990,
		FirstName: "Ben",
		LastName: "Bredeson",
		Team: "NYG",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21990.png",
		TeamID: 23,
	},
	{
		PlayerID: 21991,
		FirstName: "De'Jon",
		LastName: "Harris",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21991.png",
		TeamID: 35,
	},
	{
		PlayerID: 21993,
		FirstName: "Ezra",
		LastName: "Cleveland",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21993.png",
		TeamID: 20,
	},
	{
		PlayerID: 21994,
		FirstName: "Troy",
		LastName: "Dye",
		Team: "MIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21994.png",
		TeamID: 20,
	},
	{
		PlayerID: 21995,
		FirstName: "Tyler",
		LastName: "Biadasz",
		Team: "DAL",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21995.png",
		TeamID: 9,
	},
	{
		PlayerID: 21996,
		FirstName: "Malik",
		LastName: "Harrison",
		Team: "BAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21996.png",
		TeamID: 3,
	},
	{
		PlayerID: 21997,
		FirstName: "Lloyd",
		LastName: "Cushenberry III",
		Team: "DEN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21997.png",
		TeamID: 10,
	},
	{
		PlayerID: 21999,
		FirstName: "Akeem",
		LastName: "Davis-Gaither",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21999.png",
		TeamID: 7,
	},
	{
		PlayerID: 22000,
		FirstName: "Justin",
		LastName: "Strnad",
		Team: "DEN",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22000.png",
		TeamID: 10,
	},
	{
		PlayerID: 22003,
		FirstName: "Logan",
		LastName: "Wilson",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22003.png",
		TeamID: 7,
	},
	{
		PlayerID: 22004,
		FirstName: "Isaiah",
		LastName: "Simmons",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22004.png",
		TeamID: 23,
	},
	{
		PlayerID: 22005,
		FirstName: "Jordyn",
		LastName: "Brooks",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22005.png",
		TeamID: 30,
	},
	{
		PlayerID: 22008,
		FirstName: "Saahdiq",
		LastName: "Charles",
		Team: "WAS",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22008.png",
		TeamID: 35,
	},
	{
		PlayerID: 22009,
		FirstName: "Mekhi",
		LastName: "Becton",
		Team: "NYJ",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22009.png",
		TeamID: 24,
	},
	{
		PlayerID: 22010,
		FirstName: "Trystan",
		LastName: "Colon",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22010.png",
		TeamID: 1,
	},
	{
		PlayerID: 22012,
		FirstName: "Ben",
		LastName: "Bartch",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22012.png",
		TeamID: 15,
	},
	{
		PlayerID: 22015,
		FirstName: "Hakeem",
		LastName: "Adeniji",
		Team: "MIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22015.png",
		TeamID: 20,
	},
	{
		PlayerID: 22017,
		FirstName: "Khaleke",
		LastName: "Hudson",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22017.png",
		TeamID: 35,
	},
	{
		PlayerID: 22018,
		FirstName: "Lucas",
		LastName: "Niang",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22018.png",
		TeamID: 16,
	},
	{
		PlayerID: 22019,
		FirstName: "Alex",
		LastName: "Taylor",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22019.png",
		TeamID: 9,
	},
	{
		PlayerID: 22020,
		FirstName: "Prince Tega",
		LastName: "Wanogho",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22020.png",
		TeamID: 16,
	},
	{
		PlayerID: 22023,
		FirstName: "Colton",
		LastName: "McKivitz",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22023.png",
		TeamID: 31,
	},
	{
		PlayerID: 22024,
		FirstName: "Jedrick",
		LastName: "Wills Jr.",
		Team: "CLE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22024.png",
		TeamID: 8,
	},
	{
		PlayerID: 22025,
		FirstName: "Andrew",
		LastName: "Thomas",
		Team: "NYG",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22025.png",
		TeamID: 23,
	},
	{
		PlayerID: 22026,
		FirstName: "Logan",
		LastName: "Stenberg",
		Team: "TB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22026.png",
		TeamID: 33,
	},
	{
		PlayerID: 22027,
		FirstName: "Tyre",
		LastName: "Phillips",
		Team: "PHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22027.png",
		TeamID: 26,
	},
	{
		PlayerID: 22028,
		FirstName: "Damien",
		LastName: "Lewis",
		Team: "SEA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22028.png",
		TeamID: 30,
	},
	{
		PlayerID: 22029,
		FirstName: "Josh",
		LastName: "Jones",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22029.png",
		TeamID: 13,
	},
	{
		PlayerID: 22030,
		FirstName: "Danny",
		LastName: "Pinter",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22030.png",
		TeamID: 14,
	},
	{
		PlayerID: 22031,
		FirstName: "John",
		LastName: "Simpson",
		Team: "BAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22031.png",
		TeamID: 3,
	},
	{
		PlayerID: 22032,
		FirstName: "Netane",
		LastName: "Muti",
		Team: "LV",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22032.png",
		TeamID: 25,
	},
	{
		PlayerID: 22033,
		FirstName: "Tristan",
		LastName: "Wirfs",
		Team: "TB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22033.png",
		TeamID: 33,
	},
	{
		PlayerID: 22034,
		FirstName: "Darryl",
		LastName: "Williams",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22034.png",
		TeamID: 15,
	},
	{
		PlayerID: 22035,
		FirstName: "Matt",
		LastName: "Peart",
		Team: "NYG",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22035.png",
		TeamID: 23,
	},
	{
		PlayerID: 22036,
		FirstName: "Cesar",
		LastName: "Ruiz",
		Team: "NO",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22036.png",
		TeamID: 22,
	},
	{
		PlayerID: 22038,
		FirstName: "Mike",
		LastName: "Onwenu",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22038.png",
		TeamID: 21,
	},
	{
		PlayerID: 22039,
		FirstName: "Shane",
		LastName: "Lemieux",
		Team: "NYG",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22039.png",
		TeamID: 23,
	},
	{
		PlayerID: 22040,
		FirstName: "Jon",
		LastName: "Runyan",
		Team: "GB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22040.png",
		TeamID: 12,
	},
	{
		PlayerID: 22041,
		FirstName: "Terence",
		LastName: "Steele",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22041.png",
		TeamID: 9,
	},
	{
		PlayerID: 22043,
		FirstName: "Calvin",
		LastName: "Throckmorton",
		Team: "CAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22043.png",
		TeamID: 5,
	},
	{
		PlayerID: 22044,
		FirstName: "Jeff",
		LastName: "Okudah",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22044.png",
		TeamID: 2,
	},
	{
		PlayerID: 22046,
		FirstName: "A.J.",
		LastName: "Green III",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22046.png",
		TeamID: 8,
	},
	{
		PlayerID: 22047,
		FirstName: "Myles",
		LastName: "Bryant",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22047.png",
		TeamID: 21,
	},
	{
		PlayerID: 22048,
		FirstName: "Cameron",
		LastName: "Dantzler",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22048.png",
		TeamID: 22,
	},
	{
		PlayerID: 22049,
		FirstName: "Lamar",
		LastName: "Jackson",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22049.png",
		TeamID: 5,
	},
	{
		PlayerID: 22050,
		FirstName: "Darnay",
		LastName: "Holmes",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22050.png",
		TeamID: 23,
	},
	{
		PlayerID: 22051,
		FirstName: "Trevon",
		LastName: "Diggs",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22051.png",
		TeamID: 9,
	},
	{
		PlayerID: 22052,
		FirstName: "CJ",
		LastName: "Henderson",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22052.png",
		TeamID: 5,
	},
	{
		PlayerID: 22054,
		FirstName: "Ross",
		LastName: "Blacklock",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22054.png",
		TeamID: 15,
	},
	{
		PlayerID: 22055,
		FirstName: "Troy",
		LastName: "Pride Jr.",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22055.png",
		TeamID: 25,
	},
	{
		PlayerID: 22056,
		FirstName: "Jaylon",
		LastName: "Johnson",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22056.png",
		TeamID: 6,
	},
	{
		PlayerID: 22057,
		FirstName: "Josiah",
		LastName: "Scott",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22057.png",
		TeamID: 28,
	},
	{
		PlayerID: 22059,
		FirstName: "Jordan",
		LastName: "Elliott",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22059.png",
		TeamID: 8,
	},
	{
		PlayerID: 22060,
		FirstName: "Dane",
		LastName: "Jackson",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22060.png",
		TeamID: 4,
	},
	{
		PlayerID: 22062,
		FirstName: "Raekwon",
		LastName: "Davis",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22062.png",
		TeamID: 19,
	},
	{
		PlayerID: 22065,
		FirstName: "Grayland",
		LastName: "Arnold",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22065.png",
		TeamID: 13,
	},
	{
		PlayerID: 22068,
		FirstName: "James",
		LastName: "Pierre",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22068.png",
		TeamID: 28,
	},
	{
		PlayerID: 22070,
		FirstName: "Khalil",
		LastName: "Davis",
		Team: "HOU",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22070.png",
		TeamID: 13,
	},
	{
		PlayerID: 22072,
		FirstName: "Noah",
		LastName: "Igbinoghene",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22072.png",
		TeamID: 9,
	},
	{
		PlayerID: 22075,
		FirstName: "A.J.",
		LastName: "Terrell",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22075.png",
		TeamID: 2,
	},
	{
		PlayerID: 22076,
		FirstName: "Bryce",
		LastName: "Hall",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22076.png",
		TeamID: 24,
	},
	{
		PlayerID: 22078,
		FirstName: "Neville",
		LastName: "Gallimore",
		Team: "DAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22078.png",
		TeamID: 9,
	},
	{
		PlayerID: 22079,
		FirstName: "Kindle",
		LastName: "Vildor",
		Team: "TEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22079.png",
		TeamID: 34,
	},
	{
		PlayerID: 22080,
		FirstName: "Michael",
		LastName: "Ojemudia",
		Team: "LAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22080.png",
		TeamID: 32,
	},
	{
		PlayerID: 22082,
		FirstName: "McTelvin",
		LastName: "Agim",
		Team: "IND",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22082.png",
		TeamID: 14,
	},
	{
		PlayerID: 22083,
		FirstName: "Leki",
		LastName: "Fotu",
		Team: "ARI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22083.png",
		TeamID: 1,
	},
	{
		PlayerID: 22084,
		FirstName: "Kristian",
		LastName: "Fulton",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22084.png",
		TeamID: 34,
	},
	{
		PlayerID: 22085,
		FirstName: "Derrick",
		LastName: "Brown",
		Team: "CAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22085.png",
		TeamID: 5,
	},
	{
		PlayerID: 22086,
		FirstName: "Essang",
		LastName: "Bassey",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22086.png",
		TeamID: 10,
	},
	{
		PlayerID: 22089,
		FirstName: "Amik",
		LastName: "Robertson",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22089.png",
		TeamID: 25,
	},
	{
		PlayerID: 22092,
		FirstName: "Chase",
		LastName: "Young",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22092.png",
		TeamID: 35,
	},
	{
		PlayerID: 22094,
		FirstName: "Braden",
		LastName: "Mann",
		Team: "PHI",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22094.png",
		TeamID: 26,
	},
	{
		PlayerID: 22095,
		FirstName: "Mike",
		LastName: "Danna",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22095.png",
		TeamID: 16,
	},
	{
		PlayerID: 22097,
		FirstName: "Damar",
		LastName: "Hamlin",
		Team: "BUF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22097.png",
		TeamID: 4,
	},
	{
		PlayerID: 22104,
		FirstName: "Casey",
		LastName: "Toohill",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22104.png",
		TeamID: 35,
	},
	{
		PlayerID: 22108,
		FirstName: "Tyler",
		LastName: "Bass",
		Team: "BUF",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22108.png",
		TeamID: 4,
	},
	{
		PlayerID: 22109,
		FirstName: "Julian",
		LastName: "Blackmon",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22109.png",
		TeamID: 14,
	},
	{
		PlayerID: 22110,
		FirstName: "Tommy",
		LastName: "Kraemer",
		Team: "NO",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22110.png",
		TeamID: 22,
	},
	{
		PlayerID: 22119,
		FirstName: "Charlie",
		LastName: "Woerner",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22119.png",
		TeamID: 31,
	},
	{
		PlayerID: 22132,
		FirstName: "Kevin",
		LastName: "Dotson",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22132.png",
		TeamID: 32,
	},
	{
		PlayerID: 22135,
		FirstName: "Bravvion",
		LastName: "Roy",
		Team: "BAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22135.png",
		TeamID: 3,
	},
	{
		PlayerID: 22136,
		FirstName: "Blake",
		LastName: "Brandel",
		Team: "MIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22136.png",
		TeamID: 20,
	},
	{
		PlayerID: 22138,
		FirstName: "Tyler",
		LastName: "Davis",
		Team: "GB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22138.png",
		TeamID: 12,
	},
	{
		PlayerID: 22139,
		FirstName: "Isaiah",
		LastName: "Rodgers Sr.",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22139.png",
		TeamID: 26,
	},
	{
		PlayerID: 22141,
		FirstName: "Chris",
		LastName: "Claybrooks",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22141.png",
		TeamID: 15,
	},
	{
		PlayerID: 22142,
		FirstName: "Arlington",
		LastName: "Hambright",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22142.png",
		TeamID: 14,
	},
	{
		PlayerID: 22146,
		FirstName: "Ben",
		LastName: "DiNucci",
		Team: "DEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22146.png",
		TeamID: 10,
	},
	{
		PlayerID: 22155,
		FirstName: "Kyle",
		LastName: "Hinton",
		Team: "ATL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22155.png",
		TeamID: 2,
	},
	{
		PlayerID: 22160,
		FirstName: "Reid",
		LastName: "Sinnett",
		Team: "CIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22160.png",
		TeamID: 7,
	},
	{
		PlayerID: 22190,
		FirstName: "Tyler",
		LastName: "Hall",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22190.png",
		TeamID: 25,
	},
	{
		PlayerID: 22193,
		FirstName: "Jaylon",
		LastName: "Moore",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22193.png",
		TeamID: 15,
	},
	{
		PlayerID: 22199,
		FirstName: "Kristian",
		LastName: "Welch",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22199.png",
		TeamID: 12,
	},
	{
		PlayerID: 22202,
		FirstName: "Khalil",
		LastName: "Dorsey",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22202.png",
		TeamID: 11,
	},
	{
		PlayerID: 22206,
		FirstName: "Reggie",
		LastName: "Gilliam",
		Team: "BUF",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22206.png",
		TeamID: 4,
	},
	{
		PlayerID: 22209,
		FirstName: "Brandon",
		LastName: "Walton",
		Team: "TB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22209.png",
		TeamID: 33,
	},
	{
		PlayerID: 22218,
		FirstName: "Corliss",
		LastName: "Waitman",
		Team: "NE",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22218.png",
		TeamID: 21,
	},
	{
		PlayerID: 22224,
		FirstName: "Myles",
		LastName: "Adams",
		Team: "SEA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22224.png",
		TeamID: 30,
	},
	{
		PlayerID: 22226,
		FirstName: "Sam",
		LastName: "Franklin Jr.",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22226.png",
		TeamID: 5,
	},
	{
		PlayerID: 22230,
		FirstName: "Dieter",
		LastName: "Eiselen",
		Team: "HOU",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22230.png",
		TeamID: 13,
	},
	{
		PlayerID: 22232,
		FirstName: "LaCale",
		LastName: "London",
		Team: "ATL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22232.png",
		TeamID: 2,
	},
	{
		PlayerID: 22234,
		FirstName: "Andre",
		LastName: "Baccellia",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22234.png",
		TeamID: 1,
	},
	{
		PlayerID: 22258,
		FirstName: "Bobby",
		LastName: "Price",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22258.png",
		TeamID: 1,
	},
	{
		PlayerID: 22265,
		FirstName: "Willington",
		LastName: "Previlon",
		Team: "DAL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22265.png",
		TeamID: 9,
	},
	{
		PlayerID: 22266,
		FirstName: "Krys",
		LastName: "Barnes",
		Team: "ARI",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22266.png",
		TeamID: 1,
	},
	{
		PlayerID: 22269,
		FirstName: "Henry",
		LastName: "Black",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22269.png",
		TeamID: 14,
	},
	{
		PlayerID: 22277,
		FirstName: "Carter",
		LastName: "O'Donnell",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22277.png",
		TeamID: 1,
	},
	{
		PlayerID: 22278,
		FirstName: "Kameron",
		LastName: "Cline",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22278.png",
		TeamID: 4,
	},
	{
		PlayerID: 22289,
		FirstName: "Luq",
		LastName: "Barcoo",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22289.png",
		TeamID: 28,
	},
	{
		PlayerID: 22291,
		FirstName: "Ross",
		LastName: "Matiscik",
		Team: "JAX",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22291.png",
		TeamID: 15,
	},
	{
		PlayerID: 22295,
		FirstName: "Tershawn",
		LastName: "Wharton",
		Team: "KC",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22295.png",
		TeamID: 16,
	},
	{
		PlayerID: 22300,
		FirstName: "Tommy",
		LastName: "Townsend",
		Team: "KC",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22300.png",
		TeamID: 16,
	},
	{
		PlayerID: 22306,
		FirstName: "Liam",
		LastName: "McCullough",
		Team: "ATL",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22306.png",
		TeamID: 2,
	},
	{
		PlayerID: 22315,
		FirstName: "Nate",
		LastName: "Gilliam",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22315.png",
		TeamID: 7,
	},
	{
		PlayerID: 22317,
		FirstName: "Joe",
		LastName: "Gaziano",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22317.png",
		TeamID: 2,
	},
	{
		PlayerID: 22318,
		FirstName: "Breiden",
		LastName: "Fehoko",
		Team: "PIT",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22318.png",
		TeamID: 28,
	},
	{
		PlayerID: 22319,
		FirstName: "T.J.",
		LastName: "Smith",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22319.png",
		TeamID: 20,
	},
	{
		PlayerID: 22321,
		FirstName: "Cole",
		LastName: "Christiansen",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22321.png",
		TeamID: 16,
	},
	{
		PlayerID: 22329,
		FirstName: "Eric",
		LastName: "Banks",
		Team: "ARI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22329.png",
		TeamID: 1,
	},
	{
		PlayerID: 22330,
		FirstName: "Michael",
		LastName: "Hoecht",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22330.png",
		TeamID: 32,
	},
	{
		PlayerID: 22332,
		FirstName: "Jonah",
		LastName: "Williams",
		Team: "LAR",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22332.png",
		TeamID: 32,
	},
	{
		PlayerID: 22334,
		FirstName: "Christian",
		LastName: "Rozeboom",
		Team: "LAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22334.png",
		TeamID: 32,
	},
	{
		PlayerID: 22339,
		FirstName: "Kirk",
		LastName: "Merritt",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22339.png",
		TeamID: 22,
	},
	{
		PlayerID: 22356,
		FirstName: "Bill",
		LastName: "Murray",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22356.png",
		TeamID: 6,
	},
	{
		PlayerID: 22367,
		FirstName: "Niko",
		LastName: "Lalos",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22367.png",
		TeamID: 22,
	},
	{
		PlayerID: 22376,
		FirstName: "Domenique",
		LastName: "Davis",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22376.png",
		TeamID: 7,
	},
	{
		PlayerID: 22377,
		FirstName: "Bryce",
		LastName: "Huff",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22377.png",
		TeamID: 24,
	},
	{
		PlayerID: 22387,
		FirstName: "Julian",
		LastName: "Good-Jones",
		Team: "PHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22387.png",
		TeamID: 26,
	},
	{
		PlayerID: 22390,
		FirstName: "Elijah",
		LastName: "Riley",
		Team: "PIT",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22390.png",
		TeamID: 28,
	},
	{
		PlayerID: 22393,
		FirstName: "David",
		LastName: "Bada",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22393.png",
		TeamID: 35,
	},
	{
		PlayerID: 22401,
		FirstName: "Jonas",
		LastName: "Griffith",
		Team: "DEN",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22401.png",
		TeamID: 10,
	},
	{
		PlayerID: 22407,
		FirstName: "Tyler",
		LastName: "Mabry",
		Team: "SEA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22407.png",
		TeamID: 30,
	},
	{
		PlayerID: 22415,
		FirstName: "Mason",
		LastName: "Kinsey",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22415.png",
		TeamID: 34,
	},
	{
		PlayerID: 22417,
		FirstName: "Kristian",
		LastName: "Wilkerson",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22417.png",
		TeamID: 25,
	},
	{
		PlayerID: 22418,
		FirstName: "Tommy",
		LastName: "Hudson",
		Team: "NO",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22418.png",
		TeamID: 22,
	},
	{
		PlayerID: 22419,
		FirstName: "Aaron",
		LastName: "Brewer",
		Team: "TEN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22419.png",
		TeamID: 34,
	},
	{
		PlayerID: 22422,
		FirstName: "Teair",
		LastName: "Tart",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22422.png",
		TeamID: 34,
	},
	{
		PlayerID: 22426,
		FirstName: "Nick",
		LastName: "Leverett",
		Team: "TB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22426.png",
		TeamID: 33,
	},
	{
		PlayerID: 22429,
		FirstName: "Cam",
		LastName: "Gill",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22429.png",
		TeamID: 33,
	},
	{
		PlayerID: 22434,
		FirstName: "Benning",
		LastName: "Potoa'e",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22434.png",
		TeamID: 35,
	},
	{
		PlayerID: 22444,
		FirstName: "Austen",
		LastName: "Pleasants",
		Team: "CHI",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22444.png",
		TeamID: 6,
	},
	{
		PlayerID: 22489,
		FirstName: "Innis",
		LastName: "Gaines",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22489.png",
		TeamID: 12,
	},
	{
		PlayerID: 22490,
		FirstName: "Trevor",
		LastName: "Lawrence",
		Team: "JAX",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22490.png",
		TeamID: 15,
	},
	{
		PlayerID: 22492,
		FirstName: "Justin",
		LastName: "Fields",
		Team: "CHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22492.png",
		TeamID: 6,
	},
	{
		PlayerID: 22493,
		FirstName: "Trey",
		LastName: "Lance",
		Team: "DAL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22493.png",
		TeamID: 9,
	},
	{
		PlayerID: 22494,
		FirstName: "Kyle",
		LastName: "Trask",
		Team: "TB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22494.png",
		TeamID: 33,
	},
	{
		PlayerID: 22495,
		FirstName: "Zach",
		LastName: "Wilson",
		Team: "NYJ",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22495.png",
		TeamID: 24,
	},
	{
		PlayerID: 22496,
		FirstName: "Mac",
		LastName: "Jones",
		Team: "NE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22496.png",
		TeamID: 21,
	},
	{
		PlayerID: 22498,
		FirstName: "Feleipe",
		LastName: "Franks",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22498.png",
		TeamID: 2,
	},
	{
		PlayerID: 22501,
		FirstName: "Kenny",
		LastName: "Pickett",
		Team: "PIT",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22501.png",
		TeamID: 28,
	},
	{
		PlayerID: 22502,
		FirstName: "Desmond",
		LastName: "Ridder",
		Team: "ATL",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22502.png",
		TeamID: 2,
	},
	{
		PlayerID: 22505,
		FirstName: "Davis",
		LastName: "Mills",
		Team: "HOU",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22505.png",
		TeamID: 13,
	},
	{
		PlayerID: 22506,
		FirstName: "Brevin",
		LastName: "Jordan",
		Team: "HOU",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22506.png",
		TeamID: 13,
	},
	{
		PlayerID: 22507,
		FirstName: "Pat",
		LastName: "Freiermuth",
		Team: "PIT",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22507.png",
		TeamID: 28,
	},
	{
		PlayerID: 22508,
		FirstName: "Kyle",
		LastName: "Pitts",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22508.png",
		TeamID: 2,
	},
	{
		PlayerID: 22509,
		FirstName: "Hunter",
		LastName: "Long",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22509.png",
		TeamID: 32,
	},
	{
		PlayerID: 22511,
		FirstName: "Quintin",
		LastName: "Morris",
		Team: "BUF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22511.png",
		TeamID: 4,
	},
	{
		PlayerID: 22512,
		FirstName: "Tre'",
		LastName: "McKitty",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22512.png",
		TeamID: 29,
	},
	{
		PlayerID: 22514,
		FirstName: "Kenny",
		LastName: "Yeboah",
		Team: "NYJ",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22514.png",
		TeamID: 24,
	},
	{
		PlayerID: 22515,
		FirstName: "Cole",
		LastName: "Turner",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22515.png",
		TeamID: 35,
	},
	{
		PlayerID: 22517,
		FirstName: "Peyton",
		LastName: "Hendershot",
		Team: "DAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22517.png",
		TeamID: 9,
	},
	{
		PlayerID: 22518,
		FirstName: "Matt",
		LastName: "Bushman",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22518.png",
		TeamID: 16,
	},
	{
		PlayerID: 22520,
		FirstName: "Miller",
		LastName: "Forristall",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22520.png",
		TeamID: 32,
	},
	{
		PlayerID: 22521,
		FirstName: "Jeremy",
		LastName: "Ruckert",
		Team: "NYJ",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22521.png",
		TeamID: 24,
	},
	{
		PlayerID: 22524,
		FirstName: "James",
		LastName: "Mitchell",
		Team: "DET",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22524.png",
		TeamID: 11,
	},
	{
		PlayerID: 22526,
		FirstName: "Breece",
		LastName: "Hall",
		Team: "NYJ",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22526.png",
		TeamID: 24,
	},
	{
		PlayerID: 22533,
		FirstName: "Demetric",
		LastName: "Felton Jr.",
		Team: "CIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22533.png",
		TeamID: 7,
	},
	{
		PlayerID: 22535,
		FirstName: "Elijah",
		LastName: "Mitchell",
		Team: "SF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22535.png",
		TeamID: 31,
	},
	{
		PlayerID: 22539,
		FirstName: "Zamir",
		LastName: "White",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22539.png",
		TeamID: 25,
	},
	{
		PlayerID: 22546,
		FirstName: "Rhamondre",
		LastName: "Stevenson",
		Team: "NE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22546.png",
		TeamID: 21,
	},
	{
		PlayerID: 22547,
		FirstName: "Ronnie",
		LastName: "Rivers",
		Team: "LAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22547.png",
		TeamID: 32,
	},
	{
		PlayerID: 22548,
		FirstName: "Gerrid",
		LastName: "Doaks",
		Team: "HOU",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22548.png",
		TeamID: 13,
	},
	{
		PlayerID: 22549,
		FirstName: "Greg",
		LastName: "Bell",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22549.png",
		TeamID: 28,
	},
	{
		PlayerID: 22553,
		FirstName: "Michael",
		LastName: "Carter",
		Team: "NYJ",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22553.png",
		TeamID: 24,
	},
	{
		PlayerID: 22556,
		FirstName: "Jaret",
		LastName: "Patterson",
		Team: "LAC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22556.png",
		TeamID: 29,
	},
	{
		PlayerID: 22558,
		FirstName: "Javonte",
		LastName: "Williams",
		Team: "DEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22558.png",
		TeamID: 10,
	},
	{
		PlayerID: 22560,
		FirstName: "Keaontay",
		LastName: "Ingram",
		Team: "ARI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22560.png",
		TeamID: 1,
	},
	{
		PlayerID: 22562,
		FirstName: "Kenneth",
		LastName: "Gainwell",
		Team: "PHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22562.png",
		TeamID: 26,
	},
	{
		PlayerID: 22563,
		FirstName: "Khalil",
		LastName: "Herbert",
		Team: "CHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22563.png",
		TeamID: 6,
	},
	{
		PlayerID: 22564,
		FirstName: "Ja'Marr",
		LastName: "Chase",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22564.png",
		TeamID: 7,
	},
	{
		PlayerID: 22565,
		FirstName: "Chris",
		LastName: "Olave",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22565.png",
		TeamID: 22,
	},
	{
		PlayerID: 22566,
		FirstName: "Calvin",
		LastName: "Austin III",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22566.png",
		TeamID: 28,
	},
	{
		PlayerID: 22567,
		FirstName: "Cade",
		LastName: "Johnson",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22567.png",
		TeamID: 30,
	},
	{
		PlayerID: 22568,
		FirstName: "Cornell",
		LastName: "Powell",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22568.png",
		TeamID: 16,
	},
	{
		PlayerID: 22569,
		FirstName: "Dee",
		LastName: "Eskridge",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22569.png",
		TeamID: 30,
	},
	{
		PlayerID: 22572,
		FirstName: "Dax",
		LastName: "Milne",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22572.png",
		TeamID: 35,
	},
	{
		PlayerID: 22575,
		FirstName: "Amari",
		LastName: "Rodgers",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22575.png",
		TeamID: 14,
	},
	{
		PlayerID: 22587,
		FirstName: "Amon-Ra",
		LastName: "St. Brown",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22587.png",
		TeamID: 11,
	},
	{
		PlayerID: 22589,
		FirstName: "Austin",
		LastName: "Watkins Jr.",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22589.png",
		TeamID: 8,
	},
	{
		PlayerID: 22590,
		FirstName: "Ben",
		LastName: "Skowronek",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22590.png",
		TeamID: 32,
	},
	{
		PlayerID: 22591,
		FirstName: "Dez",
		LastName: "Fitzpatrick",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22591.png",
		TeamID: 28,
	},
	{
		PlayerID: 22592,
		FirstName: "Elijah",
		LastName: "Moore",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22592.png",
		TeamID: 8,
	},
	{
		PlayerID: 22595,
		FirstName: "Ihmir",
		LastName: "Smith-Marsette",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22595.png",
		TeamID: 5,
	},
	{
		PlayerID: 22596,
		FirstName: "Jaelon",
		LastName: "Darden",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22596.png",
		TeamID: 8,
	},
	{
		PlayerID: 22597,
		FirstName: "Jalen",
		LastName: "Tolbert",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22597.png",
		TeamID: 9,
	},
	{
		PlayerID: 22598,
		FirstName: "Jaylen",
		LastName: "Waddle",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22598.png",
		TeamID: 19,
	},
	{
		PlayerID: 22600,
		FirstName: "Johnny",
		LastName: "Johnson III",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22600.png",
		TeamID: 13,
	},
	{
		PlayerID: 22602,
		FirstName: "Tutu",
		LastName: "Atwell",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22602.png",
		TeamID: 32,
	},
	{
		PlayerID: 22604,
		FirstName: "Tylan",
		LastName: "Wallace",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22604.png",
		TeamID: 3,
	},
	{
		PlayerID: 22608,
		FirstName: "Seth",
		LastName: "Williams",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22608.png",
		TeamID: 15,
	},
	{
		PlayerID: 22612,
		FirstName: "Tre",
		LastName: "Nixon",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22612.png",
		TeamID: 21,
	},
	{
		PlayerID: 22613,
		FirstName: "Joshua",
		LastName: "Palmer",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22613.png",
		TeamID: 29,
	},
	{
		PlayerID: 22614,
		FirstName: "Kadarius",
		LastName: "Toney",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22614.png",
		TeamID: 16,
	},
	{
		PlayerID: 22620,
		FirstName: "Mike",
		LastName: "Strachan",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22620.png",
		TeamID: 5,
	},
	{
		PlayerID: 22622,
		FirstName: "Racey",
		LastName: "McMath",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22622.png",
		TeamID: 14,
	},
	{
		PlayerID: 22623,
		FirstName: "Rashod",
		LastName: "Bateman",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22623.png",
		TeamID: 3,
	},
	{
		PlayerID: 22626,
		FirstName: "Rondale",
		LastName: "Moore",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22626.png",
		TeamID: 1,
	},
	{
		PlayerID: 22627,
		FirstName: "Ronnie",
		LastName: "Bell",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22627.png",
		TeamID: 31,
	},
	{
		PlayerID: 22645,
		FirstName: "Simi",
		LastName: "Fehoko",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22645.png",
		TeamID: 28,
	},
	{
		PlayerID: 22647,
		FirstName: "Chris",
		LastName: "Evans",
		Team: "CIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22647.png",
		TeamID: 7,
	},
	{
		PlayerID: 22657,
		FirstName: "John",
		LastName: "Bates",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22657.png",
		TeamID: 35,
	},
	{
		PlayerID: 22661,
		FirstName: "Jack",
		LastName: "Stoll",
		Team: "PHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22661.png",
		TeamID: 26,
	},
	{
		PlayerID: 22662,
		FirstName: "Tommy",
		LastName: "Tremble",
		Team: "CAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22662.png",
		TeamID: 5,
	},
	{
		PlayerID: 22663,
		FirstName: "Hunter",
		LastName: "Kampmoyer",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22663.png",
		TeamID: 29,
	},
	{
		PlayerID: 22667,
		FirstName: "Zach",
		LastName: "Davidson",
		Team: "BUF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22667.png",
		TeamID: 4,
	},
	{
		PlayerID: 22672,
		FirstName: "Gary",
		LastName: "Brightwell",
		Team: "NYG",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22672.png",
		TeamID: 23,
	},
	{
		PlayerID: 22676,
		FirstName: "Kene",
		LastName: "Nwangwu",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22676.png",
		TeamID: 20,
	},
	{
		PlayerID: 22678,
		FirstName: "Jake",
		LastName: "Funk",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22678.png",
		TeamID: 14,
	},
	{
		PlayerID: 22683,
		FirstName: "Jacob",
		LastName: "Harris",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22683.png",
		TeamID: 15,
	},
	{
		PlayerID: 22685,
		FirstName: "Terrace",
		LastName: "Marshall Jr.",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22685.png",
		TeamID: 5,
	},
	{
		PlayerID: 22686,
		FirstName: "Dyami",
		LastName: "Brown",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22686.png",
		TeamID: 35,
	},
	{
		PlayerID: 22688,
		FirstName: "Tre'Von",
		LastName: "Moehrig",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22688.png",
		TeamID: 25,
	},
	{
		PlayerID: 22689,
		FirstName: "Kwity",
		LastName: "Paye",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22689.png",
		TeamID: 14,
	},
	{
		PlayerID: 22690,
		FirstName: "Rashawn",
		LastName: "Slater",
		Team: "LAC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22690.png",
		TeamID: 29,
	},
	{
		PlayerID: 22691,
		FirstName: "Penei",
		LastName: "Sewell",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22691.png",
		TeamID: 11,
	},
	{
		PlayerID: 22692,
		FirstName: "Pat",
		LastName: "Surtain II",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22692.png",
		TeamID: 10,
	},
	{
		PlayerID: 22693,
		FirstName: "Caleb",
		LastName: "Farley",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22693.png",
		TeamID: 34,
	},
	{
		PlayerID: 22694,
		FirstName: "Jaycee",
		LastName: "Horn",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22694.png",
		TeamID: 5,
	},
	{
		PlayerID: 22695,
		FirstName: "Micah",
		LastName: "Parsons",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22695.png",
		TeamID: 9,
	},
	{
		PlayerID: 22696,
		FirstName: "Jeremiah",
		LastName: "Owusu-Koramoah",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22696.png",
		TeamID: 8,
	},
	{
		PlayerID: 22697,
		FirstName: "Zaven",
		LastName: "Collins",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22697.png",
		TeamID: 1,
	},
	{
		PlayerID: 22698,
		FirstName: "Greg",
		LastName: "Rousseau",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22698.png",
		TeamID: 4,
	},
	{
		PlayerID: 22699,
		FirstName: "Jaelan",
		LastName: "Phillips",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22699.png",
		TeamID: 19,
	},
	{
		PlayerID: 22704,
		FirstName: "Paulson",
		LastName: "Adebo",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22704.png",
		TeamID: 22,
	},
	{
		PlayerID: 22705,
		FirstName: "Jack",
		LastName: "Anderson",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22705.png",
		TeamID: 14,
	},
	{
		PlayerID: 22706,
		FirstName: "Kayode",
		LastName: "Awosika",
		Team: "DET",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22706.png",
		TeamID: 11,
	},
	{
		PlayerID: 22707,
		FirstName: "Josh",
		LastName: "Ball",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22707.png",
		TeamID: 9,
	},
	{
		PlayerID: 22708,
		FirstName: "Aaron",
		LastName: "Banks",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22708.png",
		TeamID: 31,
	},
	{
		PlayerID: 22709,
		FirstName: "Christian",
		LastName: "Barmore",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22709.png",
		TeamID: 21,
	},
	{
		PlayerID: 22710,
		FirstName: "Derrick",
		LastName: "Barnes",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22710.png",
		TeamID: 11,
	},
	{
		PlayerID: 22712,
		FirstName: "Joshuah",
		LastName: "Bledsoe",
		Team: "NE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22712.png",
		TeamID: 21,
	},
	{
		PlayerID: 22713,
		FirstName: "Quinton",
		LastName: "Bohanna",
		Team: "DET",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22713.png",
		TeamID: 11,
	},
	{
		PlayerID: 22714,
		FirstName: "Nick",
		LastName: "Bolton",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22714.png",
		TeamID: 16,
	},
	{
		PlayerID: 22716,
		FirstName: "Larry",
		LastName: "Borom",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22716.png",
		TeamID: 6,
	},
	{
		PlayerID: 22718,
		FirstName: "Will",
		LastName: "Bradley-King",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22718.png",
		TeamID: 35,
	},
	{
		PlayerID: 22720,
		FirstName: "K.J.",
		LastName: "Britt",
		Team: "TB",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22720.png",
		TeamID: 33,
	},
	{
		PlayerID: 22721,
		FirstName: "Bobby",
		LastName: "Brown III",
		Team: "LAR",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22721.png",
		TeamID: 32,
	},
	{
		PlayerID: 22722,
		FirstName: "Deonte",
		LastName: "Brown",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22722.png",
		TeamID: 5,
	},
	{
		PlayerID: 22723,
		FirstName: "Earnest",
		LastName: "Brown IV",
		Team: "LAR",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22723.png",
		TeamID: 32,
	},
	{
		PlayerID: 22725,
		FirstName: "Spencer",
		LastName: "Brown",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22725.png",
		TeamID: 4,
	},
	{
		PlayerID: 22726,
		FirstName: "Tre",
		LastName: "Brown",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22726.png",
		TeamID: 30,
	},
	{
		PlayerID: 22727,
		FirstName: "Baron",
		LastName: "Browning",
		Team: "DEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22727.png",
		TeamID: 10,
	},
	{
		PlayerID: 22729,
		FirstName: "Camryn",
		LastName: "Bynum",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22729.png",
		TeamID: 20,
	},
	{
		PlayerID: 22730,
		FirstName: "Landon",
		LastName: "Young",
		Team: "NO",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22730.png",
		TeamID: 22,
	},
	{
		PlayerID: 22731,
		FirstName: "Tyson",
		LastName: "Campbell",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22731.png",
		TeamID: 15,
	},
	{
		PlayerID: 22732,
		FirstName: "Jackson",
		LastName: "Carman",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22732.png",
		TeamID: 7,
	},
	{
		PlayerID: 22733,
		FirstName: "Nahshon",
		LastName: "Wright",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22733.png",
		TeamID: 9,
	},
	{
		PlayerID: 22735,
		FirstName: "Michael",
		LastName: "Carter II",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22735.png",
		TeamID: 24,
	},
	{
		PlayerID: 22738,
		FirstName: "Brady",
		LastName: "Christensen",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22738.png",
		TeamID: 5,
	},
	{
		PlayerID: 22739,
		FirstName: "Marco",
		LastName: "Wilson",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22739.png",
		TeamID: 1,
	},
	{
		PlayerID: 22740,
		FirstName: "Andre",
		LastName: "Cisco",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22740.png",
		TeamID: 15,
	},
	{
		PlayerID: 22743,
		FirstName: "Ben",
		LastName: "Cleveland",
		Team: "BAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22743.png",
		TeamID: 3,
	},
	{
		PlayerID: 22744,
		FirstName: "Milton",
		LastName: "Williams",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22744.png",
		TeamID: 26,
	},
	{
		PlayerID: 22746,
		FirstName: "Jonathon",
		LastName: "Cooper",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22746.png",
		TeamID: 10,
	},
	{
		PlayerID: 22747,
		FirstName: "Sam",
		LastName: "Cosmi",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22747.png",
		TeamID: 35,
	},
	{
		PlayerID: 22748,
		FirstName: "Chris",
		LastName: "Wilcox",
		Team: "LAC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22748.png",
		TeamID: 29,
	},
	{
		PlayerID: 22749,
		FirstName: "Jabril",
		LastName: "Cox",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22749.png",
		TeamID: 35,
	},
	{
		PlayerID: 22752,
		FirstName: "Jake",
		LastName: "Curhan",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22752.png",
		TeamID: 30,
	},
	{
		PlayerID: 22753,
		FirstName: "Pete",
		LastName: "Werner",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22753.png",
		TeamID: 22,
	},
	{
		PlayerID: 22754,
		FirstName: "Drew",
		LastName: "Dalman",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22754.png",
		TeamID: 2,
	},
	{
		PlayerID: 22757,
		FirstName: "Christian",
		LastName: "Darrisaw",
		Team: "MIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22757.png",
		TeamID: 20,
	},
	{
		PlayerID: 22758,
		FirstName: "Rashad",
		LastName: "Weaver",
		Team: "TEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22758.png",
		TeamID: 34,
	},
	{
		PlayerID: 22759,
		FirstName: "Jamin",
		LastName: "Davis",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22759.png",
		TeamID: 35,
	},
	{
		PlayerID: 22760,
		FirstName: "Ar'Darius",
		LastName: "Washington",
		Team: "BAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22760.png",
		TeamID: 3,
	},
	{
		PlayerID: 22761,
		FirstName: "Garret",
		LastName: "Wallow",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22761.png",
		TeamID: 13,
	},
	{
		PlayerID: 22763,
		FirstName: "Shaun",
		LastName: "Wade",
		Team: "NE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22763.png",
		TeamID: 21,
	},
	{
		PlayerID: 22766,
		FirstName: "Alijah",
		LastName: "Vera-Tucker",
		Team: "NYJ",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22766.png",
		TeamID: 24,
	},
	{
		PlayerID: 22767,
		FirstName: "Divine",
		LastName: "Deablo",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22767.png",
		TeamID: 25,
	},
	{
		PlayerID: 22768,
		FirstName: "Cole",
		LastName: "Van Lanen",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22768.png",
		TeamID: 15,
	},
	{
		PlayerID: 22769,
		FirstName: "Landon",
		LastName: "Dickerson",
		Team: "PHI",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22769.png",
		TeamID: 26,
	},
	{
		PlayerID: 22772,
		FirstName: "Payton",
		LastName: "Turner",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22772.png",
		TeamID: 22,
	},
	{
		PlayerID: 22773,
		FirstName: "Marlon",
		LastName: "Tuipulotu",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22773.png",
		TeamID: 26,
	},
	{
		PlayerID: 22774,
		FirstName: "Jay",
		LastName: "Tufele",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22774.png",
		TeamID: 7,
	},
	{
		PlayerID: 22775,
		FirstName: "Joe",
		LastName: "Tryon-Shoyinka",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22775.png",
		TeamID: 33,
	},
	{
		PlayerID: 22778,
		FirstName: "Khyiris",
		LastName: "Tonga",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22778.png",
		TeamID: 20,
	},
	{
		PlayerID: 22779,
		FirstName: "Shaka",
		LastName: "Toney",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22779.png",
		TeamID: 35,
	},
	{
		PlayerID: 22780,
		FirstName: "Tommy",
		LastName: "Togiai",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22780.png",
		TeamID: 8,
	},
	{
		PlayerID: 22782,
		FirstName: "Ambry",
		LastName: "Thomas",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22782.png",
		TeamID: 31,
	},
	{
		PlayerID: 22783,
		FirstName: "Keith",
		LastName: "Taylor Jr.",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22783.png",
		TeamID: 16,
	},
	{
		PlayerID: 22784,
		FirstName: "Chazz",
		LastName: "Surratt",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22784.png",
		TeamID: 24,
	},
	{
		PlayerID: 22785,
		FirstName: "Grant",
		LastName: "Stuard",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22785.png",
		TeamID: 14,
	},
	{
		PlayerID: 22786,
		FirstName: "Eric",
		LastName: "Stokes",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22786.png",
		TeamID: 12,
	},
	{
		PlayerID: 22787,
		FirstName: "Benjamin",
		LastName: "St-Juste",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22787.png",
		TeamID: 35,
	},
	{
		PlayerID: 22788,
		FirstName: "Victor",
		LastName: "Dimukeje",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22788.png",
		TeamID: 1,
	},
	{
		PlayerID: 22790,
		FirstName: "Tommy",
		LastName: "Doyle",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22790.png",
		TeamID: 4,
	},
	{
		PlayerID: 22793,
		FirstName: "Caden",
		LastName: "Sterns",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22793.png",
		TeamID: 10,
	},
	{
		PlayerID: 22795,
		FirstName: "Marquiss",
		LastName: "Spencer",
		Team: "NYJ",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22795.png",
		TeamID: 24,
	},
	{
		PlayerID: 22797,
		FirstName: "Trey",
		LastName: "Smith",
		Team: "KC",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22797.png",
		TeamID: 16,
	},
	{
		PlayerID: 22802,
		FirstName: "D'Ante",
		LastName: "Smith",
		Team: "CIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22802.png",
		TeamID: 7,
	},
	{
		PlayerID: 22803,
		FirstName: "T.J.",
		LastName: "Slaton",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22803.png",
		TeamID: 12,
	},
	{
		PlayerID: 22804,
		FirstName: "Jamien",
		LastName: "Sherwood",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22804.png",
		TeamID: 24,
	},
	{
		PlayerID: 22805,
		FirstName: "Will",
		LastName: "Sherman",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22805.png",
		TeamID: 10,
	},
	{
		PlayerID: 22807,
		FirstName: "Asante",
		LastName: "Samuel Jr.",
		Team: "LAC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22807.png",
		TeamID: 29,
	},
	{
		PlayerID: 22808,
		FirstName: "Brandin",
		LastName: "Echols",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22808.png",
		TeamID: 24,
	},
	{
		PlayerID: 22809,
		FirstName: "Liam",
		LastName: "Eichenberg",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22809.png",
		TeamID: 19,
	},
	{
		PlayerID: 22810,
		FirstName: "Austin",
		LastName: "Faoliu",
		Team: "SEA",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22810.png",
		TeamID: 30,
	},
	{
		PlayerID: 22811,
		FirstName: "Tony",
		LastName: "Fields II",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22811.png",
		TeamID: 8,
	},
	{
		PlayerID: 22815,
		FirstName: "Darrick",
		LastName: "Forrest",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22815.png",
		TeamID: 35,
	},
	{
		PlayerID: 22816,
		FirstName: "Stone",
		LastName: "Forsythe",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22816.png",
		TeamID: 30,
	},
	{
		PlayerID: 22817,
		FirstName: "Will",
		LastName: "Fries",
		Team: "IND",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22817.png",
		TeamID: 14,
	},
	{
		PlayerID: 22820,
		FirstName: "Chauncey",
		LastName: "Golston",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22820.png",
		TeamID: 9,
	},
	{
		PlayerID: 22821,
		FirstName: "Thomas",
		LastName: "Graham Jr.",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22821.png",
		TeamID: 8,
	},
	{
		PlayerID: 22822,
		FirstName: "Ta'Quon",
		LastName: "Graham",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22822.png",
		TeamID: 2,
	},
	{
		PlayerID: 22823,
		FirstName: "Kylen",
		LastName: "Granson",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22823.png",
		TeamID: 14,
	},
	{
		PlayerID: 22824,
		FirstName: "Richie",
		LastName: "Grant",
		Team: "ATL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22824.png",
		TeamID: 2,
	},
	{
		PlayerID: 22826,
		FirstName: "Kendrick",
		LastName: "Green",
		Team: "HOU",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22826.png",
		TeamID: 13,
	},
	{
		PlayerID: 22828,
		FirstName: "Robert",
		LastName: "Hainsey",
		Team: "TB",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22828.png",
		TeamID: 33,
	},
	{
		PlayerID: 22829,
		FirstName: "Darren",
		LastName: "Hall",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22829.png",
		TeamID: 14,
	},
	{
		PlayerID: 22830,
		FirstName: "Pressley",
		LastName: "Harvin III",
		Team: "PIT",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22830.png",
		TeamID: 28,
	},
	{
		PlayerID: 22833,
		FirstName: "Malik",
		LastName: "Herring",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22833.png",
		TeamID: 16,
	},
	{
		PlayerID: 22834,
		FirstName: "Trey",
		LastName: "Hill",
		Team: "CIN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22834.png",
		TeamID: 7,
	},
	{
		PlayerID: 22835,
		FirstName: "Cam",
		LastName: "Sample",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22835.png",
		TeamID: 7,
	},
	{
		PlayerID: 22838,
		FirstName: "Chris",
		LastName: "Rumph II",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22838.png",
		TeamID: 29,
	},
	{
		PlayerID: 22841,
		FirstName: "Jevon",
		LastName: "Holland",
		Team: "MIA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22841.png",
		TeamID: 19,
	},
	{
		PlayerID: 22843,
		FirstName: "James",
		LastName: "Hudson III",
		Team: "CLE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22843.png",
		TeamID: 8,
	},
	{
		PlayerID: 22844,
		FirstName: "Talanoa",
		LastName: "Hufanga",
		Team: "SF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22844.png",
		TeamID: 31,
	},
	{
		PlayerID: 22845,
		FirstName: "Creed",
		LastName: "Humphrey",
		Team: "KC",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22845.png",
		TeamID: 16,
	},
	{
		PlayerID: 22847,
		FirstName: "Alaric",
		LastName: "Jackson",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22847.png",
		TeamID: 32,
	},
	{
		PlayerID: 22848,
		FirstName: "Robert",
		LastName: "Rochell",
		Team: "CAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22848.png",
		TeamID: 5,
	},
	{
		PlayerID: 22851,
		FirstName: "Tarron",
		LastName: "Jackson",
		Team: "PHI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22851.png",
		TeamID: 26,
	},
	{
		PlayerID: 22852,
		FirstName: "Janarius",
		LastName: "Robinson",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22852.png",
		TeamID: 25,
	},
	{
		PlayerID: 22853,
		FirstName: "Brenden",
		LastName: "Jaimes",
		Team: "LAC",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22853.png",
		TeamID: 29,
	},
	{
		PlayerID: 22854,
		FirstName: "Aaron",
		LastName: "Robinson",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22854.png",
		TeamID: 23,
	},
	{
		PlayerID: 22855,
		FirstName: "Monty",
		LastName: "Rice",
		Team: "TEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22855.png",
		TeamID: 34,
	},
	{
		PlayerID: 22857,
		FirstName: "Dillon",
		LastName: "Radunz",
		Team: "TEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22857.png",
		TeamID: 34,
	},
	{
		PlayerID: 22859,
		FirstName: "Ronnie",
		LastName: "Perkins",
		Team: "DEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22859.png",
		TeamID: 10,
	},
	{
		PlayerID: 22860,
		FirstName: "Teven",
		LastName: "Jenkins",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22860.png",
		TeamID: 6,
	},
	{
		PlayerID: 22863,
		FirstName: "Riley",
		LastName: "Patterson",
		Team: "DET",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22863.png",
		TeamID: 11,
	},
	{
		PlayerID: 22864,
		FirstName: "Patrick",
		LastName: "Johnson",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22864.png",
		TeamID: 26,
	},
	{
		PlayerID: 22865,
		FirstName: "Ernest",
		LastName: "Jones",
		Team: "LAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22865.png",
		TeamID: 32,
	},
	{
		PlayerID: 22866,
		FirstName: "Naquan",
		LastName: "Jones",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22866.png",
		TeamID: 34,
	},
	{
		PlayerID: 22867,
		FirstName: "Odafe",
		LastName: "Oweh",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22867.png",
		TeamID: 3,
	},
	{
		PlayerID: 22868,
		FirstName: "Joseph",
		LastName: "Ossai",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22868.png",
		TeamID: 7,
	},
	{
		PlayerID: 22869,
		FirstName: "Levi",
		LastName: "Onwuzurike",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22869.png",
		TeamID: 11,
	},
	{
		PlayerID: 22870,
		FirstName: "Azeez",
		LastName: "Ojulari",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22870.png",
		TeamID: 23,
	},
	{
		PlayerID: 22872,
		FirstName: "Amen",
		LastName: "Ogbongbemiga",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22872.png",
		TeamID: 29,
	},
	{
		PlayerID: 22873,
		FirstName: "Osa",
		LastName: "Odighizuwa",
		Team: "DAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22873.png",
		TeamID: 9,
	},
	{
		PlayerID: 22874,
		FirstName: "Dayo",
		LastName: "Odeyingbo",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22874.png",
		TeamID: 14,
	},
	{
		PlayerID: 22877,
		FirstName: "Greg",
		LastName: "Newsome II",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22877.png",
		TeamID: 8,
	},
	{
		PlayerID: 22878,
		FirstName: "Royce",
		LastName: "Newman",
		Team: "GB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22878.png",
		TeamID: 12,
	},
	{
		PlayerID: 22880,
		FirstName: "Josh",
		LastName: "Myers",
		Team: "GB",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22880.png",
		TeamID: 12,
	},
	{
		PlayerID: 22881,
		FirstName: "Israel",
		LastName: "Mukuamu",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22881.png",
		TeamID: 9,
	},
	{
		PlayerID: 22883,
		FirstName: "Jimmy",
		LastName: "Morrissey",
		Team: "HOU",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22883.png",
		TeamID: 13,
	},
	{
		PlayerID: 22884,
		FirstName: "Jaylon",
		LastName: "Moore",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22884.png",
		TeamID: 31,
	},
	{
		PlayerID: 22886,
		FirstName: "Dan",
		LastName: "Moore Jr.",
		Team: "PIT",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22886.png",
		TeamID: 28,
	},
	{
		PlayerID: 22887,
		FirstName: "Elijah",
		LastName: "Molden",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22887.png",
		TeamID: 34,
	},
	{
		PlayerID: 22890,
		FirstName: "Pat",
		LastName: "Jones II",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22890.png",
		TeamID: 20,
	},
	{
		PlayerID: 22891,
		FirstName: "Robert",
		LastName: "Jones",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22891.png",
		TeamID: 19,
	},
	{
		PlayerID: 22892,
		FirstName: "Tim",
		LastName: "Jones",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22892.png",
		TeamID: 15,
	},
	{
		PlayerID: 22894,
		FirstName: "Kelvin",
		LastName: "Joseph",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22894.png",
		TeamID: 19,
	},
	{
		PlayerID: 22896,
		FirstName: "Malcolm",
		LastName: "Koonce",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22896.png",
		TeamID: 25,
	},
	{
		PlayerID: 22897,
		FirstName: "Alex",
		LastName: "Leatherwood",
		Team: "CLE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22897.png",
		TeamID: 8,
	},
	{
		PlayerID: 22898,
		FirstName: "Richard",
		LastName: "LeCounte III",
		Team: "TB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22898.png",
		TeamID: 33,
	},
	{
		PlayerID: 22899,
		FirstName: "Deommodore",
		LastName: "Lenoir",
		Team: "SF",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22899.png",
		TeamID: 31,
	},
	{
		PlayerID: 22900,
		FirstName: "Walker",
		LastName: "Little",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22900.png",
		TeamID: 15,
	},
	{
		PlayerID: 22901,
		FirstName: "Jonathan",
		LastName: "Marshall",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22901.png",
		TeamID: 28,
	},
	{
		PlayerID: 22902,
		FirstName: "Ben",
		LastName: "Mason",
		Team: "BAL",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22902.png",
		TeamID: 3,
	},
	{
		PlayerID: 22903,
		FirstName: "Jalen",
		LastName: "Mayfield",
		Team: "NYG",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22903.png",
		TeamID: 23,
	},
	{
		PlayerID: 22904,
		FirstName: "Isaiah",
		LastName: "McDuffie",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22904.png",
		TeamID: 12,
	},
	{
		PlayerID: 22905,
		FirstName: "Cameron",
		LastName: "McGrone",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22905.png",
		TeamID: 14,
	},
	{
		PlayerID: 22906,
		FirstName: "Alim",
		LastName: "McNeill",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22906.png",
		TeamID: 11,
	},
	{
		PlayerID: 22908,
		FirstName: "Evan",
		LastName: "McPherson",
		Team: "CIN",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22908.png",
		TeamID: 7,
	},
	{
		PlayerID: 22909,
		FirstName: "Quinn",
		LastName: "Meinerz",
		Team: "DEN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22909.png",
		TeamID: 10,
	},
	{
		PlayerID: 22910,
		FirstName: "Ifeatu",
		LastName: "Melifonwu",
		Team: "DET",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22910.png",
		TeamID: 11,
	},
	{
		PlayerID: 22918,
		FirstName: "Boogie",
		LastName: "Basham",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22918.png",
		TeamID: 23,
	},
	{
		PlayerID: 22920,
		FirstName: "Isaiahh",
		LastName: "Loudermilk",
		Team: "PIT",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22920.png",
		TeamID: 28,
	},
	{
		PlayerID: 22921,
		FirstName: "Nate",
		LastName: "Hobbs",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22921.png",
		TeamID: 25,
	},
	{
		PlayerID: 22922,
		FirstName: "Jason",
		LastName: "Pinnock",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22922.png",
		TeamID: 23,
	},
	{
		PlayerID: 22923,
		FirstName: "Shemar",
		LastName: "Jean-Charles",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22923.png",
		TeamID: 31,
	},
	{
		PlayerID: 22924,
		FirstName: "Adetokunbo",
		LastName: "Ogundeji",
		Team: "ATL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22924.png",
		TeamID: 2,
	},
	{
		PlayerID: 22925,
		FirstName: "Avery",
		LastName: "Williams",
		Team: "ATL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22925.png",
		TeamID: 2,
	},
	{
		PlayerID: 22926,
		FirstName: "Nick",
		LastName: "Niemann",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22926.png",
		TeamID: 29,
	},
	{
		PlayerID: 22928,
		FirstName: "Roy",
		LastName: "Lopez",
		Team: "ARI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22928.png",
		TeamID: 1,
	},
	{
		PlayerID: 22930,
		FirstName: "Camaron",
		LastName: "Cheeseman",
		Team: "WAS",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22930.png",
		TeamID: 35,
	},
	{
		PlayerID: 22933,
		FirstName: "Matt",
		LastName: "Farniok",
		Team: "CHI",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22933.png",
		TeamID: 6,
	},
	{
		PlayerID: 22941,
		FirstName: "Sam",
		LastName: "Kamara",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22941.png",
		TeamID: 8,
	},
	{
		PlayerID: 22942,
		FirstName: "Caleb",
		LastName: "Johnson",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22942.png",
		TeamID: 15,
	},
	{
		PlayerID: 22945,
		FirstName: "Jack",
		LastName: "Heflin",
		Team: "NO",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22945.png",
		TeamID: 22,
	},
	{
		PlayerID: 22947,
		FirstName: "Ryan",
		LastName: "McCollum",
		Team: "PIT",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22947.png",
		TeamID: 28,
	},
	{
		PlayerID: 22948,
		FirstName: "Devon",
		LastName: "Key",
		Team: "DEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22948.png",
		TeamID: 10,
	},
	{
		PlayerID: 22954,
		FirstName: "Josh",
		LastName: "Pederson",
		Team: "JAX",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22954.png",
		TeamID: 15,
	},
	{
		PlayerID: 22956,
		FirstName: "Jon",
		LastName: "Rhattigan",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22956.png",
		TeamID: 30,
	},
	{
		PlayerID: 22972,
		FirstName: "Kion",
		LastName: "Smith",
		Team: "MIA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22972.png",
		TeamID: 19,
	},
	{
		PlayerID: 22973,
		FirstName: "Austin",
		LastName: "Trammell",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22973.png",
		TeamID: 32,
	},
	{
		PlayerID: 22980,
		FirstName: "Foster",
		LastName: "Sarell",
		Team: "LAC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22980.png",
		TeamID: 29,
	},
	{
		PlayerID: 22983,
		FirstName: "Nick",
		LastName: "McCloud",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22983.png",
		TeamID: 23,
	},
	{
		PlayerID: 22993,
		FirstName: "Jordan",
		LastName: "Meredith",
		Team: "LV",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22993.png",
		TeamID: 25,
	},
	{
		PlayerID: 23003,
		FirstName: "Curtis",
		LastName: "Robinson",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23003.png",
		TeamID: 31,
	},
	{
		PlayerID: 23004,
		FirstName: "Adam",
		LastName: "Prentice",
		Team: "NO",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23004.png",
		TeamID: 22,
	},
	{
		PlayerID: 23008,
		FirstName: "Raymond",
		LastName: "Johnson III",
		Team: "DET",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23008.png",
		TeamID: 11,
	},
	{
		PlayerID: 23010,
		FirstName: "Brock",
		LastName: "Wright",
		Team: "DET",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23010.png",
		TeamID: 11,
	},
	{
		PlayerID: 23011,
		FirstName: "Jerry",
		LastName: "Jacobs",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23011.png",
		TeamID: 11,
	},
	{
		PlayerID: 23017,
		FirstName: "Christian",
		LastName: "Elliss",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23017.png",
		TeamID: 26,
	},
	{
		PlayerID: 23020,
		FirstName: "Ryan",
		LastName: "Neuzil",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23020.png",
		TeamID: 2,
	},
	{
		PlayerID: 23021,
		FirstName: "Zayne",
		LastName: "Anderson",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23021.png",
		TeamID: 12,
	},
	{
		PlayerID: 23022,
		FirstName: "Dicaprio",
		LastName: "Bootle",
		Team: "CAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23022.png",
		TeamID: 5,
	},
	{
		PlayerID: 23026,
		FirstName: "Nolan",
		LastName: "Cooney",
		Team: "ARI",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23026.png",
		TeamID: 1,
	},
	{
		PlayerID: 23059,
		FirstName: "Kiondre",
		LastName: "Thomas",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23059.png",
		TeamID: 12,
	},
	{
		PlayerID: 23062,
		FirstName: "Coy",
		LastName: "Cronk",
		Team: "JAX",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23062.png",
		TeamID: 15,
	},
	{
		PlayerID: 23063,
		FirstName: "Bernhard",
		LastName: "Seikovits",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23063.png",
		TeamID: 1,
	},
	{
		PlayerID: 23065,
		FirstName: "Alfredo",
		LastName: "Gutierrez",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23065.png",
		TeamID: 31,
	},
	{
		PlayerID: 23066,
		FirstName: "Max",
		LastName: "Pircher",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23066.png",
		TeamID: 11,
	},
	{
		PlayerID: 23072,
		FirstName: "Milo",
		LastName: "Eifler",
		Team: "ATL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23072.png",
		TeamID: 2,
	},
	{
		PlayerID: 23084,
		FirstName: "Shane",
		LastName: "Zylstra",
		Team: "DET",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23084.png",
		TeamID: 11,
	},
	{
		PlayerID: 23090,
		FirstName: "C.J.",
		LastName: "Saunders",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23090.png",
		TeamID: 2,
	},
	{
		PlayerID: 23098,
		FirstName: "Tyrone",
		LastName: "Wheatley Jr.",
		Team: "NE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23098.png",
		TeamID: 21,
	},
	{
		PlayerID: 23099,
		FirstName: "Michael",
		LastName: "Bandy",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23099.png",
		TeamID: 10,
	},
	{
		PlayerID: 23101,
		FirstName: "Parker",
		LastName: "Hesse",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23101.png",
		TeamID: 2,
	},
	{
		PlayerID: 23107,
		FirstName: "Michael",
		LastName: "Jacobson",
		Team: "NO",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23107.png",
		TeamID: 22,
	},
	{
		PlayerID: 23118,
		FirstName: "Malik",
		LastName: "Willis",
		Team: "TEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23118.png",
		TeamID: 34,
	},
	{
		PlayerID: 23119,
		FirstName: "Treylon",
		LastName: "Burks",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23119.png",
		TeamID: 34,
	},
	{
		PlayerID: 23120,
		FirstName: "Zay",
		LastName: "Flowers",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23120.png",
		TeamID: 3,
	},
	{
		PlayerID: 23121,
		FirstName: "Kayshon",
		LastName: "Boutte",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23121.png",
		TeamID: 21,
	},
	{
		PlayerID: 23122,
		FirstName: "Garrett",
		LastName: "Wilson",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23122.png",
		TeamID: 24,
	},
	{
		PlayerID: 23132,
		FirstName: "Bryce",
		LastName: "Young",
		Team: "CAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23132.png",
		TeamID: 5,
	},
	{
		PlayerID: 23134,
		FirstName: "Cade",
		LastName: "Otton",
		Team: "TB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23134.png",
		TeamID: 33,
	},
	{
		PlayerID: 23135,
		FirstName: "Charlie",
		LastName: "Kolar",
		Team: "BAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23135.png",
		TeamID: 3,
	},
	{
		PlayerID: 23136,
		FirstName: "Darnell",
		LastName: "Washington",
		Team: "PIT",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23136.png",
		TeamID: 28,
	},
	{
		PlayerID: 23138,
		FirstName: "Jake",
		LastName: "Ferguson",
		Team: "DAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23138.png",
		TeamID: 9,
	},
	{
		PlayerID: 23140,
		FirstName: "Michael",
		LastName: "Mayer",
		Team: "LV",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23140.png",
		TeamID: 25,
	},
	{
		PlayerID: 23141,
		FirstName: "Sam",
		LastName: "LaPorta",
		Team: "DET",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23141.png",
		TeamID: 11,
	},
	{
		PlayerID: 23143,
		FirstName: "Will",
		LastName: "Mallory",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23143.png",
		TeamID: 14,
	},
	{
		PlayerID: 23148,
		FirstName: "David",
		LastName: "Bell",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23148.png",
		TeamID: 8,
	},
	{
		PlayerID: 23151,
		FirstName: "Drake",
		LastName: "London",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23151.png",
		TeamID: 2,
	},
	{
		PlayerID: 23153,
		FirstName: "George",
		LastName: "Pickens",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23153.png",
		TeamID: 28,
	},
	{
		PlayerID: 23155,
		FirstName: "Jahan",
		LastName: "Dotson",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23155.png",
		TeamID: 35,
	},
	{
		PlayerID: 23157,
		FirstName: "Jaxon",
		LastName: "Smith-Njigba",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23157.png",
		TeamID: 30,
	},
	{
		PlayerID: 23159,
		FirstName: "Joseph",
		LastName: "Ngata",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23159.png",
		TeamID: 26,
	},
	{
		PlayerID: 23160,
		FirstName: "John",
		LastName: "Metchie III",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23160.png",
		TeamID: 13,
	},
	{
		PlayerID: 23161,
		FirstName: "Jonathan",
		LastName: "Mingo",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23161.png",
		TeamID: 5,
	},
	{
		PlayerID: 23162,
		FirstName: "Jordan",
		LastName: "Addison",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23162.png",
		TeamID: 20,
	},
	{
		PlayerID: 23163,
		FirstName: "Justyn",
		LastName: "Ross",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23163.png",
		TeamID: 16,
	},
	{
		PlayerID: 23164,
		FirstName: "Kearis",
		LastName: "Jackson",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23164.png",
		TeamID: 34,
	},
	{
		PlayerID: 23165,
		FirstName: "Marvin",
		LastName: "Mims Jr.",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23165.png",
		TeamID: 10,
	},
	{
		PlayerID: 23166,
		FirstName: "Rakim",
		LastName: "Jarrett",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23166.png",
		TeamID: 33,
	},
	{
		PlayerID: 23167,
		FirstName: "Romeo",
		LastName: "Doubs",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23167.png",
		TeamID: 12,
	},
	{
		PlayerID: 23168,
		FirstName: "Skyy",
		LastName: "Moore",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23168.png",
		TeamID: 16,
	},
	{
		PlayerID: 23170,
		FirstName: "Wan'Dale",
		LastName: "Robinson",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23170.png",
		TeamID: 23,
	},
	{
		PlayerID: 23172,
		FirstName: "Tyrion",
		LastName: "Davis-Price",
		Team: "SF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23172.png",
		TeamID: 31,
	},
	{
		PlayerID: 23173,
		FirstName: "Zach",
		LastName: "Charbonnet",
		Team: "SEA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23173.png",
		TeamID: 30,
	},
	{
		PlayerID: 23174,
		FirstName: "Zach",
		LastName: "Evans",
		Team: "LAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23174.png",
		TeamID: 32,
	},
	{
		PlayerID: 23185,
		FirstName: "Sam",
		LastName: "Howell",
		Team: "WAS",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23185.png",
		TeamID: 35,
	},
	{
		PlayerID: 23189,
		FirstName: "Bijan",
		LastName: "Robinson",
		Team: "ATL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23189.png",
		TeamID: 2,
	},
	{
		PlayerID: 23190,
		FirstName: "Brian",
		LastName: "Robinson Jr.",
		Team: "WAS",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23190.png",
		TeamID: 35,
	},
	{
		PlayerID: 23192,
		FirstName: "Chris",
		LastName: "Brooks",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23192.png",
		TeamID: 19,
	},
	{
		PlayerID: 23193,
		FirstName: "Tank",
		LastName: "Bigsby",
		Team: "JAX",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23193.png",
		TeamID: 15,
	},
	{
		PlayerID: 23195,
		FirstName: "Eric",
		LastName: "Gray",
		Team: "NYG",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23195.png",
		TeamID: 23,
	},
	{
		PlayerID: 23198,
		FirstName: "Isaiah",
		LastName: "Spiller",
		Team: "LAC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23198.png",
		TeamID: 29,
	},
	{
		PlayerID: 23199,
		FirstName: "Sincere",
		LastName: "McCormick",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23199.png",
		TeamID: 25,
	},
	{
		PlayerID: 23200,
		FirstName: "Jahmyr",
		LastName: "Gibbs",
		Team: "DET",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23200.png",
		TeamID: 11,
	},
	{
		PlayerID: 23202,
		FirstName: "SaRodorick",
		LastName: "Thompson Jr.",
		Team: "SEA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23202.png",
		TeamID: 30,
	},
	{
		PlayerID: 23205,
		FirstName: "Jerome",
		LastName: "Ford",
		Team: "CLE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23205.png",
		TeamID: 8,
	},
	{
		PlayerID: 23212,
		FirstName: "Kyren",
		LastName: "Williams",
		Team: "LAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23212.png",
		TeamID: 32,
	},
	{
		PlayerID: 23214,
		FirstName: "Kenneth",
		LastName: "Walker III",
		Team: "SEA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23214.png",
		TeamID: 30,
	},
	{
		PlayerID: 23217,
		FirstName: "Rachaad",
		LastName: "White",
		Team: "TB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23217.png",
		TeamID: 33,
	},
	{
		PlayerID: 23218,
		FirstName: "Pierre",
		LastName: "Strong Jr.",
		Team: "CLE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23218.png",
		TeamID: 8,
	},
	{
		PlayerID: 23223,
		FirstName: "Dameon",
		LastName: "Pierce",
		Team: "HOU",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23223.png",
		TeamID: 13,
	},
	{
		PlayerID: 23227,
		FirstName: "Khalil",
		LastName: "Shakir",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23227.png",
		TeamID: 4,
	},
	{
		PlayerID: 23230,
		FirstName: "Dorian",
		LastName: "Thompson-Robinson",
		Team: "CLE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23230.png",
		TeamID: 8,
	},
	{
		PlayerID: 23231,
		FirstName: "Tyler",
		LastName: "Badie",
		Team: "DEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23231.png",
		TeamID: 10,
	},
	{
		PlayerID: 23232,
		FirstName: "Alec",
		LastName: "Pierce",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23232.png",
		TeamID: 14,
	},
	{
		PlayerID: 23233,
		FirstName: "Jayden",
		LastName: "Reed",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23233.png",
		TeamID: 12,
	},
	{
		PlayerID: 23234,
		FirstName: "Jameson",
		LastName: "Williams",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23234.png",
		TeamID: 11,
	},
	{
		PlayerID: 23237,
		FirstName: "Chris",
		LastName: "Rodriguez Jr.",
		Team: "WAS",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23237.png",
		TeamID: 35,
	},
	{
		PlayerID: 23239,
		FirstName: "C.J.",
		LastName: "Stroud",
		Team: "HOU",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23239.png",
		TeamID: 13,
	},
	{
		PlayerID: 23241,
		FirstName: "Brock",
		LastName: "Purdy",
		Team: "SF",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23241.png",
		TeamID: 31,
	},
	{
		PlayerID: 23247,
		FirstName: "James",
		LastName: "Cook",
		Team: "BUF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23247.png",
		TeamID: 4,
	},
	{
		PlayerID: 23249,
		FirstName: "Jake",
		LastName: "Haener",
		Team: "NO",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23249.png",
		TeamID: 22,
	},
	{
		PlayerID: 23250,
		FirstName: "Tyler",
		LastName: "Allgeier",
		Team: "ATL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23250.png",
		TeamID: 2,
	},
	{
		PlayerID: 23251,
		FirstName: "Trey",
		LastName: "McBride",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23251.png",
		TeamID: 1,
	},
	{
		PlayerID: 23253,
		FirstName: "Dontayvion",
		LastName: "Wicks",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23253.png",
		TeamID: 12,
	},
	{
		PlayerID: 23255,
		FirstName: "Snoop",
		LastName: "Conner",
		Team: "JAX",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23255.png",
		TeamID: 15,
	},
	{
		PlayerID: 23256,
		FirstName: "Isaiah",
		LastName: "Likely",
		Team: "BAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23256.png",
		TeamID: 3,
	},
	{
		PlayerID: 23257,
		FirstName: "Aidan",
		LastName: "Hutchinson",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23257.png",
		TeamID: 11,
	},
	{
		PlayerID: 23258,
		FirstName: "Drake",
		LastName: "Jackson",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23258.png",
		TeamID: 31,
	},
	{
		PlayerID: 23259,
		FirstName: "George",
		LastName: "Karlaftis",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23259.png",
		TeamID: 16,
	},
	{
		PlayerID: 23260,
		FirstName: "Kayvon",
		LastName: "Thibodeaux",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23260.png",
		TeamID: 23,
	},
	{
		PlayerID: 23261,
		FirstName: "Nolan",
		LastName: "Smith",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23261.png",
		TeamID: 26,
	},
	{
		PlayerID: 23262,
		FirstName: "Zach",
		LastName: "Harrison",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23262.png",
		TeamID: 2,
	},
	{
		PlayerID: 23263,
		FirstName: "Kyle",
		LastName: "Hamilton",
		Team: "BAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23263.png",
		TeamID: 3,
	},
	{
		PlayerID: 23264,
		FirstName: "Daniel",
		LastName: "Faalele",
		Team: "BAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23264.png",
		TeamID: 3,
	},
	{
		PlayerID: 23265,
		FirstName: "Evan",
		LastName: "Neal",
		Team: "NYG",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23265.png",
		TeamID: 23,
	},
	{
		PlayerID: 23267,
		FirstName: "Bailey",
		LastName: "Zappe",
		Team: "NE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23267.png",
		TeamID: 21,
	},
	{
		PlayerID: 23270,
		FirstName: "Will",
		LastName: "Levis",
		Team: "TEN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23270.png",
		TeamID: 34,
	},
	{
		PlayerID: 23273,
		FirstName: "Hassan",
		LastName: "Haskins",
		Team: "TEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23273.png",
		TeamID: 34,
	},
	{
		PlayerID: 23274,
		FirstName: "Dee",
		LastName: "Alford",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23274.png",
		TeamID: 2,
	},
	{
		PlayerID: 23276,
		FirstName: "Phidarian",
		LastName: "Mathis",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23276.png",
		TeamID: 35,
	},
	{
		PlayerID: 23278,
		FirstName: "Tyler",
		LastName: "Linderbaum",
		Team: "BAL",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23278.png",
		TeamID: 3,
	},
	{
		PlayerID: 23280,
		FirstName: "Alec",
		LastName: "Anderson",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23280.png",
		TeamID: 4,
	},
	{
		PlayerID: 23282,
		FirstName: "Jalyn",
		LastName: "Armour-Davis",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23282.png",
		TeamID: 3,
	},
	{
		PlayerID: 23283,
		FirstName: "Brian",
		LastName: "Asamoah II",
		Team: "MIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23283.png",
		TeamID: 20,
	},
	{
		PlayerID: 23289,
		FirstName: "Dane",
		LastName: "Belton",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23289.png",
		TeamID: 23,
	},
	{
		PlayerID: 23290,
		FirstName: "Nik",
		LastName: "Bonitto",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23290.png",
		TeamID: 10,
	},
	{
		PlayerID: 23291,
		FirstName: "Andrew",
		LastName: "Booth Jr.",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23291.png",
		TeamID: 20,
	},
	{
		PlayerID: 23296,
		FirstName: "Leo",
		LastName: "Chenal",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23296.png",
		TeamID: 16,
	},
	{
		PlayerID: 23297,
		FirstName: "Lewis",
		LastName: "Cine",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23297.png",
		TeamID: 20,
	},
	{
		PlayerID: 23298,
		FirstName: "Raheem",
		LastName: "Blackshear",
		Team: "CAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23298.png",
		TeamID: 5,
	},
	{
		PlayerID: 23301,
		FirstName: "Jashaun",
		LastName: "Corbin",
		Team: "CAR",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23301.png",
		TeamID: 5,
	},
	{
		PlayerID: 23302,
		FirstName: "Britain",
		LastName: "Covey",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23302.png",
		TeamID: 26,
	},
	{
		PlayerID: 23303,
		FirstName: "Charles",
		LastName: "Cross",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23303.png",
		TeamID: 30,
	},
	{
		PlayerID: 23304,
		FirstName: "Cade",
		LastName: "York",
		Team: "TEN",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23304.png",
		TeamID: 34,
	},
	{
		PlayerID: 23305,
		FirstName: "Nick",
		LastName: "Cross",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23305.png",
		TeamID: 14,
	},
	{
		PlayerID: 23308,
		FirstName: "Alex",
		LastName: "Wright",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23308.png",
		TeamID: 8,
	},
	{
		PlayerID: 23309,
		FirstName: "Nakobe",
		LastName: "Dean",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23309.png",
		TeamID: 26,
	},
	{
		PlayerID: 23310,
		FirstName: "Greg",
		LastName: "Dulcich",
		Team: "DEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23310.png",
		TeamID: 10,
	},
	{
		PlayerID: 23316,
		FirstName: "Travon",
		LastName: "Walker",
		Team: "JAX",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23316.png",
		TeamID: 15,
	},
	{
		PlayerID: 23318,
		FirstName: "Ikem",
		LastName: "Ekwonu",
		Team: "CAR",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23318.png",
		TeamID: 5,
	},
	{
		PlayerID: 23319,
		FirstName: "Rasheed",
		LastName: "Walker",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23319.png",
		TeamID: 12,
	},
	{
		PlayerID: 23320,
		FirstName: "Kaiir",
		LastName: "Elam",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23320.png",
		TeamID: 4,
	},
	{
		PlayerID: 23322,
		FirstName: "Martin",
		LastName: "Emerson Jr.",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23322.png",
		TeamID: 8,
	},
	{
		PlayerID: 23324,
		FirstName: "Joshua",
		LastName: "Ezeudu",
		Team: "NYG",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23324.png",
		TeamID: 23,
	},
	{
		PlayerID: 23325,
		FirstName: "Erik",
		LastName: "Ezukanma",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23325.png",
		TeamID: 19,
	},
	{
		PlayerID: 23327,
		FirstName: "Juanyeh",
		LastName: "Thomas",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23327.png",
		TeamID: 9,
	},
	{
		PlayerID: 23328,
		FirstName: "Cor'Dale",
		LastName: "Flott",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23328.png",
		TeamID: 23,
	},
	{
		PlayerID: 23329,
		FirstName: "Cameron",
		LastName: "Thomas",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23329.png",
		TeamID: 1,
	},
	{
		PlayerID: 23330,
		FirstName: "Luke",
		LastName: "Tenuta",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23330.png",
		TeamID: 12,
	},
	{
		PlayerID: 23332,
		FirstName: "Isaac",
		LastName: "Taylor-Stuart",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23332.png",
		TeamID: 14,
	},
	{
		PlayerID: 23334,
		FirstName: "Derek",
		LastName: "Stingley Jr.",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23334.png",
		TeamID: 13,
	},
	{
		PlayerID: 23335,
		FirstName: "Cole",
		LastName: "Fotheringham",
		Team: "LV",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23335.png",
		TeamID: 25,
	},
	{
		PlayerID: 23337,
		FirstName: "Sauce",
		LastName: "Gardner",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23337.png",
		TeamID: 24,
	},
	{
		PlayerID: 23338,
		FirstName: "Chris",
		LastName: "Steele",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23338.png",
		TeamID: 30,
	},
	{
		PlayerID: 23341,
		FirstName: "Tyler",
		LastName: "Goodson",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23341.png",
		TeamID: 14,
	},
	{
		PlayerID: 23342,
		FirstName: "Kenyon",
		LastName: "Green",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23342.png",
		TeamID: 13,
	},
	{
		PlayerID: 23344,
		FirstName: "Christian",
		LastName: "Harris",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23344.png",
		TeamID: 13,
	},
	{
		PlayerID: 23345,
		FirstName: "Kevin",
		LastName: "Harris",
		Team: "NE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23345.png",
		TeamID: 21,
	},
	{
		PlayerID: 23346,
		FirstName: "Dax",
		LastName: "Hill",
		Team: "CIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23346.png",
		TeamID: 7,
	},
	{
		PlayerID: 23348,
		FirstName: "Nephi",
		LastName: "Sewell",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23348.png",
		TeamID: 22,
	},
	{
		PlayerID: 23351,
		FirstName: "Sean",
		LastName: "Rhyan",
		Team: "GB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23351.png",
		TeamID: 12,
	},
	{
		PlayerID: 23353,
		FirstName: "Brock",
		LastName: "Hoffman",
		Team: "DAL",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23353.png",
		TeamID: 9,
	},
	{
		PlayerID: 23355,
		FirstName: "Teagan",
		LastName: "Quitoriano",
		Team: "HOU",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23355.png",
		TeamID: 13,
	},
	{
		PlayerID: 23358,
		FirstName: "Nicholas",
		LastName: "Petit-Frere",
		Team: "TEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23358.png",
		TeamID: 34,
	},
	{
		PlayerID: 23359,
		FirstName: "Kerby",
		LastName: "Joseph",
		Team: "DET",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23359.png",
		TeamID: 11,
	},
	{
		PlayerID: 23361,
		FirstName: "Cam",
		LastName: "Jurgens",
		Team: "PHI",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23361.png",
		TeamID: 26,
	},
	{
		PlayerID: 23362,
		FirstName: "Jaxson",
		LastName: "Kirkland",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23362.png",
		TeamID: 7,
	},
	{
		PlayerID: 23363,
		FirstName: "DeMarvin",
		LastName: "Leal",
		Team: "PIT",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23363.png",
		TeamID: 28,
	},
	{
		PlayerID: 23364,
		FirstName: "Jordan",
		LastName: "Mason",
		Team: "SF",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23364.png",
		TeamID: 31,
	},
	{
		PlayerID: 23365,
		FirstName: "Trent",
		LastName: "McDuffie",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23365.png",
		TeamID: 16,
	},
	{
		PlayerID: 23366,
		FirstName: "Verone",
		LastName: "McKinley III",
		Team: "MIA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23366.png",
		TeamID: 19,
	},
	{
		PlayerID: 23367,
		FirstName: "Ja'Quan",
		LastName: "McMillian",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23367.png",
		TeamID: 10,
	},
	{
		PlayerID: 23368,
		FirstName: "Jalen",
		LastName: "Nailor",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23368.png",
		TeamID: 20,
	},
	{
		PlayerID: 23369,
		FirstName: "David",
		LastName: "Ojabo",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23369.png",
		TeamID: 3,
	},
	{
		PlayerID: 23371,
		FirstName: "Isiah",
		LastName: "Pacheco",
		Team: "KC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23371.png",
		TeamID: 16,
	},
	{
		PlayerID: 23372,
		FirstName: "Trevor",
		LastName: "Penning",
		Team: "NO",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23372.png",
		TeamID: 22,
	},
	{
		PlayerID: 23375,
		FirstName: "Zach",
		LastName: "Carter",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23375.png",
		TeamID: 7,
	},
	{
		PlayerID: 23376,
		FirstName: "Devonte",
		LastName: "Wyatt",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23376.png",
		TeamID: 12,
	},
	{
		PlayerID: 23377,
		FirstName: "Neil",
		LastName: "Farrell",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23377.png",
		TeamID: 16,
	},
	{
		PlayerID: 23379,
		FirstName: "Tyreke",
		LastName: "Smith",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23379.png",
		TeamID: 30,
	},
	{
		PlayerID: 23381,
		FirstName: "Boye",
		LastName: "Mafe",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23381.png",
		TeamID: 30,
	},
	{
		PlayerID: 23382,
		FirstName: "Jermaine",
		LastName: "Johnson",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23382.png",
		TeamID: 24,
	},
	{
		PlayerID: 23383,
		FirstName: "Logan",
		LastName: "Hall",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23383.png",
		TeamID: 33,
	},
	{
		PlayerID: 23384,
		FirstName: "Josh",
		LastName: "Paschal",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23384.png",
		TeamID: 11,
	},
	{
		PlayerID: 23385,
		FirstName: "Dominique",
		LastName: "Robinson",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23385.png",
		TeamID: 6,
	},
	{
		PlayerID: 23386,
		FirstName: "Arnold",
		LastName: "Ebiketie",
		Team: "ATL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23386.png",
		TeamID: 2,
	},
	{
		PlayerID: 23387,
		FirstName: "Amar\u00e9",
		LastName: "Barno",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23387.png",
		TeamID: 5,
	},
	{
		PlayerID: 23388,
		FirstName: "DeAngelo",
		LastName: "Malone",
		Team: "ATL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23388.png",
		TeamID: 2,
	},
	{
		PlayerID: 23389,
		FirstName: "Darrian",
		LastName: "Beavers",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23389.png",
		TeamID: 23,
	},
	{
		PlayerID: 23390,
		FirstName: "Jeremiah",
		LastName: "Moon",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23390.png",
		TeamID: 3,
	},
	{
		PlayerID: 23391,
		FirstName: "Jesse",
		LastName: "Luketa",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23391.png",
		TeamID: 1,
	},
	{
		PlayerID: 23392,
		FirstName: "Kingsley",
		LastName: "Enagbare",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23392.png",
		TeamID: 12,
	},
	{
		PlayerID: 23393,
		FirstName: "Micheal",
		LastName: "Clemons",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23393.png",
		TeamID: 24,
	},
	{
		PlayerID: 23394,
		FirstName: "Esezi",
		LastName: "Otomewo",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23394.png",
		TeamID: 15,
	},
	{
		PlayerID: 23395,
		FirstName: "Christian",
		LastName: "Watson",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23395.png",
		TeamID: 12,
	},
	{
		PlayerID: 23396,
		FirstName: "Andrew",
		LastName: "Stueber",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23396.png",
		TeamID: 21,
	},
	{
		PlayerID: 23397,
		FirstName: "Dylan",
		LastName: "Parham",
		Team: "LV",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23397.png",
		TeamID: 25,
	},
	{
		PlayerID: 23398,
		FirstName: "Ed",
		LastName: "Ingram",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23398.png",
		TeamID: 20,
	},
	{
		PlayerID: 23399,
		FirstName: "Max",
		LastName: "Mitchell",
		Team: "NYJ",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23399.png",
		TeamID: 24,
	},
	{
		PlayerID: 23400,
		FirstName: "Zion",
		LastName: "Johnson",
		Team: "LAC",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23400.png",
		TeamID: 29,
	},
	{
		PlayerID: 23401,
		FirstName: "Bernhard",
		LastName: "Raimann",
		Team: "IND",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23401.png",
		TeamID: 14,
	},
	{
		PlayerID: 23402,
		FirstName: "Nick",
		LastName: "Zakelj",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23402.png",
		TeamID: 31,
	},
	{
		PlayerID: 23403,
		FirstName: "Jamaree",
		LastName: "Salyer",
		Team: "LAC",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23403.png",
		TeamID: 29,
	},
	{
		PlayerID: 23404,
		FirstName: "Justin",
		LastName: "Shaffer",
		Team: "ATL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23404.png",
		TeamID: 2,
	},
	{
		PlayerID: 23405,
		FirstName: "Darian",
		LastName: "Kinnard",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23405.png",
		TeamID: 16,
	},
	{
		PlayerID: 23406,
		FirstName: "Luke",
		LastName: "Goedeke",
		Team: "TB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23406.png",
		TeamID: 33,
	},
	{
		PlayerID: 23407,
		FirstName: "Cole",
		LastName: "Strange",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23407.png",
		TeamID: 21,
	},
	{
		PlayerID: 23408,
		FirstName: "Abraham",
		LastName: "Lucas",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23408.png",
		TeamID: 30,
	},
	{
		PlayerID: 23410,
		FirstName: "Matt",
		LastName: "Waletzko",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23410.png",
		TeamID: 9,
	},
	{
		PlayerID: 23411,
		FirstName: "Marquis",
		LastName: "Hayes",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23411.png",
		TeamID: 1,
	},
	{
		PlayerID: 23412,
		FirstName: "Braxton",
		LastName: "Jones",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23412.png",
		TeamID: 6,
	},
	{
		PlayerID: 23413,
		FirstName: "Chris",
		LastName: "Paul",
		Team: "WAS",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23413.png",
		TeamID: 35,
	},
	{
		PlayerID: 23414,
		FirstName: "Spencer",
		LastName: "Burford",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23414.png",
		TeamID: 31,
	},
	{
		PlayerID: 23415,
		FirstName: "Nikola",
		LastName: "Kalinic",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23415.png",
		TeamID: 32,
	},
	{
		PlayerID: 23416,
		FirstName: "Jaquan",
		LastName: "Brisker",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23416.png",
		TeamID: 6,
	},
	{
		PlayerID: 23417,
		FirstName: "Cam",
		LastName: "Taylor-Britt",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23417.png",
		TeamID: 7,
	},
	{
		PlayerID: 23419,
		FirstName: "Akayleb",
		LastName: "Evans",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23419.png",
		TeamID: 20,
	},
	{
		PlayerID: 23420,
		FirstName: "Riley",
		LastName: "Moss",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23420.png",
		TeamID: 10,
	},
	{
		PlayerID: 23421,
		FirstName: "Marcus",
		LastName: "Jones",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23421.png",
		TeamID: 21,
	},
	{
		PlayerID: 23422,
		FirstName: "Jalen",
		LastName: "Pitre",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23422.png",
		TeamID: 13,
	},
	{
		PlayerID: 23423,
		FirstName: "Coby",
		LastName: "Bryant",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23423.png",
		TeamID: 30,
	},
	{
		PlayerID: 23424,
		FirstName: "Bryan",
		LastName: "Cook",
		Team: "KC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23424.png",
		TeamID: 16,
	},
	{
		PlayerID: 23425,
		FirstName: "Mario",
		LastName: "Goodrich",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23425.png",
		TeamID: 26,
	},
	{
		PlayerID: 23426,
		FirstName: "Joshua",
		LastName: "Williams",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23426.png",
		TeamID: 16,
	},
	{
		PlayerID: 23427,
		FirstName: "Jaylen",
		LastName: "Watson",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23427.png",
		TeamID: 16,
	},
	{
		PlayerID: 23428,
		FirstName: "Riq",
		LastName: "Woolen",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23428.png",
		TeamID: 30,
	},
	{
		PlayerID: 23429,
		FirstName: "Tycen",
		LastName: "Anderson",
		Team: "CIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23429.png",
		TeamID: 7,
	},
	{
		PlayerID: 23431,
		FirstName: "Alontae",
		LastName: "Taylor",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23431.png",
		TeamID: 22,
	},
	{
		PlayerID: 23432,
		FirstName: "Zyon",
		LastName: "McCollum",
		Team: "TB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23432.png",
		TeamID: 33,
	},
	{
		PlayerID: 23433,
		FirstName: "Damarri",
		LastName: "Mathis",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23433.png",
		TeamID: 10,
	},
	{
		PlayerID: 23437,
		FirstName: "Devin",
		LastName: "Lloyd",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23437.png",
		TeamID: 15,
	},
	{
		PlayerID: 23438,
		FirstName: "Chad",
		LastName: "Muma",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23438.png",
		TeamID: 15,
	},
	{
		PlayerID: 23441,
		FirstName: "Braylon",
		LastName: "Sanders",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23441.png",
		TeamID: 19,
	},
	{
		PlayerID: 23442,
		FirstName: "Damone",
		LastName: "Clark",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23442.png",
		TeamID: 9,
	},
	{
		PlayerID: 23444,
		FirstName: "Quay",
		LastName: "Walker",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23444.png",
		TeamID: 12,
	},
	{
		PlayerID: 23445,
		FirstName: "Channing",
		LastName: "Tindall",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23445.png",
		TeamID: 19,
	},
	{
		PlayerID: 23446,
		FirstName: "D'Marco",
		LastName: "Jackson",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23446.png",
		TeamID: 22,
	},
	{
		PlayerID: 23447,
		FirstName: "Terrel",
		LastName: "Bernard",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23447.png",
		TeamID: 4,
	},
	{
		PlayerID: 23452,
		FirstName: "Cade",
		LastName: "Mays",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23452.png",
		TeamID: 5,
	},
	{
		PlayerID: 23453,
		FirstName: "Ja'Tyre",
		LastName: "Carter",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23453.png",
		TeamID: 6,
	},
	{
		PlayerID: 23454,
		FirstName: "Luke",
		LastName: "Fortner",
		Team: "JAX",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23454.png",
		TeamID: 15,
	},
	{
		PlayerID: 23455,
		FirstName: "Otito",
		LastName: "Ogbonnia",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23455.png",
		TeamID: 29,
	},
	{
		PlayerID: 23456,
		FirstName: "Isaiah",
		LastName: "Thomas",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23456.png",
		TeamID: 8,
	},
	{
		PlayerID: 23457,
		FirstName: "Kyron",
		LastName: "Johnson",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23457.png",
		TeamID: 26,
	},
	{
		PlayerID: 23458,
		FirstName: "Gregory",
		LastName: "Junior",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23458.png",
		TeamID: 15,
	},
	{
		PlayerID: 23459,
		FirstName: "Derion",
		LastName: "Kendrick",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23459.png",
		TeamID: 32,
	},
	{
		PlayerID: 23460,
		FirstName: "Roger",
		LastName: "McCreary",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23460.png",
		TeamID: 34,
	},
	{
		PlayerID: 23461,
		FirstName: "JT",
		LastName: "Woods",
		Team: "LAC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23461.png",
		TeamID: 29,
	},
	{
		PlayerID: 23463,
		FirstName: "Kyle",
		LastName: "Philips",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23463.png",
		TeamID: 34,
	},
	{
		PlayerID: 23467,
		FirstName: "Jalen",
		LastName: "Moreno-Cropper",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23467.png",
		TeamID: 9,
	},
	{
		PlayerID: 23468,
		FirstName: "Michael",
		LastName: "Woods II",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23468.png",
		TeamID: 8,
	},
	{
		PlayerID: 23469,
		FirstName: "Tyquan",
		LastName: "Thornton",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23469.png",
		TeamID: 21,
	},
	{
		PlayerID: 23471,
		FirstName: "Jordan",
		LastName: "Battle",
		Team: "CIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23471.png",
		TeamID: 7,
	},
	{
		PlayerID: 23477,
		FirstName: "Skylar",
		LastName: "Thompson",
		Team: "MIA",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23477.png",
		TeamID: 19,
	},
	{
		PlayerID: 23479,
		FirstName: "Jaylen",
		LastName: "Warren",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23479.png",
		TeamID: 28,
	},
	{
		PlayerID: 23481,
		FirstName: "Velus",
		LastName: "Jones Jr.",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23481.png",
		TeamID: 6,
	},
	{
		PlayerID: 23482,
		FirstName: "Bo",
		LastName: "Melton",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23482.png",
		TeamID: 12,
	},
	{
		PlayerID: 23485,
		FirstName: "Daniel",
		LastName: "Bellinger",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23485.png",
		TeamID: 23,
	},
	{
		PlayerID: 23486,
		FirstName: "Grant",
		LastName: "Calcaterra",
		Team: "PHI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23486.png",
		TeamID: 26,
	},
	{
		PlayerID: 23487,
		FirstName: "Connor",
		LastName: "Heyward",
		Team: "PIT",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23487.png",
		TeamID: 28,
	},
	{
		PlayerID: 23488,
		FirstName: "Curtis",
		LastName: "Hodges",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23488.png",
		TeamID: 35,
	},
	{
		PlayerID: 23489,
		FirstName: "Chigoziem",
		LastName: "Okonkwo",
		Team: "TEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23489.png",
		TeamID: 34,
	},
	{
		PlayerID: 23490,
		FirstName: "Jelani",
		LastName: "Woods",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23490.png",
		TeamID: 14,
	},
	{
		PlayerID: 23492,
		FirstName: "Ben",
		LastName: "Brown",
		Team: "SEA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23492.png",
		TeamID: 30,
	},
	{
		PlayerID: 23493,
		FirstName: "Logan",
		LastName: "Bruss",
		Team: "LAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23493.png",
		TeamID: 32,
	},
	{
		PlayerID: 23495,
		FirstName: "Dawson",
		LastName: "Deaton",
		Team: "CLE",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23495.png",
		TeamID: 8,
	},
	{
		PlayerID: 23496,
		FirstName: "Austin",
		LastName: "Deculus",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23496.png",
		TeamID: 13,
	},
	{
		PlayerID: 23497,
		FirstName: "Kellen",
		LastName: "Diesch",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23497.png",
		TeamID: 28,
	},
	{
		PlayerID: 23501,
		FirstName: "Chasen",
		LastName: "Hines",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23501.png",
		TeamID: 19,
	},
	{
		PlayerID: 23503,
		FirstName: "Vederian",
		LastName: "Lowe",
		Team: "NE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23503.png",
		TeamID: 21,
	},
	{
		PlayerID: 23504,
		FirstName: "Marcus",
		LastName: "McKethan",
		Team: "NYG",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23504.png",
		TeamID: 23,
	},
	{
		PlayerID: 23505,
		FirstName: "Thayer",
		LastName: "Munford Jr.",
		Team: "LV",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23505.png",
		TeamID: 25,
	},
	{
		PlayerID: 23506,
		FirstName: "Andrew",
		LastName: "Rupcich",
		Team: "TEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23506.png",
		TeamID: 34,
	},
	{
		PlayerID: 23507,
		FirstName: "Tyler",
		LastName: "Smith",
		Team: "DAL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23507.png",
		TeamID: 9,
	},
	{
		PlayerID: 23508,
		FirstName: "Zach",
		LastName: "Thomas",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23508.png",
		TeamID: 32,
	},
	{
		PlayerID: 23509,
		FirstName: "Zach",
		LastName: "Tom",
		Team: "GB",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23509.png",
		TeamID: 12,
	},
	{
		PlayerID: 23510,
		FirstName: "Cordell",
		LastName: "Volson",
		Team: "CIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23510.png",
		TeamID: 7,
	},
	{
		PlayerID: 23511,
		FirstName: "Luke",
		LastName: "Wattenberg",
		Team: "DEN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23511.png",
		TeamID: 10,
	},
	{
		PlayerID: 23512,
		FirstName: "Thomas",
		LastName: "Booker IV",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23512.png",
		TeamID: 26,
	},
	{
		PlayerID: 23513,
		FirstName: "Matthew",
		LastName: "Butler",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23513.png",
		TeamID: 25,
	},
	{
		PlayerID: 23514,
		FirstName: "D.J.",
		LastName: "Davidson",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23514.png",
		TeamID: 23,
	},
	{
		PlayerID: 23515,
		FirstName: "Jordan",
		LastName: "Davis",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23515.png",
		TeamID: 26,
	},
	{
		PlayerID: 23518,
		FirstName: "Jonathan",
		LastName: "Ford",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23518.png",
		TeamID: 12,
	},
	{
		PlayerID: 23519,
		FirstName: "Jeff",
		LastName: "Gunter",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23519.png",
		TeamID: 7,
	},
	{
		PlayerID: 23520,
		FirstName: "Jordan",
		LastName: "Jackson",
		Team: "DEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23520.png",
		TeamID: 10,
	},
	{
		PlayerID: 23522,
		FirstName: "Travis",
		LastName: "Jones",
		Team: "BAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23522.png",
		TeamID: 3,
	},
	{
		PlayerID: 23526,
		FirstName: "Jayden",
		LastName: "Peevy",
		Team: "TEN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23526.png",
		TeamID: 34,
	},
	{
		PlayerID: 23527,
		FirstName: "LaBryan",
		LastName: "Ray",
		Team: "CAR",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23527.png",
		TeamID: 5,
	},
	{
		PlayerID: 23528,
		FirstName: "John",
		LastName: "Ridgeway III",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23528.png",
		TeamID: 35,
	},
	{
		PlayerID: 23529,
		FirstName: "Myjai",
		LastName: "Sanders",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23529.png",
		TeamID: 1,
	},
	{
		PlayerID: 23531,
		FirstName: "Eyioma",
		LastName: "Uwazurike",
		Team: "DEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23531.png",
		TeamID: 10,
	},
	{
		PlayerID: 23532,
		FirstName: "Sam",
		LastName: "Williams",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23532.png",
		TeamID: 9,
	},
	{
		PlayerID: 23534,
		FirstName: "Troy",
		LastName: "Andersen",
		Team: "ATL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23534.png",
		TeamID: 2,
	},
	{
		PlayerID: 23535,
		FirstName: "Darien",
		LastName: "Butler",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23535.png",
		TeamID: 25,
	},
	{
		PlayerID: 23536,
		FirstName: "Chance",
		LastName: "Campbell",
		Team: "TEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23536.png",
		TeamID: 34,
	},
	{
		PlayerID: 23538,
		FirstName: "Jake",
		LastName: "Hansen",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23538.png",
		TeamID: 13,
	},
	{
		PlayerID: 23539,
		FirstName: "Nate",
		LastName: "Landman",
		Team: "ATL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23539.png",
		TeamID: 2,
	},
	{
		PlayerID: 23541,
		FirstName: "Micah",
		LastName: "McFadden",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23541.png",
		TeamID: 23,
	},
	{
		PlayerID: 23542,
		FirstName: "Malcolm",
		LastName: "Rodriguez",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23542.png",
		TeamID: 11,
	},
	{
		PlayerID: 23544,
		FirstName: "Jack",
		LastName: "Sanborn",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23544.png",
		TeamID: 6,
	},
	{
		PlayerID: 23545,
		FirstName: "Baylon",
		LastName: "Spector",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23545.png",
		TeamID: 4,
	},
	{
		PlayerID: 23546,
		FirstName: "Kalon",
		LastName: "Barnes",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23546.png",
		TeamID: 28,
	},
	{
		PlayerID: 23547,
		FirstName: "Markquese",
		LastName: "Bell",
		Team: "DAL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23547.png",
		TeamID: 9,
	},
	{
		PlayerID: 23548,
		FirstName: "Montaric",
		LastName: "Brown",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23548.png",
		TeamID: 15,
	},
	{
		PlayerID: 23549,
		FirstName: "Percy",
		LastName: "Butler",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23549.png",
		TeamID: 35,
	},
	{
		PlayerID: 23550,
		FirstName: "Tariq",
		LastName: "Castro-Fields",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23550.png",
		TeamID: 35,
	},
	{
		PlayerID: 23552,
		FirstName: "Cobie",
		LastName: "Durant",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23552.png",
		TeamID: 32,
	},
	{
		PlayerID: 23554,
		FirstName: "Kyler",
		LastName: "Gordon",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23554.png",
		TeamID: 6,
	},
	{
		PlayerID: 23557,
		FirstName: "Josh",
		LastName: "Jobe",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23557.png",
		TeamID: 26,
	},
	{
		PlayerID: 23558,
		FirstName: "Jack",
		LastName: "Jones",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23558.png",
		TeamID: 21,
	},
	{
		PlayerID: 23559,
		FirstName: "Quentin",
		LastName: "Lake",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23559.png",
		TeamID: 32,
	},
	{
		PlayerID: 23560,
		FirstName: "Chase",
		LastName: "Lucas",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23560.png",
		TeamID: 11,
	},
	{
		PlayerID: 23562,
		FirstName: "Delarrin",
		LastName: "Turner-Yell",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23562.png",
		TeamID: 10,
	},
	{
		PlayerID: 23563,
		FirstName: "Sam",
		LastName: "Webb",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23563.png",
		TeamID: 5,
	},
	{
		PlayerID: 23564,
		FirstName: "Damarion",
		LastName: "Williams",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23564.png",
		TeamID: 3,
	},
	{
		PlayerID: 23565,
		FirstName: "Cal",
		LastName: "Adomitis",
		Team: "CIN",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23565.png",
		TeamID: 7,
	},
	{
		PlayerID: 23566,
		FirstName: "Jake",
		LastName: "Camarda",
		Team: "TB",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23566.png",
		TeamID: 33,
	},
	{
		PlayerID: 23567,
		FirstName: "Cameron",
		LastName: "Dicker",
		Team: "LAC",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23567.png",
		TeamID: 29,
	},
	{
		PlayerID: 23568,
		FirstName: "Trenton",
		LastName: "Gill",
		Team: "CHI",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23568.png",
		TeamID: 6,
	},
	{
		PlayerID: 23570,
		FirstName: "Jordan",
		LastName: "Stout",
		Team: "BAL",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23570.png",
		TeamID: 3,
	},
	{
		PlayerID: 23573,
		FirstName: "Danny",
		LastName: "Gray",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23573.png",
		TeamID: 31,
	},
	{
		PlayerID: 23577,
		FirstName: "Kalia",
		LastName: "Davis",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23577.png",
		TeamID: 31,
	},
	{
		PlayerID: 23579,
		FirstName: "Tyrese",
		LastName: "Robinson",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23579.png",
		TeamID: 20,
	},
	{
		PlayerID: 23586,
		FirstName: "Julius",
		LastName: "Chestnut",
		Team: "TEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23586.png",
		TeamID: 34,
	},
	{
		PlayerID: 23587,
		FirstName: "Devon",
		LastName: "Allen",
		Team: "PHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23587.png",
		TeamID: 26,
	},
	{
		PlayerID: 23588,
		FirstName: "Roy",
		LastName: "Mbaeteka",
		Team: "CHI",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23588.png",
		TeamID: 6,
	},
	{
		PlayerID: 23590,
		FirstName: "Haggai",
		LastName: "Ndubuisi",
		Team: "DEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23590.png",
		TeamID: 10,
	},
	{
		PlayerID: 23595,
		FirstName: "Marcel",
		LastName: "Dabo",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23595.png",
		TeamID: 14,
	},
	{
		PlayerID: 23598,
		FirstName: "Russ",
		LastName: "Yeast",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23598.png",
		TeamID: 32,
	},
	{
		PlayerID: 23599,
		FirstName: "Reed",
		LastName: "Blankenship",
		Team: "PHI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23599.png",
		TeamID: 26,
	},
	{
		PlayerID: 23600,
		FirstName: "Joey",
		LastName: "Blount",
		Team: "ARI",
		Position: "FS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23600.png",
		TeamID: 1,
	},
	{
		PlayerID: 23602,
		FirstName: "Tristin",
		LastName: "McCollum",
		Team: "PHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23602.png",
		TeamID: 26,
	},
	{
		PlayerID: 23603,
		FirstName: "Eric",
		LastName: "Johnson II",
		Team: "IND",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23603.png",
		TeamID: 14,
	},
	{
		PlayerID: 23604,
		FirstName: "Montrell",
		LastName: "Washington",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23604.png",
		TeamID: 16,
	},
	{
		PlayerID: 23605,
		FirstName: "DaRon",
		LastName: "Bland",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23605.png",
		TeamID: 9,
	},
	{
		PlayerID: 23606,
		FirstName: "Samuel",
		LastName: "Womack III",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23606.png",
		TeamID: 31,
	},
	{
		PlayerID: 23607,
		FirstName: "Christian",
		LastName: "Benford",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23607.png",
		TeamID: 4,
	},
	{
		PlayerID: 23608,
		FirstName: "Drew",
		LastName: "Ogletree",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23608.png",
		TeamID: 14,
	},
	{
		PlayerID: 23609,
		FirstName: "Devin",
		LastName: "Harper",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23609.png",
		TeamID: 9,
	},
	{
		PlayerID: 23610,
		FirstName: "Sam",
		LastName: "Roberts",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23610.png",
		TeamID: 21,
	},
	{
		PlayerID: 23611,
		FirstName: "Theo",
		LastName: "Jackson",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23611.png",
		TeamID: 20,
	},
	{
		PlayerID: 23612,
		FirstName: "Matt",
		LastName: "Henningsen",
		Team: "DEN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23612.png",
		TeamID: 10,
	},
	{
		PlayerID: 23613,
		FirstName: "Doug",
		LastName: "Kramer",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23613.png",
		TeamID: 6,
	},
	{
		PlayerID: 23614,
		FirstName: "John",
		LastName: "FitzPatrick",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23614.png",
		TeamID: 2,
	},
	{
		PlayerID: 23615,
		FirstName: "Ja'Sir",
		LastName: "Taylor",
		Team: "LAC",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23615.png",
		TeamID: 29,
	},
	{
		PlayerID: 23616,
		FirstName: "Curtis",
		LastName: "Brooks",
		Team: "WAS",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23616.png",
		TeamID: 35,
	},
	{
		PlayerID: 23617,
		FirstName: "James",
		LastName: "Houston",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23617.png",
		TeamID: 11,
	},
	{
		PlayerID: 23618,
		FirstName: "Ko",
		LastName: "Kieft",
		Team: "TB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23618.png",
		TeamID: 33,
	},
	{
		PlayerID: 23619,
		FirstName: "Cameron",
		LastName: "Goode",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23619.png",
		TeamID: 19,
	},
	{
		PlayerID: 23620,
		FirstName: "Mark",
		LastName: "Robinson",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23620.png",
		TeamID: 28,
	},
	{
		PlayerID: 23621,
		FirstName: "Nick",
		LastName: "Muse",
		Team: "MIN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23621.png",
		TeamID: 20,
	},
	{
		PlayerID: 23622,
		FirstName: "Tariq",
		LastName: "Carpenter",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23622.png",
		TeamID: 28,
	},
	{
		PlayerID: 23623,
		FirstName: "Faion",
		LastName: "Hicks",
		Team: "NO",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23623.png",
		TeamID: 22,
	},
	{
		PlayerID: 23624,
		FirstName: "Dareke",
		LastName: "Young",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23624.png",
		TeamID: 30,
	},
	{
		PlayerID: 23625,
		FirstName: "Daniel",
		LastName: "Hardy",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23625.png",
		TeamID: 6,
	},
	{
		PlayerID: 23626,
		FirstName: "Deane",
		LastName: "Leonard",
		Team: "LAC",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23626.png",
		TeamID: 29,
	},
	{
		PlayerID: 23627,
		FirstName: "Rodney",
		LastName: "Thomas II",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23627.png",
		TeamID: 14,
	},
	{
		PlayerID: 23628,
		FirstName: "Christian",
		LastName: "Holmes",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23628.png",
		TeamID: 35,
	},
	{
		PlayerID: 23629,
		FirstName: "Chris",
		LastName: "Oladokun",
		Team: "KC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23629.png",
		TeamID: 16,
	},
	{
		PlayerID: 23630,
		FirstName: "Christian",
		LastName: "Matthew",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23630.png",
		TeamID: 1,
	},
	{
		PlayerID: 23632,
		FirstName: "Brittain",
		LastName: "Brown",
		Team: "LV",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23632.png",
		TeamID: 25,
	},
	{
		PlayerID: 23633,
		FirstName: "Elijah",
		LastName: "Hicks",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23633.png",
		TeamID: 6,
	},
	{
		PlayerID: 23634,
		FirstName: "Samori",
		LastName: "Toure",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23634.png",
		TeamID: 12,
	},
	{
		PlayerID: 23635,
		FirstName: "Nazeeh",
		LastName: "Johnson",
		Team: "KC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23635.png",
		TeamID: 16,
	},
	{
		PlayerID: 23636,
		FirstName: "Zander",
		LastName: "Horvath",
		Team: "PIT",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23636.png",
		TeamID: 28,
	},
	{
		PlayerID: 23637,
		FirstName: "AJ",
		LastName: "Arcuri",
		Team: "LAR",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23637.png",
		TeamID: 32,
	},
	{
		PlayerID: 23642,
		FirstName: "Jalen",
		LastName: "Virgil",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23642.png",
		TeamID: 10,
	},
	{
		PlayerID: 23643,
		FirstName: "Zach",
		LastName: "VanValkenburg",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23643.png",
		TeamID: 32,
	},
	{
		PlayerID: 23644,
		FirstName: "Stone",
		LastName: "Smartt",
		Team: "LAC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23644.png",
		TeamID: 29,
	},
	{
		PlayerID: 23646,
		FirstName: "Jake",
		LastName: "Hummel",
		Team: "LAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23646.png",
		TeamID: 32,
	},
	{
		PlayerID: 23650,
		FirstName: "Lucas",
		LastName: "Krull",
		Team: "DEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23650.png",
		TeamID: 10,
	},
	{
		PlayerID: 23654,
		FirstName: "Luiji",
		LastName: "Vilain",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23654.png",
		TeamID: 20,
	},
	{
		PlayerID: 23656,
		FirstName: "Josh",
		LastName: "Blackwell",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23656.png",
		TeamID: 6,
	},
	{
		PlayerID: 23657,
		FirstName: "Jason",
		LastName: "Poe",
		Team: "NYJ",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23657.png",
		TeamID: 24,
	},
	{
		PlayerID: 23658,
		FirstName: "Ryan",
		LastName: "Stonehouse",
		Team: "TEN",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23658.png",
		TeamID: 34,
	},
	{
		PlayerID: 23659,
		FirstName: "Tay",
		LastName: "Martin",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23659.png",
		TeamID: 31,
	},
	{
		PlayerID: 23660,
		FirstName: "Segun",
		LastName: "Olubi",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23660.png",
		TeamID: 14,
	},
	{
		PlayerID: 23661,
		FirstName: "Mike",
		LastName: "Brown",
		Team: "TEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23661.png",
		TeamID: 34,
	},
	{
		PlayerID: 23665,
		FirstName: "Jaylon",
		LastName: "Jones",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23665.png",
		TeamID: 6,
	},
	{
		PlayerID: 23666,
		FirstName: "Bryant",
		LastName: "Koback",
		Team: "PHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23666.png",
		TeamID: 26,
	},
	{
		PlayerID: 23671,
		FirstName: "Ryan",
		LastName: "Wright",
		Team: "MIN",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23671.png",
		TeamID: 20,
	},
	{
		PlayerID: 23675,
		FirstName: "Ryan",
		LastName: "Van Demark",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23675.png",
		TeamID: 4,
	},
	{
		PlayerID: 23677,
		FirstName: "Dallis",
		LastName: "Flowers",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23677.png",
		TeamID: 14,
	},
	{
		PlayerID: 23678,
		FirstName: "Cobi",
		LastName: "Francis",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23678.png",
		TeamID: 13,
	},
	{
		PlayerID: 23681,
		FirstName: "Darrell",
		LastName: "Baker Jr.",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23681.png",
		TeamID: 14,
	},
	{
		PlayerID: 23686,
		FirstName: "Kurt",
		LastName: "Hinish",
		Team: "HOU",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23686.png",
		TeamID: 13,
	},
	{
		PlayerID: 23687,
		FirstName: "Jack",
		LastName: "Cochrane",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23687.png",
		TeamID: 16,
	},
	{
		PlayerID: 23697,
		FirstName: "Devin",
		LastName: "Cochran",
		Team: "CIN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23697.png",
		TeamID: 7,
	},
	{
		PlayerID: 23704,
		FirstName: "Drew",
		LastName: "White",
		Team: "WAS",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23704.png",
		TeamID: 35,
	},
	{
		PlayerID: 23711,
		FirstName: "Rodney",
		LastName: "Williams",
		Team: "PIT",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23711.png",
		TeamID: 28,
	},
	{
		PlayerID: 23720,
		FirstName: "Zaire",
		LastName: "Mitchell-Paden",
		Team: "CLE",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23720.png",
		TeamID: 8,
	},
	{
		PlayerID: 23724,
		FirstName: "Matt",
		LastName: "Gotel",
		Team: "SEA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23724.png",
		TeamID: 30,
	},
	{
		PlayerID: 23725,
		FirstName: "Dennis",
		LastName: "Houston",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23725.png",
		TeamID: 23,
	},
	{
		PlayerID: 23726,
		FirstName: "Kader",
		LastName: "Kohou",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23726.png",
		TeamID: 19,
	},
	{
		PlayerID: 23729,
		FirstName: "Rashid",
		LastName: "Shaheed",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23729.png",
		TeamID: 22,
	},
	{
		PlayerID: 23732,
		FirstName: "John Parker",
		LastName: "Romo",
		Team: "CHI",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23732.png",
		TeamID: 6,
	},
	{
		PlayerID: 23737,
		FirstName: "Tanner",
		LastName: "Conner",
		Team: "MIA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23737.png",
		TeamID: 19,
	},
	{
		PlayerID: 23738,
		FirstName: "Lewis",
		LastName: "Kidd",
		Team: "IND",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23738.png",
		TeamID: 14,
	},
	{
		PlayerID: 23739,
		FirstName: "Ben",
		LastName: "Stille",
		Team: "ARI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23739.png",
		TeamID: 1,
	},
	{
		PlayerID: 23745,
		FirstName: "Tyler",
		LastName: "Vrabel",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23745.png",
		TeamID: 2,
	},
	{
		PlayerID: 23746,
		FirstName: "Deven",
		LastName: "Thompkins",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23746.png",
		TeamID: 33,
	},
	{
		PlayerID: 23747,
		FirstName: "Kana'i",
		LastName: "Mauga",
		Team: "LV",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23747.png",
		TeamID: 25,
	},
	{
		PlayerID: 23750,
		FirstName: "Raheem",
		LastName: "Layne",
		Team: "LAC",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23750.png",
		TeamID: 29,
	},
	{
		PlayerID: 23751,
		FirstName: "Tyreek",
		LastName: "Maddox-Williams",
		Team: "ARI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23751.png",
		TeamID: 1,
	},
	{
		PlayerID: 23754,
		FirstName: "Andrew",
		LastName: "Trainer",
		Team: "LAC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23754.png",
		TeamID: 29,
	},
	{
		PlayerID: 23763,
		FirstName: "Brandon",
		LastName: "Johnson",
		Team: "DEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23763.png",
		TeamID: 10,
	},
	{
		PlayerID: 23768,
		FirstName: "Daniel",
		LastName: "Whelan",
		Team: "GB",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23768.png",
		TeamID: 12,
	},
	{
		PlayerID: 23774,
		FirstName: "Derek",
		LastName: "Wright",
		Team: "CAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23774.png",
		TeamID: 5,
	},
	{
		PlayerID: 23776,
		FirstName: "Arron",
		LastName: "Mosby",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23776.png",
		TeamID: 12,
	},
	{
		PlayerID: 23777,
		FirstName: "Chandler",
		LastName: "Wooten",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23777.png",
		TeamID: 5,
	},
	{
		PlayerID: 23784,
		FirstName: "Josh",
		LastName: "Ross",
		Team: "BAL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23784.png",
		TeamID: 3,
	},
	{
		PlayerID: 23786,
		FirstName: "J.J.",
		LastName: "Russell",
		Team: "TB",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23786.png",
		TeamID: 33,
	},
	{
		PlayerID: 23787,
		FirstName: "Dylan",
		LastName: "Cook",
		Team: "PIT",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23787.png",
		TeamID: 28,
	},
	{
		PlayerID: 23810,
		FirstName: "Ty",
		LastName: "Shelby",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23810.png",
		TeamID: 29,
	},
	{
		PlayerID: 23817,
		FirstName: "Trevor",
		LastName: "Denbow",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23817.png",
		TeamID: 14,
	},
	{
		PlayerID: 23824,
		FirstName: "Josh",
		LastName: "Sills",
		Team: "IND",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23824.png",
		TeamID: 14,
	},
	{
		PlayerID: 23831,
		FirstName: "Christopher",
		LastName: "Hinton",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23831.png",
		TeamID: 29,
	},
	{
		PlayerID: 23838,
		FirstName: "Daylen",
		LastName: "Baldwin",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23838.png",
		TeamID: 8,
	},
	{
		PlayerID: 23844,
		FirstName: "Gerrit",
		LastName: "Prince",
		Team: "KC",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23844.png",
		TeamID: 16,
	},
	{
		PlayerID: 23846,
		FirstName: "De'Shaan",
		LastName: "Dixon",
		Team: "JAX",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23846.png",
		TeamID: 15,
	},
	{
		PlayerID: 23847,
		FirstName: "Zonovan",
		LastName: "Knight",
		Team: "DET",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23847.png",
		TeamID: 11,
	},
	{
		PlayerID: 23849,
		FirstName: "Caleb",
		LastName: "Jones",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23849.png",
		TeamID: 12,
	},
	{
		PlayerID: 23860,
		FirstName: "Matt",
		LastName: "Hankins",
		Team: "LAC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23860.png",
		TeamID: 29,
	},
	{
		PlayerID: 23861,
		FirstName: "Timmy",
		LastName: "Horne",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23861.png",
		TeamID: 2,
	},
	{
		PlayerID: 23863,
		FirstName: "Leroy",
		LastName: "Watson",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23863.png",
		TeamID: 31,
	},
	{
		PlayerID: 23867,
		FirstName: "Armani",
		LastName: "Rogers",
		Team: "WAS",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23867.png",
		TeamID: 35,
	},
	{
		PlayerID: 23870,
		FirstName: "Qwuantrezz",
		LastName: "Knight",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23870.png",
		TeamID: 1,
	},
	{
		PlayerID: 23871,
		FirstName: "Marcelino",
		LastName: "McCrary-Ball",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23871.png",
		TeamID: 24,
	},
	{
		PlayerID: 23880,
		FirstName: "Malik",
		LastName: "Davis",
		Team: "DAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23880.png",
		TeamID: 9,
	},
	{
		PlayerID: 23887,
		FirstName: "Ayo",
		LastName: "Oyelola",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23887.png",
		TeamID: 15,
	},
	{
		PlayerID: 23888,
		FirstName: "Adedayo",
		LastName: "Odeleye",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23888.png",
		TeamID: 13,
	},
	{
		PlayerID: 23889,
		FirstName: "Thomas",
		LastName: "Odukoya",
		Team: "TEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23889.png",
		TeamID: 34,
	},
	{
		PlayerID: 23894,
		FirstName: "Rayshad",
		LastName: "Nichols",
		Team: "BAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23894.png",
		TeamID: 3,
	},
	{
		PlayerID: 23896,
		FirstName: "Kingsley",
		LastName: "Jonathan",
		Team: "BUF",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23896.png",
		TeamID: 4,
	},
	{
		PlayerID: 23909,
		FirstName: "Kwamie",
		LastName: "Lassiter II",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23909.png",
		TeamID: 7,
	},
	{
		PlayerID: 23910,
		FirstName: "D'Anthony",
		LastName: "Bell",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23910.png",
		TeamID: 8,
	},
	{
		PlayerID: 23917,
		FirstName: "Kaden",
		LastName: "Davis",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23917.png",
		TeamID: 1,
	},
	{
		PlayerID: 23918,
		FirstName: "Sebastian",
		LastName: "Gutierrez",
		Team: "LV",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23918.png",
		TeamID: 25,
	},
	{
		PlayerID: 23919,
		FirstName: "Michael",
		LastName: "Niese",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23919.png",
		TeamID: 11,
	},
	{
		PlayerID: 23921,
		FirstName: "Kevin",
		LastName: "Jarvis",
		Team: "BUF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23921.png",
		TeamID: 4,
	},
	{
		PlayerID: 23923,
		FirstName: "Wesley",
		LastName: "French",
		Team: "IND",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23923.png",
		TeamID: 14,
	},
	{
		PlayerID: 23926,
		FirstName: "Mike",
		LastName: "Caliendo",
		Team: "KC",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23926.png",
		TeamID: 16,
	},
	{
		PlayerID: 23932,
		FirstName: "Luke",
		LastName: "Masterson",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23932.png",
		TeamID: 25,
	},
	{
		PlayerID: 23934,
		FirstName: "Isaiah",
		LastName: "Pola-Mao",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23934.png",
		TeamID: 25,
	},
	{
		PlayerID: 23939,
		FirstName: "Brenden",
		LastName: "Schooler",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23939.png",
		TeamID: 21,
	},
	{
		PlayerID: 23948,
		FirstName: "Elijah",
		LastName: "Garcia",
		Team: "DEN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23948.png",
		TeamID: 10,
	},
	{
		PlayerID: 23954,
		FirstName: "Keir",
		LastName: "Thomas",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23954.png",
		TeamID: 32,
	},
	{
		PlayerID: 23955,
		FirstName: "Benton",
		LastName: "Whitley",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23955.png",
		TeamID: 20,
	},
	{
		PlayerID: 23958,
		FirstName: "Kody",
		LastName: "Russey",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23958.png",
		TeamID: 21,
	},
	{
		PlayerID: 23960,
		FirstName: "Tony",
		LastName: "Adams",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23960.png",
		TeamID: 24,
	},
	{
		PlayerID: 23961,
		FirstName: "C.J.",
		LastName: "Brewer",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23961.png",
		TeamID: 33,
	},
	{
		PlayerID: 23962,
		FirstName: "Irvin",
		LastName: "Charles",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23962.png",
		TeamID: 24,
	},
	{
		PlayerID: 23966,
		FirstName: "Lance",
		LastName: "McCutcheon",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23966.png",
		TeamID: 13,
	},
	{
		PlayerID: 23970,
		FirstName: "Joshua",
		LastName: "Onujiogu",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23970.png",
		TeamID: 30,
	},
	{
		PlayerID: 23978,
		FirstName: "Raleigh",
		LastName: "Webb",
		Team: "MIA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23978.png",
		TeamID: 19,
	},
	{
		PlayerID: 23982,
		FirstName: "A.J.",
		LastName: "Thomas",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23982.png",
		TeamID: 6,
	},
	{
		PlayerID: 23988,
		FirstName: "Chris",
		LastName: "Glaser",
		Team: "NYJ",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23988.png",
		TeamID: 24,
	},
	{
		PlayerID: 23994,
		FirstName: "Allan",
		LastName: "George",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23994.png",
		TeamID: 7,
	},
	{
		PlayerID: 24000,
		FirstName: "Tomon",
		LastName: "Fox",
		Team: "NYG",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24000.png",
		TeamID: 23,
	},
	{
		PlayerID: 24001,
		FirstName: "Tre",
		LastName: "Avery",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24001.png",
		TeamID: 34,
	},
	{
		PlayerID: 24003,
		FirstName: "Jack",
		LastName: "Gibbens",
		Team: "TEN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24003.png",
		TeamID: 34,
	},
	{
		PlayerID: 24004,
		FirstName: "Hayden",
		LastName: "Howerton",
		Team: "ARI",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24004.png",
		TeamID: 1,
	},
	{
		PlayerID: 24006,
		FirstName: "Xavier",
		LastName: "Newman",
		Team: "TEN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24006.png",
		TeamID: 34,
	},
	{
		PlayerID: 24008,
		FirstName: "Troy",
		LastName: "Hairston",
		Team: "HOU",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24008.png",
		TeamID: 13,
	},
	{
		PlayerID: 24011,
		FirstName: "Ryder",
		LastName: "Anderson",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24011.png",
		TeamID: 23,
	},
	{
		PlayerID: 24021,
		FirstName: "Tucker",
		LastName: "Fisk",
		Team: "ATL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24021.png",
		TeamID: 2,
	},
	{
		PlayerID: 24031,
		FirstName: "Mike",
		LastName: "Greene",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24031.png",
		TeamID: 33,
	},
	{
		PlayerID: 24034,
		FirstName: "Ja'Marcus",
		LastName: "Ingram",
		Team: "BUF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24034.png",
		TeamID: 4,
	},
	{
		PlayerID: 24046,
		FirstName: "Trenton",
		LastName: "Thompson",
		Team: "PIT",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24046.png",
		TeamID: 28,
	},
	{
		PlayerID: 24063,
		FirstName: "Jeremiah",
		LastName: "Pharms Jr.",
		Team: "NE",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24063.png",
		TeamID: 21,
	},
	{
		PlayerID: 24068,
		FirstName: "KaVontae",
		LastName: "Turpin",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24068.png",
		TeamID: 9,
	},
	{
		PlayerID: 24069,
		FirstName: "Alex",
		LastName: "Akingbulu",
		Team: "WAS",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24069.png",
		TeamID: 35,
	},
	{
		PlayerID: 24073,
		FirstName: "Maurice",
		LastName: "Alexander",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24073.png",
		TeamID: 11,
	},
	{
		PlayerID: 24076,
		FirstName: "Josh",
		LastName: "Ali",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24076.png",
		TeamID: 2,
	},
	{
		PlayerID: 24079,
		FirstName: "Lucas",
		LastName: "Havrisik",
		Team: "CLE",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24079.png",
		TeamID: 8,
	},
	{
		PlayerID: 24082,
		FirstName: "Zacch",
		LastName: "Pickens",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24082.png",
		TeamID: 6,
	},
	{
		PlayerID: 24083,
		FirstName: "Tyree",
		LastName: "Wilson",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24083.png",
		TeamID: 25,
	},
	{
		PlayerID: 24085,
		FirstName: "Tuli",
		LastName: "Tuipulotu",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24085.png",
		TeamID: 29,
	},
	{
		PlayerID: 24086,
		FirstName: "Trenton",
		LastName: "Simpson",
		Team: "BAL",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24086.png",
		TeamID: 3,
	},
	{
		PlayerID: 24087,
		FirstName: "Will",
		LastName: "Anderson Jr.",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24087.png",
		TeamID: 13,
	},
	{
		PlayerID: 24088,
		FirstName: "Ali",
		LastName: "Gaye",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24088.png",
		TeamID: 13,
	},
	{
		PlayerID: 24090,
		FirstName: "Andre",
		LastName: "Carter II",
		Team: "MIN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24090.png",
		TeamID: 20,
	},
	{
		PlayerID: 24091,
		FirstName: "Antonio",
		LastName: "Johnson",
		Team: "JAX",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24091.png",
		TeamID: 15,
	},
	{
		PlayerID: 24092,
		FirstName: "BJ",
		LastName: "Ojulari",
		Team: "ARI",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24092.png",
		TeamID: 1,
	},
	{
		PlayerID: 24093,
		FirstName: "Blake",
		LastName: "Freeland",
		Team: "IND",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24093.png",
		TeamID: 14,
	},
	{
		PlayerID: 24094,
		FirstName: "Brandon",
		LastName: "Joseph",
		Team: "DET",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24094.png",
		TeamID: 11,
	},
	{
		PlayerID: 24095,
		FirstName: "Broderick",
		LastName: "Jones",
		Team: "PIT",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24095.png",
		TeamID: 28,
	},
	{
		PlayerID: 24097,
		FirstName: "Christian",
		LastName: "Gonzalez",
		Team: "NE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24097.png",
		TeamID: 21,
	},
	{
		PlayerID: 24099,
		FirstName: "Clark",
		LastName: "Phillips III",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24099.png",
		TeamID: 2,
	},
	{
		PlayerID: 24100,
		FirstName: "Siaki",
		LastName: "Ika",
		Team: "CLE",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24100.png",
		TeamID: 8,
	},
	{
		PlayerID: 24101,
		FirstName: "Colby",
		LastName: "Wooden",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24101.png",
		TeamID: 12,
	},
	{
		PlayerID: 24102,
		FirstName: "Dalton",
		LastName: "Kincaid",
		Team: "BUF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24102.png",
		TeamID: 4,
	},
	{
		PlayerID: 24103,
		FirstName: "Dawand",
		LastName: "Jones",
		Team: "CLE",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24103.png",
		TeamID: 8,
	},
	{
		PlayerID: 24105,
		FirstName: "T.J.",
		LastName: "Bass",
		Team: "DAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24105.png",
		TeamID: 9,
	},
	{
		PlayerID: 24106,
		FirstName: "DJ",
		LastName: "Turner II",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24106.png",
		TeamID: 7,
	},
	{
		PlayerID: 24107,
		FirstName: "Eli",
		LastName: "Ricks",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24107.png",
		TeamID: 26,
	},
	{
		PlayerID: 24108,
		FirstName: "Emmanuel",
		LastName: "Forbes Jr.",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24108.png",
		TeamID: 35,
	},
	{
		PlayerID: 24109,
		FirstName: "Felix",
		LastName: "Anudike-Uzomah",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24109.png",
		TeamID: 16,
	},
	{
		PlayerID: 24110,
		FirstName: "Garrett",
		LastName: "Williams",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24110.png",
		TeamID: 1,
	},
	{
		PlayerID: 24111,
		FirstName: "Gervon",
		LastName: "Dexter Sr.",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24111.png",
		TeamID: 6,
	},
	{
		PlayerID: 24112,
		FirstName: "Henry",
		LastName: "To'oto'o",
		Team: "HOU",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24112.png",
		TeamID: 13,
	},
	{
		PlayerID: 24113,
		FirstName: "Jack",
		LastName: "Campbell",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24113.png",
		TeamID: 11,
	},
	{
		PlayerID: 24114,
		FirstName: "Jalen",
		LastName: "Carter",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24114.png",
		TeamID: 26,
	},
	{
		PlayerID: 24117,
		FirstName: "Anthony",
		LastName: "Richardson",
		Team: "IND",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24117.png",
		TeamID: 14,
	},
	{
		PlayerID: 24118,
		FirstName: "Tucker",
		LastName: "Kraft",
		Team: "GB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24118.png",
		TeamID: 12,
	},
	{
		PlayerID: 24119,
		FirstName: "Andrei",
		LastName: "Iosivas",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24119.png",
		TeamID: 7,
	},
	{
		PlayerID: 24120,
		FirstName: "Rashee",
		LastName: "Rice",
		Team: "KC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24120.png",
		TeamID: 16,
	},
	{
		PlayerID: 24121,
		FirstName: "Derius",
		LastName: "Davis",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24121.png",
		TeamID: 29,
	},
	{
		PlayerID: 24122,
		FirstName: "Charlie",
		LastName: "Jones",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24122.png",
		TeamID: 7,
	},
	{
		PlayerID: 24123,
		FirstName: "Tyjae",
		LastName: "Spears",
		Team: "TEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24123.png",
		TeamID: 34,
	},
	{
		PlayerID: 24124,
		FirstName: "Tanner",
		LastName: "McKee",
		Team: "PHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24124.png",
		TeamID: 26,
	},
	{
		PlayerID: 24125,
		FirstName: "Jalin",
		LastName: "Hyatt",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24125.png",
		TeamID: 23,
	},
	{
		PlayerID: 24126,
		FirstName: "Joey",
		LastName: "Porter Jr.",
		Team: "PIT",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24126.png",
		TeamID: 28,
	},
	{
		PlayerID: 24128,
		FirstName: "Peter",
		LastName: "Skoronski",
		Team: "TEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24128.png",
		TeamID: 34,
	},
	{
		PlayerID: 24130,
		FirstName: "Paris",
		LastName: "Johnson Jr.",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24130.png",
		TeamID: 1,
	},
	{
		PlayerID: 24131,
		FirstName: "Noah",
		LastName: "Sewell",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24131.png",
		TeamID: 6,
	},
	{
		PlayerID: 24132,
		FirstName: "Myles",
		LastName: "Murphy",
		Team: "CIN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24132.png",
		TeamID: 7,
	},
	{
		PlayerID: 24133,
		FirstName: "Nick",
		LastName: "Broeker",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24133.png",
		TeamID: 13,
	},
	{
		PlayerID: 24135,
		FirstName: "Kelee",
		LastName: "Ringo",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24135.png",
		TeamID: 26,
	},
	{
		PlayerID: 24136,
		FirstName: "Jarrett",
		LastName: "Patterson",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24136.png",
		TeamID: 13,
	},
	{
		PlayerID: 24137,
		FirstName: "Jaquelin",
		LastName: "Roy",
		Team: "MIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24137.png",
		TeamID: 20,
	},
	{
		PlayerID: 24138,
		FirstName: "Jammie",
		LastName: "Robinson",
		Team: "CAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24138.png",
		TeamID: 5,
	},
	{
		PlayerID: 24140,
		FirstName: "Hendon",
		LastName: "Hooker",
		Team: "DET",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24140.png",
		TeamID: 11,
	},
	{
		PlayerID: 24143,
		FirstName: "Parker",
		LastName: "Washington",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24143.png",
		TeamID: 15,
	},
	{
		PlayerID: 24144,
		FirstName: "Bryan",
		LastName: "Bresee",
		Team: "NO",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24144.png",
		TeamID: 22,
	},
	{
		PlayerID: 24145,
		FirstName: "Josh",
		LastName: "Downs",
		Team: "IND",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24145.png",
		TeamID: 14,
	},
	{
		PlayerID: 24146,
		FirstName: "Mazi",
		LastName: "Smith",
		Team: "DAL",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24146.png",
		TeamID: 9,
	},
	{
		PlayerID: 24148,
		FirstName: "Davis",
		LastName: "Allen",
		Team: "LAR",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24148.png",
		TeamID: 32,
	},
	{
		PlayerID: 24149,
		FirstName: "Brayden",
		LastName: "Willis",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24149.png",
		TeamID: 31,
	},
	{
		PlayerID: 24150,
		FirstName: "Luke",
		LastName: "Musgrave",
		Team: "GB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24150.png",
		TeamID: 12,
	},
	{
		PlayerID: 24151,
		FirstName: "Payne",
		LastName: "Durham",
		Team: "TB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24151.png",
		TeamID: 33,
	},
	{
		PlayerID: 24153,
		FirstName: "Tyler",
		LastName: "Steen",
		Team: "PHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24153.png",
		TeamID: 26,
	},
	{
		PlayerID: 24154,
		FirstName: "Richard",
		LastName: "Gouraige",
		Team: "BUF",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24154.png",
		TeamID: 4,
	},
	{
		PlayerID: 24155,
		FirstName: "O'Cyrus",
		LastName: "Torrence",
		Team: "BUF",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24155.png",
		TeamID: 4,
	},
	{
		PlayerID: 24156,
		FirstName: "Ryan",
		LastName: "Hayes",
		Team: "MIA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24156.png",
		TeamID: 19,
	},
	{
		PlayerID: 24157,
		FirstName: "Olu",
		LastName: "Oluwatimi",
		Team: "SEA",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24157.png",
		TeamID: 30,
	},
	{
		PlayerID: 24158,
		FirstName: "John Michael",
		LastName: "Schmitz Jr.",
		Team: "NYG",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24158.png",
		TeamID: 23,
	},
	{
		PlayerID: 24159,
		FirstName: "Cody",
		LastName: "Mauch",
		Team: "TB",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24159.png",
		TeamID: 33,
	},
	{
		PlayerID: 24160,
		FirstName: "Wanya",
		LastName: "Morris",
		Team: "KC",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24160.png",
		TeamID: 16,
	},
	{
		PlayerID: 24161,
		FirstName: "Nick",
		LastName: "Saldiveri",
		Team: "NO",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24161.png",
		TeamID: 22,
	},
	{
		PlayerID: 24162,
		FirstName: "Alex",
		LastName: "Forsyth",
		Team: "DEN",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24162.png",
		TeamID: 10,
	},
	{
		PlayerID: 24163,
		FirstName: "Matthew",
		LastName: "Bergeron",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24163.png",
		TeamID: 2,
	},
	{
		PlayerID: 24164,
		FirstName: "Steve",
		LastName: "Avila",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24164.png",
		TeamID: 32,
	},
	{
		PlayerID: 24165,
		FirstName: "Darnell",
		LastName: "Wright",
		Team: "CHI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24165.png",
		TeamID: 6,
	},
	{
		PlayerID: 24166,
		FirstName: "McClendon",
		LastName: "Curtis",
		Team: "SEA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24166.png",
		TeamID: 30,
	},
	{
		PlayerID: 24167,
		FirstName: "Asim",
		LastName: "Richards",
		Team: "DAL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24167.png",
		TeamID: 9,
	},
	{
		PlayerID: 24168,
		FirstName: "Tyson",
		LastName: "Bagent",
		Team: "CHI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24168.png",
		TeamID: 6,
	},
	{
		PlayerID: 24169,
		FirstName: "Jake",
		LastName: "Andrews",
		Team: "NE",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24169.png",
		TeamID: 21,
	},
	{
		PlayerID: 24170,
		FirstName: "Clayton",
		LastName: "Tune",
		Team: "ARI",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24170.png",
		TeamID: 1,
	},
	{
		PlayerID: 24171,
		FirstName: "Jaren",
		LastName: "Hall",
		Team: "MIN",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24171.png",
		TeamID: 20,
	},
	{
		PlayerID: 24172,
		FirstName: "Puka",
		LastName: "Nacua",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24172.png",
		TeamID: 32,
	},
	{
		PlayerID: 24173,
		FirstName: "Michael",
		LastName: "Wilson",
		Team: "ARI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24173.png",
		TeamID: 1,
	},
	{
		PlayerID: 24175,
		FirstName: "Max",
		LastName: "Duggan",
		Team: "LAC",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24175.png",
		TeamID: 29,
	},
	{
		PlayerID: 24176,
		FirstName: "Tank",
		LastName: "Dell",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24176.png",
		TeamID: 13,
	},
	{
		PlayerID: 24177,
		FirstName: "Tre",
		LastName: "Tucker",
		Team: "LV",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24177.png",
		TeamID: 25,
	},
	{
		PlayerID: 24178,
		FirstName: "Israel",
		LastName: "Abanikanda",
		Team: "NYJ",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24178.png",
		TeamID: 24,
	},
	{
		PlayerID: 24179,
		FirstName: "De'Von",
		LastName: "Achane",
		Team: "MIA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24179.png",
		TeamID: 19,
	},
	{
		PlayerID: 24180,
		FirstName: "Demario",
		LastName: "Douglas",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24180.png",
		TeamID: 21,
	},
	{
		PlayerID: 24182,
		FirstName: "Alex",
		LastName: "Austin",
		Team: "HOU",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24182.png",
		TeamID: 13,
	},
	{
		PlayerID: 24183,
		FirstName: "Deonte",
		LastName: "Banks",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24183.png",
		TeamID: 23,
	},
	{
		PlayerID: 24184,
		FirstName: "Devon",
		LastName: "Witherspoon",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24184.png",
		TeamID: 30,
	},
	{
		PlayerID: 24185,
		FirstName: "Anthony",
		LastName: "Bradford",
		Team: "SEA",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24185.png",
		TeamID: 30,
	},
	{
		PlayerID: 24186,
		FirstName: "Brian",
		LastName: "Branch",
		Team: "DET",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24186.png",
		TeamID: 11,
	},
	{
		PlayerID: 24188,
		FirstName: "Deuce",
		LastName: "Vaughn",
		Team: "DAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24188.png",
		TeamID: 9,
	},
	{
		PlayerID: 24189,
		FirstName: "Kei'Trel",
		LastName: "Clark",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24189.png",
		TeamID: 1,
	},
	{
		PlayerID: 24191,
		FirstName: "Lukas",
		LastName: "Van Ness",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24191.png",
		TeamID: 12,
	},
	{
		PlayerID: 24192,
		FirstName: "Carrington",
		LastName: "Valentine",
		Team: "GB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24192.png",
		TeamID: 12,
	},
	{
		PlayerID: 24194,
		FirstName: "Sean",
		LastName: "Tucker",
		Team: "TB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24194.png",
		TeamID: 33,
	},
	{
		PlayerID: 24196,
		FirstName: "Joe",
		LastName: "Tippmann",
		Team: "NYJ",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24196.png",
		TeamID: 24,
	},
	{
		PlayerID: 24199,
		FirstName: "Bryce",
		LastName: "Ford-Wheaton",
		Team: "NYG",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24199.png",
		TeamID: 23,
	},
	{
		PlayerID: 24200,
		FirstName: "Anton",
		LastName: "Harrison",
		Team: "JAX",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24200.png",
		TeamID: 15,
	},
	{
		PlayerID: 24201,
		FirstName: "Nick",
		LastName: "Herbig",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24201.png",
		TeamID: 28,
	},
	{
		PlayerID: 24202,
		FirstName: "Ronnie",
		LastName: "Hickman",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24202.png",
		TeamID: 8,
	},
	{
		PlayerID: 24203,
		FirstName: "Brandon",
		LastName: "Hill",
		Team: "HOU",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24203.png",
		TeamID: 13,
	},
	{
		PlayerID: 24204,
		FirstName: "Evan",
		LastName: "Hull",
		Team: "IND",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24204.png",
		TeamID: 14,
	},
	{
		PlayerID: 24208,
		FirstName: "Jaylon",
		LastName: "Jones",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24208.png",
		TeamID: 14,
	},
	{
		PlayerID: 24209,
		FirstName: "Calijah",
		LastName: "Kancey",
		Team: "TB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24209.png",
		TeamID: 33,
	},
	{
		PlayerID: 24210,
		FirstName: "Kyu",
		LastName: "Kelly",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24210.png",
		TeamID: 30,
	},
	{
		PlayerID: 24211,
		FirstName: "Zack",
		LastName: "Kuntz",
		Team: "NYJ",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24211.png",
		TeamID: 24,
	},
	{
		PlayerID: 24212,
		FirstName: "DeWayne",
		LastName: "McBride",
		Team: "MIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24212.png",
		TeamID: 20,
	},
	{
		PlayerID: 24213,
		FirstName: "Cameron",
		LastName: "Mitchell",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24213.png",
		TeamID: 8,
	},
	{
		PlayerID: 24214,
		FirstName: "Keaton",
		LastName: "Mitchell",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24214.png",
		TeamID: 3,
	},
	{
		PlayerID: 24216,
		FirstName: "Luke",
		LastName: "Wypler",
		Team: "CLE",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24216.png",
		TeamID: 8,
	},
	{
		PlayerID: 24217,
		FirstName: "Trey",
		LastName: "Palmer",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24217.png",
		TeamID: 33,
	},
	{
		PlayerID: 24218,
		FirstName: "Lonnie",
		LastName: "Phelps",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24218.png",
		TeamID: 8,
	},
	{
		PlayerID: 24219,
		FirstName: "Drew",
		LastName: "Sanders",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24219.png",
		TeamID: 10,
	},
	{
		PlayerID: 24220,
		FirstName: "Tyler",
		LastName: "Scott",
		Team: "CHI",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24220.png",
		TeamID: 6,
	},
	{
		PlayerID: 24221,
		FirstName: "Justin",
		LastName: "Shorter",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24221.png",
		TeamID: 4,
	},
	{
		PlayerID: 24222,
		FirstName: "Cam",
		LastName: "Smith",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24222.png",
		TeamID: 19,
	},
	{
		PlayerID: 24223,
		FirstName: "Brenton",
		LastName: "Strange",
		Team: "JAX",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24223.png",
		TeamID: 15,
	},
	{
		PlayerID: 24224,
		FirstName: "Drake",
		LastName: "Thomas",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24224.png",
		TeamID: 30,
	},
	{
		PlayerID: 24225,
		FirstName: "Nathan",
		LastName: "Rourke",
		Team: "JAX",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24225.png",
		TeamID: 15,
	},
	{
		PlayerID: 24226,
		FirstName: "Quentin",
		LastName: "Johnston",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24226.png",
		TeamID: 29,
	},
	{
		PlayerID: 24227,
		FirstName: "DeMarcco",
		LastName: "Hellams",
		Team: "ATL",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24227.png",
		TeamID: 2,
	},
	{
		PlayerID: 24228,
		FirstName: "JL",
		LastName: "Skinner",
		Team: "DEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24228.png",
		TeamID: 10,
	},
	{
		PlayerID: 24229,
		FirstName: "Daniel",
		LastName: "Scott",
		Team: "IND",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24229.png",
		TeamID: 14,
	},
	{
		PlayerID: 24230,
		FirstName: "Sydney",
		LastName: "Brown",
		Team: "PHI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24230.png",
		TeamID: 26,
	},
	{
		PlayerID: 24231,
		FirstName: "Kaevon",
		LastName: "Merriweather",
		Team: "TB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24231.png",
		TeamID: 33,
	},
	{
		PlayerID: 24232,
		FirstName: "Jay",
		LastName: "Ward",
		Team: "MIN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24232.png",
		TeamID: 20,
	},
	{
		PlayerID: 24233,
		FirstName: "Ji'ayir",
		LastName: "Brown",
		Team: "SF",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24233.png",
		TeamID: 31,
	},
	{
		PlayerID: 24234,
		FirstName: "Mitchell",
		LastName: "Agude",
		Team: "DET",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24234.png",
		TeamID: 11,
	},
	{
		PlayerID: 24235,
		FirstName: "Jovaughn",
		LastName: "Gwyn",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24235.png",
		TeamID: 2,
	},
	{
		PlayerID: 24236,
		FirstName: "Isaiah",
		LastName: "Foskey",
		Team: "NO",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24236.png",
		TeamID: 22,
	},
	{
		PlayerID: 24237,
		FirstName: "Warren",
		LastName: "McClendon Jr.",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24237.png",
		TeamID: 32,
	},
	{
		PlayerID: 24238,
		FirstName: "Kendre",
		LastName: "Miller",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24238.png",
		TeamID: 22,
	},
	{
		PlayerID: 24239,
		FirstName: "Tyrique",
		LastName: "Stevenson",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24239.png",
		TeamID: 6,
	},
	{
		PlayerID: 24241,
		FirstName: "Chamarri",
		LastName: "Conner",
		Team: "KC",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24241.png",
		TeamID: 16,
	},
	{
		PlayerID: 24242,
		FirstName: "JuJu",
		LastName: "Brents",
		Team: "IND",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24242.png",
		TeamID: 14,
	},
	{
		PlayerID: 24243,
		FirstName: "Jakorian",
		LastName: "Bennett",
		Team: "LV",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24243.png",
		TeamID: 25,
	},
	{
		PlayerID: 24245,
		FirstName: "Darrell",
		LastName: "Luter Jr.",
		Team: "SF",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24245.png",
		TeamID: 31,
	},
	{
		PlayerID: 24246,
		FirstName: "Darius",
		LastName: "Rush",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24246.png",
		TeamID: 16,
	},
	{
		PlayerID: 24247,
		FirstName: "Jartavius",
		LastName: "Martin",
		Team: "WAS",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24247.png",
		TeamID: 35,
	},
	{
		PlayerID: 24248,
		FirstName: "Byron",
		LastName: "Young",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24248.png",
		TeamID: 25,
	},
	{
		PlayerID: 24249,
		FirstName: "Derick",
		LastName: "Hall",
		Team: "SEA",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24249.png",
		TeamID: 30,
	},
	{
		PlayerID: 24250,
		FirstName: "Thomas",
		LastName: "Incoom",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24250.png",
		TeamID: 10,
	},
	{
		PlayerID: 24251,
		FirstName: "KJ",
		LastName: "Henry",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24251.png",
		TeamID: 35,
	},
	{
		PlayerID: 24252,
		FirstName: "Isaiah",
		LastName: "McGuire",
		Team: "CLE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24252.png",
		TeamID: 8,
	},
	{
		PlayerID: 24253,
		FirstName: "Byron",
		LastName: "Young",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24253.png",
		TeamID: 32,
	},
	{
		PlayerID: 24255,
		FirstName: "Jerrod",
		LastName: "Clark",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24255.png",
		TeamID: 29,
	},
	{
		PlayerID: 24256,
		FirstName: "Keion",
		LastName: "White",
		Team: "NE",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24256.png",
		TeamID: 21,
	},
	{
		PlayerID: 24257,
		FirstName: "Cameron",
		LastName: "Young",
		Team: "SEA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24257.png",
		TeamID: 30,
	},
	{
		PlayerID: 24258,
		FirstName: "Adetomiwa",
		LastName: "Adebawore",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24258.png",
		TeamID: 14,
	},
	{
		PlayerID: 24259,
		FirstName: "Cam",
		LastName: "Jones",
		Team: "KC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24259.png",
		TeamID: 16,
	},
	{
		PlayerID: 24261,
		FirstName: "Dorian",
		LastName: "Williams",
		Team: "BUF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24261.png",
		TeamID: 4,
	},
	{
		PlayerID: 24262,
		FirstName: "Daiyan",
		LastName: "Henley",
		Team: "LAC",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24262.png",
		TeamID: 29,
	},
	{
		PlayerID: 24263,
		FirstName: "DeMarvion",
		LastName: "Overshown",
		Team: "DAL",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24263.png",
		TeamID: 9,
	},
	{
		PlayerID: 24264,
		FirstName: "Isaiah",
		LastName: "Land",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24264.png",
		TeamID: 14,
	},
	{
		PlayerID: 24265,
		FirstName: "Ivan",
		LastName: "Pace Jr.",
		Team: "MIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24265.png",
		TeamID: 20,
	},
	{
		PlayerID: 24266,
		FirstName: "Nick",
		LastName: "Hampton",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24266.png",
		TeamID: 32,
	},
	{
		PlayerID: 24267,
		FirstName: "Owen",
		LastName: "Pappoe",
		Team: "ARI",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24267.png",
		TeamID: 1,
	},
	{
		PlayerID: 24268,
		FirstName: "SirVocea",
		LastName: "Dennis",
		Team: "TB",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24268.png",
		TeamID: 33,
	},
	{
		PlayerID: 24269,
		FirstName: "Ventrell",
		LastName: "Miller",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24269.png",
		TeamID: 15,
	},
	{
		PlayerID: 24271,
		FirstName: "Mekhi",
		LastName: "Blackmon",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24271.png",
		TeamID: 20,
	},
	{
		PlayerID: 24272,
		FirstName: "DJ",
		LastName: "Johnson",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24272.png",
		TeamID: 5,
	},
	{
		PlayerID: 24273,
		FirstName: "Eku",
		LastName: "Leota",
		Team: "CAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24273.png",
		TeamID: 5,
	},
	{
		PlayerID: 24274,
		FirstName: "Tyler",
		LastName: "Lacy",
		Team: "JAX",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24274.png",
		TeamID: 15,
	},
	{
		PlayerID: 24275,
		FirstName: "Tavius",
		LastName: "Robinson",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24275.png",
		TeamID: 3,
	},
	{
		PlayerID: 24276,
		FirstName: "Will",
		LastName: "McDonald IV",
		Team: "NYJ",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24276.png",
		TeamID: 24,
	},
	{
		PlayerID: 24277,
		FirstName: "Yaya",
		LastName: "Diaby",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24277.png",
		TeamID: 33,
	},
	{
		PlayerID: 24278,
		FirstName: "Hunter",
		LastName: "Luepke",
		Team: "DAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24278.png",
		TeamID: 9,
	},
	{
		PlayerID: 24279,
		FirstName: "Malik",
		LastName: "Cunningham",
		Team: "NE",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24279.png",
		TeamID: 21,
	},
	{
		PlayerID: 24280,
		FirstName: "Dylan",
		LastName: "Horton",
		Team: "HOU",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24280.png",
		TeamID: 13,
	},
	{
		PlayerID: 24282,
		FirstName: "Karl",
		LastName: "Brooks",
		Team: "GB",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24282.png",
		TeamID: 12,
	},
	{
		PlayerID: 24283,
		FirstName: "Keeanu",
		LastName: "Benton",
		Team: "PIT",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24283.png",
		TeamID: 28,
	},
	{
		PlayerID: 24284,
		FirstName: "Nesta Jade",
		LastName: "Silvera",
		Team: "LV",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24284.png",
		TeamID: 25,
	},
	{
		PlayerID: 24285,
		FirstName: "Dee",
		LastName: "Winters",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24285.png",
		TeamID: 31,
	},
	{
		PlayerID: 24288,
		FirstName: "Luke",
		LastName: "Schoonmaker",
		Team: "DAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24288.png",
		TeamID: 9,
	},
	{
		PlayerID: 24293,
		FirstName: "Antoine",
		LastName: "Green",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24293.png",
		TeamID: 11,
	},
	{
		PlayerID: 24296,
		FirstName: "Brycen",
		LastName: "Tremayne",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24296.png",
		TeamID: 35,
	},
	{
		PlayerID: 24301,
		FirstName: "Alfonzo",
		LastName: "Graham",
		Team: "PIT",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24301.png",
		TeamID: 28,
	},
	{
		PlayerID: 24304,
		FirstName: "Carlos",
		LastName: "Washington",
		Team: "ATL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24304.png",
		TeamID: 2,
	},
	{
		PlayerID: 24309,
		FirstName: "Emanuel",
		LastName: "Wilson",
		Team: "GB",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24309.png",
		TeamID: 12,
	},
	{
		PlayerID: 24310,
		FirstName: "Jordan",
		LastName: "Mims",
		Team: "NO",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24310.png",
		TeamID: 22,
	},
	{
		PlayerID: 24311,
		FirstName: "Jaleel",
		LastName: "McLaughlin",
		Team: "DEN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24311.png",
		TeamID: 10,
	},
	{
		PlayerID: 24329,
		FirstName: "Duece",
		LastName: "Watts",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24329.png",
		TeamID: 28,
	},
	{
		PlayerID: 24331,
		FirstName: "Grant",
		LastName: "DuBose",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24331.png",
		TeamID: 12,
	},
	{
		PlayerID: 24335,
		FirstName: "Shaquan",
		LastName: "Davis",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24335.png",
		TeamID: 22,
	},
	{
		PlayerID: 24336,
		FirstName: "Jacob",
		LastName: "Copeland",
		Team: "PIT",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24336.png",
		TeamID: 28,
	},
	{
		PlayerID: 24339,
		FirstName: "Jake",
		LastName: "Bobo",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24339.png",
		TeamID: 30,
	},
	{
		PlayerID: 24341,
		FirstName: "Malik",
		LastName: "Knowles",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24341.png",
		TeamID: 20,
	},
	{
		PlayerID: 24342,
		FirstName: "Mitchell",
		LastName: "Tinsley",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24342.png",
		TeamID: 35,
	},
	{
		PlayerID: 24345,
		FirstName: "Jason",
		LastName: "Brownlee",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24345.png",
		TeamID: 24,
	},
	{
		PlayerID: 24347,
		FirstName: "Xavier",
		LastName: "Hutchinson",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24347.png",
		TeamID: 13,
	},
	{
		PlayerID: 24348,
		FirstName: "Cedric",
		LastName: "Tillman",
		Team: "CLE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24348.png",
		TeamID: 8,
	},
	{
		PlayerID: 24349,
		FirstName: "A.T.",
		LastName: "Perry",
		Team: "NO",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24349.png",
		TeamID: 22,
	},
	{
		PlayerID: 24350,
		FirstName: "Aidan",
		LastName: "O'Connell",
		Team: "LV",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24350.png",
		TeamID: 25,
	},
	{
		PlayerID: 24351,
		FirstName: "Stetson",
		LastName: "Bennett",
		Team: "LAR",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24351.png",
		TeamID: 32,
	},
	{
		PlayerID: 24354,
		FirstName: "Blake",
		LastName: "Whiteheart",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24354.png",
		TeamID: 1,
	},
	{
		PlayerID: 24356,
		FirstName: "Tashawn",
		LastName: "Manning",
		Team: "BAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24356.png",
		TeamID: 3,
	},
	{
		PlayerID: 24358,
		FirstName: "Charlie",
		LastName: "Thomas III",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 8,
	},
	{
		PlayerID: 24361,
		FirstName: "Mike",
		LastName: "Morris",
		Team: "SEA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24361.png",
		TeamID: 30,
	},
	{
		PlayerID: 24362,
		FirstName: "Malik",
		LastName: "Heath",
		Team: "GB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24362.png",
		TeamID: 12,
	},
	{
		PlayerID: 24364,
		FirstName: "Jalen",
		LastName: "Graham",
		Team: "SF",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24364.png",
		TeamID: 31,
	},
	{
		PlayerID: 24365,
		FirstName: "Deneric",
		LastName: "Prince",
		Team: "KC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24365.png",
		TeamID: 16,
	},
	{
		PlayerID: 24366,
		FirstName: "Sidy",
		LastName: "Sow",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24366.png",
		TeamID: 21,
	},
	{
		PlayerID: 24367,
		FirstName: "Tyreque",
		LastName: "Jones",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24367.png",
		TeamID: 24,
	},
	{
		PlayerID: 24368,
		FirstName: "Carter",
		LastName: "Warren",
		Team: "NYJ",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24368.png",
		TeamID: 24,
	},
	{
		PlayerID: 24370,
		FirstName: "Viliami",
		LastName: "Fehoko Jr.",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24370.png",
		TeamID: 9,
	},
	{
		PlayerID: 24371,
		FirstName: "Anders",
		LastName: "Carlson",
		Team: "GB",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24371.png",
		TeamID: 12,
	},
	{
		PlayerID: 24372,
		FirstName: "Roschon",
		LastName: "Johnson",
		Team: "CHI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24372.png",
		TeamID: 6,
	},
	{
		PlayerID: 24373,
		FirstName: "Kenny",
		LastName: "McIntosh",
		Team: "SEA",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24373.png",
		TeamID: 30,
	},
	{
		PlayerID: 24374,
		FirstName: "Chase",
		LastName: "Brown",
		Team: "CIN",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24374.png",
		TeamID: 7,
	},
	{
		PlayerID: 24375,
		FirstName: "Josh",
		LastName: "Whyle",
		Team: "TEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24375.png",
		TeamID: 34,
	},
	{
		PlayerID: 24376,
		FirstName: "Jaelyn",
		LastName: "Duncan",
		Team: "TEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24376.png",
		TeamID: 34,
	},
	{
		PlayerID: 24377,
		FirstName: "Jordan",
		LastName: "McFadden",
		Team: "LAC",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24377.png",
		TeamID: 29,
	},
	{
		PlayerID: 24381,
		FirstName: "Jack",
		LastName: "Colletto",
		Team: "SF",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24381.png",
		TeamID: 31,
	},
	{
		PlayerID: 24382,
		FirstName: "Tre",
		LastName: "Tomlinson",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24382.png",
		TeamID: 32,
	},
	{
		PlayerID: 24383,
		FirstName: "Jeremy",
		LastName: "Lucien",
		Team: "BAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24383.png",
		TeamID: 3,
	},
	{
		PlayerID: 24384,
		FirstName: "Erick",
		LastName: "Hallett II",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24384.png",
		TeamID: 15,
	},
	{
		PlayerID: 24386,
		FirstName: "Yasir",
		LastName: "Abdullah",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24386.png",
		TeamID: 15,
	},
	{
		PlayerID: 24388,
		FirstName: "Malaesala",
		LastName: "Aumavae-Laulu",
		Team: "BAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24388.png",
		TeamID: 3,
	},
	{
		PlayerID: 24392,
		FirstName: "Bryce",
		LastName: "Baringer",
		Team: "NE",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24392.png",
		TeamID: 21,
	},
	{
		PlayerID: 24393,
		FirstName: "Micah",
		LastName: "Baskerville",
		Team: "CHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 6,
	},
	{
		PlayerID: 24394,
		FirstName: "Robert",
		LastName: "Beal Jr.",
		Team: "SF",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24394.png",
		TeamID: 31,
	},
	{
		PlayerID: 24395,
		FirstName: "Earl",
		LastName: "Bostick Jr.",
		Team: "DAL",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24395.png",
		TeamID: 9,
	},
	{
		PlayerID: 24396,
		FirstName: "Lance",
		LastName: "Boykin",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24396.png",
		TeamID: 30,
	},
	{
		PlayerID: 24397,
		FirstName: "Jalen",
		LastName: "Brooks",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24397.png",
		TeamID: 9,
	},
	{
		PlayerID: 24400,
		FirstName: "Keondre",
		LastName: "Coburn",
		Team: "KC",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24400.png",
		TeamID: 16,
	},
	{
		PlayerID: 24401,
		FirstName: "Brenton",
		LastName: "Cox Jr.",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24401.png",
		TeamID: 12,
	},
	{
		PlayerID: 24402,
		FirstName: "Braeden",
		LastName: "Daniels",
		Team: "WAS",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24402.png",
		TeamID: 35,
	},
	{
		PlayerID: 24403,
		FirstName: "Trey",
		LastName: "Dean",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24403.png",
		TeamID: 24,
	},
	{
		PlayerID: 24406,
		FirstName: "Ikenna",
		LastName: "Enechukwu",
		Team: "ATL",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24406.png",
		TeamID: 2,
	},
	{
		PlayerID: 24408,
		FirstName: "Jon",
		LastName: "Gaines II",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24408.png",
		TeamID: 1,
	},
	{
		PlayerID: 24409,
		FirstName: "Connor",
		LastName: "Galvin",
		Team: "DET",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24409.png",
		TeamID: 11,
	},
	{
		PlayerID: 24410,
		FirstName: "Mekhi",
		LastName: "Garner",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24410.png",
		TeamID: 26,
	},
	{
		PlayerID: 24412,
		FirstName: "Shaka",
		LastName: "Heyward",
		Team: "CIN",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24412.png",
		TeamID: 7,
	},
	{
		PlayerID: 24413,
		FirstName: "Jordan",
		LastName: "Howden",
		Team: "NO",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24413.png",
		TeamID: 22,
	},
	{
		PlayerID: 24415,
		FirstName: "Anthony",
		LastName: "Johnson Jr.",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24415.png",
		TeamID: 12,
	},
	{
		PlayerID: 24416,
		FirstName: "Anthony",
		LastName: "Johnson",
		Team: "NO",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24416.png",
		TeamID: 22,
	},
	{
		PlayerID: 24417,
		FirstName: "Andre",
		LastName: "Jones Jr.",
		Team: "WAS",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24417.png",
		TeamID: 35,
	},
	{
		PlayerID: 24421,
		FirstName: "Cameron",
		LastName: "Latu",
		Team: "SF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24421.png",
		TeamID: 31,
	},
	{
		PlayerID: 24422,
		FirstName: "Ochaun",
		LastName: "Mathis",
		Team: "LAR",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24422.png",
		TeamID: 32,
	},
	{
		PlayerID: 24423,
		FirstName: "Jake",
		LastName: "Moody",
		Team: "SF",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24423.png",
		TeamID: 31,
	},
	{
		PlayerID: 24425,
		FirstName: "Caleb",
		LastName: "Murphy",
		Team: "TEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24425.png",
		TeamID: 34,
	},
	{
		PlayerID: 24426,
		FirstName: "PJ",
		LastName: "Mustipher",
		Team: "DEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24426.png",
		TeamID: 10,
	},
	{
		PlayerID: 24427,
		FirstName: "Moro",
		LastName: "Ojomo",
		Team: "PHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24427.png",
		TeamID: 26,
	},
	{
		PlayerID: 24428,
		FirstName: "John",
		LastName: "Ojukwu",
		Team: "TEN",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24428.png",
		TeamID: 34,
	},
	{
		PlayerID: 24429,
		FirstName: "Anfernee",
		LastName: "Orji",
		Team: "NO",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24429.png",
		TeamID: 22,
	},
	{
		PlayerID: 24430,
		FirstName: "Gervarrius",
		LastName: "Owens",
		Team: "NYG",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24430.png",
		TeamID: 23,
	},
	{
		PlayerID: 24434,
		FirstName: "Jose",
		LastName: "Ramirez",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24434.png",
		TeamID: 33,
	},
	{
		PlayerID: 24435,
		FirstName: "Brad",
		LastName: "Robbins",
		Team: "CIN",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24435.png",
		TeamID: 7,
	},
	{
		PlayerID: 24436,
		FirstName: "Chad",
		LastName: "Ryland",
		Team: "NE",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24436.png",
		TeamID: 21,
	},
	{
		PlayerID: 24437,
		FirstName: "Juice",
		LastName: "Scruggs",
		Team: "HOU",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24437.png",
		TeamID: 13,
	},
	{
		PlayerID: 24438,
		FirstName: "Chris",
		LastName: "Smith II",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24438.png",
		TeamID: 25,
	},
	{
		PlayerID: 24439,
		FirstName: "Terell",
		LastName: "Smith",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24439.png",
		TeamID: 6,
	},
	{
		PlayerID: 24440,
		FirstName: "Dante",
		LastName: "Stills",
		Team: "ARI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24440.png",
		TeamID: 1,
	},
	{
		PlayerID: 24441,
		FirstName: "Ricky",
		LastName: "Stromberg",
		Team: "WAS",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24441.png",
		TeamID: 35,
	},
	{
		PlayerID: 24443,
		FirstName: "Cory",
		LastName: "Trice Jr.",
		Team: "PIT",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24443.png",
		TeamID: 28,
	},
	{
		PlayerID: 24444,
		FirstName: "Travis",
		LastName: "Vokolek",
		Team: "BAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24444.png",
		TeamID: 3,
	},
	{
		PlayerID: 24445,
		FirstName: "Andrew",
		LastName: "Vorhees",
		Team: "BAL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24445.png",
		TeamID: 3,
	},
	{
		PlayerID: 24446,
		FirstName: "Dalton",
		LastName: "Wagner",
		Team: "LV",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24446.png",
		TeamID: 25,
	},
	{
		PlayerID: 24447,
		FirstName: "Alex",
		LastName: "Ward",
		Team: "LAR",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24447.png",
		TeamID: 32,
	},
	{
		PlayerID: 24448,
		FirstName: "Tyrus",
		LastName: "Wheat",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24448.png",
		TeamID: 9,
	},
	{
		PlayerID: 24449,
		FirstName: "Elijah",
		LastName: "Higgins",
		Team: "ARI",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24449.png",
		TeamID: 1,
	},
	{
		PlayerID: 24451,
		FirstName: "Jason",
		LastName: "Taylor II",
		Team: "LAR",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24451.png",
		TeamID: 32,
	},
	{
		PlayerID: 24453,
		FirstName: "Marte",
		LastName: "Mapu",
		Team: "NE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24453.png",
		TeamID: 21,
	},
	{
		PlayerID: 24455,
		FirstName: "Desjuan",
		LastName: "Johnson",
		Team: "LAR",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24455.png",
		TeamID: 32,
	},
	{
		PlayerID: 24456,
		FirstName: "Starling",
		LastName: "Thomas V",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 1,
	},
	{
		PlayerID: 24457,
		FirstName: "Scott",
		LastName: "Matlock",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24457.png",
		TeamID: 29,
	},
	{
		PlayerID: 24458,
		FirstName: "Joey",
		LastName: "Fisher",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24458.png",
		TeamID: 28,
	},
	{
		PlayerID: 24459,
		FirstName: "David",
		LastName: "Durden",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24459.png",
		TeamID: 9,
	},
	{
		PlayerID: 24460,
		FirstName: "Jake",
		LastName: "Witt",
		Team: "IND",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24460.png",
		TeamID: 14,
	},
	{
		PlayerID: 24461,
		FirstName: "Brodric",
		LastName: "Martin",
		Team: "DET",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24461.png",
		TeamID: 11,
	},
	{
		PlayerID: 24462,
		FirstName: "Atonio",
		LastName: "Mafi",
		Team: "NE",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24462.png",
		TeamID: 21,
	},
	{
		PlayerID: 24463,
		FirstName: "Julian",
		LastName: "Hill",
		Team: "MIA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24463.png",
		TeamID: 19,
	},
	{
		PlayerID: 24464,
		FirstName: "Xazavian",
		LastName: "Valladay",
		Team: "NYJ",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24464.png",
		TeamID: 24,
	},
	{
		PlayerID: 24465,
		FirstName: "Cory",
		LastName: "Durden",
		Team: "LAR",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24465.png",
		TeamID: 32,
	},
	{
		PlayerID: 24466,
		FirstName: "Isaiah",
		LastName: "Bolden",
		Team: "NE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24466.png",
		TeamID: 21,
	},
	{
		PlayerID: 24468,
		FirstName: "Keenan",
		LastName: "Isaac",
		Team: "TB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24468.png",
		TeamID: 33,
	},
	{
		PlayerID: 24470,
		FirstName: "Quindell",
		LastName: "Johnson",
		Team: "CHI",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24470.png",
		TeamID: 6,
	},
	{
		PlayerID: 24471,
		FirstName: "Ryan",
		LastName: "Miller",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24471.png",
		TeamID: 33,
	},
	{
		PlayerID: 24472,
		FirstName: "Xavier",
		LastName: "Gipson",
		Team: "NYJ",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24472.png",
		TeamID: 24,
	},
	{
		PlayerID: 24474,
		FirstName: "Kobie",
		LastName: "Turner",
		Team: "LAR",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24474.png",
		TeamID: 32,
	},
	{
		PlayerID: 24475,
		FirstName: "Chandler",
		LastName: "Zavala",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24475.png",
		TeamID: 5,
	},
	{
		PlayerID: 24476,
		FirstName: "Sean",
		LastName: "Clifford",
		Team: "GB",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24476.png",
		TeamID: 12,
	},
	{
		PlayerID: 24477,
		FirstName: "Colby",
		LastName: "Sorsdal",
		Team: "DET",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24477.png",
		TeamID: 11,
	},
	{
		PlayerID: 24478,
		FirstName: "BJ",
		LastName: "Thompson",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24478.png",
		TeamID: 16,
	},
	{
		PlayerID: 24479,
		FirstName: "Eric",
		LastName: "Scott Jr.",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24479.png",
		TeamID: 9,
	},
	{
		PlayerID: 24480,
		FirstName: "Josh",
		LastName: "Hayes",
		Team: "TB",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24480.png",
		TeamID: 33,
	},
	{
		PlayerID: 24481,
		FirstName: "Zaire",
		LastName: "Barnes",
		Team: "NYJ",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24481.png",
		TeamID: 24,
	},
	{
		PlayerID: 24482,
		FirstName: "Jerrick",
		LastName: "Reed II",
		Team: "SEA",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24482.png",
		TeamID: 30,
	},
	{
		PlayerID: 24483,
		FirstName: "Christian",
		LastName: "Braswell",
		Team: "JAX",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24483.png",
		TeamID: 15,
	},
	{
		PlayerID: 24484,
		FirstName: "Amari",
		LastName: "Burney",
		Team: "LV",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24484.png",
		TeamID: 25,
	},
	{
		PlayerID: 24485,
		FirstName: "Jarrick",
		LastName: "Bernard-Converse",
		Team: "NYJ",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24485.png",
		TeamID: 24,
	},
	{
		PlayerID: 24487,
		FirstName: "Tre",
		LastName: "Hawkins III",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24487.png",
		TeamID: 23,
	},
	{
		PlayerID: 24488,
		FirstName: "Titus",
		LastName: "Leo",
		Team: "IND",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24488.png",
		TeamID: 14,
	},
	{
		PlayerID: 24489,
		FirstName: "Ameer",
		LastName: "Speed",
		Team: "NE",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24489.png",
		TeamID: 21,
	},
	{
		PlayerID: 24490,
		FirstName: "Travis",
		LastName: "Bell",
		Team: "CHI",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24490.png",
		TeamID: 6,
	},
	{
		PlayerID: 24491,
		FirstName: "Ethan",
		LastName: "Evans",
		Team: "LAR",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24491.png",
		TeamID: 32,
	},
	{
		PlayerID: 24492,
		FirstName: "Cooper",
		LastName: "Hodges",
		Team: "JAX",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24492.png",
		TeamID: 15,
	},
	{
		PlayerID: 24494,
		FirstName: "Colton",
		LastName: "Dowell",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24494.png",
		TeamID: 34,
	},
	{
		PlayerID: 24495,
		FirstName: "Derek",
		LastName: "Parish",
		Team: "JAX",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24495.png",
		TeamID: 15,
	},
	{
		PlayerID: 24496,
		FirstName: "Jordon",
		LastName: "Riley",
		Team: "NYG",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24496.png",
		TeamID: 23,
	},
	{
		PlayerID: 24497,
		FirstName: "DJ",
		LastName: "Ivey",
		Team: "CIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24497.png",
		TeamID: 7,
	},
	{
		PlayerID: 24498,
		FirstName: "Nic",
		LastName: "Jones",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24498.png",
		TeamID: 16,
	},
	{
		PlayerID: 24499,
		FirstName: "Spencer",
		LastName: "Anderson",
		Team: "PIT",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24499.png",
		TeamID: 28,
	},
	{
		PlayerID: 24500,
		FirstName: "Kendall",
		LastName: "Williamson",
		Team: "CHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24500.png",
		TeamID: 6,
	},
	{
		PlayerID: 24503,
		FirstName: "Robert",
		LastName: "Burns",
		Team: "CHI",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24503.png",
		TeamID: 6,
	},
	{
		PlayerID: 24504,
		FirstName: "Macon",
		LastName: "Clark",
		Team: "CHI",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24504.png",
		TeamID: 6,
	},
	{
		PlayerID: 24505,
		FirstName: "Dequan",
		LastName: "Jackson",
		Team: "JAX",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24505.png",
		TeamID: 15,
	},
	{
		PlayerID: 24506,
		FirstName: "Blake",
		LastName: "Grupe",
		Team: "NO",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24506.png",
		TeamID: 22,
	},
	{
		PlayerID: 24511,
		FirstName: "Tyrell",
		LastName: "Shavers",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24511.png",
		TeamID: 4,
	},
	{
		PlayerID: 24514,
		FirstName: "Art",
		LastName: "Green",
		Team: "DEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24514.png",
		TeamID: 10,
	},
	{
		PlayerID: 24516,
		FirstName: "Andrew",
		LastName: "Farmer",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24516.png",
		TeamID: 29,
	},
	{
		PlayerID: 24517,
		FirstName: "Hassan",
		LastName: "Hall",
		Team: "CLE",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24517.png",
		TeamID: 8,
	},
	{
		PlayerID: 24518,
		FirstName: "Mohamoud",
		LastName: "Diabate",
		Team: "CLE",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24518.png",
		TeamID: 8,
	},
	{
		PlayerID: 24520,
		FirstName: "Benny",
		LastName: "Sapp III",
		Team: "GB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24520.png",
		TeamID: 12,
	},
	{
		PlayerID: 24521,
		FirstName: "Kadeem",
		LastName: "Telfort",
		Team: "GB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24521.png",
		TeamID: 12,
	},
	{
		PlayerID: 24529,
		FirstName: "Mason",
		LastName: "Brooks",
		Team: "WAS",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24529.png",
		TeamID: 35,
	},
	{
		PlayerID: 24531,
		FirstName: "TK",
		LastName: "McLendon Jr.",
		Team: "TEN",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24531.png",
		TeamID: 34,
	},
	{
		PlayerID: 24533,
		FirstName: "Ben",
		LastName: "Sims",
		Team: "GB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24533.png",
		TeamID: 12,
	},
	{
		PlayerID: 24534,
		FirstName: "Thomas",
		LastName: "Rush",
		Team: "TEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24534.png",
		TeamID: 34,
	},
	{
		PlayerID: 24535,
		FirstName: "Tanner",
		LastName: "Taula",
		Team: "TB",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24535.png",
		TeamID: 33,
	},
	{
		PlayerID: 24537,
		FirstName: "Liam",
		LastName: "Anderson",
		Team: "IND",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24537.png",
		TeamID: 14,
	},
	{
		PlayerID: 24538,
		FirstName: "Tyjon",
		LastName: "Lindsey",
		Team: "SEA",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24538.png",
		TeamID: 30,
	},
	{
		PlayerID: 24539,
		FirstName: "Joel",
		LastName: "Wilson",
		Team: "BUF",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24539.png",
		TeamID: 4,
	},
	{
		PlayerID: 24542,
		FirstName: "Ilm",
		LastName: "Manning",
		Team: "ARI",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24542.png",
		TeamID: 1,
	},
	{
		PlayerID: 24546,
		FirstName: "Alama",
		LastName: "Uluave",
		Team: "MIA",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24546.png",
		TeamID: 19,
	},
	{
		PlayerID: 24551,
		FirstName: "Alex",
		LastName: "Palczewski",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24551.png",
		TeamID: 10,
	},
	{
		PlayerID: 24552,
		FirstName: "Kahlef",
		LastName: "Hailassie",
		Team: "CLE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24552.png",
		TeamID: 8,
	},
	{
		PlayerID: 24554,
		FirstName: "T.J.",
		LastName: "Luther",
		Team: "NE",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24554.png",
		TeamID: 21,
	},
	{
		PlayerID: 24556,
		FirstName: "Deslin",
		LastName: "Alexandre",
		Team: "CHI",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24556.png",
		TeamID: 6,
	},
	{
		PlayerID: 24557,
		FirstName: "Dyontae",
		LastName: "Johnson",
		Team: "NYG",
		Position: "ILB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24557.png",
		TeamID: 23,
	},
	{
		PlayerID: 24563,
		FirstName: "Jaylon",
		LastName: "Thomas",
		Team: "NYG",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24563.png",
		TeamID: 23,
	},
	{
		PlayerID: 24568,
		FirstName: "C.J.",
		LastName: "Coldon Jr.",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24568.png",
		TeamID: 20,
	},
	{
		PlayerID: 24571,
		FirstName: "Cephus",
		LastName: "Johnson",
		Team: "TB",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24571.png",
		TeamID: 33,
	},
	{
		PlayerID: 24572,
		FirstName: "Thayer",
		LastName: "Thomas",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24572.png",
		TeamID: 20,
	},
	{
		PlayerID: 24574,
		FirstName: "NaJee",
		LastName: "Thompson",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24574.png",
		TeamID: 20,
	},
	{
		PlayerID: 24576,
		FirstName: "Jaylin",
		LastName: "Williams",
		Team: "MIN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24576.png",
		TeamID: 20,
	},
	{
		PlayerID: 24581,
		FirstName: "Divaad",
		LastName: "Wilson",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24581.png",
		TeamID: 1,
	},
	{
		PlayerID: 24582,
		FirstName: "Brandon",
		LastName: "Pili",
		Team: "MIA",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24582.png",
		TeamID: 19,
	},
	{
		PlayerID: 24584,
		FirstName: "Azizi",
		LastName: "Hearn",
		Team: "NE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24584.png",
		TeamID: 21,
	},
	{
		PlayerID: 24588,
		FirstName: "Zeke",
		LastName: "Vandenburgh",
		Team: "MIA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24588.png",
		TeamID: 19,
	},
	{
		PlayerID: 24598,
		FirstName: "Jared",
		LastName: "Wayne",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24598.png",
		TeamID: 13,
	},
	{
		PlayerID: 24606,
		FirstName: "Tykeem",
		LastName: "Doss",
		Team: "BAL",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24606.png",
		TeamID: 3,
	},
	{
		PlayerID: 24609,
		FirstName: "Emari",
		LastName: "Demercado",
		Team: "ARI",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24609.png",
		TeamID: 1,
	},
	{
		PlayerID: 24613,
		FirstName: "Ricky",
		LastName: "Lee",
		Team: "CAR",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24613.png",
		TeamID: 5,
	},
	{
		PlayerID: 24614,
		FirstName: "Nash",
		LastName: "Jensen",
		Team: "CAR",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24614.png",
		TeamID: 5,
	},
	{
		PlayerID: 24616,
		FirstName: "Durrell",
		LastName: "Johnson",
		Team: "DAL",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24616.png",
		TeamID: 9,
	},
	{
		PlayerID: 24617,
		FirstName: "Princeton",
		LastName: "Fant",
		Team: "DAL",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24617.png",
		TeamID: 9,
	},
	{
		PlayerID: 24619,
		FirstName: "Keshawn",
		LastName: "Banks",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24619.png",
		TeamID: 12,
	},
	{
		PlayerID: 24625,
		FirstName: "Tommy",
		LastName: "Devito",
		Team: "NYG",
		Position: "QB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24625.png",
		TeamID: 23,
	},
	{
		PlayerID: 24626,
		FirstName: "Elijah",
		LastName: "Dotson",
		Team: "LAC",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24626.png",
		TeamID: 29,
	},
	{
		PlayerID: 24629,
		FirstName: "Terrell",
		LastName: "Bynum",
		Team: "LAC",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24629.png",
		TeamID: 29,
	},
	{
		PlayerID: 24632,
		FirstName: "Brevin",
		LastName: "Allen",
		Team: "LAC",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24632.png",
		TeamID: 29,
	},
	{
		PlayerID: 24634,
		FirstName: "Truman",
		LastName: "Jones",
		Team: "KC",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24634.png",
		TeamID: 16,
	},
	{
		PlayerID: 24636,
		FirstName: "Tiawan",
		LastName: "Mullen",
		Team: "PHI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24636.png",
		TeamID: 26,
	},
	{
		PlayerID: 24640,
		FirstName: "Mike",
		LastName: "McAllister",
		Team: "LAR",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24640.png",
		TeamID: 32,
	},
	{
		PlayerID: 24642,
		FirstName: "Ethan",
		LastName: "Bonner",
		Team: "MIA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24642.png",
		TeamID: 19,
	},
	{
		PlayerID: 24643,
		FirstName: "Alex",
		LastName: "Cook",
		Team: "NYG",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24643.png",
		TeamID: 23,
	},
	{
		PlayerID: 24644,
		FirstName: "Ben",
		LastName: "VanSumeren",
		Team: "PHI",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24644.png",
		TeamID: 26,
	},
	{
		PlayerID: 24645,
		FirstName: "D'Shawn",
		LastName: "Jamison",
		Team: "CAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24645.png",
		TeamID: 5,
	},
	{
		PlayerID: 24646,
		FirstName: "Ty",
		LastName: "Okada",
		Team: "SEA",
		Position: "SS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24646.png",
		TeamID: 30,
	},
	{
		PlayerID: 24647,
		FirstName: "Chris",
		LastName: "Stoll",
		Team: "SEA",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24647.png",
		TeamID: 30,
	},
	{
		PlayerID: 24649,
		FirstName: "Luke",
		LastName: "Haggard",
		Team: "TB",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24649.png",
		TeamID: 33,
	},
	{
		PlayerID: 24651,
		FirstName: "Silas",
		LastName: "Dzansi",
		Team: "TB",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24651.png",
		TeamID: 33,
	},
	{
		PlayerID: 24653,
		FirstName: "Brandon",
		LastName: "Bouyer-Randle",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24653.png",
		TeamID: 33,
	},
	{
		PlayerID: 24654,
		FirstName: "Derrek",
		LastName: "Pitts",
		Team: "TB",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24654.png",
		TeamID: 33,
	},
	{
		PlayerID: 24655,
		FirstName: "Christian",
		LastName: "Izien",
		Team: "TB",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24655.png",
		TeamID: 33,
	},
	{
		PlayerID: 24659,
		FirstName: "Devonnsha",
		LastName: "Maxwell",
		Team: "CIN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24659.png",
		TeamID: 7,
	},
	{
		PlayerID: 24670,
		FirstName: "Kazmeir",
		LastName: "Allen",
		Team: "WAS",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24670.png",
		TeamID: 35,
	},
	{
		PlayerID: 24673,
		FirstName: "Matt",
		LastName: "Hembrough",
		Team: "ARI",
		Position: "LS",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24673.png",
		TeamID: 1,
	},
	{
		PlayerID: 24675,
		FirstName: "Quavian",
		LastName: "White",
		Team: "ARI",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24675.png",
		TeamID: 1,
	},
	{
		PlayerID: 24684,
		FirstName: "Shakel",
		LastName: "Brown",
		Team: "TEN",
		Position: "DT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24684.png",
		TeamID: 34,
	},
	{
		PlayerID: 24686,
		FirstName: "Nate",
		LastName: "Adkins",
		Team: "DEN",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24686.png",
		TeamID: 10,
	},
	{
		PlayerID: 24688,
		FirstName: "Matthew",
		LastName: "Jackson",
		Team: "TEN",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24688.png",
		TeamID: 34,
	},
	{
		PlayerID: 24697,
		FirstName: "David",
		LastName: "Perales",
		Team: "PIT",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24697.png",
		TeamID: 28,
	},
	{
		PlayerID: 24699,
		FirstName: "Lou",
		LastName: "Hedley",
		Team: "NO",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24699.png",
		TeamID: 22,
	},
	{
		PlayerID: 24703,
		FirstName: "Sean",
		LastName: "Ryan",
		Team: "BAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24703.png",
		TeamID: 3,
	},
	{
		PlayerID: 24706,
		FirstName: "Owen",
		LastName: "Wright",
		Team: "BAL",
		Position: "RB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24706.png",
		TeamID: 3,
	},
	{
		PlayerID: 24709,
		FirstName: "Jesse",
		LastName: "Matthews",
		Team: "HOU",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24709.png",
		TeamID: 13,
	},
	{
		PlayerID: 24710,
		FirstName: "Kilian",
		LastName: "Zierer",
		Team: "HOU",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24710.png",
		TeamID: 13,
	},
	{
		PlayerID: 24718,
		FirstName: "Brady",
		LastName: "Russell",
		Team: "SEA",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24718.png",
		TeamID: 30,
	},
	{
		PlayerID: 24719,
		FirstName: "Ty",
		LastName: "Zentner",
		Team: "HOU",
		Position: "P",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24719.png",
		TeamID: 13,
	},
	{
		PlayerID: 24728,
		FirstName: "Patrick",
		LastName: "O'Connell",
		Team: "SEA",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24728.png",
		TeamID: 30,
	},
	{
		PlayerID: 24732,
		FirstName: "Henry",
		LastName: "Pearson",
		Team: "GB",
		Position: "FB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24732.png",
		TeamID: 12,
	},
	{
		PlayerID: 24738,
		FirstName: "John Samuel",
		LastName: "Shenker",
		Team: "LV",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24738.png",
		TeamID: 25,
	},
	{
		PlayerID: 24740,
		FirstName: "Tanner",
		LastName: "Ingle",
		Team: "LAR",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24740.png",
		TeamID: 32,
	},
	{
		PlayerID: 24743,
		FirstName: "Xavier",
		LastName: "Smith",
		Team: "LAR",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24743.png",
		TeamID: 32,
	},
	{
		PlayerID: 24749,
		FirstName: "Shedrick",
		LastName: "Jackson",
		Team: "CIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24749.png",
		TeamID: 7,
	},
	{
		PlayerID: 24751,
		FirstName: "Tanner",
		LastName: "McCalister",
		Team: "CLE",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24751.png",
		TeamID: 8,
	},
	{
		PlayerID: 24754,
		FirstName: "Kaleb",
		LastName: "Hayes",
		Team: "NYG",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24754.png",
		TeamID: 23,
	},
	{
		PlayerID: 24755,
		FirstName: "Elijah",
		LastName: "Cooks",
		Team: "JAX",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24755.png",
		TeamID: 15,
	},
	{
		PlayerID: 24756,
		FirstName: "Cameron",
		LastName: "McCutcheon",
		Team: "LAR",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24756.png",
		TeamID: 32,
	},
	{
		PlayerID: 24761,
		FirstName: "DJ",
		LastName: "Coleman",
		Team: "JAX",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24761.png",
		TeamID: 15,
	},
	{
		PlayerID: 24770,
		FirstName: "Nick",
		LastName: "Whiteside",
		Team: "WAS",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24770.png",
		TeamID: 35,
	},
	{
		PlayerID: 24776,
		FirstName: "John",
		LastName: "Stephens Jr.",
		Team: "DAL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24776.png",
		TeamID: 9,
	},
	{
		PlayerID: 24777,
		FirstName: "Henry",
		LastName: "Byrd",
		Team: "MIN",
		Position: "G",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24777.png",
		TeamID: 20,
	},
	{
		PlayerID: 24779,
		FirstName: "Marcus",
		LastName: "Haynes",
		Team: "DEN",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24779.png",
		TeamID: 10,
	},
	{
		PlayerID: 24780,
		FirstName: "Demontrey",
		LastName: "Jacobs",
		Team: "DEN",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24780.png",
		TeamID: 10,
	},
	{
		PlayerID: 24782,
		FirstName: "Trevor",
		LastName: "Nowaske",
		Team: "DET",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24782.png",
		TeamID: 11,
	},
	{
		PlayerID: 24793,
		FirstName: "DJ",
		LastName: "Scaife",
		Team: "HOU",
		Position: "C",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24793.png",
		TeamID: 13,
	},
	{
		PlayerID: 24796,
		FirstName: "Keidron",
		LastName: "Smith",
		Team: "WAS",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24796.png",
		TeamID: 35,
	},
	{
		PlayerID: 24799,
		FirstName: "Claudin",
		LastName: "Cherelus",
		Team: "CAR",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24799.png",
		TeamID: 5,
	},
	{
		PlayerID: 24801,
		FirstName: "Jaydon",
		LastName: "Grant",
		Team: "LV",
		Position: "S",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24801.png",
		TeamID: 25,
	},
	{
		PlayerID: 24807,
		FirstName: "Corey",
		LastName: "Luciano",
		Team: "SF",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24807.png",
		TeamID: 31,
	},
	{
		PlayerID: 24810,
		FirstName: "Tre'Shaun",
		LastName: "Harrison",
		Team: "TEN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24810.png",
		TeamID: 34,
	},
	{
		PlayerID: 24812,
		FirstName: "Zay",
		LastName: "Malone",
		Team: "ATL",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24812.png",
		TeamID: 2,
	},
	{
		PlayerID: 24814,
		FirstName: "Malik",
		LastName: "Hamm",
		Team: "BAL",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24814.png",
		TeamID: 3,
	},
	{
		PlayerID: 24821,
		FirstName: "Grant",
		LastName: "Miller",
		Team: "LAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24821.png",
		TeamID: 32,
	},
	{
		PlayerID: 24823,
		FirstName: "Isaiah",
		LastName: "Winstead",
		Team: "SF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24823.png",
		TeamID: 31,
	},
	{
		PlayerID: 24826,
		FirstName: "Kenneth",
		LastName: "Odumegwu",
		Team: "GB",
		Position: "LB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24826.png",
		TeamID: 12,
	},
	{
		PlayerID: 24827,
		FirstName: "Junior",
		LastName: "Aho",
		Team: "MIN",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24827.png",
		TeamID: 20,
	},
	{
		PlayerID: 24828,
		FirstName: "Chukwuebuka Jason",
		LastName: "Godrick",
		Team: "KC",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24828.png",
		TeamID: 16,
	},
	{
		PlayerID: 24829,
		FirstName: "David",
		LastName: "Agoha",
		Team: "LV",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24829.png",
		TeamID: 25,
	},
	{
		PlayerID: 24830,
		FirstName: "CJ",
		LastName: "Okoye",
		Team: "LAC",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24830.png",
		TeamID: 29,
	},
	{
		PlayerID: 24835,
		FirstName: "Ryan",
		LastName: "Jones",
		Team: "NYG",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24835.png",
		TeamID: 23,
	},
	{
		PlayerID: 24836,
		FirstName: "Jalen",
		LastName: "Harris",
		Team: "CHI",
		Position: "DL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24836.png",
		TeamID: 6,
	},
	{
		PlayerID: 24838,
		FirstName: "Levi",
		LastName: "Bell",
		Team: "SEA",
		Position: "DE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24838.png",
		TeamID: 30,
	},
	{
		PlayerID: 24839,
		FirstName: "Raiqwon",
		LastName: "O'Neal",
		Team: "SEA",
		Position: "OT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24839.png",
		TeamID: 30,
	},
	{
		PlayerID: 24849,
		FirstName: "William",
		LastName: "Hooper",
		Team: "NE",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24849.png",
		TeamID: 21,
	},
	{
		PlayerID: 24852,
		FirstName: "J.D.",
		LastName: "Direnzo",
		Team: "CAR",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24852.png",
		TeamID: 5,
	},
	{
		PlayerID: 24853,
		FirstName: "Bryan",
		LastName: "Thompson",
		Team: "BUF",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24853.png",
		TeamID: 4,
	},
	{
		PlayerID: 24854,
		FirstName: "Steven",
		LastName: "Gilmore",
		Team: "DET",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24854.png",
		TeamID: 11,
	},
	{
		PlayerID: 24856,
		FirstName: "Anthony",
		LastName: "Kendall",
		Team: "TEN",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24856.png",
		TeamID: 34,
	},
	{
		PlayerID: 24864,
		FirstName: "Markees",
		LastName: "Watts",
		Team: "TB",
		Position: "OLB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24864.png",
		TeamID: 33,
	},
	{
		PlayerID: 24867,
		FirstName: "Ekow",
		LastName: "Boye-Doe",
		Team: "KC",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24867.png",
		TeamID: 16,
	},
	{
		PlayerID: 24868,
		FirstName: "Barry",
		LastName: "Wesley",
		Team: "ATL",
		Position: "OL",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24868.png",
		TeamID: 2,
	},
	{
		PlayerID: 24871,
		FirstName: "Natrone",
		LastName: "Brooks",
		Team: "ATL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24871.png",
		TeamID: 2,
	},
	{
		PlayerID: 24872,
		FirstName: "Eric",
		LastName: "Garror",
		Team: "TEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24872.png",
		TeamID: 34,
	},
	{
		PlayerID: 24873,
		FirstName: "Armani",
		LastName: "Marsh",
		Team: "TEN",
		Position: "DB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24873.png",
		TeamID: 34,
	},
	{
		PlayerID: 24875,
		FirstName: "Dylan",
		LastName: "Drummond",
		Team: "DET",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24875.png",
		TeamID: 11,
	},
	{
		PlayerID: 24886,
		FirstName: "Jordan",
		LastName: "Murray",
		Team: "IND",
		Position: "TE",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 14,
	},
	{
		PlayerID: 24892,
		FirstName: "LaTrell",
		LastName: "Bumphus",
		Team: "SEA",
		Position: "NT",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24892.png",
		TeamID: 30,
	},
	{
		PlayerID: 24894,
		FirstName: "Lucky",
		LastName: "Jackson",
		Team: "MIN",
		Position: "WR",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24894.png",
		TeamID: 20,
	},
	{
		PlayerID: 24902,
		FirstName: "Brandon",
		LastName: "Aubrey",
		Team: "DAL",
		Position: "K",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 9,
	},
	{
		PlayerID: 24904,
		FirstName: "Josh",
		LastName: "Butler",
		Team: "DAL",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 9,
	},
	{
		PlayerID: 24905,
		FirstName: "Andrew",
		LastName: "Whitaker",
		Team: "SEA",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/24905.png",
		TeamID: 30,
	},
	{
		PlayerID: 24915,
		FirstName: "Nehemiah",
		LastName: "Shelton",
		Team: "NYJ",
		Position: "CB",
		PhotoUrl:
			"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
		TeamID: 2,
	},
]
