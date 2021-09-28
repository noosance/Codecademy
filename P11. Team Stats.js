const team = {
    _players: [
      {
        firstName: 'Kyle',
        lastName: 'Hrra',
        age: 25,
      },
      {
        firstName: 'Mimi',
        lastName: 'McD',
        age: 26,
      },
      {
        firstName: 'Jorge',
        lastName: 'Pirela',
        age: 24,
      }
    ],
    _games: [
      {
        opponent: 'Doggos',
        teamPoints: 21,
        opponentPoints: 11
      },
      {
        opponent: 'Snakies',
        teamPoints: 45,
        opponentPoints: 10
      },
      {
        opponent: 'Rabbits',
        teamPoints: 30,
        opponentPoints: 25
      }
    ],
  get games(){
    return this._games
  },
  get players(){
    return this._players
  },
  addPlayer (firstName, lastName, age){
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);