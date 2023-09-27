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
	}
]
