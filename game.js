const game = {
    team1: 'warriors',
    team2: 'defenders',
    players: [
        [
            'hemant',
            'abhi',
            'akash',
            'atul',
            'prathmesh',
            'mayur',
            'aksahy',
            'vedang',
            'satyajit',
            'shreyash',
            'swapnil'
        ],
        [
            'mainak',
            'abhishek',
            'nikhil',
            'ajay',
            'siddharth',
            'pawan',
            'gaurav',
            'ganesh',
            'marrie',
            'aniket',
            'rohan'
        ],
    ],
    scoreed: '4:0',
    scored: ['hemant', 'abhi', 'prathmesh', 'akash'],
    date: 'dec 7th 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...players1, 'hemant', 'abhi', 'prathmesh'];

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
    console.log(players);
    console.log('${players.length} goals were scored');
};

printGoals('mayur', 'akash', 'pawan', 'atul');
printGoals('mayur', 'akash');
printGoals(...game.scored);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');