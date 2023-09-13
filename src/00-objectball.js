function gameObject() {
  const gameObject = {
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
          slamDunks: 1,
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
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
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
        "Brendan Haywood": {
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
  return gameObject;
}
// console.log("My Game Object");
// console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}
// console.log(homeTeamName());

// ----- practice functions -----
const game = gameObject();
// console.log(data);

const numPointsScored = (player) => {
  for (team in game) {
    if (game[team].players.hasOwnProperty(player)) {
      return game[team].players[player].points;
    }
  }
};

// console.log(numPointsScored("Brendan Haywood"));
//

const shoeSize = (player) => {
  for (team in game) {
    if (game[team].players.hasOwnProperty(player)) {
      return game[team].players[player].shoe;
    }
  }
};
// console.log(shoeSize("Ben Gordon"));
//

const teamColors = (teamname) => {
  for (team in game) {
    if (game[team].teamName === teamname) {
      return game[team].colors;
    }
  }
};
// console.log(teamColors("Charlotte Hornets"));
//

const teamNames = (obj) => {
  // // for loop
  // let teams = [];
  // for (team in obj) {
  //   teams.push(obj[team].teamName);
  // }
  // return teams;

  // map
  return Object.values(obj).map((team) => team.teamName);
};
// console.log(teamNames(game));
//

const playerNumbers = (teamname) => {
  let numbers = [];
  for (team in game) {
    if (game[team].teamName === teamname) {
      for (player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
    }
  }
  return numbers;
};
// console.log(playerNumbers("Brooklyn Nets"));
//

const playerStats = (player) => {
  for (team in game) {
    if (game[team].players.hasOwnProperty(player)) {
      return game[team].players[player];
    }
  }
};
// console.log(playerStats("Jason Terry"));
// console.log(playerStats("Alan Anderson"));
//

const bigShoeRebounds = (obj) => {
  let biggest = 0;
  let rebounds = 0;
  for (team in obj) {
    for (player in obj[team].players) {
      if (obj[team].players[player].shoe > biggest) {
        biggest = obj[team].players[player].shoe;
        rebounds = obj[team].players[player].rebounds;
      }
    }
  }
  return rebounds;
};
// console.log(bigShoeRebounds(game));
//

// *bonus
const mostPointsScored = (obj) => {
  let mostPoints = 0;
  let mostPlayer = "";
  for (team in obj) {
    for (player in obj[team].players) {
      if (obj[team].players[player].points > mostPoints) {
        mostPoints = obj[team].players[player].points;
        mostPlayer = player;
      }
    }
  }
  return `${mostPlayer} scored the most points with ${mostPoints} points`;
};
// console.log(mostPointsScored(game));
//

const winningTeam = (obj) => {
  let homePoints = 0;
  let awayPoints = 0;
  for (player in obj.home.players) {
    homePoints += obj.home.players[player].points;
  }
  for (player in obj.away.players) {
    awayPoints += obj.away.players[player].points;
  }
  if (homePoints > awayPoints) {
    return `${obj.home.teamName} won with ${homePoints} points`;
  } else {
    return `${obj.away.teamName} won with ${awayPoints} points`;
  }
};
// console.log(winningTeam(game));
//

const playerWithLongestName = (obj) => {
  let longestName = "";
  for (team in obj) {
    for (player in obj[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
};
// console.log(playerWithLongestName(game));
//

// **super bonus
const mostSteals = (obj) => {
  let mostSteals = 0;
  for (team in obj) {
    for (player in obj[team].players) {
      if (obj[team].players[player].steals > mostSteals) {
        mostSteals = obj[team].players[player].steals;
      }
    }
  }
  return mostSteals;
};

const doesLongNameStealATon = (obj) => {
  const longestName = playerWithLongestName(obj);
  const steals = mostSteals(obj);
  for (team in obj) {
    for (player in obj[team].players) {
      if (
        obj[team].players[player].steals === steals &&
        player === longestName
      ) {
        return true;
      }
    }
  }
  return false;
};
// console.log(doesLongNameStealATon(game));
