import games from "./input"

function plus(a: number, b: number): number {
  return a + b
}

function gameId(game: Game): number {
  return game.gameId
}

function* gameCubesOfOneColor(game: Game): Generator<CubesOfOneColor> {
  for (const set of game.gameSets) {
    for (const cube of set) {
      yield cube
    }
  }
}

function possibleCubesOfOneColor(cubes: CubesOfOneColor): boolean {
  switch (cubes.color) {
    case "red":
      return cubes.count <= 12

    case "green":
      return cubes.count <= 13

    case "blue":
      return cubes.count <= 14
  }
}

function possibleGame(game: Game): boolean {
  for (const cubes of gameCubesOfOneColor(game)) {
    if (!possibleCubesOfOneColor(cubes)) {
      return false
    }
  }
  return true
}

function partA(): number {
  return games.filter(possibleGame).map(gameId).reduce(plus)
}

console.log(partA())
