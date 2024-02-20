import seedrandom from "seedrandom";

const PIERRE = "Pierre";
const FEUILLE = "Feuille";
const CISEAUX = "Ciseaux";

const symbols = [PIERRE, FEUILLE, CISEAUX];

function partyHasWinner(
  partyHistory,
  player1,
  player2,
  winningsRoundNumber = 2
) {
  return (
    (partyHistory.length >= winningsRoundNumber &&
      player1.score >= winningsRoundNumber) ||
    (player2.score >= winningsRoundNumber && player1.score !== player2.score)
  );
}

function getTurnWinner(turn) {
  if (turn.player1 === turn.player2) {
    return 0;
  } else {
    if (turn.player1 === CISEAUX && turn.player2 === FEUILLE) {
      return 1;
    } else if (turn.player1 === PIERRE && turn.player2 === CISEAUX) {
      return 1;
    } else if (turn.player1 === FEUILLE && turn.player2 === PIERRE) {
      return 1;
    } else {
      return 2;
    }
  }
}

//set a seed to get predictible symbol
//if seed === "123" then "symbol" === "Ciseaux"
//if seed === "1234" then "symbol" === "Feuille"
//if seed === "12345" then "symbol" === "Pierre"
function getRandomSymbol(seed = null) {
  let randomIndex;

  if (seed) {
    const rng = seedrandom(seed);

    randomIndex = Math.round(rng.double() * (symbols.length - 1));
  } else {
    randomIndex = Math.round(Math.random() * (symbols.length - 1));
  }

  return symbols[randomIndex];
}

function main() {
  const player1 = {
    score: 0
  };

  const player2 = {
    score: 0
  };

  const partyHistory = [];

  while (!partyHasWinner(partyHistory, player1, player2)) {
    const turn = {
      player1: getRandomSymbol(),
      player2: getRandomSymbol(),
      score: {}
    };

    const turnWinner = getTurnWinner(turn);

    switch (turnWinner) {
      case 0:
        turn.winner = "Draw";
        break;

      case 1:
        turn.winner = "Player 1";
        player1.score++;
        break;

      case 2:
        turn.winner = "Player 2";
        player2.score++;
        break;

      default:
        turn.winner = "Draw";
        break;
    }

    turn.score = { player1: player1.score, player2: player2.score };

    partyHistory.push(turn);
  }

  console.log(partyHistory);

  player1.score > player2.score
    ? console.log("*** Winner is Player 1 ***")
    : console.log("*** Winner is Player 2 ***");
}

main();
