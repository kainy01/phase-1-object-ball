function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          SlamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 17,
          SlamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 5,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Jason Terry": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function homeTeamName() {
  return object["home"]["teamName"];
}
function numPointsScored(name) {
  let object = gameObject();

  let home = object.home.players[name];
  let away = object.away.players[name];
  if (home) {
    return home;
  } else return away;
}

function shoeSize(name) {
  let object = gameObject();
  let away = object.away.players[name]?.shoe;
  let home = object.home.players[name]?.shoe;
  if (home) {
    return home;
  } else return away;
}
function teamColors(name) {
  let object = gameObject();
  let away = object.away;
  let home = object.homeaway;
  if (away.teamName == name) {
    return away.colors;
  } else return home.colors;
}

function teamNames() {
  let object = gameObject();
  return Object.values(object).map((team) => {
    return team.teamName;
  });
}
function playerNumbers(tName) {
  let object = gameObject();
  let away = object.away;
  let home = object.home;
  if (away.teamName == tName) {
    return Object.values(away.players).map((player) => {
      return player.number;
    });
  } else
    return Object.values(home.players).map((player) => {
      return player.number;
    });
}

function playerStats(playerName) {
  const object = gameObject();
  for (const team in object) {
    const players = object[team].players;
    if (playerName in players) {
      return players[playerName];
    }
  }
  return null;
}
function bigShoeRebounds() {
    const game = gameObject();
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;
    
    // find player with largest shoe size
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        const playerInfo = players[player];
        if (playerInfo.shoe > largestShoeSize) {
          largestShoeSize = playerInfo.shoe;
          playerWithLargestShoe = playerInfo;
        }
      }
    }
    // return that player's rebounds
    return playerWithLargestShoe.rebounds;
  }
  

console.log(bigShoeRebounds());
