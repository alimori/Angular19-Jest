// import type { Config } from "jest";

// const config: Config = {
//   preset: "jest-preset-angular",
//   setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
// };

// export default config;

module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.ts$': 'ts-jest', // Only transform .ts files
    },
    transformIgnorePatterns: [
        '/node_modules/(?!flat)/', // Exclude modules except 'flat' from transformation
    ],
};