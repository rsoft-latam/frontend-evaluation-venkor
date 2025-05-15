module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: "jsdom",
  roots: [
    "<rootDir>"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: [
    'jest-extended',
    'jest-preset-angular/setup-jest'
  ],
  globals: {
    'ts-jest': {
      isolatedModules: false,
    },
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1'
  },
  testTimeout: 5000
}