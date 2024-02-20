# Pierre, Feuille, Ciseaux

Simulateur de partie aléatoire de **"Pierre, Feuille, Ciseaux"** en 2 manches gagnantes, implémenté en style Fonctionnel avec JavaScript.

Exemple de résultat obtenu dans le terminal :

- affichage de l'historique des manches, de l'évolution du score, des symboles joués par chaque joueur fictif et du vainqueur de la manche,
- affichage du vainqueur de la partie

```BASH
[
  {
    player1: 'Feuille',
    player2: 'Ciseaux',
    score: { player1: 0, player2: 1 },
    winner: 'Player 2'
  },
  {
    player1: 'Feuille',
    player2: 'Feuille',
    score: { player1: 0, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Pierre',
    player2: 'Pierre',
    score: { player1: 0, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Ciseaux',
    player2: 'Feuille',
    score: { player1: 1, player2: 1 },
    winner: 'Player 1'
  },
  {
    player1: 'Feuille',
    player2: 'Feuille',
    score: { player1: 1, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Feuille',
    player2: 'Feuille',
    score: { player1: 1, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Ciseaux',
    player2: 'Ciseaux',
    score: { player1: 1, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Pierre',
    player2: 'Pierre',
    score: { player1: 1, player2: 1 },
    winner: 'Draw'
  },
  {
    player1: 'Pierre',
    player2: 'Feuille',
    score: { player1: 1, player2: 2 },
    winner: 'Player 2'
  }
]
*** Winner is Player 2 ***
```

## Commandes

- Exécution : `npm start`
- Exécution avec activation du Hot Reloading : `npm run watch`

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

**Alexandre Leroux**  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
