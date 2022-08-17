import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': '<rootDir>/fileTransformer.js',
    },
};
export default config;