module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx', 'node', 'mjs'],
    clearMocks: true,
    collectCoverage: true,
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
    },
    testMatch: [
        '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
        '<rootDir>/test/**/*.test.{js,jsx,ts,tsx}',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '!<rootDir>/src/components/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/src/components/index.ts',
        '!<rootDir>/src/styles/index.ts',
        '!<rootDir>/src/components/**/index.ts',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            branches: 80,
            statements: 80,
            functions: 80,
            lines: 80,
        },
    },
    coveragePathIgnorePatterns: ['.stories.tsx'],
    moduleNameMapper: {},
    setupFilesAfterEnv: [
        "./setupTests.js"
    ]
};