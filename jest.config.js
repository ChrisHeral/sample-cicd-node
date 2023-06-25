/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    'lcov',
    'cobertura'
  ],
  collectCoverageFrom: [
    'src/**/*.ts'
  ]
}
