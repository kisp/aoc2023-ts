import "./types"

const games: Games = [
  {
    gameId: 1,
    gameSets: [
      [
        { count: 7, color: "blue" },
        { count: 4, color: "red" },
        { count: 11, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 2, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 13, color: "blue" },
        { count: 8, color: "green" },
      ],
      [
        { count: 18, color: "blue" },
        { count: 7, color: "green" },
        { count: 5, color: "red" },
      ],
    ],
  },
  {
    gameId: 2,
    gameSets: [
      [
        { count: 3, color: "green" },
        { count: 4, color: "red" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 6, color: "red" },
        { count: 4, color: "green" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 4, color: "green" },
        { count: 3, color: "red" },
      ],
    ],
  },
  {
    gameId: 3,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 2, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 4,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 15, color: "green" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 12, color: "green" },
        { count: 1, color: "red" },
        { count: 2, color: "blue" },
      ],
      [{ count: 14, color: "green" }],
      [
        { count: 2, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 5,
    gameSets: [
      [{ count: 8, color: "red" }],
      [{ count: 7, color: "red" }],
      [
        { count: 11, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 8, color: "red" },
      ],
      [
        { count: 6, color: "red" },
        { count: 2, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 8, color: "green" },
        { count: 13, color: "red" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 6,
    gameSets: [
      [
        { count: 3, color: "blue" },
        { count: 2, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 8, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 7,
    gameSets: [
      [
        { count: 5, color: "green" },
        { count: 1, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 12, color: "red" },
      ],
      [
        { count: 6, color: "red" },
        { count: 7, color: "green" },
      ],
      [
        { count: 3, color: "green" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 8,
    gameSets: [
      [
        { count: 10, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 6, color: "green" },
        { count: 5, color: "red" },
      ],
      [
        { count: 8, color: "green" },
        { count: 5, color: "red" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 9,
    gameSets: [
      [
        { count: 11, color: "blue" },
        { count: 13, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 13, color: "red" },
        { count: 1, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 4, color: "green" },
        { count: 5, color: "red" },
      ],
      [
        { count: 16, color: "red" },
        { count: 7, color: "green" },
        { count: 10, color: "blue" },
      ],
      [
        { count: 16, color: "red" },
        { count: 5, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 17, color: "red" },
        { count: 6, color: "blue" },
      ],
    ],
  },
  {
    gameId: 10,
    gameSets: [
      [
        { count: 16, color: "blue" },
        { count: 8, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 4, color: "green" },
        { count: 1, color: "blue" },
      ],
      [{ count: 15, color: "blue" }],
      [
        { count: 4, color: "red" },
        { count: 5, color: "green" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 11,
    gameSets: [
      [
        { count: 3, color: "blue" },
        { count: 8, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 10, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 13, color: "red" },
        { count: 1, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 3, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 6, color: "green" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 12,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 4, color: "red" },
        { count: 6, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 9, color: "green" },
        { count: 1, color: "blue" },
        { count: 7, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 13, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 5, color: "red" },
        { count: 11, color: "green" },
      ],
    ],
  },
  {
    gameId: 13,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 1, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 5, color: "green" },
        { count: 2, color: "blue" },
      ],
    ],
  },
  {
    gameId: 14,
    gameSets: [
      [{ count: 4, color: "green" }],
      [
        { count: 8, color: "blue" },
        { count: 1, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 7, color: "red" },
        { count: 2, color: "green" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 2, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 5, color: "red" },
      ],
    ],
  },
  {
    gameId: 15,
    gameSets: [
      [
        { count: 10, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 14, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 4, color: "red" },
        { count: 1, color: "green" },
        { count: 12, color: "blue" },
      ],
    ],
  },
  {
    gameId: 16,
    gameSets: [
      [
        { count: 8, color: "red" },
        { count: 4, color: "blue" },
        { count: 6, color: "green" },
      ],
      [
        { count: 14, color: "blue" },
        { count: 9, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 5, color: "blue" },
        { count: 8, color: "green" },
      ],
      [
        { count: 14, color: "blue" },
        { count: 11, color: "green" },
        { count: 3, color: "red" },
      ],
    ],
  },
  {
    gameId: 17,
    gameSets: [
      [
        { count: 20, color: "blue" },
        { count: 5, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 3, color: "red" },
        { count: 14, color: "blue" },
      ],
      [
        { count: 4, color: "red" },
        { count: 4, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 12, color: "blue" },
        { count: 5, color: "red" },
        { count: 3, color: "green" },
      ],
    ],
  },
  {
    gameId: 18,
    gameSets: [
      [
        { count: 7, color: "blue" },
        { count: 8, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "blue" },
      ],
    ],
  },
  {
    gameId: 19,
    gameSets: [
      [
        { count: 14, color: "green" },
        { count: 4, color: "blue" },
      ],
      [{ count: 6, color: "green" }],
      [
        { count: 12, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 12, color: "green" },
        { count: 1, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 10, color: "green" },
      ],
    ],
  },
  {
    gameId: 20,
    gameSets: [
      [
        { count: 3, color: "green" },
        { count: 4, color: "blue" },
        { count: 4, color: "red" },
      ],
      [
        { count: 13, color: "blue" },
        { count: 1, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 13, color: "blue" },
        { count: 9, color: "green" },
        { count: 9, color: "red" },
      ],
    ],
  },
  {
    gameId: 21,
    gameSets: [
      [
        { count: 4, color: "green" },
        { count: 2, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 5, color: "green" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 1, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 22,
    gameSets: [
      [
        { count: 4, color: "red" },
        { count: 17, color: "green" },
      ],
      [
        { count: 15, color: "green" },
        { count: 3, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 7, color: "red" },
        { count: 11, color: "green" },
      ],
      [
        { count: 16, color: "green" },
        { count: 4, color: "red" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 23,
    gameSets: [
      [
        { count: 19, color: "green" },
        { count: 2, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 1, color: "red" },
        { count: 2, color: "blue" },
        { count: 2, color: "green" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 10, color: "green" },
        { count: 11, color: "red" },
      ],
    ],
  },
  {
    gameId: 24,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 3, color: "blue" },
      ],
      [{ count: 2, color: "blue" }],
      [
        { count: 1, color: "green" },
        { count: 1, color: "red" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 25,
    gameSets: [
      [
        { count: 12, color: "green" },
        { count: 2, color: "red" },
        { count: 10, color: "blue" },
      ],
      [
        { count: 6, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 18, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 17, color: "green" },
        { count: 3, color: "red" },
        { count: 18, color: "blue" },
      ],
    ],
  },
  {
    gameId: 26,
    gameSets: [
      [
        { count: 4, color: "red" },
        { count: 12, color: "blue" },
        { count: 5, color: "green" },
      ],
      [
        { count: 3, color: "green" },
        { count: 5, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 4, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 3, color: "green" },
        { count: 5, color: "red" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "blue" },
        { count: 9, color: "red" },
      ],
    ],
  },
  {
    gameId: 27,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 9, color: "green" },
      ],
      [{ count: 3, color: "green" }],
      [
        { count: 9, color: "green" },
        { count: 2, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 10, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 5, color: "green" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 28,
    gameSets: [
      [
        { count: 10, color: "red" },
        { count: 8, color: "green" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 4, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 2, color: "green" },
        { count: 9, color: "red" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 29,
    gameSets: [
      [
        { count: 5, color: "blue" },
        { count: 5, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 2, color: "green" },
        { count: 3, color: "blue" },
        { count: 5, color: "red" },
      ],
      [
        { count: 3, color: "red" },
        { count: 11, color: "blue" },
      ],
    ],
  },
  {
    gameId: 30,
    gameSets: [
      [
        { count: 11, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 3, color: "green" },
        { count: 5, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 3, color: "green" },
        { count: 5, color: "red" },
      ],
    ],
  },
  {
    gameId: 31,
    gameSets: [
      [
        { count: 2, color: "blue" },
        { count: 8, color: "green" },
        { count: 14, color: "red" },
      ],
      [{ count: 9, color: "green" }],
      [
        { count: 1, color: "red" },
        { count: 1, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 10, color: "red" },
      ],
      [
        { count: 1, color: "red" },
        { count: 10, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 8, color: "green" },
        { count: 14, color: "red" },
      ],
    ],
  },
  {
    gameId: 32,
    gameSets: [
      [
        { count: 14, color: "green" },
        { count: 6, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 2, color: "blue" },
        { count: 15, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 18, color: "green" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 33,
    gameSets: [
      [
        { count: 16, color: "green" },
        { count: 4, color: "red" },
      ],
      [
        { count: 18, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 5, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 5, color: "red" },
        { count: 19, color: "green" },
      ],
      [
        { count: 11, color: "green" },
        { count: 4, color: "red" },
      ],
      [
        { count: 11, color: "red" },
        { count: 1, color: "blue" },
        { count: 2, color: "green" },
      ],
    ],
  },
  {
    gameId: 34,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 11, color: "red" },
      ],
      [
        { count: 5, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 1, color: "blue" },
        { count: 12, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 1, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 1, color: "blue" },
        { count: 12, color: "red" },
      ],
    ],
  },
  {
    gameId: 35,
    gameSets: [
      [
        { count: 5, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 2, color: "green" },
        { count: 15, color: "red" },
      ],
      [
        { count: 7, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 1, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 16, color: "red" },
        { count: 3, color: "blue" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 36,
    gameSets: [
      [
        { count: 10, color: "green" },
        { count: 16, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 14, color: "green" },
        { count: 6, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 8, color: "green" },
        { count: 12, color: "red" },
      ],
    ],
  },
  {
    gameId: 37,
    gameSets: [
      [
        { count: 17, color: "green" },
        { count: 14, color: "blue" },
      ],
      [
        { count: 10, color: "green" },
        { count: 12, color: "blue" },
      ],
      [
        { count: 10, color: "blue" },
        { count: 1, color: "red" },
        { count: 8, color: "green" },
      ],
    ],
  },
  {
    gameId: 38,
    gameSets: [
      [
        { count: 9, color: "blue" },
        { count: 2, color: "green" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 1, color: "green" },
        { count: 5, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 2, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 17, color: "red" },
        { count: 1, color: "green" },
        { count: 7, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 9, color: "blue" },
        { count: 16, color: "red" },
      ],
    ],
  },
  {
    gameId: 39,
    gameSets: [
      [
        { count: 2, color: "red" },
        { count: 13, color: "blue" },
        { count: 10, color: "green" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 15, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 13, color: "blue" },
        { count: 5, color: "green" },
      ],
      [
        { count: 3, color: "red" },
        { count: 6, color: "blue" },
        { count: 2, color: "green" },
      ],
      [
        { count: 17, color: "green" },
        { count: 1, color: "blue" },
        { count: 4, color: "red" },
      ],
      [
        { count: 4, color: "red" },
        { count: 1, color: "blue" },
        { count: 11, color: "green" },
      ],
    ],
  },
  {
    gameId: 40,
    gameSets: [
      [
        { count: 4, color: "green" },
        { count: 12, color: "blue" },
      ],
      [
        { count: 5, color: "red" },
        { count: 13, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 2, color: "green" },
      ],
    ],
  },
  {
    gameId: 41,
    gameSets: [
      [
        { count: 3, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 10, color: "green" },
        { count: 4, color: "blue" },
        { count: 5, color: "red" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 5, color: "red" },
      ],
    ],
  },
  {
    gameId: 42,
    gameSets: [
      [
        { count: 8, color: "blue" },
        { count: 12, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 8, color: "red" },
        { count: 5, color: "green" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 3, color: "green" },
        { count: 13, color: "red" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 16, color: "red" },
      ],
      [
        { count: 12, color: "red" },
        { count: 3, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 2, color: "green" },
        { count: 6, color: "red" },
      ],
    ],
  },
  {
    gameId: 43,
    gameSets: [
      [
        { count: 5, color: "blue" },
        { count: 4, color: "red" },
      ],
      [
        { count: 10, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 12, color: "red" },
        { count: 2, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 12, color: "red" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 44,
    gameSets: [
      [
        { count: 11, color: "blue" },
        { count: 5, color: "red" },
      ],
      [
        { count: 2, color: "red" },
        { count: 13, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 7, color: "red" },
        { count: 7, color: "blue" },
        { count: 11, color: "green" },
      ],
    ],
  },
  {
    gameId: 45,
    gameSets: [
      [
        { count: 7, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 6, color: "green" },
      ],
      [
        { count: 5, color: "green" },
        { count: 5, color: "blue" },
        { count: 7, color: "red" },
      ],
      [
        { count: 4, color: "red" },
        { count: 9, color: "green" },
        { count: 12, color: "blue" },
      ],
      [
        { count: 9, color: "blue" },
        { count: 12, color: "green" },
        { count: 1, color: "red" },
      ],
    ],
  },
  {
    gameId: 46,
    gameSets: [
      [
        { count: 2, color: "green" },
        { count: 7, color: "blue" },
        { count: 20, color: "red" },
      ],
      [
        { count: 18, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 1, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 6, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 6, color: "blue" },
        { count: 4, color: "green" },
      ],
    ],
  },
  {
    gameId: 47,
    gameSets: [
      [
        { count: 6, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 14, color: "blue" },
        { count: 7, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 3, color: "red" },
      ],
    ],
  },
  {
    gameId: 48,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 15, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 1, color: "red" },
        { count: 13, color: "green" },
      ],
      [
        { count: 6, color: "green" },
        { count: 4, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 11, color: "green" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 49,
    gameSets: [
      [
        { count: 1, color: "green" },
        { count: 15, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 15, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 12, color: "green" },
        { count: 2, color: "red" },
        { count: 8, color: "blue" },
      ],
      [
        { count: 3, color: "green" },
        { count: 16, color: "blue" },
      ],
    ],
  },
  {
    gameId: 50,
    gameSets: [
      [
        { count: 8, color: "blue" },
        { count: 7, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 1, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 3, color: "red" },
        { count: 7, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 6, color: "red" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 51,
    gameSets: [
      [
        { count: 2, color: "red" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 11, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 9, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 11, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 8, color: "green" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 52,
    gameSets: [
      [
        { count: 1, color: "green" },
        { count: 1, color: "red" },
        { count: 15, color: "blue" },
      ],
      [
        { count: 17, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 5, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 19, color: "blue" },
        { count: 6, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 53,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 12, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 3, color: "red" },
        { count: 7, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 7, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 4, color: "red" },
        { count: 3, color: "blue" },
        { count: 19, color: "green" },
      ],
      [
        { count: 10, color: "red" },
        { count: 12, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 7, color: "red" },
        { count: 14, color: "green" },
      ],
    ],
  },
  {
    gameId: 54,
    gameSets: [
      [
        { count: 12, color: "green" },
        { count: 1, color: "red" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 5, color: "red" },
        { count: 8, color: "green" },
      ],
      [
        { count: 9, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 3, color: "green" },
        { count: 2, color: "red" },
        { count: 11, color: "blue" },
      ],
      [
        { count: 3, color: "green" },
        { count: 10, color: "blue" },
        { count: 7, color: "red" },
      ],
      [
        { count: 2, color: "red" },
        { count: 3, color: "green" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 55,
    gameSets: [
      [
        { count: 5, color: "red" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 6, color: "green" },
      ],
      [
        { count: 10, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 7, color: "green" },
        { count: 4, color: "red" },
        { count: 14, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 9, color: "blue" },
        { count: 10, color: "green" },
      ],
      [
        { count: 5, color: "red" },
        { count: 10, color: "blue" },
        { count: 10, color: "green" },
      ],
    ],
  },
  {
    gameId: 56,
    gameSets: [
      [
        { count: 3, color: "green" },
        { count: 11, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 10, color: "green" },
        { count: 8, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 5, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 1, color: "green" },
        { count: 8, color: "red" },
      ],
      [
        { count: 5, color: "green" },
        { count: 7, color: "red" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 57,
    gameSets: [
      [
        { count: 2, color: "green" },
        { count: 2, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 8, color: "red" },
        { count: 5, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 16, color: "red" },
        { count: 12, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 13, color: "blue" },
        { count: 6, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 12, color: "red" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 58,
    gameSets: [
      [
        { count: 2, color: "green" },
        { count: 3, color: "blue" },
        { count: 8, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 4, color: "blue" },
        { count: 7, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 11, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 3, color: "red" },
        { count: 2, color: "blue" },
      ],
    ],
  },
  {
    gameId: 59,
    gameSets: [
      [
        { count: 10, color: "red" },
        { count: 6, color: "blue" },
        { count: 2, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 6, color: "blue" },
        { count: 14, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 11, color: "red" },
        { count: 7, color: "blue" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 1, color: "green" },
      ],
    ],
  },
  {
    gameId: 60,
    gameSets: [
      [
        { count: 5, color: "blue" },
        { count: 10, color: "red" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 12, color: "red" },
      ],
      [
        { count: 2, color: "green" },
        { count: 3, color: "red" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 61,
    gameSets: [
      [
        { count: 4, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 10, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 1, color: "green" },
        { count: 7, color: "red" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 5, color: "red" },
      ],
    ],
  },
  {
    gameId: 62,
    gameSets: [
      [
        { count: 6, color: "blue" },
        { count: 7, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 7, color: "green" },
        { count: 15, color: "red" },
      ],
      [
        { count: 14, color: "green" },
        { count: 16, color: "red" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 17, color: "red" },
      ],
      [
        { count: 4, color: "red" },
        { count: 11, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 13, color: "green" },
        { count: 16, color: "red" },
        { count: 5, color: "blue" },
      ],
    ],
  },
  {
    gameId: 63,
    gameSets: [
      [
        { count: 4, color: "red" },
        { count: 13, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 2, color: "green" },
        { count: 5, color: "blue" },
        { count: 10, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 8, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 3, color: "red" },
        { count: 11, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 7, color: "blue" },
      ],
    ],
  },
  {
    gameId: 64,
    gameSets: [
      [
        { count: 12, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 8, color: "red" },
        { count: 1, color: "blue" },
        { count: 10, color: "green" },
      ],
      [
        { count: 11, color: "green" },
        { count: 1, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 10, color: "green" },
        { count: 2, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 9, color: "green" },
        { count: 8, color: "red" },
      ],
    ],
  },
  {
    gameId: 65,
    gameSets: [
      [
        { count: 5, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 5, color: "red" },
        { count: 10, color: "green" },
      ],
      [
        { count: 9, color: "green" },
        { count: 8, color: "blue" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 4, color: "red" },
        { count: 8, color: "green" },
      ],
      [
        { count: 11, color: "green" },
        { count: 6, color: "red" },
        { count: 16, color: "blue" },
      ],
    ],
  },
  {
    gameId: 66,
    gameSets: [
      [
        { count: 8, color: "green" },
        { count: 1, color: "red" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 10, color: "green" },
        { count: 5, color: "blue" },
        { count: 7, color: "red" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 3, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 12, color: "green" },
        { count: 6, color: "red" },
      ],
      [
        { count: 16, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 16, color: "green" },
        { count: 7, color: "red" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 67,
    gameSets: [
      [{ count: 6, color: "green" }],
      [
        { count: 7, color: "red" },
        { count: 1, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 10, color: "red" },
        { count: 13, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 8, color: "green" },
        { count: 11, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 14, color: "red" },
        { count: 5, color: "green" },
        { count: 7, color: "blue" },
      ],
    ],
  },
  {
    gameId: 68,
    gameSets: [
      [
        { count: 1, color: "red" },
        { count: 8, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 1, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 11, color: "blue" },
        { count: 1, color: "red" },
      ],
    ],
  },
  {
    gameId: 69,
    gameSets: [
      [
        { count: 2, color: "red" },
        { count: 4, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 10, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 12, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 3, color: "green" },
      ],
    ],
  },
  {
    gameId: 70,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 3, color: "green" },
        { count: 2, color: "red" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 5, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 5, color: "green" },
      ],
    ],
  },
  {
    gameId: 71,
    gameSets: [
      [
        { count: 6, color: "blue" },
        { count: 3, color: "red" },
        { count: 12, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 8, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 8, color: "green" },
        { count: 8, color: "blue" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 1, color: "red" },
        { count: 9, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 4, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 3, color: "red" },
        { count: 7, color: "blue" },
        { count: 8, color: "green" },
      ],
    ],
  },
  {
    gameId: 72,
    gameSets: [
      [
        { count: 8, color: "red" },
        { count: 7, color: "blue" },
        { count: 6, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 8, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 5, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 6, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 11, color: "green" },
        { count: 13, color: "red" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 8, color: "green" },
        { count: 11, color: "red" },
        { count: 2, color: "blue" },
      ],
    ],
  },
  {
    gameId: 73,
    gameSets: [
      [
        { count: 7, color: "blue" },
        { count: 17, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 4, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 3, color: "red" },
        { count: 4, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 5, color: "blue" },
        { count: 5, color: "red" },
      ],
      [
        { count: 6, color: "red" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 11, color: "red" },
        { count: 1, color: "green" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 74,
    gameSets: [
      [
        { count: 3, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 4, color: "red" },
        { count: 12, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 7, color: "red" },
        { count: 6, color: "blue" },
        { count: 10, color: "green" },
      ],
    ],
  },
  {
    gameId: 75,
    gameSets: [
      [
        { count: 6, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 8, color: "green" },
        { count: 9, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 6, color: "red" },
        { count: 4, color: "blue" },
        { count: 9, color: "green" },
      ],
      [
        { count: 10, color: "red" },
        { count: 9, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 6, color: "red" },
        { count: 2, color: "blue" },
        { count: 1, color: "green" },
      ],
      [{ count: 7, color: "green" }],
    ],
  },
  {
    gameId: 76,
    gameSets: [
      [
        { count: 10, color: "red" },
        { count: 8, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 2, color: "blue" },
        { count: 5, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 1, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 9, color: "red" },
        { count: 11, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 9, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 6, color: "green" },
        { count: 14, color: "red" },
      ],
    ],
  },
  {
    gameId: 77,
    gameSets: [
      [
        { count: 9, color: "blue" },
        { count: 1, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 17, color: "green" },
        { count: 4, color: "red" },
      ],
      [
        { count: 5, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 6, color: "green" },
        { count: 1, color: "red" },
        { count: 9, color: "blue" },
      ],
      [
        { count: 4, color: "green" },
        { count: 10, color: "red" },
      ],
      [
        { count: 9, color: "red" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 78,
    gameSets: [
      [
        { count: 5, color: "green" },
        { count: 10, color: "blue" },
      ],
      [
        { count: 2, color: "green" },
        { count: 5, color: "blue" },
        { count: 11, color: "red" },
      ],
      [
        { count: 1, color: "red" },
        { count: 1, color: "green" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 8, color: "blue" },
        { count: 4, color: "green" },
      ],
    ],
  },
  {
    gameId: 79,
    gameSets: [
      [
        { count: 3, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 8, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 1, color: "red" },
        { count: 11, color: "green" },
      ],
    ],
  },
  {
    gameId: 80,
    gameSets: [
      [
        { count: 12, color: "blue" },
        { count: 3, color: "green" },
      ],
      [
        { count: 6, color: "red" },
        { count: 4, color: "green" },
        { count: 13, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 8, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 81,
    gameSets: [
      [
        { count: 1, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 3, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 1, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 5, color: "green" },
      ],
    ],
  },
  {
    gameId: 82,
    gameSets: [
      [
        { count: 2, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 10, color: "blue" },
        { count: 1, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 4, color: "green" },
        { count: 20, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 20, color: "blue" },
        { count: 2, color: "green" },
        { count: 1, color: "red" },
      ],
    ],
  },
  {
    gameId: 83,
    gameSets: [
      [
        { count: 2, color: "green" },
        { count: 9, color: "blue" },
        { count: 10, color: "red" },
      ],
      [
        { count: 12, color: "red" },
        { count: 11, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 11, color: "blue" },
        { count: 8, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 17, color: "green" },
        { count: 4, color: "blue" },
      ],
      [
        { count: 12, color: "green" },
        { count: 4, color: "red" },
        { count: 6, color: "blue" },
      ],
      [
        { count: 1, color: "red" },
        { count: 11, color: "green" },
        { count: 8, color: "blue" },
      ],
    ],
  },
  {
    gameId: 84,
    gameSets: [
      [
        { count: 7, color: "green" },
        { count: 15, color: "red" },
        { count: 15, color: "blue" },
      ],
      [
        { count: 4, color: "blue" },
        { count: 3, color: "green" },
        { count: 18, color: "red" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 1, color: "red" },
        { count: 2, color: "green" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 19, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 11, color: "blue" },
        { count: 3, color: "red" },
      ],
      [
        { count: 9, color: "red" },
        { count: 2, color: "blue" },
      ],
    ],
  },
  {
    gameId: 85,
    gameSets: [
      [
        { count: 14, color: "green" },
        { count: 3, color: "red" },
        { count: 16, color: "blue" },
      ],
      [
        { count: 3, color: "blue" },
        { count: 6, color: "green" },
      ],
      [
        { count: 12, color: "green" },
        { count: 6, color: "blue" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 86,
    gameSets: [
      [
        { count: 5, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 9, color: "red" },
        { count: 4, color: "green" },
      ],
      [
        { count: 7, color: "green" },
        { count: 1, color: "blue" },
        { count: 2, color: "red" },
      ],
    ],
  },
  {
    gameId: 87,
    gameSets: [
      [
        { count: 10, color: "blue" },
        { count: 7, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 12, color: "blue" },
        { count: 14, color: "red" },
      ],
      [
        { count: 7, color: "blue" },
        { count: 7, color: "red" },
      ],
    ],
  },
  {
    gameId: 88,
    gameSets: [
      [
        { count: 5, color: "red" },
        { count: 10, color: "green" },
        { count: 5, color: "blue" },
      ],
      [
        { count: 10, color: "green" },
        { count: 2, color: "red" },
        { count: 8, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 14, color: "green" },
        { count: 4, color: "blue" },
      ],
    ],
  },
  {
    gameId: 89,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 6, color: "red" },
        { count: 12, color: "green" },
      ],
      [
        { count: 9, color: "red" },
        { count: 13, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 11, color: "green" },
        { count: 6, color: "red" },
        { count: 3, color: "blue" },
      ],
    ],
  },
  {
    gameId: 90,
    gameSets: [
      [
        { count: 1, color: "green" },
        { count: 8, color: "blue" },
        { count: 10, color: "red" },
      ],
      [
        { count: 10, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 6, color: "blue" },
        { count: 15, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 1, color: "blue" },
        { count: 16, color: "red" },
        { count: 4, color: "green" },
      ],
    ],
  },
  {
    gameId: 91,
    gameSets: [
      [
        { count: 8, color: "red" },
        { count: 9, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 15, color: "blue" },
        { count: 2, color: "green" },
      ],
      [
        { count: 15, color: "blue" },
        { count: 1, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 1, color: "green" },
        { count: 6, color: "red" },
        { count: 10, color: "blue" },
      ],
    ],
  },
  {
    gameId: 92,
    gameSets: [
      [
        { count: 10, color: "blue" },
        { count: 4, color: "red" },
      ],
      [
        { count: 9, color: "blue" },
        { count: 3, color: "red" },
        { count: 7, color: "green" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 16, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 16, color: "green" },
        { count: 16, color: "blue" },
      ],
    ],
  },
  {
    gameId: 93,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 2, color: "green" },
        { count: 1, color: "red" },
      ],
      [
        { count: 4, color: "red" },
        { count: 7, color: "green" },
        { count: 12, color: "blue" },
      ],
      [
        { count: 6, color: "green" },
        { count: 3, color: "blue" },
        { count: 4, color: "red" },
      ],
      [
        { count: 8, color: "blue" },
        { count: 4, color: "red" },
        { count: 12, color: "green" },
      ],
      [
        { count: 5, color: "red" },
        { count: 8, color: "green" },
      ],
      [
        { count: 1, color: "red" },
        { count: 18, color: "blue" },
        { count: 10, color: "green" },
      ],
    ],
  },
  {
    gameId: 94,
    gameSets: [
      [
        { count: 1, color: "blue" },
        { count: 5, color: "red" },
        { count: 6, color: "green" },
      ],
      [
        { count: 7, color: "red" },
        { count: 6, color: "green" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 8, color: "red" },
        { count: 11, color: "green" },
      ],
      [
        { count: 12, color: "green" },
        { count: 7, color: "red" },
        { count: 1, color: "blue" },
      ],
      [
        { count: 7, color: "red" },
        { count: 8, color: "green" },
      ],
    ],
  },
  {
    gameId: 95,
    gameSets: [
      [
        { count: 10, color: "red" },
        { count: 7, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 1, color: "blue" },
        { count: 10, color: "red" },
      ],
      [
        { count: 6, color: "green" },
        { count: 5, color: "red" },
        { count: 1, color: "blue" },
      ],
    ],
  },
  {
    gameId: 96,
    gameSets: [
      [
        { count: 3, color: "blue" },
        { count: 12, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 13, color: "red" },
        { count: 9, color: "blue" },
      ],
      [
        { count: 2, color: "green" },
        { count: 5, color: "red" },
        { count: 13, color: "blue" },
      ],
      [
        { count: 2, color: "red" },
        { count: 18, color: "blue" },
        { count: 4, color: "green" },
      ],
      [
        { count: 6, color: "red" },
        { count: 6, color: "blue" },
        { count: 7, color: "green" },
      ],
      [
        { count: 3, color: "green" },
        { count: 15, color: "red" },
        { count: 18, color: "blue" },
      ],
    ],
  },
  {
    gameId: 97,
    gameSets: [
      [
        { count: 4, color: "red" },
        { count: 3, color: "green" },
      ],
      [
        { count: 2, color: "blue" },
        { count: 4, color: "red" },
        { count: 5, color: "green" },
      ],
      [
        { count: 3, color: "red" },
        { count: 3, color: "green" },
      ],
    ],
  },
  {
    gameId: 98,
    gameSets: [
      [
        { count: 2, color: "red" },
        { count: 19, color: "blue" },
      ],
      [{ count: 2, color: "blue" }],
      [
        { count: 11, color: "blue" },
        { count: 2, color: "red" },
      ],
      [
        { count: 3, color: "green" },
        { count: 5, color: "blue" },
        { count: 1, color: "red" },
      ],
      [
        { count: 2, color: "red" },
        { count: 1, color: "blue" },
      ],
      [{ count: 17, color: "blue" }],
    ],
  },
  {
    gameId: 99,
    gameSets: [
      [
        { count: 2, color: "red" },
        { count: 16, color: "blue" },
        { count: 1, color: "green" },
      ],
      [
        { count: 2, color: "green" },
        { count: 12, color: "blue" },
        { count: 6, color: "red" },
      ],
      [
        { count: 1, color: "red" },
        { count: 3, color: "green" },
        { count: 3, color: "blue" },
      ],
      [
        { count: 8, color: "red" },
        { count: 1, color: "green" },
      ],
      [
        { count: 2, color: "red" },
        { count: 9, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 7, color: "red" },
        { count: 9, color: "blue" },
      ],
    ],
  },
  {
    gameId: 100,
    gameSets: [
      [
        { count: 8, color: "green" },
        { count: 3, color: "red" },
      ],
      [
        { count: 7, color: "green" },
        { count: 4, color: "red" },
      ],
      [
        { count: 1, color: "red" },
        { count: 7, color: "green" },
        { count: 2, color: "blue" },
      ],
      [
        { count: 1, color: "green" },
        { count: 2, color: "red" },
      ],
    ],
  },
]

export default games
