type Color = "red" | "green" | "blue"

interface CubesOfOneColor {
  count: number
  color: Color
}

type GameSet = CubesOfOneColor[]

interface Game {
  gameId: number
  gameSets: GameSet[]
}

type Games = Game[]
